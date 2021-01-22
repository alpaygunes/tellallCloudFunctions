import { firestore } from 'firebase-admin';
import * as functions from 'firebase-functions';  

export class AgMessages{ 

///////////////////////////////////////////  ONDELETE MESSAGE ///////////////////////////////////
      static DeleteMessage   = functions.firestore.document('channels/{channelId}/messages/{messageID}').onDelete(async (event,context) => {
            const messageID   = context.params.messageID    
            console.log("MESSAGE DELETE TETİKLENDİ",messageID)
            AgMessages.deleteFeedBacks(event.ref);
            AgMessages.deleteVisitors(event.ref);
            
      }); 

      static deleteFeedBacks(ref:firestore.DocumentReference){
            console.log("deleteFeedBacks Siliniyor")
            ref.collection("feedbacks").get().then(snapshot => {
                  snapshot.docs.forEach(fbdoc => {  
                        fbdoc.ref.parent.doc(fbdoc.id).delete().then(()=>{
                              console.log("deleteFeedBacks Slindi",fbdoc.id)
                        }).catch((err)=>{
                              console.log("deleteFeedBacks silinemedi hata" , err.message)
                        })
                  })
            }).catch((serr)=>{
                  console.log("feedbacks docları çekilirken"+serr.message)
            })
      }

      static deleteVisitors(ref:firestore.DocumentReference){
            console.log("deleteVisitors Siliniyor")
            ref.collection("visitors").get().then(snapshot => {
                  snapshot.docs.forEach(fbdoc => {  
                        fbdoc.ref.parent.doc(fbdoc.id).delete().then(()=>{
                              console.log("deleteVisitors Slindi")
                        }).catch((err)=>{
                              console.log("deleteVisitors silinemedi hata" , err.message)
                        })
                  })
            }).catch((serr)=>{
                  console.log("visitors docları çekilirken"+serr.message)
            })
      }



///////////////////////////////////////////  ONCREATE MESSAGE ///////////////////////////////////
      static AddMessage   = functions.firestore.document('channels/{channelId}/messages/{messageID}').onCreate(async (event,context) => {
            console.log("ONCREATE MESSAGE TETİKLENDİ")
            const fb_checked:any=[];
            event.data().choices.forEach((v:any,i:number) => {
                  fb_checked['chckt_'+i]=0;
            });
            event.ref.collection('feedbacks').doc('stats').set({doccount: 0,...fb_checked}).then(async ()=>{
                  console.log("  ================================================== AddMessage STATS doccount OLUŞTURULD ")
                  /*event.ref.parent.parent?.parent.doc(context.params.message_id).update({reader_count: firestore.FieldValue.increment(1)}).then(()=>{
                  console.log("  ================================================== AddMessage messages içinde  reader_count OLUŞTURULD ")
                  }).catch((err:any)=>{
                  console.log("  ================================================== AddMessage messages içinde  reader_count OLUŞTURULAMADI  ", err.message)
                  })*/
            }).catch((err:any)=>{
                  console.log("  ================================================== AddMessage STATS doccount OLUŞTURULD HATA ", err.message)
            })
      }); 
 
}