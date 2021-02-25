(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-channels-my-channels-module"],{

/***/ "6DXG":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-channels/my-channels.page.ts ***!
  \*******************************************************/
/*! exports provided: MyChannelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChannelsPage", function() { return MyChannelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_channels_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-channels.page.html */ "Vbd1");
/* harmony import */ var _my_channels_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-channels.page.scss */ "Fh5V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let MyChannelsPage = class MyChannelsPage {
    constructor(channelService, authService, toastController, location, alertController, loadingController, router) {
        this.channelService = channelService;
        this.authService = authService;
        this.toastController = toastController;
        this.location = location;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.channels = [];
        this.channel_not_found = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            this.authService.afAuth.onAuthStateChanged((user) => {
                if (user) {
                    this.getChannels(user.uid);
                }
            });
        });
    }
    getChannels(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.present();
            this.channelService.getUserChannels().get().subscribe((scets) => {
                this.loading.dismiss();
                this.channels = [];
                this.channel_not_found = scets.docs.length ? false : true;
                if (scets.docs.length) {
                    scets.docs.map((doc, i) => {
                        const id = doc.ref.parent.parent.id;
                        this.channelService.getChannelInfo(id).ref.get().then((channel) => {
                            this.channels.push(Object.assign({ 'id': id }, channel.data()));
                        });
                    });
                }
            });
        });
    }
    editChannel(channel_id) {
        this.router.navigate(['/form-channel/' + channel_id]);
    }
    creteQR(channel_id) {
        this.router.navigate(['/create-qr/' + channel_id]);
    }
    addNew(channel) {
        if (channel.announce_type == 'text') {
            this.router.navigate(['/add-message-text/' + channel.id]);
        }
        else if (channel.announce_type == 'brochure') {
            this.router.navigate(['/edit-message-brochure/' + channel.id]);
        }
        else if (channel.announce_type == 'food_drink_menu') {
            this.router.navigate(['/edit-message-food-drink-menu/' + channel.id]);
        }
    }
    back() {
        this.location.back();
    }
    deleteChannel(channel_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                //header: 'Onaylıyor musunuz ?',
                message: 'Kanalınız ve mesajlar silinecek ! ',
                buttons: [
                    {
                        text: 'İptal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Sil',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.loading.present();
                            this.channelService.deleteChannel(channel_id).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                yield this.loading.dismiss();
                                this.channels = this.channels.filter(c => {
                                    if (c.id !== channel_id) {
                                        return c;
                                    }
                                });
                                const toast = yield this.toastController.create({
                                    color: 'success',
                                    message: 'Kanal silindi.',
                                    duration: 2000
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
    showMessages(channel) {
        if (channel.announce_type == 'menu') {
            this.router.navigate(['/edit-message-menu/' + channel.id]);
        }
        else {
            this.router.navigate(['/channel-messages/' + channel.id]);
        }
    }
    subscribers(channel_id) {
        this.router.navigate(['subscribers/' + channel_id]);
    }
};
MyChannelsPage.ctorParameters = () => [
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MyChannelsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-channels',
        template: _raw_loader_my_channels_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_channels_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyChannelsPage);



/***/ }),

/***/ "Fh5V":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-channels/my-channels.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-content{\n    --background: url('/assets/wall.png') 50% 30%  no-repeat,url('/assets/bg.png'),beige;  \n} \n\n\nion-item-sliding{\n    padding: 0px!important;\n}\n\nion-item-sliding ion-item{ \n    --background: rgba(255, 255, 255, 0.829);  \n    --padding-start:0px;\n}\n\nion-item-sliding ion-item ion-label { \n    margin-left: 22%; \n\n}\n\nion-item-sliding ion-item ion-label.channel-name{ \n    font-size: 18px;  \n    text-shadow: 1px 1px 1px white;\n}\n\nion-item-sliding ion-item ion-thumbnail {\n    position: absolute;\n    height: 100%;\n    width: 18%;\n}\n\n.not-found-cart { \n    box-shadow: none;\n    text-align: center;\n    position: absolute;\n    top: 60%;\n    left: 50%;\n    transform: translateY(-50%) translateX(-50%); \n    --background: transparent;\n    width: 300px;\n}\n\n.ag-tools{\n    width: 100%;\n    display: block; \n}\n\nion-card ion-icon{ \n    margin: 10px;\n    font-size: 20px;\n    opacity: .8;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LWNoYW5uZWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6Im15LWNoYW5uZWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy93YWxsLnBuZycpIDUwJSAzMCUgIG5vLXJlcGVhdCx1cmwoJy9hc3NldHMvYmcucG5nJyksYmVpZ2U7ICBcbn0gXG5cblxuaW9uLWl0ZW0tc2xpZGluZ3tcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xufVxuXG5pb24taXRlbS1zbGlkaW5nIGlvbi1pdGVteyBcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjkpOyAgXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBpb24tbGFiZWwgeyBcbiAgICBtYXJnaW4tbGVmdDogMjIlOyBcblxufVxuXG5pb24taXRlbS1zbGlkaW5nIGlvbi1pdGVtIGlvbi1sYWJlbC5jaGFubmVsLW5hbWV7IFxuICAgIGZvbnQtc2l6ZTogMThweDsgIFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxOCU7XG59XG5cbi5ub3QtZm91bmQtY2FydCB7IFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7IFxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYWctdG9vbHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuXG5pb24tY2FyZCBpb24taWNvbnsgXG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvcGFjaXR5OiAuODtcbn1cbiovIl19 */");

/***/ }),

/***/ "Fw1W":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-channels/my-channels.module.ts ***!
  \*********************************************************/
/*! exports provided: MyChannelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChannelsPageModule", function() { return MyChannelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_channels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-channels-routing.module */ "vGmd");
/* harmony import */ var _my_channels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-channels.page */ "6DXG");







let MyChannelsPageModule = class MyChannelsPageModule {
};
MyChannelsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_channels_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyChannelsPageRoutingModule"]
        ],
        declarations: [_my_channels_page__WEBPACK_IMPORTED_MODULE_6__["MyChannelsPage"]],
        providers: [
            { provide: "ag_subscribers", useValue: [] },
        ]
    })
], MyChannelsPageModule);



/***/ }),

/***/ "Vbd1":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-channels/my-channels.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar > \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">  \n      <ion-tab-button (click)=\"router.navigate(['home'])\"> \n        <ion-icon name=\"home\"></ion-icon> \n      </ion-tab-button>\n      <ion-title   >Kanallarım</ion-title>\n      <ion-tab-button routerLink=\"/form-channel\"> \n        <ion-icon name=\"add-circle\"></ion-icon> \n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>    \n\n<ion-content > \n\n    <ion-card *ngFor=\"let channel of channels\">\n      <img (click)=\"showMessages(channel)\" src=\"{{channel.logo}}\"   /> \n      <ion-card-header (click)=\"showMessages(channel)\"> \n        <ion-card-title>{{channel.channel_name}}</ion-card-title>\n      </ion-card-header> \n      <ion-card-content>\n        {{channel.description}}\n      </ion-card-content>\n      <ion-toolbar>\n        <ion-row  >\n          <ion-col size=\"2\">\n            <ion-icon  (click)=\"showMessages(channel)\" name=\"chatbox-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-icon  (click)=\"editChannel(channel.id)\" name=\"settings-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-icon  (click)=\"creteQR(channel.id)\"  name=\"share-social-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon  (click)=\"subscribers(channel.id)\"  name=\"people-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon   color=\"danger\" (click)=\"deleteChannel(channel.id)\"   name=\"trash-outline\"></ion-icon> \n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n\n    </ion-card>\n\n\n\n<!-- NOT FOUND--> \n <ion-grid fixed *ngIf=\"channel_not_found\" style=\"margin-top: 100px;\">\n   <ion-row>\n     <ion-col size=\"12\" style=\"text-align: center;\">  \n      <ion-icon name=\"megaphone-outline\" style=\"font-size: 100px;\"></ion-icon>\n     </ion-col>\n    </ion-row> \n    <ion-row> \n     <ion-col size=\"12\">\n      <ion-button fill=\"clear\" expand=\"full\">\n        Kanalınız yok.\n      </ion-button>\n     </ion-col> \n   </ion-row>\n   <ion-row>\n     <ion-col size=\"12\"> \n      <ion-button fill=\"clear\" expand=\"full\" routerLink=\"/form-channel\">\n        <ion-icon slot=\"start\" name=\"add-circle\" ></ion-icon> \n        Hemen birtane oluşturun.\n      </ion-button> \n     </ion-col> \n   </ion-row>\n </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "vGmd":
/*!*****************************************************************!*\
  !*** ./src/app/pages/my-channels/my-channels-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyChannelsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyChannelsPageRoutingModule", function() { return MyChannelsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_channels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-channels.page */ "6DXG");




const routes = [
    {
        path: '',
        component: _my_channels_page__WEBPACK_IMPORTED_MODULE_3__["MyChannelsPage"]
    }
];
let MyChannelsPageRoutingModule = class MyChannelsPageRoutingModule {
};
MyChannelsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyChannelsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-my-channels-my-channels-module-es2015.js.map