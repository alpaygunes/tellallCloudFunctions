import * as functions   from 'firebase-functions';
import * as admin       from 'firebase-admin'; 
admin.initializeApp(functions.config().firebase);
import { AgStats }      from './agstats';
import { AgAccount }    from './agaccount';
import { AgChannels }    from './agchannes';
import { AgMessages }    from './agmessages';
import { AgNotification }    from './agnotification';
 

exports.CreateFeedbacks             = AgStats.CreateFeedbacks;
exports.UpdateFeedbacks             = AgStats.UpdateFeedbacks;
exports.SaveAccount                 = AgAccount.SaveAccount;
exports.DeleteChannel               = AgChannels.DeleteChannel;
exports.DeleteMessage               = AgMessages.DeleteMessage;
exports.AddMessage                  = AgMessages.AddMessage;
exports.OnOrderStatusUpdated        = AgNotification.OnOrderStatusUpdated;
exports.OnMessageCreate             = AgNotification.OnMessageCreate;
exports.OnMessageUpdate             = AgNotification.OnMessageUpdate;