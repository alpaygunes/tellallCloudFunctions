(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subscribers-subscribers-module"],{

/***/ "/fKn":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/subscribers/subscribers.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button  fill=\"clear\" size=\"small\"  (click)=\"back()\"  >\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-tab-button> \n      <ion-title *ngIf=\"showed_list\">Aboneler</ion-title> \n      <ion-title *ngIf=\"!showed_list\">Onay Bekleyenler</ion-title>  \n      <ion-tab-button (click)=\"router.navigate(['home'])\"> \n        <ion-icon name=\"home\"></ion-icon> \n      </ion-tab-button>  \n    </ion-tab-bar>    \n  </ion-tabs>\n</ion-toolbar>  \n\n<ion-content> \n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-icon slot=\"start\" name=\"checkmark-done-circle-outline\"></ion-icon>\n      <ion-button (click)=\"switchList(true)\"    fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"people-outline\"></ion-icon>\n          Aboneleri Listele\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"switchList(false)\"     fill=\"clear\" size=\"small\"> \n        <ion-icon slot=\"start\" name=\"checkmark-outline\"></ion-icon>\n          Bekleyenleri Listele\n      </ion-button>\n    </ion-col>\n  </ion-row> \n\n  <!--  /////////////////////    HEPSİ   ////////////////////////// --> \n  <ion-list  >\n    <ion-item *ngIf=\"!subscribers?.length\" lines=\"full\">\n      <ion-label>Listelenecek öğe yok</ion-label>\n    </ion-item>\n    <div *ngFor=\"let subscriber of subscribers\">\n      \n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"subscriber.photoURL\" *ngIf=\"subscriber.photoURL\">\n          <ion-icon style=\"font-size: 40px;\" name=\"person-circle-outline\" *ngIf=\"!subscriber.photoURL\"></ion-icon>\n        </ion-avatar>\n        <ion-label> \n          <h2 *ngIf=\"subscriber.displayName\">{{subscriber.displayName}}</h2>\n          <h2 *ngIf=\"!subscriber.displayName\">{{subscriber.email}}</h2>  \n        </ion-label>\n        <ion-button (click)=\"unSubscribe(subscriber)\" fill=\"clear\">\n          <ion-icon  name=\"person-remove-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"verify(subscriber)\" fill=\"clear\" *ngIf=\"subscriber.veryfied==false\">\n          <ion-icon    name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n\n    </div>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"getSubscribers('prev')\" [disabled]=\"noBefor\"   fill=\"clear\" style=\"position: absolute;right: 0;\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle-outline\"></ion-icon>\n      </ion-button> \n    </ion-col>\n    <ion-col size=\"6\">    \n      <ion-button (click)=\"getSubscribers('next')\" [disabled]=\"noNext\"  fill=\"clear\" >\n        <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\n      </ion-button>\n  </ion-col>\n  </ion-row>\n  <!--  /////////////////////    ONAY BEKLEYENLER   ////////////////////////// -->\n\n</ion-content>\n");

/***/ }),

/***/ "HtUY":
/*!**************************************************!*\
  !*** ./src/app/services/subscription.service.ts ***!
  \**************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let SubscriptionService = class SubscriptionService {
    constructor(fs, toastController) {
        this.fs = fs;
        this.toastController = toastController;
    }
    verify(cid, sbscrb_id) {
        return this.fs.collection('channels').doc(cid).collection('subscribers').doc(sbscrb_id).update({ veryfied: true });
    }
};
SubscriptionService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubscriptionService);



/***/ }),

/***/ "NwGF":
/*!*********************************************************!*\
  !*** ./src/app/pages/subscribers/subscribers.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-content{\n     --background: beige;  \n} \n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1YnNjcmliZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUFBIiwiZmlsZSI6InN1YnNjcmliZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tY29udGVudHtcbiAgICAgLS1iYWNrZ3JvdW5kOiBiZWlnZTsgIFxufSBcbiovIl19 */");

/***/ }),

/***/ "Pn0e":
/*!*********************************************************!*\
  !*** ./src/app/pages/subscribers/subscribers.module.ts ***!
  \*********************************************************/
/*! exports provided: SubscribersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribersPageModule", function() { return SubscribersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subscribers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribers-routing.module */ "v30u");
/* harmony import */ var _subscribers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscribers.page */ "q+1u");







let SubscribersPageModule = class SubscribersPageModule {
};
SubscribersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscribers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscribersPageRoutingModule"]
        ],
        declarations: [_subscribers_page__WEBPACK_IMPORTED_MODULE_6__["SubscribersPage"]]
    })
], SubscribersPageModule);



/***/ }),

/***/ "q+1u":
/*!*******************************************************!*\
  !*** ./src/app/pages/subscribers/subscribers.page.ts ***!
  \*******************************************************/
/*! exports provided: SubscribersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribersPage", function() { return SubscribersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscribers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscribers.page.html */ "/fKn");
/* harmony import */ var _subscribers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribers.page.scss */ "NwGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/subscription.service */ "HtUY");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/account.service */ "flj8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











let SubscribersPage = class SubscribersPage {
    constructor(route, accountService, alertController, subscription, router, location, toastController, userService, channelService, loadingController) {
        this.route = route;
        this.accountService = accountService;
        this.alertController = alertController;
        this.subscription = subscription;
        this.router = router;
        this.location = location;
        this.toastController = toastController;
        this.userService = userService;
        this.channelService = channelService;
        this.loadingController = loadingController;
        this.showed_list = true;
        this.start_after_docs = [];
        this.noNext = false;
        this.noBefor = true;
        this.limit = 2;
        this.current_page_num = 0;
    }
    ngOnInit() {
        this.cid = this.route.snapshot.paramMap.get('cid');
        this.getSubscribers('next');
    }
    getSubscribers(cmd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (cmd == 'next' && !this.noNext) {
                this.current_page_num++;
            }
            else if (cmd == 'prev' && !this.noBefor) {
                this.current_page_num--;
                this.noNext = false;
            }
            this.noBefor = (this.current_page_num - 1) ? false : true;
            let start_doc = this.start_after_docs[this.current_page_num - 1] ? this.start_after_docs[this.current_page_num - 1] : null;
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield loading.present();
            if (start_doc) {
                this.channelService.getSubscribers(this.cid)
                    .orderBy('created_at', 'desc')
                    .where('veryfied', '==', this.showed_list)
                    .startAfter(start_doc)
                    .limit(this.limit)
                    .get().then((sbscrb) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                    this.subscribers = sbscrb.docs.map(doc => {
                        return doc.data();
                    });
                    this.getUserProfileImage();
                    this.start_after_docs[this.current_page_num] = sbscrb.docs[sbscrb.docs.length - 1];
                    if (sbscrb.docs.length < this.limit) {
                        this.noNext = true;
                    }
                }));
            }
            else { //end if
                this.channelService.getSubscribers(this.cid)
                    .where('veryfied', '==', this.showed_list)
                    .orderBy('created_at', 'desc')
                    .limit(this.limit)
                    .get().then((sbscrb) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                    this.subscribers = sbscrb.docs.map(doc => {
                        return doc.data();
                    });
                    this.getUserProfileImage();
                    this.start_after_docs[this.current_page_num] = sbscrb.docs[sbscrb.docs.length - 1];
                    if (sbscrb.docs.length < this.limit) {
                        this.noNext = true;
                    }
                }));
            } //end else
        });
    }
    switchList(showed_list) {
        this.showed_list = showed_list;
        this.current_page_num = 0;
        this.start_after_docs = [];
        this.noNext = false;
        this.noBefor = true;
        this.getSubscribers('next');
    }
    unSubscribe(subscriber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Abonolik işlemini iptal ediyorsunuz ?',
                buttons: [{
                        text: 'Tamam',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.userService.unsubscribeFromChannel(this.cid, subscriber.uid).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                const toast = yield this.toastController.create({
                                    color: 'dark',
                                    message: "Abonelik sonlandırıldı",
                                    duration: 1000
                                });
                                toast.present();
                                this.subscribers = this.subscribers.filter(sbsc => {
                                    if (sbsc != subscriber) {
                                        return sbsc;
                                    }
                                });
                            }));
                        })
                    }, {
                        text: 'Vazgeç',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { })
                    }]
            });
            yield alert.present();
        });
    }
    verify(subscriber) {
        this.subscription.verify(this.cid, subscriber.uid).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'success',
                message: "Abonelik onaylandı",
                duration: 1000
            });
            toast.present();
            subscriber.veryfied = true;
            this.subscribers = this.subscribers.filter(sbsc => {
                if (sbsc != subscriber) {
                    return sbsc;
                }
            });
        }));
    }
    getUserProfileImage() {
        this.subscribers.map((subscriber) => {
            this.accountService.getAccount(subscriber.uid).then((data) => {
                subscriber['photoURL'] = data.photoURL;
            });
        });
    }
    back() {
        this.location.back();
    }
};
SubscribersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: src_app_services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
SubscribersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscribers',
        template: _raw_loader_subscribers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscribers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubscribersPage);



/***/ }),

/***/ "v30u":
/*!*****************************************************************!*\
  !*** ./src/app/pages/subscribers/subscribers-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubscribersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribersPageRoutingModule", function() { return SubscribersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subscribers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribers.page */ "q+1u");




const routes = [
    {
        path: '',
        component: _subscribers_page__WEBPACK_IMPORTED_MODULE_3__["SubscribersPage"]
    }
];
let SubscribersPageRoutingModule = class SubscribersPageRoutingModule {
};
SubscribersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscribersPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-subscribers-subscribers-module-es2015.js.map