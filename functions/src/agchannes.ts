const admin = require("firebase-admin");
import * as functions from 'firebase-functions'; 
const bucket = admin.storage().bucket();

export class AgChannels{ 
      static DeleteChannel   = functions.firestore
            .document('channels/{channelId}')
            .onDelete(async (event,context) => {

            const channelId   = context.params.channelId 
            const uid = await event.ref.collection('screts').doc('scret_fields').get().then((snapshot:any)=>{
                  if(snapshot.exists){
                        return snapshot.data()['uid']
                  }
            }).catch((err)=>{
                  console.log("-----",err)
            }) 
            await AgChannels.deleteFiles(channelId,uid)
            AgChannels.deleteSubscribers(event.ref)   
            AgChannels.deleteScrets(event.ref)  
            AgChannels.deleteMessages(event.ref)    
      });

      static deleteSubscribers(ref:FirebaseFirestore.DocumentReference){
            console.log("deleteSubscribers Siliniyor")
            ref.collection("subscribers").get().then(snapshot => {
                  snapshot.docs.forEach(sbscr => { 
                        sbscr.ref.parent.doc(sbscr.id).delete().then(()=>{
                              console.log("deleteSubscribers Slindi")
                        }).catch((err)=>{
                              console.log("deleteSubscribers Slindi" , err.message)
                        })
                  })
            }).catch((serr)=>{
                  console.log("subcribers silinirken hata oldu"+serr.message)
            })
      }

      static deleteScrets(ref:FirebaseFirestore.DocumentReference){
            console.log("deleteScrets Siliniyor")
            ref.collection('screts').doc('scret_fields').delete().then(()=>{
                  console.log("deleteScrets Slindi")
            }).catch((err)=>{
                  console.log("deleteScrets Slindi" , err.message)
            })
      }

      static deleteMessages(ref:FirebaseFirestore.DocumentReference){
            console.log("deleteMessages Siliniyor")
            ref.collection("messages").get().then(snapshot => {
                  snapshot.docs.forEach(msg => { 
                        msg.ref.parent.doc(msg.id).delete().then(()=>{
                              console.log("deleteMessages Slindi")
                        }).catch((err)=>{
                              console.log("deleteMessages Slindi" , err.message)
                        })
                  })
            }).catch((serr)=>{
                  console.log("deleteMessages silinirken hata oldu"+serr.message)
            })
      }

      static async deleteFiles(channelId:string,uid:any){
            const filePath        = uid +'/'+ channelId;   
            bucket.getFiles({prefix: filePath}).then((results:any)=>{
                  const files = results[0];
                  files.forEach((file:any) => {
                        bucket.file(file.name).delete()
                        console.log("*****************  sLİNDİ   ***************",file.name)
                  });
            })
      }
 
}