(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-channel-messages-channel-messages-module"],{

/***/ "+1lI":
/*!*******************************************************************!*\
  !*** ./src/app/pages/channel-messages/channel-messages.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card ion-icon {\n  font-size: 100px;\n  color: brown;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 20px;\n}\n\nion-card {\n  background: #a52a2a08;\n}\n\n.ag-reqular-message {\n  margin-top: 30px;\n}\n\n.ag-reqular-message ion-icon {\n  font-size: 20px;\n  font-size: 20px;\n  position: relative;\n  float: right;\n  margin-top: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYW5uZWwtbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQWlCLGVBQUE7RUFDakIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJjaGFubmVsLW1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgY29sb3I6IGJyb3duO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiNhNTJhMmEwODsgXG59XG5cblxuLmFnLXJlcXVsYXItbWVzc2FnZXsgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmFnLXJlcXVsYXItbWVzc2FnZSBpb24taWNvbntcbiAgICBmb250LXNpemU6IDIwcHg7IGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "0b2y":
/*!***************************************************************************!*\
  !*** ./src/app/pages/channel-messages/channel-messages-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChannelMessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelMessagesPageRoutingModule", function() { return ChannelMessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _channel_messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel-messages.page */ "TbjU");




const routes = [
    {
        path: '',
        component: _channel_messages_page__WEBPACK_IMPORTED_MODULE_3__["ChannelMessagesPage"]
    }
];
let ChannelMessagesPageRoutingModule = class ChannelMessagesPageRoutingModule {
};
ChannelMessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChannelMessagesPageRoutingModule);



/***/ }),

/***/ "LDEp":
/*!*******************************************************************!*\
  !*** ./src/app/pages/channel-messages/channel-messages.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChannelMessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelMessagesPageModule", function() { return ChannelMessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _channel_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel-messages-routing.module */ "0b2y");
/* harmony import */ var _channel_messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel-messages.page */ "TbjU");
/* harmony import */ var src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/unix-time-to-date.pipe */ "SA8l");








let ChannelMessagesPageModule = class ChannelMessagesPageModule {
};
ChannelMessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _channel_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChannelMessagesPageRoutingModule"]
        ],
        declarations: [_channel_messages_page__WEBPACK_IMPORTED_MODULE_6__["ChannelMessagesPage"], src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__["UnixTimeToDatePipe"]],
        providers: [
            { provide: "ag_subscribers", useValue: [] },
        ]
    })
], ChannelMessagesPageModule);



/***/ }),

/***/ "NKhy":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channel-messages/channel-messages.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar> \n    <ion-tabs>\n      <ion-tab-bar slot=\"top\">\n        <ion-tab-button>\n          <ion-menu-button></ion-menu-button>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"router.navigate(['home'])\"> \n          <ion-icon name=\"home\"></ion-icon> \n        </ion-tab-button>    \n        <ion-tab-button   (click)=\"router.navigate(['my-ears'])\">\n          <ion-icon name=\"thumbs-up\"></ion-icon> \n        </ion-tab-button>        \n      </ion-tab-bar>    \n    </ion-tabs>\n  </ion-toolbar>\n</ion-header>\n\n \n<ion-content> \n\n<section class=\"logo-img\">\n  <img src=\"{{ channel?.logo}}\" /> \n  <ion-label class=\"logo-title\" >{{ channel?.channel_name }}</ion-label>\n</section>\n\n<ion-item lines=\"none\" >\n  <ion-button (click)=\"addNew()\" expand=\"full\" fill=\"clear\" size=\"small\" >\n    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n    Yeni\n  </ion-button>\n</ion-item>\n\n<!-- ////////////////////   siparişler ///////////////////////////-->\n<ion-card *ngIf=\"channel?.announce_type == 'food_drink_menu'\" (click)=\"showOrders()\" button [disabled]=\"orders?.length==0\" style=\"box-shadow: unset;\">\n  <ion-icon  name=\"notifications-circle-outline\"></ion-icon>\n  <ion-card-header>\n    <ion-card-subtitle style=\"text-align: center;\">{{orders?.length}} tane bekleyen siparişiniz var</ion-card-subtitle> \n  </ion-card-header> \n  <ion-button size=\"small\" [disabled]=\"orders?.length==0\" fill=\"clear\" style=\"margin-left: auto;margin-right: auto;display: block;\" >Siparişleri göster</ion-button>\n</ion-card>\n  \n<section *ngFor=\"let message of messages\">\n  <!-- ///////////////////////////////// FOOD DRINK MENÜLER /////////////////////// -->\n  <ion-card  *ngIf=\"channel?.announce_type == 'food_drink_menu'\">\n\n    <ion-card-header>\n      <ion-card-subtitle>{{message.food_drink_menu.title}} </ion-card-subtitle>\n      <ion-card-title>{{message.food_drink_menu.subtitle}} </ion-card-title>\n    </ion-card-header>\n    <ion-card-content> \n      <!-- <ion-icon  *ngIf=\"channel?.announce_type == 'food_drink_menu'\" [src]=\"'assets/icon/'+message.type+'.svg'\" (click) = \"showMessage(message)\" ></ion-icon> -->\n      <ion-icon  *ngIf=\"channel?.announce_type == 'food_drink_menu'\"  name=\"restaurant-outline\" (click) = \"showMessage(message)\" ></ion-icon>\n    </ion-card-content>\n\n    <ion-button fill=\"clear\" size=\"small\" (click)=\"edit(message.id)\" > Düzenle </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" (click)=\"getStats(channel_id,message.id)\" > İstatistik</ion-button>\n    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteMessage(message.id,channel_id)\">Sil</ion-button>\n\n  </ion-card>\n\n  <!-- ///////////////////////////////// BROŞÜR MENÜLER /////////////////////// -->\n  <ion-card  *ngIf=\"channel?.announce_type == 'brochure'\">\n\n    <ion-card-header>\n      <ion-card-subtitle>{{message.brochure.title}} </ion-card-subtitle>\n      <ion-card-title>{{message.brochure.subtitle}} </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <ion-icon  class=\"bigger\" *ngIf=\"channel?.announce_type == 'brochure'\"[src]=\"'assets/icon/'+message.type+'.svg'\" (click) = \"showMessage(message)\" ></ion-icon> -->\n      <ion-icon  class=\"bigger\" *ngIf=\"channel?.announce_type == 'brochure'\" name=\"logo-firebase\" (click) = \"showMessage(message)\" ></ion-icon>\n    </ion-card-content>\n\n    <ion-button fill=\"clear\" size=\"small\" (click)=\"edit(message.id)\" > Düzenle </ion-button>\n    <ion-button fill=\"clear\" size=\"small\" (click)=\"getStats(channel_id,message.id)\" > İstatistik</ion-button>\n    <ion-button fill=\"clear\" size=\"small\" (click)=\"deleteMessage(message.id,channel_id)\">Sil</ion-button>\n\n  </ion-card>\n\n  <!-- /////////////////////////////////  REQULAR TEXT MESAJLAR ///////////////////////////// -->\n  <ion-card *ngIf=\"channel?.announce_type == 'text'\" class=\"ag-reqular-message\" button >\n    <section (click) = \"showMessage(message)\">\n      <ion-card-header> \n        <ion-card-title> {{ message.created_at | unixTimeToDate: 'hm'}} - {{message.created_at | unixTimeToDate: 'date' }} </ion-card-title>\n        <ion-icon  [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\"  style=\"font-size: 20px;\"  ></ion-icon> \n      </ion-card-header>\n      <ion-card-content style=\"text-align: justify;\">  \n        {{message.text}}\n      </ion-card-content>\n    </section>\n    <ion-row>\n      <ion-col size=\"3\" (click) = \"showStatistics(message)\" > \n        İstatistik\n      </ion-col>\n      <ion-col size=\"7\"> \n        Görüntüleme sayısı {{message.reader_count}}\n      </ion-col>\n      <ion-col size=\"2\" (click)=\"deleteMessage(message.id,channel_id)\">\n        Sil\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</section>  \n\n  <!-- NOT FOUND-->\n  <ion-card *ngIf=\"message_not_found\" button (click)=\"addNew()\" > \n    <ion-icon name=\"alert-circle-outline\"></ion-icon>\n    <ion-label style=\"display: block;text-align: center;\">{{message_not_found_title}}</ion-label>\n    <ion-button size=\"small\" fill=\"clear\" style=\"margin-left: auto;margin-right: auto;display: block;\">{{message_not_found_subtitle}}</ion-button>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "TbjU":
/*!*****************************************************************!*\
  !*** ./src/app/pages/channel-messages/channel-messages.page.ts ***!
  \*****************************************************************/
/*! exports provided: ChannelMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelMessagesPage", function() { return ChannelMessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_channel_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./channel-messages.page.html */ "NKhy");
/* harmony import */ var _channel_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-messages.page.scss */ "+1lI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/message.model */ "Npzb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/objects/channel.model */ "ySeB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");













let ChannelMessagesPage = class ChannelMessagesPage {
    constructor(route, toastController, router, location, orderService, ag_subscribers, messageService, loadingController, alertController, channelService) {
        this.route = route;
        this.toastController = toastController;
        this.router = router;
        this.location = location;
        this.orderService = orderService;
        this.ag_subscribers = ag_subscribers;
        this.messageService = messageService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.channelService = channelService;
        this.channel = new src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_8__["Channel"]();
        this.message_not_found = false;
        this.message_not_found_title = "Henüz mesaj yok.";
        this.message_not_found_subtitle = "Hemen güzel bir paylaşım yapın.";
        this.show_message = false;
        this.feedback = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__["FeedBack"]();
        this.types = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__["CallBackTypes"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield this.loading.present();
            this.channel_id = this.route.snapshot.paramMap.get('id');
            this.getChannelInfo().then((chnl) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.channel = chnl;
                if (this.channel.announce_type == 'text') {
                    this.getTextMessages();
                    yield this.loading.dismiss();
                }
                else if (this.channel.announce_type == 'brochure') {
                    yield this.loading.dismiss();
                    this.getBrochureMessages();
                }
                else if (this.channel.announce_type == 'food_drink_menu') {
                    yield this.loading.dismiss();
                    this.getFoodDrinkMessages();
                    this.getOrders();
                }
            })).catch(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                const toast = yield this.toastController.create({
                    color: 'dark',
                    message: 'Kanal bulunamadı.',
                    duration: 2000
                });
                toast.present();
            }));
        });
    }
    getChannelInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                this.channelService.getChannelInfo(this.channel_id).valueChanges()
                    .subscribe(data => {
                    res(data);
                });
            });
        });
    }
    getTextMessages() {
        if (this.ag_subscribers[this.channel_id]) {
            this.ag_subscribers[this.channel_id].unsubscribe();
            delete this.ag_subscribers[this.channel_id];
        }
        this.ag_subscribers[this.channel_id] = this.messageService.getTextMessages(this.channel_id).snapshotChanges().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            this.message_not_found = data.length ? false : true;
            this.messages = data.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        }));
    }
    getBrochureMessages() {
        if (this.ag_subscribers[this.channel_id]) {
            this.ag_subscribers[this.channel_id].unsubscribe();
            delete this.ag_subscribers[this.channel_id];
        }
        this.ag_subscribers[this.channel_id] = this.messageService.getBrochureMessages(this.channel_id).snapshotChanges().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            console.log("getTextMessages aboneliği tetiklendi");
            this.message_not_found = data.length ? false : true;
            this.message_not_found_title = "Henüz broşür yok.";
            this.message_not_found_subtitle = "Güzel bir broşür hazırlayın.";
            this.messages = data.map(e => {
                return Object.assign({ id: e.payload.doc.id }, e.payload.doc.data());
            });
        }));
    }
    getFoodDrinkMessages() {
        if (this.ag_subscribers[this.channel_id]) {
            this.ag_subscribers[this.channel_id].unsubscribe();
            delete this.ag_subscribers[this.channel_id];
        }
        this.ag_subscribers[this.channel_id] = this.messageService.getFoodDrinkMessages(this.channel_id).snapshotChanges().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            console.log("getFoodDrinkMessages aboneliği tetiklendi");
            this.message_not_found = data.length ? false : true;
            this.message_not_found_title = "Henüz menü yok.";
            this.message_not_found_subtitle = "Güzel bir menü hazırlayın.";
            this.messages = data.map(e => {
                return Object.assign({ id: e.payload.doc['id'] }, e.payload.doc.data());
            });
        }));
    }
    back() {
        this.location.back();
    }
    showMessage(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.messageService.getFeedBackByUID(message.id, this.channel_id).then(snapshot => {
                if (snapshot.data() !== undefined) {
                    this.feedback = snapshot.data();
                }
                else {
                    this.messageService.sendFeedBack(new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__["FeedBack"](), this.channel_id, message.id);
                }
            });
            if (message.type == 'brochure') {
                this.router.navigate(['/brochure/' + this.channel_id + '/' + message.id]);
            }
            else if (message.type == 'food_drink_menu') {
                this.router.navigate(['/food-drink-menu/' + this.channel_id + '/' + message.id]);
            }
            else if (message.type == 'text') {
                let navigationExtras = {
                    state: {
                        message: message,
                        feedback: this.feedback
                    }
                };
                this.router.navigate(['/text/' + this.channel_id + '/' + message.id], navigationExtras);
            }
        });
    }
    showStatistics(message) {
        this.messageService.message = message;
        this.router.navigate(['/message-stats/' + this.channel_id + '/' + message.id]);
    }
    addNew() {
        if (this.channel.announce_type == 'menu') {
            this.router.navigate(['/edit-message-menu/' + this.channel_id]);
        }
        else if (this.channel.announce_type == 'text') {
            this.router.navigate(['/add-message-text/' + this.channel_id]);
        }
        else if (this.channel.announce_type == 'brochure') {
            this.router.navigate(['/edit-message-brochure/' + this.channel_id]);
        }
        else if (this.channel.announce_type == 'food_drink_menu') {
            this.router.navigate(['/edit-message-food-drink-menu/' + this.channel_id]);
        }
    }
    deleteMessage(mid, cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                //header: 'Onaylıyor musunuz ?',
                message: 'Veriler kalıcı olarak silinecek ! ',
                buttons: [
                    {
                        text: 'Vazgeç',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Sil',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.messageService.deleteMessage(mid, cid).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                const toast = yield this.toastController.create({
                                    color: 'success',
                                    message: "Silme işlemi başarılı",
                                    duration: 3000
                                });
                                toast.present();
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    edit(mid) {
        if (this.channel.announce_type == 'brochure') {
            this.router.navigate(['/edit-message-brochure/' + this.channel_id + '/' + mid]);
        }
        else if (this.channel.announce_type == 'food_drink_menu') {
            this.router.navigate(['/edit-message-food-drink-menu/' + this.channel_id + '/' + mid]);
        }
    }
    getStats(cid, mid) {
        this.router.navigate(['/menu-stats/' + cid + '/' + mid]);
    }
    getOrders() {
        let status = 'degerlendiriliyor';
        let limit = 100;
        let filter_end_date = new Date();
        let filter_start_date = new Date(0);
        this.orderService.getOrders(this.channel_id, status, filter_start_date, filter_end_date, null, limit).snapshotChanges().subscribe((orders) => {
            this.orders = orders.map(order => {
                return Object.assign({ id: order.payload.doc.id }, order.payload.doc.data());
            });
        });
    }
    showOrders() {
        this.router.navigate(['/orders/' + this.channel_id]);
    }
};
ChannelMessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_11__["OrderService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ["ag_subscribers",] }] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_7__["ChannelService"] }
];
ChannelMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-channel-messages',
        template: _raw_loader_channel_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_channel_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChannelMessagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-channel-messages-channel-messages-module-es2015.js.map