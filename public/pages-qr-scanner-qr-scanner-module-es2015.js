(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qr-scanner-qr-scanner-module"],{

/***/ "/xXi":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr-scanner/qr-scanner.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header   class=\"ion-no-border\">\n  <ion-toolbar> \n    <ion-title  >\n      QR Oku\n    </ion-title>\n    <ion-buttons slot=\"start\" (click)=\"back()\">\n      <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "3Vir":
/*!*******************************************************!*\
  !*** ./src/app/pages/qr-scanner/qr-scanner.module.ts ***!
  \*******************************************************/
/*! exports provided: QrScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrScannerPageModule", function() { return QrScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr-scanner-routing.module */ "P1wM");
/* harmony import */ var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-scanner.page */ "olSS");







let QrScannerPageModule = class QrScannerPageModule {
};
QrScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrScannerPageRoutingModule"]
        ],
        declarations: [_qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__["QrScannerPage"]]
    })
], QrScannerPageModule);



/***/ }),

/***/ "P1wM":
/*!***************************************************************!*\
  !*** ./src/app/pages/qr-scanner/qr-scanner-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: QrScannerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrScannerPageRoutingModule", function() { return QrScannerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-scanner.page */ "olSS");




const routes = [
    {
        path: '',
        component: _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__["QrScannerPage"]
    }
];
let QrScannerPageRoutingModule = class QrScannerPageRoutingModule {
};
QrScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QrScannerPageRoutingModule);



/***/ }),

/***/ "X0Xd":
/*!*******************************************************!*\
  !*** ./src/app/pages/qr-scanner/qr-scanner.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zY2FubmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "bkFD":
/*!********************************************!*\
  !*** ./src/app/services/qrscan.service.ts ***!
  \********************************************/
/*! exports provided: QrscanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrscanService", function() { return QrscanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "BLr9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let QrscanService = class QrscanService {
    constructor(qrScanner) {
        this.qrScanner = qrScanner;
        this.segments = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    qrScan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.qrScanner.prepare().then((status) => {
                if (status.authorized) {
                    this.qrScanner.show();
                    document.getElementsByTagName("body")[0].style.opacity = "0";
                }
                else if (status.denied) {
                    this.qrScanner.openSettings();
                }
            }).catch((e) => console.log('Error is', e));
            this.scanSub = this.qrScanner.scan().subscribe((text) => {
                document.getElementsByTagName("body")[0].style.opacity = "1";
                this.segments.next(text);
            });
        });
    }
    cancelQrScann() {
        this.scanSub.unsubscribe();
        this.qrScanner.destroy();
    }
};
QrscanService.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] }
];
QrscanService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QrscanService);



/***/ }),

/***/ "olSS":
/*!*****************************************************!*\
  !*** ./src/app/pages/qr-scanner/qr-scanner.page.ts ***!
  \*****************************************************/
/*! exports provided: QrScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrScannerPage", function() { return QrScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./qr-scanner.page.html */ "/xXi");
/* harmony import */ var _qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-scanner.page.scss */ "X0Xd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_services_qrscan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/qrscan.service */ "bkFD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");











let QrScannerPage = class QrScannerPage {
    constructor(location, alertController, qrscanservice, channelService, platform, loadingController, authService, router) {
        this.location = location;
        this.alertController = alertController;
        this.qrscanservice = qrscanservice;
        this.channelService = channelService;
        this.platform = platform;
        this.loadingController = loadingController;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        if (this.backBtnSub) {
            this.backBtnSub.unsubscribe();
        }
        this.backBtnSub = this.platform.backButton.subscribe(() => {
            document.getElementsByTagName("body")[0].style.opacity = "1";
            this.cancelQrScann();
        });
        this.openCamera();
    }
    openCamera() {
        this.cameraActive = true;
        this.qrscanservice.qrScan();
        if (this.abonelik) {
            this.abonelik.unsubscribe();
        }
        this.abonelik = this.qrscanservice.segments.subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = new URL(val);
            this.channel_id = new URLSearchParams(url.search).get('c');
            this.message_id = new URLSearchParams(url.search).get('m');
            this.cameraActive = false;
            this.qrscanservice.cancelQrScann();
            this.getChannelInfo();
        }));
    }
    cancelQrScann() {
        this.cameraActive = false;
        this.qrscanservice.cancelQrScann();
    }
    getChannelInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000,
            });
            yield loading.present();
            this.channelService.getChannelInfo(this.channel_id).get().subscribe((snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                    //window.location.href = '/channel-details/'+this.channel_id
                }
            }));
        });
    }
    // TODO: Kanal barkodu oluşturulken. mesajı olmayan kanlda barkod dözükmüyor doğal olarak. Mesaj barkodu gibi kanal barkoduda oluşmalı.
    showFlashMessage() {
        if (this.channel.announce_type == 'text') {
            if (this.message_id) {
                this.router.navigate(['/text/' + this.channel_id + '/' + this.message_id]);
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
    back() {
        this.location.back();
    }
};
QrScannerPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_qrscan_service__WEBPACK_IMPORTED_MODULE_7__["QrscanService"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__["ChannelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
QrScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr-scanner',
        template: _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QrScannerPage);



/***/ })

}]);
//# sourceMappingURL=pages-qr-scanner-qr-scanner-module-es2015.js.map