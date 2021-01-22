import { firestore } from 'firebase-admin';
import * as functions from 'firebase-functions';
const admin = require("firebase-admin");
//const cors = require('cors')({origin: true});
//admin.initializeApp(functions.config().firebase);
export const StatsObj = { Y : 0,N : 0, Z : 0, checked : <any>[] }


export class AgStats{ 

   //////////////////////////////////////////////////////////////////////    UPDATE FEEDBACK DOC    //////////////////////////////////////
   static UpdateFeedbacks   = functions.firestore.document('channels/{channelId}/messages/{message_id}/feedbacks/{docID}').onUpdate(async (change, context) => {
      
      if(context.params.docID === 'stats'){
         console.log("onUpdate ---------------------------------- stats dökümanı ATLANDI")
         return;
      }

      const before_fb  = change.before.data();
      const after_fb   = change.after.data();
 
 
      if(change.before.data().username){
         change.after.ref.set({...change.after.data(),username: change.before.data().username}).then(()=>{
            console.log(" ================================================== onUpdate username change OK")
         }).catch((errr)=>{
            console.log(" ================================================== onUpdate username: change - hata",errr.message)
         })
      }
      

      // şimdi önceki ile yeni cevabı karşılaştıralım. stats değerini duruma göre artıralım yada azaltalım
      Object.keys(<{}>before_fb).forEach(async (v,i)=>{
         // öncekini geri al
         if(v === 'f'){
            console.log(after_fb?.f," onUpdate -----after_fb--before_fb----",before_fb?.f)
            if(before_fb?.f === after_fb?.f){
               console.log(" --------------------------------------- DEĞİTİRME")
            }else if(before_fb?.f === 1){
               console.log(" --------------------------------------- onUpdate önceki STATTS LIKE  1 AZALT")
               await AgStats.upDownStatsValue('Y',-1,change.after.ref)
            }else if(before_fb?.f === 0){
               console.log(" --------------------------------------- onUpdate önceki STATTS Zeroyu 1 AZALT")
               await AgStats.upDownStatsValue('Z',-1,change.after.ref)
            }else if(before_fb?.f === -1){
               console.log(" --------------------------------------- onUpdate önceki STATTS UNLikeyi 1 AZALT")
               await AgStats.upDownStatsValue('N',-1,change.after.ref)
            }
            // yeni cevabı ekle
            if(after_fb?.f === before_fb?.f){
               console.log("onUpdate DEĞİTİRME")
            }else if(after_fb?.f === 1){
               console.log(" --------------------------------------- onUpdate STATTS Likeyi 1 ARTIR")
               await AgStats.upDownStatsValue('Y',1,change.after.ref)
            }else if(after_fb?.f === 0){
               await AgStats.upDownStatsValue('Z',1,change.after.ref)
               console.log(" --------------------------------------- onUpdate STATTS Zeroyu 1 ARTIR")
            }else if(after_fb?.f === -1){
               await AgStats.upDownStatsValue('N',1,change.after.ref)
               console.log(" --------------------------------------- onUpdate STATTS UNLikeyi 1 ARTIR")
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

   });//--- end function







//////////////////////////////////////////////////////////////////////    CREATE FEEDBACK DOC  //////////////////////////////////////
   static CreateFeedbacks   = functions.firestore.document('channels/{channelId}/messages/{message_id}/feedbacks/{docID}').onCreate(async (change, context) => {
      
      if(context.params.docID === 'stats'){
         console.log(" ==================================================  onCreate stats dökümanı ATLANDI")
         return;
      }
      
      let displayName   = "Anonim"; 
      try{
         const authUser = await admin.auth().getUser(context.params.docID);
         displayName    = authUser.displayName;
      }catch(e){
         console.log(" ================================================== onCreate displayName Hatası",e.messages)
      }
      
      change.ref.update({username: displayName}).then(()=>{
         console.log(" ================================================== onCreate username: displayName")
      }).catch((errr)=>{
         console.log(" ================================================== onCreate username: displayName - hata",errr.message)
      })


      change.ref.parent.doc('stats').get().then((docSnapshot)=>{
         console.log(" ================================================== onCreate STATS VARMI YOK MU ")
         //if (!docSnapshot.exists) {
            /*const fb_checked:any=[];
            change.data().checked.forEach((v:any,i:number) => {
               fb_checked['chckt_'+i]=0;
            });
            change.ref.parent.doc('stats').set({doccount: firestore.FieldValue.increment(1),...fb_checked}).then(async ()=>{
               console.log("  ================================================== onUpdate STATS doccount OLUŞTURULD ")
               change.ref.parent.parent?.parent
               .doc(context.params.message_id)
               .update({reader_count: firestore.FieldValue.increment(1)}).then(()=>{
                  console.log("  ================================================== onUpdate messages içinde  reader_count OLUŞTURULD ")
               }).catch((err:any)=>{
                  console.log("  ================================================== onUpdate messages içinde  reader_count OLUŞTURULAMADI  ", err.message)
               })
            }).catch((err:any)=>{
               console.log("  ================================================== onUpdate STATS doccount OLUŞTURULD HATA ", err.message)
            })*/
         //}else{
            change.ref.parent.doc('stats').update({doccount: firestore.FieldValue.increment(1)}).then(async ()=>{
               console.log("  ================================================== onUpdate STATS doccount GÜNCELLENDİ ")
               change.ref.parent.parent?.parent
               .doc(context.params.message_id)
               .update({reader_count: firestore.FieldValue.increment(1)}).then(()=>{
                  console.log("  ================================================== onUpdate messages içinde  reader_count GÜNCELLENDİ ")
               }).catch((err:any)=>{
                  console.log("  ================================================== onUpdate messages içinde  reader_count GÜNCELLENnemedi  ", err.message)
               })
            }).catch((errr:any)=>{
               console.log("  ================================================== onUpdate STATS doccount GÜNCELLENDİ HATA ", errr.message)
            })
         //}
      }).catch((err)=>{
         console.log("   ================================================== onUpdate onUpdate STATS VARMI YOK MU HATA  ",err.message)
      }) 
           
   });//--- end function






   

   static async upDownStatsChecked(index:number,change:number,ref:firestore.DocumentReference,after_fb:any){
      console.error("***************************** upDownStatsChecked")
      await ref.parent.doc('stats').update({['chckt_'+index]: firestore.FieldValue.increment(change)}).then((snapshot)=>{
         return ;
      }).catch((err)=>{
         return ;
      })
   }

   static async upDownStatsValue(key:string,change:number,ref:firestore.DocumentReference){
      console.log(" upDownStatsValue  key : " + key )
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