(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-channel-details-channel-details-module"],{

/***/ "9pWO":
/*!*************************************************************************!*\
  !*** ./src/app/pages/channel-details/channel-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChannelDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDetailsPageRoutingModule", function() { return ChannelDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _channel_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel-details.page */ "yrN8");




const routes = [
    {
        path: '',
        component: _channel_details_page__WEBPACK_IMPORTED_MODULE_3__["ChannelDetailsPage"]
    }
];
let ChannelDetailsPageRoutingModule = class ChannelDetailsPageRoutingModule {
};
ChannelDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChannelDetailsPageRoutingModule);



/***/ }),

/***/ "FTb4":
/*!*****************************************************************!*\
  !*** ./src/app/pages/channel-details/channel-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChannelDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDetailsPageModule", function() { return ChannelDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _channel_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel-details-routing.module */ "9pWO");
/* harmony import */ var _channel_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel-details.page */ "yrN8");







let ChannelDetailsPageModule = class ChannelDetailsPageModule {
};
ChannelDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _channel_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChannelDetailsPageRoutingModule"]
        ],
        declarations: [_channel_details_page__WEBPACK_IMPORTED_MODULE_6__["ChannelDetailsPage"]]
    })
], ChannelDetailsPageModule);



/***/ }),

/***/ "Wt8z":
/*!*****************************************************************!*\
  !*** ./src/app/pages/channel-details/channel-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFubmVsLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "i4J9":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channel-details/channel-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"ion-no-border\" *ngIf=\"authService.USER\">\n \n  <ion-toolbar>\n    <ion-title>Channel Info</ion-title>\n    <ion-buttons slot=\"start\" (click)=\"back()\">\n      <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>   \n  \n  <ion-toolbar> \n    <ion-tabs>\n      <ion-tab-bar>\n        <ion-tab-button>\n          <ion-menu-button></ion-menu-button>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"router.navigate(['home'])\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n  \n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngIf=\"channel_exist\">\n    <img style=\"width: 100%;\" [src]=\"channel.logo\" />\n    <ion-card-header>\n      <ion-card-subtitle>Kanal Sahibi</ion-card-subtitle>\n      <ion-card-title>{{channel.channel_name}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{channel.description}}\n     </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"!channel_exist && !query_continues\"> \n    <ion-card-header> \n      <ion-card-title>Kanal Bulunamadı</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Aradığınız kanalı bulamadık. Kaldırılmış olabilir.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"channel.with_password\"> \n    <ion-card-header> \n      <ion-card-title>Parola Gerekli</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-input #Password type=\"password\" [(ngModel)]=\"password\" placeholder=\"Parola\"></ion-input>\n      </ion-item>\n      <small>Lütfen size verilen parolayı yazın</small>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf=\"error\">\n    <ion-card> \n      <ion-card-content>\n        {{errorMessage}}\n      </ion-card-content>\n      <ion-button routerLink=\"/register\"  expand=\"full\" fill=\"clear\" shape=\"round\" > Hesap oluştur  </ion-button>\n      <ion-button routerLink=\"/login\"     expand=\"full\" fill=\"clear\" shape=\"round\" >  Giriş </ion-button>      \n    </ion-card>\n  </div>\n \n</ion-content>\n\n<ion-toolbar *ngIf=\"!error\">  \n  <ion-tabs *ngIf=\"!channel.confirmation_required\">\n    <ion-tab-bar slot=\"bottom\">\n      <ion-label *ngIf=\"!channel_in_ears_list && channel_exist\" (click)=\"subsicribeToChannel()\" >Abone ol</ion-label>\n      <ion-label *ngIf=\"channel_in_ears_list\" > Zaten Abonesiniz </ion-label>\n      <ion-icon name=\"chevron-back\" (click)=\"back()\" *ngIf=\"!channel_exist\" ></ion-icon>\n    </ion-tab-bar>\n  </ion-tabs>\n  <ion-tabs *ngIf=\"channel.confirmation_required\">\n    <ion-tab-bar slot=\"bottom\">\n      <ion-label  *ngIf=\"!channel_in_ears_list && channel_exist\" (click)=\"subsicribeToChannel()\" >Abone ol</ion-label>\n      <ion-label *ngIf=\"channel_in_ears_list && !subscribed_channel.confirmation_required\" (click)=\"unsubscribeFromChannel(channel.id,subscribed_channel.id)\"> İstek Gönderilmiş - İptal Et  </ion-label>\n      <ion-label   (click)=\"back()\" *ngIf=\"subscribed_channel?.confirmation_required\" >Zaten Abonesiniz</ion-label>\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-toolbar>");

/***/ }),

/***/ "yrN8":
/*!***************************************************************!*\
  !*** ./src/app/pages/channel-details/channel-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ChannelDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDetailsPage", function() { return ChannelDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_channel_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./channel-details.page.html */ "i4J9");
/* harmony import */ var _channel_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel-details.page.scss */ "Wt8z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/objects/channel.model */ "ySeB");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












let ChannelDetailsPage = class ChannelDetailsPage {
    constructor(channelService, location, alertController, route, authService, toastController, platform, router, loadingController, userService) {
        this.channelService = channelService;
        this.location = location;
        this.alertController = alertController;
        this.route = route;
        this.authService = authService;
        this.toastController = toastController;
        this.platform = platform;
        this.router = router;
        this.loadingController = loadingController;
        this.userService = userService;
        this.channel = new src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__["Channel"]();
        this.channel_exist = false;
        this.channel_in_ears_list = false;
        this.password = null;
        this.query_continues = true;
        this.error = false;
    }
    ngOnInit() {
        this.backBtnSub = this.platform.backButton.subscribe(() => {
            this.back();
        });
        this.query_continues = true;
        this.channel_id = this.route.snapshot.paramMap.get('id');
        this.checkChannelExistInUserEarsList();
        this.getChannelInfo();
        this.authService.afAuth.authState.subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!user) {
                this.error = true;
                this.errorMessage = "Kanala abone olabilmeniz için hesabınız olmalı. Lütfen giriş yapın.";
            }
            else {
                this.authService.USER = user;
            }
        }));
    }
    getChannelInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000,
            });
            yield loading.present();
            this.channelService.getChannelInfo(this.channel_id).ref.get()
                .then((snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (snapshot.data()) {
                    this.channel = snapshot.data();
                    this.channel.id = this.channel_id;
                    this.channel_exist = true;
                }
                else {
                    this.query_continues = false;
                }
            }));
        });
    }
    checkChannelExistInUserEarsList() {
        if (this.authService.USER) {
            let ear = this.userService.checkChannelExistInUserEarsList(this.authService.USER.uid, this.channel_id);
            ear.get().subscribe(channel => {
                if (channel.data()) {
                    this.channel_in_ears_list = channel.data() ? true : false;
                    this.subscribed_channel = Object.assign({ id: channel.id }, channel.data());
                }
            });
            console.log("checkChannelExistInUserEarsList aboneliği tetiklendi");
        }
    }
    subsicribeToChannel() {
        if (this.channel.with_password) {
            this.Password.nativeElement.style.borderColor = "#e7e7e7";
            if (this.channel.with_password
                && (this.password === null || this.password.replace(/\s/g, "") === '')) {
                this.Password.nativeElement.style.borderColor = "red";
                return;
            }
        }
        if (this.authService.USER) {
            this.password = this.password ? this.password : "";
            this.userService.subsicribeToChannel(this.authService.USER, this.channel_id, this.password, this.channel.confirmation_required).then((result) => {
                if (result) {
                    this.router.navigate(['/board-messages/' + this.channel_id]);
                }
            });
        }
    }
    unsubscribeFromChannel(channel_id, subscribe_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Onaylıyor musunuz ?',
                message: 'İstek iptal edilecek ! ',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Okay',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create({
                                message: 'Please wait...',
                                duration: 5000
                            });
                            yield loading.present();
                            this.userService.unsubscribeFromChannel(channel_id, subscribe_id).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                yield loading.dismiss();
                                const toast = yield this.toastController.create({
                                    color: 'success',
                                    message: "İstek iptal edildi.",
                                    duration: 2000
                                });
                                toast.present();
                                this.channel_in_ears_list = false;
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    back() {
        this.router.navigate(['/home']);
    }
    ngOnDestroy() {
        if (this.backBtnSub) {
            this.backBtnSub.unsubscribe();
        }
    }
};
ChannelDetailsPage.ctorParameters = () => [
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
ChannelDetailsPage.propDecorators = {
    Password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['Password', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
ChannelDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-channel-details',
        template: _raw_loader_channel_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_channel_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChannelDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-channel-details-channel-details-module-es2015.js.map