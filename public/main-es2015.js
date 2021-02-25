(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/alpaygunes/TellAll.app/src/main.ts */"zUnb");


/***/ }),

/***/ "0xJi":
/*!*********************************************!*\
  !*** ./src/app/services/channel.service.ts ***!
  \*********************************************/
/*! exports provided: ChannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelService", function() { return ChannelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "lGQG");






let ChannelService = class ChannelService {
    constructor(fs, httpClient, authService, messageService) {
        this.fs = fs;
        this.httpClient = httpClient;
        this.authService = authService;
        this.messageService = messageService;
    }
    getUserChannels() {
        var _a;
        if (!((_a = this.authService.USER) === null || _a === void 0 ? void 0 : _a.uid)) {
            window.location.href = "/home";
        }
        ;
        let uid = this.authService.USER.uid;
        return this.fs.collectionGroup('screts', ref => ref.where("uid", "==", uid));
    }
    saveChannel(channel, scret) {
        if (channel.id) {
            let id = channel.id;
            delete channel.id;
            this.fs.doc('channels' + '/' + id).update(channel).then(() => {
                this.getUserChannels();
            });
            return this.fs.doc('channels' + '/' + id).collection('screts').doc('scret_fields').update(scret);
        }
        else {
            delete channel.id;
            return this.fs.collection("channels").add(Object.assign({}, channel))
                .then(function (docRef) {
                scret.channelDoc = docRef;
                docRef.collection('screts').doc('scret_fields').set(Object.assign({}, scret));
            }.bind(this))
                .catch(function (error) {
                console.error("Kanal eklenirken bir hata oldu ", error.message);
            });
        }
    }
    deleteChannel(channel_id) {
        return this.fs.collection('channels').doc(channel_id).delete();
    }
    getChannelInfo(id) {
        return this.fs.collection('channels').doc(id);
    }
    removeChannelMessages(channel_id) {
        this.messageService.removeAllMessegeOfChannel(channel_id).then(() => {
            console.log("Mesajlar silindi");
        });
    }
    checkSubscriptionVerify(uid, channel_id) {
        return this.fs.collection('channels').doc(channel_id).collection('subscribers').doc(uid);
    }
    getSubscribers(channel_id) {
        return this.fs.collection('channels').doc(channel_id).collection('subscribers').ref;
    }
    getOrders(cid) {
        return this.fs.collection('channels').doc(cid).collection('orders');
    }
};
ChannelService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
ChannelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChannelService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD9bmzz6cMVy_7u2kApWekC_5NyT39f1Co",
        authDomain: "cepboard-6150e.firebaseapp.com",
        databaseURL: "https://cepboard-6150e.firebaseio.com",
        projectId: "cepboard-6150e",
        storageBucket: "cepboard-6150e.appspot.com",
        messagingSenderId: "237605832842",
        appId: "1:237605832842:web:e964ea44a76d08b9a80573",
        measurementId: "G-12BVSB3THD"
    },
    googleWebClientId: '237605832842-t4li56t4rdq2b71ob435q79hna2616eo.apps.googleusercontent.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");




let AuthGuardService = class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        //return true; // burayı kaldır aktif olması için
        if (!this.authService.USER) {
            this.router.navigate(["login"], {
                queryParams: {
                    returnURL: state.url
                }
            });
            console.error("YASAKLI ADRES");
            return false;
        }
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthGuardService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/url.service */ "jOSP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "uJRU");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/account.service */ "flj8");















let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authService, router, userService, appVersion, urlService, menu, accountService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.appVersion = appVersion;
        this.urlService = urlService;
        this.menu = menu;
        this.accountService = accountService;
        this.selectedIndex = 0;
        this.uid = null;
        this.isAnonymous = false;
        this.userLess = false;
        this.previousUrl = null;
        this.currentUrl = null;
        this.appPages = [
            {
                title: 'Anasayfa',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Aboneliklerim',
                url: '/my-ears',
                icon: 'thumbs-up'
            },
            {
                title: 'Kanallarım',
                url: '/my-channels',
                icon: 'megaphone'
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#ffffff');
            this.splashScreen.hide();
            if (this.platform.is('cordova')) {
                this.appVersion.getVersionNumber().then(v => {
                    this.versionNumber = v;
                });
            }
        }));
    }
    ngOnInit() {
        const path = window.location.pathname.split('/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
        this.getUser();
        this.setPreviousUrl();
    }
    setPreviousUrl() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"])).subscribe((event) => {
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.url;
            this.urlService.setPreviousUrl(this.previousUrl);
        });
    }
    getUser() {
        this.authService.afAuth.authState.subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (user) {
                this.menu.enable(true);
                this.authService.USER = user;
                this.user = user;
                this.uid = this.user.uid;
                this.isAnonymous = this.user.isAnonymous;
                this.userLess = false;
                this.getAccount();
            }
            else {
                this.menu.enable(false);
                this.user = null;
                this.uid = null;
                this.userLess = true;
            }
        }));
    }
    getAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = this.authService.USER.uid;
            this.accountService.getAccount(uid).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data) {
                    this.account = data;
                }
            }));
        });
    }
    goRoute(route) {
        this.router.navigate([route]);
    }
    logout() {
        this.menu.close();
        this.selectedIndex = 101;
        this.authService.logout();
        this.account = null;
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"] },
    { type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_9__["UrlService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\"  >\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n\n          <div *ngIf=\"user\">\n            <ion-item lines=\"none\" *ngIf=\"!account\">\n              <ion-avatar style=\"margin: auto;width: 30%;height: auto;\" *ngIf=\"user.photoURL\">\n                <img  src=\"{{user.photoURL}}\" >\n              </ion-avatar>\n              <span style=\"display: block;margin: auto;\" *ngIf=\"!user.photoURL\">\n                <ion-icon style=\"font-size: 64px;\"   name=\"person-circle\"></ion-icon>\n              </span>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"account\">\n              <ion-avatar style=\"margin: auto;width: 80px;height: 80px;\" *ngIf=\"account.photoURL\">\n                <img  src=\"{{account.photoURL}}\" >\n              </ion-avatar>\n              <span style=\"display: block;margin: auto;\" *ngIf=\"!account.photoURL\">\n                <ion-icon style=\"font-size: 64px;\"   name=\"person-circle\"></ion-icon>\n              </span>\n            </ion-item>\n            \n            <ion-item lines=\"none\" style=\"--padding-end: 0px;\" *ngIf=\"!userLess\">   \n                <ion-label *ngIf=\"user.displayName\" style=\"text-align: center\">{{user.displayName}}</ion-label> \n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"user.email\">\n              <ion-note style=\"margin: auto;margin-top: 0;--padding-end: 0px;\">{{user.email}}</ion-note>\n            </ion-item>\n          </div>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click) = \"goRoute(p.url)\"  lines = \"none\"   >\n              <ion-icon slot=\"start\" name=\"{{p.icon}}\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list>\n\n        <ion-list>\n            <ion-menu-toggle auto-hide=\"false\" *ngIf=\"(isAnonymous || userLess)\">\n              <ion-item (click) = \"goRoute('login')\"  lines = \"none\"   >\n                <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n                <ion-label>Giriş</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n\n            <ion-menu-toggle auto-hide=\"false\" *ngIf=\"uid && !isAnonymous\">\n              <ion-item (click) = \"logout()\"  lines = \"none\"   >\n                <ion-icon slot=\"start\" name=\"exit\"></ion-icon>\n                <ion-label>Çıkış</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n\n            <ion-menu-toggle auto-hide=\"false\" *ngIf=\"uid && !isAnonymous\">\n              <ion-item (click) = \"goRoute('account')\"  lines = \"none\"  >\n                <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n                <ion-label>Üyelik Bilgilerim</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"settings-outline\"></ion-icon>\n        <ion-badge slot=\"end\" color=\"light\" class=\"version\" >Version :{{versionNumber}}</ion-badge>\n      </ion-item>\n      \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    \n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _services_channel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/channel.service */ "0xJi");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/message.service */ "tZre");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "BLr9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/url.service */ "jOSP");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "uJRU");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");














//import { AuthService } from 'src/app/services/auth.service';








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
        ],
        providers: [
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__["GooglePlus"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__["SocialSharing"],
            _services_channel_service__WEBPACK_IMPORTED_MODULE_14__["ChannelService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"],
            _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__["QRScanner"],
            _services_url_service__WEBPACK_IMPORTED_MODULE_19__["UrlService"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__["AppVersion"],
            { provide: "rootURL", useValue: "https://cepboard.com" },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "flj8":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let AccountService = class AccountService {
    constructor(fs, rootURL, httpClient) {
        this.fs = fs;
        this.rootURL = rootURL;
        this.httpClient = httpClient;
    }
    isExistTag(tag) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let exist = true;
            return this.fs.collection('accounts').ref.where('tag', '==', tag).get().then(snapshot => {
                exist = snapshot.docs.length ? true : false;
                return exist;
            });
        });
    }
    getAccount(uid) {
        let a = this.fs.collection('accounts').doc(uid).ref.get();
        return a.then((acc) => {
            return Object.assign({}, acc.data());
        });
    }
    getAddresses(uid) {
        return this.fs.collection('accounts').doc(uid).collection('addresses');
    }
    saveAddress(uid, editedAddress) {
        if (!editedAddress.id) {
            editedAddress.id = this.fs.createId();
        }
        return this.fs.collection('accounts').doc(uid).collection('addresses').doc(editedAddress.id).set(Object.assign({}, editedAddress));
    }
    saveAccount(account) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            let options = {
                headers: headers
            };
            //rootURL olacak
            let url = this.rootURL + "/SaveAccount";
            return this.httpClient.post(url, account, options);
        });
    }
    deleteAdress(uid, editedAddress) {
        return this.fs.collection('accounts').doc(uid).collection('addresses').doc(editedAddress.id).delete();
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: URL, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ["rootURL",] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "jOSP":
/*!*****************************************!*\
  !*** ./src/app/services/url.service.ts ***!
  \*****************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let UrlService = class UrlService {
    constructor() {
        this.previousUrl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.previousUrl$ = this.previousUrl.asObservable();
    }
    setPreviousUrl(previousUrl) {
        this.previousUrl.next(previousUrl);
    }
};
UrlService.ctorParameters = () => [];
UrlService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UrlService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let AuthService = class AuthService {
    constructor(afAuth, googlePlus, loadingController, platform, router) {
        this.afAuth = afAuth;
        this.googlePlus = googlePlus;
        this.loadingController = loadingController;
        this.platform = platform;
        this.router = router;
        this.loader();
    }
    loader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
        });
    }
    anonymousLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let BU = this;
            return new Promise((res, rej) => {
                this.afAuth.signInAnonymously().then(() => {
                    this.afAuth.onAuthStateChanged(function (user) {
                        if (user) {
                            BU.USER = user;
                            res(user);
                        }
                    }).catch(function (error) {
                        res(null);
                    });
                }).catch(function (error) {
                    res(null);
                });
            });
        });
    }
    login(email, password, returnURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signInWithEmailAndPassword(email, password).then(data => {
                if (data) {
                    this.USER = data.user;
                    this.router.navigate(['home']);
                }
            });
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.afAuth.signOut().then(() => {
                this.USER = null;
                this.router.navigate(['guest']).then(() => {
                    //window.location.reload();
                });
            });
        });
    }
    register(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.createUserWithEmailAndPassword(email, password)
                .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.sendEmailVerification();
            })).catch((error) => {
                alert("Biçimsiz eposta formatı");
            });
        });
    }
    sendEmailVerification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let BU = this;
            return this.afAuth.currentUser.then(u => u.sendEmailVerification())
                .then(() => {
                alert("Doğrulama için eposta adresi gönderdik");
                BU.router.navigate(['/home']).then(() => {
                    //window.location.reload()
                });
            }).catch(() => {
                alert("Hata! Doğrulama için eposta gönderemedik");
            });
        });
    }
    loginWithGoogle(returnURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.present();
            let BU = this;
            yield this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider())
                .then(function (data) {
                BU.USER = data.user;
                BU.router.navigate([returnURL]).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    BU.loading.dismiss();
                }));
            })
                .catch(function (error) {
                alert(error.message);
            });
        });
    }
    doNativeGoogleLogin(returnURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.present();
            let BU = this;
            this.googlePlus.login({
                'scopes': '',
                'webClientId': src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].googleWebClientId,
                'offline': true,
            })
                .then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                BU.USER = user;
                yield this.loading.present();
                BU.router.navigate([returnURL]).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loading.dismiss();
                }));
                yield this.afAuth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(user.idToken));
            }), err => {
                console.log(err);
                if (!this.platform.is('cordova')) {
                    alert("doNativeGoogleLogin hata");
                }
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let UserService = class UserService {
    constructor(fs, toastController) {
        this.fs = fs;
        this.toastController = toastController;
        //user_ears:Channel[]=[];
        this.user_ears = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    subsicribeToChannel(USER, channel_id, password, confirmation_required) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user_to_channel = {
                uid: USER.uid,
                created_at: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp(),
                channelDoc: this.fs.collection('channels').doc(channel_id).ref,
                password: password,
                veryfied: confirmation_required ? false : true,
                displayName: USER.displayName,
                email: USER.email,
            };
            try {
                const r = yield this.fs.collection('channels')
                    .doc(channel_id)
                    .collection('subscribers').doc(USER.uid)
                    .set(Object.assign({}, user_to_channel));
                const toast = yield this.toastController.create({
                    color: 'dark',
                    message: confirmation_required ? 'Abonelik isteği gönderildi. Onay bekleniyor' : 'Abone oldunuz.',
                    duration: 2000
                });
                toast.present();
                return true;
            }
            catch (err) {
                const toast = yield this.toastController.create({
                    color: 'danger',
                    message: "Abonelik işlemi sırasında bir hata oldu !",
                    duration: 2000
                });
                toast.present();
                return false;
            }
        });
    }
    unsubscribeFromChannel(channel_id, subscribe_id) {
        return this.fs.collection('channels').doc(channel_id).collection('subscribers').doc(subscribe_id).delete();
    }
    checkChannelExistInUserEarsList(uid, channel_id) {
        return this.fs.collection('channels').doc(channel_id).collection('subscribers').doc(uid);
    }
    getUserEars(uid) {
        return this.fs.collectionGroup('subscribers', ref => ref.where("uid", "==", uid));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "lGQG");






let MessageService = class MessageService {
    constructor(fs, authService, storage) {
        this.fs = fs;
        this.authService = authService;
        this.storage = storage;
    }
    save(message, cid, doc_id) {
        return this.fs.collection('channels').doc(cid).collection('messages').doc(doc_id).set(Object.assign({}, message));
    }
    saveMenu(message, cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = message.id;
            delete message.id;
            let upload = yield this.uploadFiles(message, cid);
            if (!upload) {
                console.log("Resimler Gönderilemedi");
            }
            message = JSON.parse(JSON.stringify(message));
            if (id) {
                return this.fs.collection('channels')
                    .doc(cid)
                    .collection('messages')
                    .doc(id)
                    .update(Object.assign({}, message)).then(() => {
                    console.log("Menü Güncellendi");
                });
            }
            else {
                message.created_at = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp();
                return this.fs.collection('channels')
                    .doc(cid)
                    .collection('messages')
                    .add(Object.assign({}, message)).then(() => {
                    console.log("Yeni Menü Kaydedildi");
                });
            }
        });
    }
    saveBrochure(message, cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.uploadBroshureImages(message.brochure, cid);
            const id = message.id;
            delete message.id;
            message = JSON.parse(JSON.stringify(message));
            if (id) {
                return this.fs.collection('channels')
                    .doc(cid)
                    .collection('messages')
                    .doc(id)
                    .update(Object.assign({}, message)).then((res) => {
                    return res;
                });
            }
            else {
                message.created_at = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp();
                return this.fs.collection('channels')
                    .doc(cid)
                    .collection('messages')
                    .add(Object.assign({}, message)).then((res) => {
                    return res;
                });
            }
        });
    }
    saveFoodDrinkMenu(message, cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.uploadFoodDrinkMenuImages(message.food_drink_menu, cid);
            const id = message.id;
            delete message.id;
            message = JSON.parse(JSON.stringify(message));
            if (id) {
                return this.fs.collection('channels')
                    .doc(cid)
                    .collection('messages')
                    .doc(id)
                    .update(Object.assign({}, message)).then((res) => {
                    return res;
                });
            }
            else {
                message.created_at = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp();
                return this.fs.collection('channels')
                    .doc(cid)
                    .collection('messages')
                    .add(Object.assign({}, message)).then((res) => {
                    return res;
                });
            }
        });
    }
    uploadBroshureImages(broshure, cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let prms = [];
            broshure.categories.map((cat) => {
                cat.pages.map((page) => {
                    page.images.map((img) => {
                        if (!img.File)
                            return;
                        let prm = new Promise((res) => {
                            this.resizeImage(img.File).then((Blob) => {
                                let filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + img.id;
                                firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then((gsfile) => {
                                    gsfile.ref.getDownloadURL().then((url) => {
                                        img.File = null;
                                        img.base64data = null;
                                        img.url = url;
                                        res();
                                    });
                                });
                            });
                        });
                        prms.push(prm);
                    });
                });
            });
            return yield Promise.all(prms);
        });
    }
    uploadFoodDrinkMenuImages(foodDrinkMenu, cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let prms = [];
            foodDrinkMenu.categories.map((cat) => {
                cat.foods.map((page) => {
                    page.images.map((img) => {
                        if (!img.File)
                            return;
                        let prm = new Promise((res) => {
                            this.resizeImage(img.File).then((Blob) => {
                                let filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + img.id;
                                firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then((gsfile) => {
                                    gsfile.ref.getDownloadURL().then((url) => {
                                        img.File = null;
                                        img.base64data = null;
                                        img.url = url;
                                        res();
                                    });
                                });
                            });
                        });
                        prms.push(prm);
                    });
                });
            });
            return yield Promise.all(prms);
        });
    }
    sendFeedBack(feedback, cid, message_id) {
        let uid = (new Date()).getTime().toString();
        if (window.localStorage.getItem('anonim_uid')) {
            uid = window.localStorage.getItem('anonim_uid');
        }
        else {
            window.localStorage.setItem('anonim_uid', uid);
        }
        if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
            uid = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        }
        feedback.uid = uid;
        feedback = JSON.parse(JSON.stringify(feedback));
        return this.fs.collection('channels').doc(cid).collection('messages')
            .doc(message_id).collection('feedbacks').doc(uid).set(Object.assign({}, feedback));
    }
    deleteMessage(id, cid) {
        return this.fs.collection('channels')
            .doc(cid)
            .collection('messages')
            .doc(id).delete();
    }
    removeAllMessegeOfChannel(cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.fs.collection('channels').doc(cid).collection("messages").get().subscribe(m => {
                    m.forEach((a) => {
                        this.fs.collection('channels').doc(cid).collection("messages").doc(a.id).delete();
                    });
                    console.log("removeAllMessegeOfChannel aboneliği tetiklendi");
                    resolve(true);
                });
            }).catch((err) => {
                console.log("Mesajlar silinirken hata oldu : " + err);
            });
        });
    }
    uploadFiles(message, cid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let itemPrms = new Promise((res, rej) => {
                let itemFiles = [];
                Object.keys(message.menu['items']).forEach(function (i) {
                    if (message.menu['items'][i].logoFiles) {
                        itemFiles[i] = message.menu['items'][i].logoFiles;
                        message.menu['items'][i].logo = '';
                    }
                    delete message.menu['items'][i].logoFiles;
                });
                if (Object.keys(itemFiles).length) {
                    for (let i in itemFiles) {
                        this.resizeImage(itemFiles[i][0]).then((Blob) => {
                            let filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + i;
                            firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then(() => {
                                res();
                            });
                        });
                    }
                }
                else {
                    res();
                }
            }).catch(() => console.log("Categori resmi gönderilemedi"));
            let catPrms = new Promise((res, rej) => {
                let categoriFiles = [];
                Object.keys(message.menu['categories']).forEach(function (k) {
                    if (message.menu['categories'][k].logoFiles) {
                        categoriFiles[k] = message.menu['categories'][k].logoFiles;
                        message.menu['categories'][k].logo = '';
                    }
                    delete message.menu['categories'][k].logoFiles;
                });
                if (Object.keys(categoriFiles).length) {
                    for (let k in categoriFiles) {
                        this.resizeImage(categoriFiles[k][0]).then((Blob) => {
                            let filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + k;
                            firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then(() => {
                                res(true);
                            });
                        });
                    }
                }
                else {
                    res(false);
                }
            }).catch(() => console.log("İtem resmi gönderilemedi"));
            let all = new Promise((res, rej) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield catPrms.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield itemPrms.then(() => {
                        res(true);
                    }).catch(() => {
                        rej(false);
                    });
                })).catch(() => {
                    rej(false);
                });
            }));
            return yield all;
        });
    }
    resizeImage(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((res, rej) => {
                let resizedFile;
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (revent) => {
                    const img = new Image();
                    img.onload = function (oimg) {
                        let resizeCanvas = document.createElement("canvas");
                        var ctx = resizeCanvas.getContext("2d");
                        resizeCanvas.width = 512;
                        resizeCanvas.height = img.height * (512 / img.width);
                        ctx.drawImage(img, 0, 0, resizeCanvas.width, resizeCanvas.height);
                        resizeCanvas.toBlob(function (blob) {
                            res(blob);
                        }, 'image/jpeg', 0.95);
                    };
                    img.src = revent.target.result;
                };
                reader.onerror = error => {
                    console.log("File resize edilemedi " + error);
                    rej(error);
                };
            }).catch((e) => {
                console.log("File resize edilemedi " + e);
            });
        });
    }
    deleteFilesFromStorage(deleteFilesFromStorage, cid) {
        deleteFilesFromStorage.forEach(filesID => {
            let filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + filesID;
            firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).delete()
                .then(() => console.log("Belge Silindi"))
                .catch((err) => console.log("Belge silinemedi", err));
        });
    }
    getTextMessages(cid) {
        return this.fs.collection('channels').doc(cid)
            .collection('messages', ref => ref
            .where("type", "==", "text")
            .orderBy("created_at", "desc"));
    }
    getBrochureMessages(cid) {
        return this.fs.collection('channels').doc(cid)
            .collection('messages', ref => ref
            .where("type", "==", "brochure")
            .orderBy("created_at", "desc"));
    }
    getFoodDrinkMessages(cid) {
        return this.fs.collection('channels').doc(cid)
            .collection('messages', ref => ref
            .where("type", "==", "food_drink_menu")
            .orderBy("created_at", "desc"));
    }
    getUserFeedbackIfExist(cid, mid) {
        return this.fs.collection('channels').doc(cid).collection('messages').doc(mid).collection('feedbacks').doc(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid);
    }
    getAllMessages(cid) {
        return this.fs.collection('channels').doc(cid)
            .collection('messages');
    }
    getMenuMessage(cid) {
        return this.fs.collection('channels').doc(cid)
            .collection('messages', ref => ref
            .where("type", "==", "menu")
            .orderBy("created_at", "desc")
            .limit(1));
    }
    getMessageById(cid, mid) {
        return this.fs.collection('channels').doc(cid).collection('messages').doc(mid);
    }
    getFeedBackByUID(mid, cid) {
        let uid = (new Date()).getTime().toString();
        if (window.localStorage.getItem('anonim_uid')) {
            uid = window.localStorage.getItem('anonim_uid');
        }
        else {
            window.localStorage.setItem('anonim_uid', uid);
        }
        if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
            uid = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        }
        return this.fs.doc('/channels/' + cid + '/messages/' + mid + '/feedbacks/' + uid).ref.get();
    }
    getMessageStats(mid, cid) {
        return this.fs.doc('/channels/' + cid + '/messages/' + mid + '/feedbacks/stats');
    }
    getMessageReplyes(mid, cid, start_after_doc, limit) {
        if (start_after_doc) {
            return this.fs.collection('/channels/' + cid + '/messages/' + mid + '/feedbacks', ref => ref.startAfter(start_after_doc).limit(limit));
        }
        else {
            return this.fs.collection('/channels/' + cid + '/messages/' + mid + '/feedbacks', ref => ref.limit(limit));
        }
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");




const routes = [
    {
        path: '',
        redirectTo: 'guest',
        pathMatch: 'full'
    },
    {
        path: 'my-ears',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-my-ears-my-ears-module */ "pages-my-ears-my-ears-module").then(__webpack_require__.bind(null, /*! ./pages/my-ears/my-ears.module */ "jlO9")).then(m => m.MyEarsPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomePageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'my-channels',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-my-channels-my-channels-module */ "pages-my-channels-my-channels-module").then(__webpack_require__.bind(null, /*! ./pages/my-channels/my-channels.module */ "Fw1W")).then(m => m.MyChannelsPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'form-ear',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-form-ear-form-ear-module */ "pages-form-ear-form-ear-module").then(__webpack_require__.bind(null, /*! ./pages/form-ear/form-ear.module */ "bz6l")).then(m => m.FormEarPageModule),
    },
    {
        path: 'form-channel',
        loadChildren: () => Promise.all(/*! import() | pages-form-channel-form-channel-module */[__webpack_require__.e("default~pages-account-account-module~pages-form-channel-form-channel-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-channel-form-channel-module")]).then(__webpack_require__.bind(null, /*! ./pages/form-channel/form-channel.module */ "p1Rs")).then(m => m.FormChannelPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'form-channel/:id', loadChildren: () => Promise.all(/*! import() | pages-form-channel-form-channel-module */[__webpack_require__.e("default~pages-account-account-module~pages-form-channel-form-channel-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-channel-form-channel-module")]).then(__webpack_require__.bind(null, /*! ./pages/form-channel/form-channel.module */ "p1Rs")).then(m => m.FormChannelPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'add-message-text',
        loadChildren: () => Promise.all(/*! import() | pages-add-message-text-add-message-text-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-add-message-text-add-message-text-module")]).then(__webpack_require__.bind(null, /*! ./pages/add-message-text/add-message-text.module */ "/r3U")).then(m => m.AddMessageTextPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'add-message-text/:id',
        loadChildren: () => Promise.all(/*! import() | pages-add-message-text-add-message-text-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-add-message-text-add-message-text-module")]).then(__webpack_require__.bind(null, /*! ./pages/add-message-text/add-message-text.module */ "/r3U")).then(m => m.AddMessageTextPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'channel-messages/:id',
        loadChildren: () => Promise.all(/*! import() | pages-channel-messages-channel-messages-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-channel-messages-channel-messages-module")]).then(__webpack_require__.bind(null, /*! ./pages/channel-messages/channel-messages.module */ "LDEp")).then(m => m.ChannelMessagesPageModule),
    },
    {
        path: 'board-messages/:cid',
        loadChildren: () => Promise.all(/*! import() | pages-board-messages-board-messages-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-board-messages-board-messages-module")]).then(__webpack_require__.bind(null, /*! ./pages/board-messages/board-messages.module */ "rZqS")).then(m => m.BoardMessagesPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'board-messages/:cid/:mid',
        loadChildren: () => Promise.all(/*! import() | pages-board-messages-board-messages-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-board-messages-board-messages-module")]).then(__webpack_require__.bind(null, /*! ./pages/board-messages/board-messages.module */ "rZqS")).then(m => m.BoardMessagesPageModule)
    },
    {
        path: 'channel-details/:id',
        loadChildren: () => Promise.all(/*! import() | pages-channel-details-channel-details-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-channel-details-channel-details-module")]).then(__webpack_require__.bind(null, /*! ./pages/channel-details/channel-details.module */ "FTb4")).then(m => m.ChannelDetailsPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-login-login-module */ "auth-login-login-module").then(__webpack_require__.bind(null, /*! ./auth/login/login.module */ "lu3c")).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-register-register-module */ "auth-register-register-module").then(__webpack_require__.bind(null, /*! ./auth/register/register.module */ "UrDz")).then(m => m.RegisterPageModule),
    },
    {
        path: 'create-qr/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-create-qr-create-qr-module */ "pages-create-qr-create-qr-module").then(__webpack_require__.bind(null, /*! ./pages/create-qr/create-qr.module */ "iy5y")).then(m => m.CreateQrPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() | pages-account-account-module */[__webpack_require__.e("default~pages-account-account-module~pages-form-channel-form-channel-module"), __webpack_require__.e("default~pages-account-account-module~pages-cart-cart-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-account-account-module")]).then(__webpack_require__.bind(null, /*! ./pages/account/account.module */ "4+IK")).then(m => m.AccountPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'message-stats/:cid/:mid',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-message-stats-message-stats-module */ "pages-message-stats-message-stats-module").then(__webpack_require__.bind(null, /*! ./pages/message-stats/message-stats.module */ "DdGS")).then(m => m.MessageStatsPageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'menu-stats/:cid/:mid',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-menu-stats-menu-stats-module */ "pages-menu-stats-menu-stats-module").then(__webpack_require__.bind(null, /*! ./pages/menu-stats/menu-stats.module */ "jACn")).then(m => m.MenuStatsPageModule)
    },
    {
        path: 'edit-message-brochure/:cid',
        loadChildren: () => Promise.all(/*! import() | pages-edit-message-brochure-edit-message-brochure-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-brochure-edit-message-brochure-module")]).then(__webpack_require__.bind(null, /*! ./pages/edit-message-brochure/edit-message-brochure.module */ "A4jc")).then(m => m.EditMessageBrochurePageModule)
    },
    {
        path: 'edit-message-brochure/:cid/:mid',
        loadChildren: () => Promise.all(/*! import() | pages-edit-message-brochure-edit-message-brochure-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-brochure-edit-message-brochure-module")]).then(__webpack_require__.bind(null, /*! ./pages/edit-message-brochure/edit-message-brochure.module */ "A4jc")).then(m => m.EditMessageBrochurePageModule)
    },
    {
        path: 'brochure/:cid/:mid',
        loadChildren: () => Promise.all(/*! import() | viewer-brochure-brochure-module */[__webpack_require__.e("common"), __webpack_require__.e("viewer-brochure-brochure-module")]).then(__webpack_require__.bind(null, /*! ./viewer/brochure/brochure.module */ "lqkX")).then(m => m.BrochurePageModule)
    },
    {
        path: 'edit-message-food-drink-menu/:cid',
        loadChildren: () => Promise.all(/*! import() | pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module")]).then(__webpack_require__.bind(null, /*! ./pages/edit-message-food-drink-menu/edit-message-food-drink-menu.module */ "k3dg")).then(m => m.EditMessageFoodDrinkMenuPageModule)
    },
    {
        path: 'edit-message-food-drink-menu/:cid/:mid',
        loadChildren: () => Promise.all(/*! import() | pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module")]).then(__webpack_require__.bind(null, /*! ./pages/edit-message-food-drink-menu/edit-message-food-drink-menu.module */ "k3dg")).then(m => m.EditMessageFoodDrinkMenuPageModule)
    },
    {
        path: 'food-drink-menu/:cid/:mid',
        loadChildren: () => Promise.all(/*! import() | viewer-food-drink-menu-food-drink-menu-module */[__webpack_require__.e("common"), __webpack_require__.e("viewer-food-drink-menu-food-drink-menu-module")]).then(__webpack_require__.bind(null, /*! ./viewer/food-drink-menu/food-drink-menu.module */ "thdm")).then(m => m.FoodDrinkMenuPageModule)
    },
    {
        path: 'qr-scanner',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-qr-scanner-qr-scanner-module */ "pages-qr-scanner-qr-scanner-module").then(__webpack_require__.bind(null, /*! ./pages/qr-scanner/qr-scanner.module */ "3Vir")).then(m => m.QrScannerPageModule)
    },
    {
        path: 'text/:cid/:mid',
        loadChildren: () => Promise.all(/*! import() | viewer-text-text-module */[__webpack_require__.e("common"), __webpack_require__.e("viewer-text-text-module")]).then(__webpack_require__.bind(null, /*! ./viewer/text/text.module */ "ySKb")).then(m => m.TextPageModule)
    },
    {
        path: 'guest',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-guest-guest-module */ "pages-guest-guest-module").then(__webpack_require__.bind(null, /*! ./pages/guest/guest.module */ "UbqY")).then(m => m.GuestPageModule)
    },
    {
        path: 'subscribers/:cid',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-subscribers-subscribers-module */ "pages-subscribers-subscribers-module").then(__webpack_require__.bind(null, /*! ./pages/subscribers/subscribers.module */ "Pn0e")).then(m => m.SubscribersPageModule)
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() | pages-cart-cart-module */[__webpack_require__.e("default~pages-account-account-module~pages-cart-cart-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-cart-cart-module")]).then(__webpack_require__.bind(null, /*! ./pages/cart/cart.module */ "sFz8")).then(m => m.CartPageModule)
    },
    {
        path: 'orders/:cid',
        loadChildren: () => Promise.all(/*! import() | pages-orders-orders-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null, /*! ./pages/orders/orders.module */ "Xlj8")).then(m => m.OrdersPageModule)
    },
    {
        path: 'order-details',
        loadChildren: () => Promise.all(/*! import() | pages-order-details-order-details-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-order-details-order-details-module")]).then(__webpack_require__.bind(null, /*! ./pages/order-details/order-details.module */ "j2J9")).then(m => m.OrderDetailsPageModule)
    },
    {
        path: 'customer-orders',
        loadChildren: () => Promise.all(/*! import() | pages-customer-orders-customer-orders-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-customer-orders-customer-orders-module")]).then(__webpack_require__.bind(null, /*! ./pages/customer-orders/customer-orders.module */ "yvKD")).then(m => m.CustomerOrdersPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".version {\n  font-size: 12px;\n  font-weight: unset;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQU9BO0VBQ0UsMkVBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BOztFQUVFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSwyREFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxzREFBQTtBQVJGOztBQVdBO0VBQ0UsK0JBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxzQkFBQTtBQVJGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsK0JBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVdBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQVRGOztBQVlBO0VBQ0UsaUNBQUE7QUFURiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FscGF5Z3VuZXNcbi52ZXJzaW9ue1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcbn1cblxuXG5cblxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map