import { firestore } from 'firebase-admin';
import * as functions from 'firebase-functions';  

export class AgMessages{ 
      static DeleteMessage   = functions.firestore
            .document('channels/{channelId}/messages/{messageID}')
            .onDelete(async (event,context) => {

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
                              console.log("deleteFeedBacks Slindi")
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
 
}