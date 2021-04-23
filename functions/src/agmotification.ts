import * as functions   from 'firebase-functions'; 
import * as admin from 'firebase-admin'; 



export class AgNotification{ 

      ///////////////////////////////////////////  ONDELETE MESSAGE ///////////////////////////////////
      static OnOrderStatusUpdated      = functions.firestore.document('channels/{channelID}/orders/{orderID}')
            .onUpdate(async (event,context) => { 
                  console.log("ORDER STATUS NOTİFİCATİON OrderStatusNotification onUpdate OLAYI TETİKLENDİ")  
                  const yeniData = event.after.data();
                  const eskiData = event.before.data();
                  const uid      = event.before.data().uid;
                  //let   token:string;
                  console.log("UID " + uid)
                  if(yeniData?.status.status !== eskiData?.status.status){
                        console.log("  DEĞİŞTİ  ",yeniData.status.status)
                        admin.firestore().collection('devices').doc(uid).get().then(doc=>{
                              console.log("-----------------",doc)
                              if (doc.exists) {
                                    const payload = {
                                          notification:{
                                                title:"Sipariş Durumu",
                                                body:"Siparişiniz durumu değişti " + yeniData.status.status,
                                                //icon:url
                                          },
                                          data:{
                                                orderID     :context.params.orderID,
                                                channelID   :context.params.channelID,
                                                orderStatus :yeniData.status.status,
                                          },
                                          token:doc.data()?.token
                                    }
                                    admin.messaging().send(payload).catch(err=>{ console.log(err.message)})
                              }
                        }).catch(err=>{
                              console.log("HATA " + err)
                        })
                  }
            });

}