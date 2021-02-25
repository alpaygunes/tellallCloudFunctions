(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-ears-my-ears-module"],{

/***/ "+GRf":
/*!***********************************************!*\
  !*** ./src/app/pages/my-ears/my-ears.page.ts ***!
  \***********************************************/
/*! exports provided: MyEarsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEarsPage", function() { return MyEarsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_ears_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-ears.page.html */ "3YaJ");
/* harmony import */ var _my_ears_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-ears.page.scss */ "ICRu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










let MyEarsPage = class MyEarsPage {
    constructor(userService, toastController, authService, location, alertController, router, loadingController) {
        this.userService = userService;
        this.toastController = toastController;
        this.authService = authService;
        this.location = location;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.ears = [];
        this.channel_not_found = false;
        this.layout = 'phone-landscape-outline';
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getEars();
        });
    }
    getEars() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.authService.USER === undefined) {
                console.log("this.authService.USER.uid bulunamadı");
                this.router.navigate(['/']);
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    duration: 5000
                });
                yield loading.present();
                this.userService.getUserEars(this.authService.USER.uid).get().subscribe((snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.channel_not_found = true;
                    loading.dismiss();
                    if (snapshot.docs.length) {
                        this.channel_not_found = false;
                        this.ears = [];
                        snapshot.docs.map((doc, i) => {
                            doc.data()['channelDoc'].get().then((data) => {
                                this.ears.push(Object.assign({ id: data.id, subscribe_id: doc.id, veryfied: doc.data()['veryfied'] }, data.data()));
                            });
                        });
                    }
                }));
            }
        });
    }
    unsubscribeFromChannel(channel_id, subscribe_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Onaylıyor musunuz ?',
                message: 'Aboneliğiniz sonlandırılacak ! ',
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
                                this.ears = this.ears.filter(ear => {
                                    if (ear.id != channel_id) {
                                        return ear;
                                    }
                                });
                                const toast = yield this.toastController.create({
                                    color: 'success',
                                    message: "Aboneliğiniz sonlandırıldı.",
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
    qrScan() {
        this.router.navigate(['/qr-scanner']);
    }
    back() {
        this.location.back();
    }
    showMessages(ear) {
        const url = '/board-messages/' + ear.id;
        if (ear['veryfied']) {
            this.router.navigate([url]);
        }
    }
    changeLayout() {
        this.layout = (this.layout == 'image-outline') ? 'phone-landscape-outline' : 'image-outline';
    }
};
MyEarsPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
MyEarsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-ears',
        template: _raw_loader_my_ears_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_ears_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyEarsPage);



/***/ }),

/***/ "3YaJ":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-ears/my-ears.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar > \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">  \n      <ion-tab-button (click)=\"router.navigate(['home'])\"> \n        <ion-icon name=\"home\"></ion-icon> \n      </ion-tab-button>\n      <ion-title   >Aboneliklerim</ion-title>\n      <ion-tab-button (click)=\"qrScan()\">\n        <ion-icon name=\"qr-code\"></ion-icon> \n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>   \n \n\n<ion-content>\n  <div *ngFor=\"let ear of ears\" >\n    <ion-card >\n      <ion-card-header (click)=\"showMessages(ear)\"> \n        <ion-card-subtitle>{{ear.channel_name}}</ion-card-subtitle>\n      </ion-card-header>\n      <img src=\"{{ear.logo}}\" (click)=\"showMessages(ear)\" *ngIf=\"layout=='phone-landscape-outline'\" />  \n      <ion-card-content> {{ear.description}} </ion-card-content>\n      <ion-button *ngIf=\"ear.veryfied\" (click)=\"unsubscribeFromChannel(ear.id,ear.subscribe_id)\" expand=\"block\" fill=\"clear\" shape=\"round\"   >\n        Abonelikten Çık\n      </ion-button>  \n      <div *ngIf=\"!ear.veryfied\">\n        <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">Onay bekleniyor</ion-button> \n        <ion-button (click)=\"unsubscribeFromChannel(ear.id,ear.subscribe_id)\" expand=\"block\" fill=\"clear\" shape=\"round\"  >İsteği İptal Et</ion-button>  \n      </div>\n           \n    </ion-card>\n  </div>\n\n\n  <!-- NOT FOUND--> \n  <ion-grid fixed *ngIf=\"channel_not_found\" style=\"margin-top: 100px;\">\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center;\">  \n       <ion-icon name=\"thumbs-up-outline\" style=\"font-size: 100px;\"></ion-icon>\n      </ion-col>\n     </ion-row> \n     <ion-row> \n      <ion-col size=\"12\">\n       <ion-button fill=\"clear\" expand=\"full\">\n        Aboneliğiniz yok\n       </ion-button>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n       <ion-button fill=\"clear\" expand=\"full\" routerLink=\"/form-ear\">\n         <ion-icon slot=\"start\" name=\"add-circle\" ></ion-icon> \n         Hemen abonelik başlatın\n       </ion-button> \n      </ion-col> \n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n\n\n  <ion-fab vertical=\"bottom\"   horizontal=\"end\"  slot=\"fixed\">\n    <ion-fab-button routerLink=\"/form-ear\">\n      <ion-icon style=\"color: white; font-size: 24px;\"  name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "ICRu":
/*!*************************************************!*\
  !*** ./src/app/pages/my-ears/my-ears.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-content{\n    --background: url('/assets/subscribe.png') 50% 30% no-repeat,url('/assets/bg.png'),beige;  \n} \n\n\n.ag-tools{\n    width: 100%;\n    display: block; \n}\n.ag-tools ion-icon{\n    float: right;\n    margin: 10px 5px 0 10px;\n    font-size: 14px;\n}\n\n.not-found-cart { \n    box-shadow: none;\n    text-align: center;\n    position: absolute;\n    top: 60%;\n    left: 50%;\n    transform: translateY(-50%) translateX(-50%); \n    --background: transparent;\n    width: 300px;\n}\n\nion-item{ \n    --background: transparent;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LWVhcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJteS1lYXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9zdWJzY3JpYmUucG5nJykgNTAlIDMwJSBuby1yZXBlYXQsdXJsKCcvYXNzZXRzL2JnLnBuZycpLGJlaWdlOyAgXG59IFxuXG5cbi5hZy10b29sc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jazsgXG59XG4uYWctdG9vbHMgaW9uLWljb257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMTBweCA1cHggMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5vdC1mb3VuZC1jYXJ0IHsgXG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTsgXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbmlvbi1pdGVteyBcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuKi9cbiAiXX0= */");

/***/ }),

/***/ "fKmR":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-ears/my-ears-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyEarsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEarsPageRoutingModule", function() { return MyEarsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_ears_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-ears.page */ "+GRf");




const routes = [
    {
        path: '',
        component: _my_ears_page__WEBPACK_IMPORTED_MODULE_3__["MyEarsPage"]
    }
];
let MyEarsPageRoutingModule = class MyEarsPageRoutingModule {
};
MyEarsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyEarsPageRoutingModule);



/***/ }),

/***/ "jlO9":
/*!*************************************************!*\
  !*** ./src/app/pages/my-ears/my-ears.module.ts ***!
  \*************************************************/
/*! exports provided: MyEarsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEarsPageModule", function() { return MyEarsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_ears_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-ears-routing.module */ "fKmR");
/* harmony import */ var _my_ears_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-ears.page */ "+GRf");







let MyEarsPageModule = class MyEarsPageModule {
};
MyEarsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_ears_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyEarsPageRoutingModule"]
        ],
        declarations: [_my_ears_page__WEBPACK_IMPORTED_MODULE_6__["MyEarsPage"]],
    })
], MyEarsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-my-ears-my-ears-module-es2015.js.map