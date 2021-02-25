(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-stats-menu-stats-module"],{

/***/ "HlrC":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-stats/menu-stats-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuStatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStatsPageRoutingModule", function() { return MenuStatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_stats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-stats.page */ "Shv/");




const routes = [
    {
        path: '',
        component: _menu_stats_page__WEBPACK_IMPORTED_MODULE_3__["MenuStatsPage"]
    }
];
let MenuStatsPageRoutingModule = class MenuStatsPageRoutingModule {
};
MenuStatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuStatsPageRoutingModule);



/***/ }),

/***/ "L6Vh":
/*!************************************************!*\
  !*** ./src/app/services/menu-stats.service.ts ***!
  \************************************************/
/*! exports provided: MenuStatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStatsService", function() { return MenuStatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



let MenuStatsService = class MenuStatsService {
    constructor(fs) {
        this.fs = fs;
    }
    getStatsData(time, cid, mid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dateStart = new Date(time);
            return this.fs.collection('channels').doc(cid).collection('messages').doc(mid).collection('visitors').ref.where('created_at', '>', dateStart);
        });
    }
};
MenuStatsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MenuStatsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuStatsService);



/***/ }),

/***/ "Shv/":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-stats/menu-stats.page.ts ***!
  \*****************************************************/
/*! exports provided: MenuStatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStatsPage", function() { return MenuStatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_stats_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-stats.page.html */ "b/GS");
/* harmony import */ var _menu_stats_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-stats.page.scss */ "fCOf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_menu_stats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/menu-stats.service */ "L6Vh");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let MenuStatsPage = class MenuStatsPage {
    constructor(route, loadingController, location, menuStatsService) {
        this.route = route;
        this.loadingController = loadingController;
        this.location = location;
        this.menuStatsService = menuStatsService;
        this.stats_data = [];
        this.lastDay = 30;
        this.visitor_count = [];
        this.visitor_sigular_count = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cid = this.route.snapshot.paramMap.get('cid');
            this.mid = this.route.snapshot.paramMap.get('mid');
            this.serverTime = yield this.getServerTime();
            this.getVisitorsDatas();
        });
    }
    getServerTime() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let time = Date.now();
            yield firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('/.info/serverTimeOffset')
                .once('value')
                .then(function stv(data) {
                time = (data.val() + Date.now());
            }, function (err) {
                console.error("Server Time alınırken ", err.message);
            });
            return time;
        });
    }
    getVisitorsDatas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield loading.present();
            let serverTime = this.serverTime - (this.lastDay * 24 * 60 * 60 * 1000);
            this.menuStatsService.getStatsData(serverTime, this.cid, this.mid).then(((ref) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
                ref.get().then((snapshot) => {
                    this.stats_data = snapshot.docs.map((doc) => {
                        return Object.assign({}, doc.data());
                    });
                    this.visitorCount(30);
                    this.singularVisitorCount(30);
                    this.visitorCount(7);
                    this.singularVisitorCount(7);
                    this.visitorCount(1);
                    this.singularVisitorCount(1);
                    this.visitorCount(1 / 24);
                    this.singularVisitorCount(1 / 24);
                });
            })));
        });
    }
    visitorCount(day_count) {
        let strtTime = this.serverTime - (day_count * 24 * 60 * 60 * 1000);
        this.visitor_count[day_count] = 0;
        this.stats_data.map(doc => {
            if (doc.created_at.seconds > (strtTime / 1000)) {
                this.visitor_count[day_count]++;
            }
        });
        return this.visitor_count[day_count];
    }
    singularVisitorCount(day_count) {
        let strtTime = this.serverTime - (day_count * 24 * 60 * 60 * 1000);
        this.visitor_sigular_count = [];
        this.stats_data.map(doc => {
            if (doc.created_at.seconds > (strtTime / 1000)) {
                if (!this.visitor_sigular_count[doc.uid]) {
                    this.visitor_sigular_count[doc.uid] = 1;
                }
            }
        });
        return Object.keys(this.visitor_sigular_count).length;
    }
    back() {
        this.location.back();
    }
};
MenuStatsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_services_menu_stats_service__WEBPACK_IMPORTED_MODULE_5__["MenuStatsService"] }
];
MenuStatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-stats',
        template: _raw_loader_menu_stats_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_stats_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuStatsPage);



/***/ }),

/***/ "b/GS":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-stats/menu-stats.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-button  fill=\"clear\" size=\"small\"  (click)=\"back()\" >\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-button> \n      <ion-title>Menu İstatistikleri</ion-title>\n    </ion-tab-bar>\n    </ion-tabs>\n</ion-toolbar>\n \n \n\n<ion-content>\n  \n  <ion-card  >\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son 30 Gün</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(30)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(30)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son Yedi Gün</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(7)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(7)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son 24 Saat</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"today-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(1)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(1)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card> \n  \n  <ion-card>\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son Bir Saat</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(1/24)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(1/24)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card> \n\n</ion-content>\n");

/***/ }),

/***/ "fCOf":
/*!*******************************************************!*\
  !*** ./src/app/pages/menu-stats/menu-stats.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-card-content ion-badge{\n    font-size: 32px;\n}\n\nion-card{\n    box-shadow:none;\n    border:1px solid rgb(235, 230, 211);\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnUtc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJtZW51LXN0YXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tY2FyZC1jb250ZW50IGlvbi1iYWRnZXtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbmlvbi1jYXJke1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMzUsIDIzMCwgMjExKTtcbn1cbiovIl19 */");

/***/ }),

/***/ "jACn":
/*!*******************************************************!*\
  !*** ./src/app/pages/menu-stats/menu-stats.module.ts ***!
  \*******************************************************/
/*! exports provided: MenuStatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStatsPageModule", function() { return MenuStatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_stats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-stats-routing.module */ "HlrC");
/* harmony import */ var _menu_stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-stats.page */ "Shv/");







let MenuStatsPageModule = class MenuStatsPageModule {
};
MenuStatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_stats_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuStatsPageRoutingModule"]
        ],
        declarations: [_menu_stats_page__WEBPACK_IMPORTED_MODULE_6__["MenuStatsPage"]]
    })
], MenuStatsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-menu-stats-menu-stats-module-es2015.js.map