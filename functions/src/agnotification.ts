import * as functions   from 'firebase-functions'; 
import * as admin from 'firebase-admin';  



export class AgNotification{

      ///////////////////////////////////////////  ORDER STATUS CHANGE ///////////////////////////////////
      static OnOrderStatusUpdated      = functions.firestore.document('channels/{channelID}/orders/{orderID}').onUpdate(async (event,context) => { 
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
                                                title       :"Sipariş Durumu",
                                                body        :"Siparişiniz durumu değişti " + yeniData.status.status,
                                                badge       :"0",
                                                color       :"#ff0000",
                                                icon        :"default",
                                                //sound       :"default",
                                          },
                                          data:{
                                                orderID     : context.params.orderID,
                                                channelID   : context.params.channelID,
                                                orderStatus : yeniData.status.status,
                                                header      : "Sipariş Durumu",
                                                message     : "Siparişiniz durumu değişti " + yeniData.status.status,
                                          }
                                    }
                                    
                                    const options = {
                                          timeToLive: 86400,
                                          priority: 'high',
                                    }


                                    admin.messaging().sendToDevice(doc.data()?.token,payload,options).then(response=>{
                                          console.log("Mesaj gönderildi:" /*,response*/);
                                    }).catch(err=>{ 
                                          console.log("------------------- Mesaj BAŞARISIZ");
                                          console.log(err.message)
                                          console.log("-------------------- Mesaj BAŞARISIZ END ")
                                    })
                              }
                        }).catch(err=>{
                              console.log("HATA " + err)
                        })
                  }
            });





      ///////////////////////////////////////////  ON UPDATE OR CREATE NEW MESSAGE CHANGE ///////////////////////////////////
      static OnMessageCreate      = functions.firestore.document('channels/{channelID}/messages/{messageID}').onCreate(async (event,context) => { 
            console.log("YENİ MESAJ OLUŞTURULDU   channelID messageID status",context.params.channelID,context.params.messageID)
            const message = event.data(); 
            AgNotification.messageUpdateOrCreate(context.params.channelID,context.params.messageID,'create',message);
      });   

      static OnMessageUpdate      = functions.firestore.document('channels/{channelID}/messages/{messageID}').onUpdate(async (event,context) => { 
            console.log("ESKİ MESAJ GÜNCELLENDİ channelID messageID status",context.params.channelID,context.params.messageID,null)
            // !!!  mesajlarun okunma sayısı güncellenirken ayrıca tetiklendiği için update sırasında bildirimi devre dışı bıraktım.
            //  reader_count update oluyorsa bildirim gene gönderiliyor. istersen durumu hariş tut diğer durumlarda bildirim gitsin.
            //AgNotification.messageUpdateOrCreate(context.params.channelID,context.params.messageID,'create');
      });


      static messageUpdateOrCreate(channelID:string,messageID:string,trigger_type:string,message:any) {
            console.log("messageUpdateOrCreate tetiklendi ")
             // aboneleri azaltalım
             const tokens:string[] = [] 
             admin.firestore().collection('channels').doc(channelID).collection('subscribers').get().then(async data=>{
                  if(data.docs.length){  

                        for await (const doc of data.docs) {
                              const device = await admin.firestore().collection('devices').doc(doc.id).get() 
                              if(device.exists){
                                    tokens.push(device.data()?.token);
                              }
                        }


                        const title       = (trigger_type === 'update') ? "İçerik güncellendi" : "Yeni mesajlarınız var";
                        let   body        = "Değişiklikleri görmek için dokunun ";
                        if(message.type === 'text'){
                              body = message.text;
                        }

                        const payload = {
                              notification:{
                                    title       ,
                                    body        ,
                                    badge       :"0",
                                    color       :"#ff0000",
                                    icon        :"default",
                                    //sound       :"default",
                              },
                              data:{ 
                                    channelID,
                                    messageID,
                                    messg_type:message.type,
                              }
                        }
                        
                        const options = {
                              timeToLive: 86400,
                              priority: 'high',
                        }
                        console.log("*************** notification" , JSON.stringify(payload))
                        admin.messaging().sendToDevice(tokens,payload,options).then(response=>{
                              console.log("Bildirim gönderildi:" /*,response*/);
                        }).catch(err=>{ 
                              console.log("------------------- Bildirim BAŞARISIZ");
                              console.log(err.message)
                              console.log("-------------------- Bildirim BAŞARISIZ END ")
                        })
                  }
             }).catch(err=>{
                  console.log("messageUpdateOrCreate HATA " + err)
            })
      } 

}