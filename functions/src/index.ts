import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin'; 
admin.initializeApp(functions.config().firebase);
import { AgStats }      from './agstats';
import { AgAccount }    from './agaccount';
 

exports.RefreshMessageFeedbacks     = AgStats.RefreshMessageFeedbacks;
exports.SaveAccount                 = AgAccount.SaveAccount;