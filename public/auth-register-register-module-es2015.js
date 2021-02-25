(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "9WYv":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-buttons>\n      <ion-title>Yeni Hesap</ion-title>\n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n\n<ion-content> \n  <ion-icon  style=\"font-size: 50px;display: block;margin-left: auto;margin-right: auto;margin-top: 50px;\" name=\"person-add-outline\"></ion-icon> \n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label color=\"medium\">Eposta</ion-label>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\"   [(ngModel)]=\"email\" ></ion-input>\n        <small *ngIf=\"email_error\">{{email_error}}</small>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label color=\"medium\">Password</ion-label>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"password\"  [(ngModel)]=\"password0\"  ></ion-input>\n        <small *ngIf=\"pass_error\">{{pass_error}}</small>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label color=\"medium\">Re Password</ion-label>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input type=\"password\"    [(ngModel)]=\"password1\" ></ion-input>\n        <small *ngIf=\"repass_error\" >{{repass_error}}</small>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n\n  <ion-button (click)=\"register()\" color=\"secondary\" expand=\"full\" fill=\"clear\">\n    Tamam\n  </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "Ro0S":
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "yhyc");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UrDz":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "Ro0S");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "yhyc");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "r/uw":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQUNEIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxse1xuIGNvbG9yOiByZWQ7XG4gZm9udC1zdHlsZTppdGFsaWMgOyAgIFxufSJdfQ== */");

/***/ }),

/***/ "yhyc":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "9WYv");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "r/uw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "uJRU");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








let RegisterPage = class RegisterPage {
    constructor(authService, location, platform, appVersion) {
        this.authService = authService;
        this.location = location;
        this.platform = platform;
        this.appVersion = appVersion;
        this.email = '';
        this.password0 = '';
        this.password1 = '';
        this.appName = 'appName';
        this.email_error = '';
        this.pass_error = '';
        this.repass_error = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.platform.is('cordova')) {
                this.appName = yield this.appVersion.getAppName();
            }
            else {
                this.appName = 'appName';
            }
        });
    }
    register() {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regexp.test(this.email)) {
            this.email_error = "";
        }
        else {
            this.email_error = "Eposta adresi uygunsuz biçimde";
        }
        if (this.password0.length < 8) {
            this.pass_error = "Parola en az 8 karakter olmalı";
        }
        else {
            this.pass_error = "";
        }
        if ((this.password0 == this.password1)) {
            this.repass_error = "";
        }
        else {
            this.repass_error = "Parolo eşleşmiyor";
        }
        if (this.repass_error == '' && this.pass_error == '' && this.email_error == '') {
            this.authService.register(this.email, this.password0).then((a) => {
                window.location.href = "home";
            });
        }
    }
    back() {
        this.location.back();
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_4__["AppVersion"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module-es2015.js.map