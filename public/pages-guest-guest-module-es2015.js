(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-guest-guest-module"],{

/***/ "6ny+":
/*!*********************************************!*\
  !*** ./src/app/pages/guest/guest.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWVzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "AS2p":
/*!*****************************************************!*\
  !*** ./src/app/pages/guest/guest-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GuestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageRoutingModule", function() { return GuestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest.page */ "jrKZ");




const routes = [
    {
        path: '',
        component: _guest_page__WEBPACK_IMPORTED_MODULE_3__["GuestPage"]
    }
];
let GuestPageRoutingModule = class GuestPageRoutingModule {
};
GuestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GuestPageRoutingModule);



/***/ }),

/***/ "UbqY":
/*!*********************************************!*\
  !*** ./src/app/pages/guest/guest.module.ts ***!
  \*********************************************/
/*! exports provided: GuestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageModule", function() { return GuestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _guest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guest-routing.module */ "AS2p");
/* harmony import */ var _guest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guest.page */ "jrKZ");







let GuestPageModule = class GuestPageModule {
};
GuestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _guest_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuestPageRoutingModule"]
        ],
        declarations: [_guest_page__WEBPACK_IMPORTED_MODULE_6__["GuestPage"]]
    })
], GuestPageModule);



/***/ }),

/***/ "jrKZ":
/*!*******************************************!*\
  !*** ./src/app/pages/guest/guest.page.ts ***!
  \*******************************************/
/*! exports provided: GuestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPage", function() { return GuestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_guest_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guest.page.html */ "xqZu");
/* harmony import */ var _guest_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest.page.scss */ "6ny+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");







let GuestPage = class GuestPage {
    constructor(authService, platform, route, router) {
        this.authService = authService;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.returnURL = 'home';
    }
    ngOnInit() {
        this.authService.afAuth.authState.subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (user) {
                this.router.navigate(['home']);
            }
        }));
        this.route.queryParams.subscribe((params) => {
            if (params) {
                this.returnURL = params['returnURL'] ? params['returnURL'] : 'home';
            }
        });
    }
    loginWithGoogle() {
        debugger;
        if (this.platform.is('cordova')) {
            this.authService.doNativeGoogleLogin(this.returnURL);
        }
        else {
            this.authService.loginWithGoogle(this.returnURL);
        }
    }
};
GuestPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GuestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guest',
        template: _raw_loader_guest_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guest_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GuestPage);



/***/ }),

/***/ "xqZu":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/guest/guest.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--padding-top: 100px;\">  \n  <ion-grid fixed>\n    <ion-row >\n      <ion-col size=\"12\" style=\"text-align: center;\">\n        <ion-icon name=\"qr-code\" style=\"font-size: 5em;\" button routerLink=\"/qr-scanner\"></ion-icon>  \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center;\">  \n        QRkod oku \n      </ion-col> \n    </ion-row>\n  </ion-grid>\n  \n  \n  \n  <ion-grid fixed style=\"margin-top: 100px;\"> \n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-button routerLink=\"/register\"   expand=\"full\" fill=\"clear\" shape=\"round\"> \n          <ion-icon slot=\"start\" name=\"person-add-outline\"></ion-icon>\n          Hesap oluştur  \n        </ion-button> \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">  \n        <ion-button routerLink=\"/login\" expand=\"full\" fill=\"clear\" shape=\"round\">  \n          <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n          Giriş \n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n  \n  <ion-button   color=\"danger\" fill=\"solid\" expand=\"full\" (click)=\"loginWithGoogle()\" >\n    <ion-icon name=\"logo-google\" slot=\"start\" style=\"color: white;\"></ion-icon>\n    Google ile girişi yap\n  </ion-button>\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-guest-guest-module-es2015.js.map