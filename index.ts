import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const cors = require('cors')({origin: true});
admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
//functions.logger.info("Hello logs!", {structuredData: true});
//  export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
//});

// ================================  add Action   ================================
 
exports.addAccount  = functions.https.onRequest( (req, res) => {
  return cors(req, res,  () => {
    const account = req.body;
    const rslt = {result:'OK',aid:'',message:'',action:''};

    //check tag
    if(!cevir(account.tag)){
      rslt.result   = "Error"; 
      rslt.message  = "bad_format" 
      res.json(rslt);
      return;
    }

    if(account.id){
      let aid =  account.id;
      delete account.id;
      admin.firestore().collection("accounts").doc(aid).update({...account}).then(()=>{
        res.json(rslt);
      }).catch(err=>{
        rslt.result   = "Error";
        rslt.action   = "update";
        err['agMessage'] = "Account güncellenirken"
        rslt.message  = err 
        res.json(rslt);
      })
    }else{
      admin.firestore().collection('accounts').add({...account}).then((ref)=>{
        rslt.aid      = ref.id
        rslt.action   = "add";
        res.json(rslt);
      }).catch(err=>{
        rslt.result       = "Error";
        err['agMessage']  = "Account eklenirken hata oluştur"
        rslt.message      = err 
        res.json(rslt);
      })
    }
  })
}); 

/*
exports.addAccount  = functions.firestore.document('accounts/{docID}').onWrite((change, context) => {
  console.log("after",change.after.data() )
  console.log("before",change.before.data() )
  console.log("docID",context.params.docID )
  
 
  let tag = context.params.tag 
  
   const rslt = {result:'OK',aid:'',message:'',action:''};
   if(!cevir(tag)){
    rslt.result   = "Error"; 
    rslt.message  = "bad_format"
    return false;
  }
  return false;
});
*/

function cevir(tag:string){
  if(tag.length<3){
    return false;
  }

  let text:string = tag;
  let trMap:any = {
                'çÇ':'c',
                'ğĞ':'g',
                'şŞ':'s',
                'üÜ':'u',
                'ıİ':'i',
                'öÖ':'o'
              };
  for(var key in trMap) {
    text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
  }
  text =  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') 
              .replace(/\s/gi, "-") 
              .replace(/[-]+/gi, "-") 
              .toLowerCase();
   return tag==text?true:false
}
//---------------------------------   END  ------------------------------------------


//======================================  getStats    =======================
exports.getStats  = functions.https.onRequest( (request, response) => {
  return cors(request, response,  async () => {
    //let feed      = { f:null,checked:[], reply:''}
    const params  = request.body; 
    const cid     = params.cid;
    const mid     = params.mid;
    let collRef   = admin.firestore().collection("channels")
                        .doc(cid).collection("messages")
                        .doc(mid).collection("feedbacks") 
    let a = new Promise((res,rej)=>{
      collRef.get().then(snapshot => {
        let d = snapshot.docs.map(doc => {
          return doc.data();
        }); 
        res (d);
      }).catch(function(error){
          rej({hata:error})        
      })
    })

    let feeds = await <any>a;

    let stats = {y:0,n:0,z:0,checked:<any>[]} // yes no Zero
    feeds.forEach((feed:any) => {

      if(feed['f'] === 1){
        stats.y++
      }else if(feed['f'] === 0){
        stats.n++
      }else if(feed['f'] == null){
        stats.z++
      }
 
      feed.checked.forEach((check:any,i:number)=>{
        if(check === true){ 
          console.log(check,i,feed.checked[i])
          if(stats.checked[i]){
            stats.checked[i]++;
          }else{
            stats.checked[i] = 1;
          }
        }
      }) 

    });

    response.json({s:stats,f:feeds})

  })

});