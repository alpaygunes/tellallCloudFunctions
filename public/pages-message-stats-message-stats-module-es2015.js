(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-message-stats-message-stats-module"],{

/***/ "54F2":
/*!***********************************************************!*\
  !*** ./src/app/pages/message-stats/message-stats.page.ts ***!
  \***********************************************************/
/*! exports provided: MessageStatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatsPage", function() { return MessageStatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_stats_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message-stats.page.html */ "iLx4");
/* harmony import */ var _message_stats_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-stats.page.scss */ "MFVL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








let MessageStatsPage = class MessageStatsPage {
    constructor(loadingController, location, messageService, route) {
        this.loadingController = loadingController;
        this.location = location;
        this.messageService = messageService;
        this.route = route;
        this.stats = [];
        this.replyes = [];
        this.start_after_doc = null;
        this.noNexReplyes = false;
        this.limit = 20;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.message = this.messageService.message;
            this.message.text = this.message.text.replace(/<[^>]*>/g, '');
            this.message.text = this.linkify(this.message.text);
            this.message_id = this.route.snapshot.paramMap.get('mid');
            this.channel_id = this.route.snapshot.paramMap.get('cid');
            this.getStats();
            if (this.message.call_back_id == 5) {
                this.getMessageReplyes();
            }
        });
    }
    linkify(text) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function (url) {
            return '<a href="' + url + '">' + url + '</a>';
        });
    }
    getStats() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield loading.present();
            this.messageService.getMessageStats(this.message_id, this.channel_id).snapshotChanges().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.stats = data.payload.data();
                yield loading.dismiss();
                if (this.message.call_back_id == 4 || this.message.call_back_id == 0) {
                    this.message.choices.forEach((chckt, i) => {
                        chckt['stats'] = this.stats['chckt_' + i];
                    });
                }
                else if (this.message.call_back_id == 2) {
                }
            }));
        });
    }
    getMessageReplyes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            loading.present();
            this.messageService.getMessageReplyes(this.message_id, this.channel_id, this.start_after_doc, this.limit).snapshotChanges().subscribe((data) => {
                loading.dismiss();
                if (data.length) {
                    data.map(e => {
                        if (e.payload.doc.id != 'stats') {
                            this.replyes.push({
                                id: e.payload.doc.id,
                                reply: e.payload.doc.data()['reply'],
                                username: e.payload.doc.data()['username'],
                                uid: e.payload.doc.data()['uid'],
                            });
                        }
                    });
                    this.start_after_doc = data[data.length - 1].payload.doc;
                    if (data.length < this.limit) {
                        this.noNexReplyes = true;
                    }
                }
            });
        });
    }
    back() {
        this.location.back();
    }
};
MessageStatsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
MessageStatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message-stats',
        template: _raw_loader_message_stats_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_stats_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessageStatsPage);



/***/ }),

/***/ "CClI":
/*!*********************************************************************!*\
  !*** ./src/app/pages/message-stats/message-stats-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MessageStatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatsPageRoutingModule", function() { return MessageStatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _message_stats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-stats.page */ "54F2");




const routes = [
    {
        path: '',
        component: _message_stats_page__WEBPACK_IMPORTED_MODULE_3__["MessageStatsPage"]
    }
];
let MessageStatsPageRoutingModule = class MessageStatsPageRoutingModule {
};
MessageStatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessageStatsPageRoutingModule);



/***/ }),

/***/ "DdGS":
/*!*************************************************************!*\
  !*** ./src/app/pages/message-stats/message-stats.module.ts ***!
  \*************************************************************/
/*! exports provided: MessageStatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatsPageModule", function() { return MessageStatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _message_stats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-stats-routing.module */ "CClI");
/* harmony import */ var _message_stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message-stats.page */ "54F2");







let MessageStatsPageModule = class MessageStatsPageModule {
};
MessageStatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _message_stats_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessageStatsPageRoutingModule"]
        ],
        declarations: [_message_stats_page__WEBPACK_IMPORTED_MODULE_6__["MessageStatsPage"]]
    })
], MessageStatsPageModule);



/***/ }),

/***/ "MFVL":
/*!*************************************************************!*\
  !*** ./src/app/pages/message-stats/message-stats.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-content{\n    --padding-start: 20px;\n    --padding-end: 20px;  \n    --background: url('/assets/bg.png'),beige;\n}\n\nion-card{\n    box-shadow:none;\n    border:1px solid rgb(235, 230, 211);\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lc3NhZ2Utc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6Im1lc3NhZ2Utc3RhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4OyAgXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcucG5nJyksYmVpZ2U7XG59XG5cbmlvbi1jYXJke1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMzUsIDIzMCwgMjExKTtcbn1cbiovIl19 */");

/***/ }),

/***/ "iLx4":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/message-stats/message-stats.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>  \n    <ion-title>İstatistikleri</ion-title>\n    <ion-buttons slot=\"start\" (click)=\"back()\">\n      <ion-icon name=\"chevron-back-outline\"  ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card  >\n    <ion-card-header>\n      <p color=\"medium\" [innerHTML]=\"message.text\"></p>\n    </ion-card-header>\n    <ion-card-content>\n      <section *ngIf=\"message.call_back_id==4 || message.call_back_id==0\">\n        <ion-item *ngFor=\"let choice of message.choices\" class=\"ion-text-wrap\">\n          <ion-icon  *ngIf=\"choice.correct\"  color=\"success\" name=\"add\"></ion-icon>\n          <ion-label color=\"medium\" class=\"ion-text-wrap\">{{choice.text}}</ion-label>\n          <ion-badge color=\"primary\">{{choice.stats}}</ion-badge>\n        </ion-item>\n      </section>\n\n      <section *ngIf=\"message.call_back_id==1\">\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"thumbs-up-outline\"></ion-icon>\n          <ion-label color=\"primary\">{{stats.Y}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"thumbs-down-outline\"></ion-icon> \n          <ion-label color=\"primary\">{{stats.N}}</ion-label>\n        </ion-item>   \n      </section>\n\n      <section *ngIf=\"message.call_back_id==2\">\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"happy-outline\"></ion-icon>\n          <ion-label color=\"primary\">{{stats.Y}}</ion-label>\n        </ion-item> \n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"ellipsis-horizontal-circle-outline\"></ion-icon>\n          <ion-label color=\"primary\">{{stats.Z}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"sad-outline\"></ion-icon> \n          <ion-label color=\"primary\">{{stats.N}}</ion-label>\n        </ion-item>\n      </section>\n\n      <section *ngIf=\"message.call_back_id==3\">\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"checkmark-circle-outline\"></ion-icon>\n          <ion-label color=\"primary\">{{stats.Y}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"close-circle-outline\"></ion-icon> \n          <ion-label color=\"primary\">{{stats.N}}</ion-label>\n        </ion-item>   \n      </section>\n    </ion-card-content>\n    <ion-item>\n      <ion-icon  slot=\"end\" name=\"eye-outline\" ></ion-icon>\n      <ion-badge slot=\"end\" color=\"light\"  >{{stats.doccount}}</ion-badge>  \n    </ion-item>\n  </ion-card>\n\n  <section *ngIf=\"message.call_back_id==5\">\n    <div *ngFor=\"let reply of replyes\" class=\"ion-text-wrap\">\n      <ion-card  *ngIf=\"reply.id.length > 10 \"> <!-- stats doc unu geçmek için-->\n        <ion-card-header> \n          <small >{{reply.username}}</small> \n        </ion-card-header>\n        <ion-card-content>\n          <ion-label color=\"medium\" >{{reply.reply}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <ion-button (click)=\"getMessageReplyes()\" *ngIf=\"!noNexReplyes\" expand=\"block\" color=\"medium\">\n      Sonraki Cevaplar\n    </ion-button>\n  </section>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-message-stats-message-stats-module-es2015.js.map