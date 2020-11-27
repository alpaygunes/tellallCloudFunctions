import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'; 
const cors = require('cors')({origin: true});
//admin.initializeApp(functions.config().firebase);

export class AgAccount{ 
    
   static SaveAccount  =    functions.https.onRequest( (req, res) => {
      return cors(req, res,  () => {
        const account = req.body;
        const rslt = {result:'OK',aid:'',message:'',action:''};
    
        //check tag
        if(!AgAccount.cevir(account.tag)){
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
          admin.firestore().collection('accounts').doc(account.uid).set({...account}).then((ref)=>{
            rslt.aid      = account.uid
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
    
   static cevir(tag:string){
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
}