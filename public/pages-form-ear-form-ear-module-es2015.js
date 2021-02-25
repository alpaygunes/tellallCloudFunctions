(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-ear-form-ear-module"],{

/***/ "NU0b":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-ear/form-ear.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  \n  <ion-toolbar> \n    <ion-tabs>\n      <ion-tab-bar slot=\"top\">\n        <ion-tab-button>\n          <ion-menu-button></ion-menu-button>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"router.navigate(['home'])\"> \n          <ion-icon name=\"home\"></ion-icon> \n        </ion-tab-button>\n    \n        <ion-tab-button (click)=\"router.navigate(['my-ears'])\">\n          <ion-icon name=\"thumbs-up\"></ion-icon> \n        </ion-tab-button>\n    \n      </ion-tab-bar>    \n    </ion-tabs>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-title   >Submition</ion-title> \n  </ion-toolbar> \n  \n</ion-header>\n\n<ion-content *ngIf=\"!cameraActive\">\n\n  <ion-card  (click)=\"qrScan()\">\n    <ion-card-content>\n      <ion-icon  name=\"qr-code-outline\"></ion-icon>\n    </ion-card-content>\n    <ion-card-header>\n      _qr_kod_okut_\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      _cell_id_ile_\n    </ion-card-header>\n    <ion-card-content>\n      <ion-input type=\"text\" [(ngModel)]=\"channel_id\" placeholder=\"Kanal ID sini girin\"></ion-input>\n      <ion-button (click)=\"getChannelInfo()\"  expand=\"block\" fill=\"clear\" shape=\"round\">\n        Click me\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n \n");

/***/ }),

/***/ "Sawy":
/*!***************************************************!*\
  !*** ./src/app/pages/form-ear/form-ear.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n\nion-card {\n    margin-top: 50px!important;\n}\n\n.ag-buyuk-btn{\n    width: 164px!important;\n    height: 128px!important;\n    margin-left: auto;\n    margin-right: auto;\n    box-shadow: none!important;\n    border: 1px solid var(--ion-color-light-shade);\n    background-color: var(--ion-color-light);\n}\n\n.ag-buyuk-btn ion-card-header{\n    text-align: center;\n    padding: 0;\n    margin-top: 5px;;\n}\n\n.ag-buyuk-btn ion-icon{\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    font-size: 64px;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0tZWFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6ImZvcm0tZWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKlxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogNTBweCFpbXBvcnRhbnQ7XG59XG5cbi5hZy1idXl1ay1idG57XG4gICAgd2lkdGg6IDE2NHB4IWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEyOHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uYWctYnV5dWstYnRuIGlvbi1jYXJkLWhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7O1xufVxuXG4uYWctYnV5dWstYnRuIGlvbi1pY29ue1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDY0cHg7XG59XG4qLyJdfQ== */");

/***/ }),

/***/ "Xbap":
/*!***********************************************************!*\
  !*** ./src/app/pages/form-ear/form-ear-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FormEarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEarPageRoutingModule", function() { return FormEarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_ear_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-ear.page */ "tCf7");




const routes = [
    {
        path: '',
        component: _form_ear_page__WEBPACK_IMPORTED_MODULE_3__["FormEarPage"]
    }
];
let FormEarPageRoutingModule = class FormEarPageRoutingModule {
};
FormEarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormEarPageRoutingModule);



/***/ }),

/***/ "bz6l":
/*!***************************************************!*\
  !*** ./src/app/pages/form-ear/form-ear.module.ts ***!
  \***************************************************/
/*! exports provided: FormEarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEarPageModule", function() { return FormEarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _form_ear_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-ear-routing.module */ "Xbap");
/* harmony import */ var _form_ear_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-ear.page */ "tCf7");







let FormEarPageModule = class FormEarPageModule {
};
FormEarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_ear_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormEarPageRoutingModule"]
        ],
        declarations: [_form_ear_page__WEBPACK_IMPORTED_MODULE_6__["FormEarPage"]]
    })
], FormEarPageModule);



/***/ }),

/***/ "tCf7":
/*!*************************************************!*\
  !*** ./src/app/pages/form-ear/form-ear.page.ts ***!
  \*************************************************/
/*! exports provided: FormEarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEarPage", function() { return FormEarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_ear_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form-ear.page.html */ "NU0b");
/* harmony import */ var _form_ear_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-ear.page.scss */ "Sawy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");









let FormEarPage = class FormEarPage {
    constructor(router, alertController, loadingController, authService, channelService, location) {
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.authService = authService;
        this.channelService = channelService;
        this.location = location;
        this.cameraActive = false;
    }
    ngOnInit() { }
    qrScan() {
        this.router.navigate(['/qr-scanner']);
    }
    back() {
        this.location.back();
    }
    ///////////////////// geçici aşadıkileri sil daha sonra
    getChannelInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000,
            });
            yield loading.present();
            this.channelService.getChannelInfo(this.channel_id).ref.get().then((snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.dismiss();
                this.channel = snapshot.data();
                if (this.channel.registered_users_only) {
                    if (!this.authService.USER) {
                        const alert = yield this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Üyelik Gerekli',
                            message: 'Mesajı görebilmeniz için hesabınız olmalı',
                            buttons: [{
                                    text: 'Okay',
                                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        this.router.navigate(['login']);
                                    })
                                }
                            ]
                        });
                        yield alert.present();
                        return;
                    }
                }
                if (this.channel.flash) {
                    this.showFlashMessage();
                }
                else {
                    this.router.navigate(['/channel-details/' + this.channel_id]);
                }
            }));
        });
    }
    showFlashMessage() {
        if (this.channel.announce_type == 'text') {
            if (this.message_id) {
                this.router.navigate(['/board-messages/' + this.channel_id + '/' + this.message_id]);
            }
            else {
                this.router.navigate(['/board-messages/' + this.channel_id]);
            }
        }
        else if (this.channel.announce_type == 'brochure') {
            if (this.message_id) {
                this.router.navigate(['/brochure/' + this.channel_id + '/' + this.message_id]);
            }
            else {
                this.router.navigate(['/board-messages/' + this.channel_id]);
            }
        }
        else if (this.channel.announce_type == 'food_drink_menu') {
            if (this.message_id) {
                this.router.navigate(['/food-drink-menu/' + this.channel_id + '/' + this.message_id]);
            }
            else {
                this.router.navigate(['/board-messages/' + this.channel_id]);
            }
        }
    }
};
FormEarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__["ChannelService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
FormEarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-ear',
        template: _raw_loader_form_ear_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_ear_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormEarPage);



/***/ })

}]);
//# sourceMappingURL=pages-form-ear-form-ear-module-es2015.js.map