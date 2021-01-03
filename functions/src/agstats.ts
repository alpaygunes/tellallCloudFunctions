import { firestore } from 'firebase-admin';
import * as functions from 'firebase-functions';
const admin = require("firebase-admin");
//const cors = require('cors')({origin: true});
//admin.initializeApp(functions.config().firebase);
export const StatsObj = { Y : 0,N : 0, Z : 0, checked : <any>[] }


export class AgStats{ 

   static RefreshMessageFeedbacks   = functions.firestore
                                      .document('channels/{channelId}/messages/{message_id}/feedbacks/{docID}')
                                      .onWrite(async (change, context) => {
      
      if(context.params.docID === 'stats'){
         return;
      }

      const before_fb  = change.before.data();
      const after_fb   = change.after.data();
      

      let displayName   = "Anonim"; 
      try{
         const authUser = await admin.auth().getUser(context.params.docID);
         displayName    = authUser.displayName;
      }catch(e){
         console.log("displayName Hatası",e.messages)
      }
      
      change.after.ref.update({username: displayName}).then(()=>{
         console.log("username: displayName")
      }).catch((errr)=>{
         console.log("username: displayName - hata",errr.message)
      })
 
      // eğer ilk undefinet ise demekki önceden doc yok bu kullanıcın ilk verisi
      if(!before_fb){
         change.after.ref.parent.doc('stats').get().then((docSnapshot)=>{
            console.log(" STATS VARMI YOK MU ")
            if (!docSnapshot.exists) {
               const fb_checked:any=[];
               after_fb?.checked.forEach((v:any,i:number) => {
                  fb_checked['chckt_'+i]=0;
               });
               change.after.ref.parent.doc('stats').set({doccount: firestore.FieldValue.increment(1),...fb_checked}).then(async ()=>{
                  console.log(" STATS doccount OLUŞTURULD ")
                  change.after.ref.parent.parent?.parent
                  .doc(context.params.message_id)
                  .update({reader_count: firestore.FieldValue.increment(1)}).then(()=>{
                     console.log(" messages içinde  reader_count OLUŞTURULD ")
                  }).catch((err)=>{
                     console.log(" messages içinde  reader_count OLUŞTURULAMADI  ", err.message)
                  })
               }).catch((err)=>{
                  console.log(" STATS doccount OLUŞTURULD HATA ", err.message)
               })
            }else{
               change.after.ref.parent.doc('stats').update({doccount: firestore.FieldValue.increment(1)}).then(async ()=>{
                  console.log(" STATS doccount GÜNCELLENDİ ")
                  change.after.ref.parent.parent?.parent
                  .doc(context.params.message_id)
                  .update({reader_count: firestore.FieldValue.increment(1)}).then(()=>{
                     console.log(" messages içinde  reader_count GÜNCELLENDİ ")
                  }).catch((err)=>{
                     console.log(" messages içinde  reader_count GÜNCELLENnemedi  ", err.message)
                  })
               }).catch((err)=>{
                  console.log(" STATS doccount GÜNCELLENDİ HATA ", err.message)
               })
            }
         }).catch((err)=>{
            console.log("   STATS VARMI YOK MU HATA  ",err.message)
         })
      }

      // şimdi önceki ile yeni cevabı karşılaştıralım. stats değerini duruma göre artıralım yada azaltalım
      Object.keys(<{}>before_fb).forEach(async (v,i)=>{
         // öncekini geri al
         if(v === 'f'){
            if(before_fb?.f === after_fb?.f){
               //console.log("DEĞİTİRME")
            }else if(before_fb?.f === 1){
               //console.log("STATTS LIKE  1 AZALT")
               await AgStats.upDownStatsValue('Y',-1,change.after.ref)
            }else if(before_fb?.f === 0){
               //console.log("STATTS Zeroyu 1 AZALT")
               await AgStats.upDownStatsValue('Z',-1,change.after.ref)
            }else if(before_fb?.f === -1){
               //console.log("STATTS UNLikeyi 1 AZALT")
               await AgStats.upDownStatsValue('N',-1,change.after.ref)
            }
            // yeni cevabı ekle
            if(after_fb?.f === before_fb?.f){
               //console.log("DEĞİTİRME")
            }else if(after_fb?.f === 1){
               //console.log("STATTS Likeyi 1 ARTIR")
               await AgStats.upDownStatsValue('Y',1,change.after.ref)
            }else if(after_fb?.f === 0){
               await AgStats.upDownStatsValue('Z',1,change.after.ref)
               //console.log("STATTS Zeroyu 1 ARTIR")
            }else if(after_fb?.f === -1){
               await AgStats.upDownStatsValue('N',1,change.after.ref)
               //console.log("STATTS UNLikeyi 1 ARTIR")
            }
         }   
         
         if(v === 'checked'){
            before_fb?.checked.forEach(async (val:any,ind:number) => {
               if(val === true && after_fb?.checked[ind] === false){
                  // -1
                  await AgStats.upDownStatsChecked(ind,-1,change.after.ref,after_fb);
               }else if(val === false && after_fb?.checked[ind] === true){
                  //+1
                  await AgStats.upDownStatsChecked(ind,1,change.after.ref,after_fb);
               }
            });
         }            
      })
           
   });




   static async upDownStatsChecked(index:number,change:number,ref:firestore.DocumentReference,after_fb:any){
      console.error("***************************** upDownStatsChecked")
      await ref.parent.doc('stats').update({['chckt_'+index]: firestore.FieldValue.increment(change)}).then((snapshot)=>{
         return ;
      }).catch((err)=>{
         return ;
      })
   }






   static async upDownStatsValue(key:string,change:number,ref:firestore.DocumentReference){
      console.log(" *********** key : " + key + " change: " + change + " ref :" + ref)
      await ref.parent.doc('stats').update({[key]: firestore.FieldValue.increment(change)}).then((snapshot)=>{
         return ;
      }).catch((err)=>{
         const firsdata = StatsObj  
         ref.parent.doc('stats').set({...firsdata}).then(async ()=>{
            await AgStats.upDownStatsValue(key,change,ref)
         }).catch((er)=>{
            console.error('Stats oluşturulurken hata', er.message)
         })
         console.error("= = > upDownStatsValue HATA -----------------" , err.message)
      })
      console.error("= = > upDownStatsValue BİTTİ -----------------")
   }

}



