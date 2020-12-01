import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin'; 
admin.initializeApp(functions.config().firebase);
import { AgStats }      from './agstats';
import { AgAccount }    from './agaccount';
import { AgChannels }    from './agchannes';
import { AgMessages }    from './agmessages';
 

exports.RefreshMessageFeedbacks     = AgStats.RefreshMessageFeedbacks;
exports.SaveAccount                 = AgAccount.SaveAccount;
exports.DeleteChannel               = AgChannels.DeleteChannel;
exports.DeleteMessage               = AgMessages.DeleteMessage;