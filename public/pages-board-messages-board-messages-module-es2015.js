(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-board-messages-board-messages-module"],{

/***/ "8WZW":
/*!***********************************************************************!*\
  !*** ./src/app/pages/board-messages/board-messages-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BoardMessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardMessagesPageRoutingModule", function() { return BoardMessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _board_messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-messages.page */ "gDvz");




const routes = [
    {
        path: '',
        component: _board_messages_page__WEBPACK_IMPORTED_MODULE_3__["BoardMessagesPage"]
    }
];
let BoardMessagesPageRoutingModule = class BoardMessagesPageRoutingModule {
};
BoardMessagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BoardMessagesPageRoutingModule);



/***/ }),

/***/ "LZjv":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/board-messages/board-messages.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\"> \n  <ion-toolbar> \n    <ion-tabs>\n      <ion-tab-bar slot=\"top\"> \n        <ion-tab-button>\n          <ion-menu-button></ion-menu-button>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"router.navigate(['home'])\"> \n          <ion-icon name=\"home\"></ion-icon> \n        </ion-tab-button>    \n        <ion-tab-button   (click)=\"router.navigate(['my-ears'])\">\n          <ion-icon name=\"thumbs-up\"></ion-icon> \n        </ion-tab-button>        \n      </ion-tab-bar>    \n    </ion-tabs>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"logo-img\">\n    <img src=\"{{ board.logo}}\" /> \n    <ion-label class=\"logo-title\" >{{ board.channel_name }}</ion-label>\n  </div> \n\n  <div *ngFor=\"let message of messages\">\n    <!-- ///////////////////////////////// FOOD DRINK MENÜLER /////////////////////// -->\n    <ion-card  *ngIf=\"board?.announce_type == 'food_drink_menu'\"> \n      <ion-card-header>\n        <ion-card-subtitle >{{message.food_drink_menu.title}} </ion-card-subtitle>\n        <ion-card-title>{{message.food_drink_menu.subtitle}} </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-icon  *ngIf=\"board?.announce_type == 'food_drink_menu'\"  name=\"restaurant-outline\"  (click) = \"showMessage(message)\" ></ion-icon>\n      </ion-card-content>  \n    </ion-card>\n  \n    <!-- ///////////////////////////////// BROŞÜR MENÜLER /////////////////////// -->\n    <ion-card  *ngIf=\"board?.announce_type == 'brochure'\">\n      <ion-card-header>\n        <ion-card-subtitle>{{message.brochure.title}} </ion-card-subtitle>\n        <ion-card-title>{{message.brochure.subtitle}} </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-icon  class=\"bigger\" *ngIf=\"board?.announce_type == 'brochure'\" name=\"logo-firebase\" (click) = \"showMessage(message)\" ></ion-icon>\n      </ion-card-content>\n\n    </ion-card>\n\n    <!-- /////////////////////////////////  REQULAR TEXT MESAJLAR ///////////////////////////// -->\n    <ion-card *ngIf=\"board?.announce_type == 'text'\"  class=\"ag-reqular-message\" button (click) = \"showMessage(message)\">\n      <ion-card-header> \n        <ion-card-title style=\"font-size: 14px;\" color=\"medium\">{{message.created_at | unixTimeToDate: 'date'}}  {{message.created_at | unixTimeToDate: 'hm'}}</ion-card-title>\n        <ion-icon  [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\"></ion-icon> \n        <ion-badge [color]=\"message.readed ? 'success' : 'danger'\" *ngIf=\"!message.readed\">Okunmadı</ion-badge>\n      </ion-card-header>\n      <ion-card-content style=\"text-align: justify;\">  \n        <ion-label class=\"ion-text-wrap\">\n          {{message.text.substring(0,120)}}...\n        </ion-label>\n      </ion-card-content> \n    </ion-card>\n  </div>\n\n  <!-- NOT FOUND-->\n  <ion-card *ngIf=\"message_not_found\">  \n    <ion-card-header>\n      <ion-card-subtitle>Henüz mesaj yok.</ion-card-subtitle>\n      <ion-card-title>Güzel mesajlar gelecek...</ion-card-title>\n    </ion-card-header> \n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "TPZm":
/*!***************************************************************!*\
  !*** ./src/app/pages/board-messages/board-messages.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card ion-icon {\n  font-size: 100px;\n  color: brown;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nion-card {\n  background: #a52a2a08;\n}\n\nion-card-subtitle {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.ag-reqular-message {\n  margin-top: 30px;\n}\n\n.ag-reqular-message ion-icon {\n  font-size: 20px;\n  font-size: 20px;\n  position: relative;\n  float: right;\n  margin-top: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvYXJkLW1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUFpQixlQUFBO0VBQ2pCLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoiYm9hcmQtbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjb2xvcjogYnJvd247XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbn1cblxuaW9uLWNhcmR7XG4gICAgYmFja2dyb3VuZDojYTUyYTJhMDg7IFxufVxuXG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZy1yZXF1bGFyLW1lc3NhZ2V7IFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5hZy1yZXF1bGFyLW1lc3NhZ2UgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyMHB4OyBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "gDvz":
/*!*************************************************************!*\
  !*** ./src/app/pages/board-messages/board-messages.page.ts ***!
  \*************************************************************/
/*! exports provided: BoardMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardMessagesPage", function() { return BoardMessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_board_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./board-messages.page.html */ "LZjv");
/* harmony import */ var _board_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-messages.page.scss */ "TPZm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/message.model */ "Npzb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/objects/channel.model */ "ySeB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");












let BoardMessagesPage = class BoardMessagesPage {
    constructor(route, router, location, toastController, messageService, loadingController, authService, channelService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.toastController = toastController;
        this.messageService = messageService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.channelService = channelService;
        this.board = new src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_8__["Channel"]();
        this.message_not_found = false;
        this.show_message = false;
        this.types = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__["CallBackTypes"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield this.loading.present();
            this.board_id = this.route.snapshot.paramMap.get('cid');
            this.getBoardInfo().then((chnl) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                this.board = chnl;
                if (this.board.confirmation_required) {
                    const verify = yield this.checkSubscriptionVerify();
                    if (!verify) {
                        const toast = yield this.toastController.create({
                            color: 'danger',
                            message: "Aboneliğiniz henüz onay aşmasında",
                            duration: 4000
                        });
                        toast.present();
                        this.router.navigate(['my-ears']);
                        return;
                    }
                }
                if (this.board.announce_type == 'text') {
                    this.getTextMessages();
                    yield this.loading.dismiss();
                }
                else if (this.board.announce_type == 'brochure') {
                    this.getBrochureMessages();
                }
                else if (this.board.announce_type == 'food_drink_menu') {
                    this.getFoodDrinkMessages();
                }
            })).catch(() => {
                console.log("Kanal bilgisi alınamadı");
            });
        });
    }
    checkSubscriptionVerify() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res) => {
                const uid = this.authService.USER.uid;
                this.channelService.checkSubscriptionVerify(uid, this.board_id).ref.get().then((sbscrtn) => {
                    if (sbscrtn.data()) {
                        res(sbscrtn.data()['veryfied']);
                    }
                    else {
                        res(false);
                    }
                });
            });
        });
    }
    getBoardInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res) => {
                this.channelService.getChannelInfo(this.board_id).valueChanges().subscribe(data => {
                    res(data);
                });
            });
        });
    }
    getTextMessages() {
        this.messageService.getTextMessages(this.board_id).valueChanges({ idField: 'id' }).subscribe((msgDatas) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
            this.message_not_found = msgDatas.length ? false : true;
            if (msgDatas.length) {
                this.messages = msgDatas.map(msg => {
                    return Object.assign({ id: msg.id, readed: true }, msg);
                });
            }
            this.getUserFeedbackIfExist();
        }));
    }
    getUserFeedbackIfExist() {
        var _a;
        (_a = this.messages) === null || _a === void 0 ? void 0 : _a.forEach((m, i) => {
            if (m.type == 'text') {
                this.messageService.getUserFeedbackIfExist(this.board_id, m.id).ref.get().then((feedback) => {
                    if (feedback.data()) {
                        m['readed'] = true;
                    }
                    else {
                        m['readed'] = false;
                    }
                });
            }
            else {
                m['readed'] = true;
            }
        });
    }
    getBrochureMessages() {
        this.messageService.getBrochureMessages(this.board_id).ref.get().then(data => {
            this.loading.dismiss();
            console.log("getBrochureMessages ");
            this.messages = data.docs.map(doc => {
                return Object.assign({ id: doc.id }, doc.data());
            });
            this.getUserFeedbackIfExist();
        });
    }
    getFoodDrinkMessages() {
        this.messageService.getFoodDrinkMessages(this.board_id).ref.get().then(data => {
            this.loading.dismiss();
            console.log("getFoodDrinkMessages aboneliği tetiklendi");
            this.messages = data.docs.map(doc => {
                return Object.assign({ id: doc.id }, doc.data());
            });
            this.getUserFeedbackIfExist();
        });
    }
    back() {
        this.location.back();
    }
    showMessage(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (message.type == 'brochure') {
                this.router.navigate(['/brochure/' + this.board_id + '/' + message.id]);
            }
            else if (message.type == 'food_drink_menu') {
                this.router.navigate(['/food-drink-menu/' + this.board_id + '/' + message.id]);
            }
            else if (message.type == 'text') {
                let navigationExtras = {
                    state: {
                        message: message
                    }
                };
                this.router.navigate(['/text/' + this.board_id + '/' + message.id], navigationExtras);
            }
        });
    }
};
BoardMessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_7__["ChannelService"] }
];
BoardMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-board-messages',
        template: _raw_loader_board_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_board_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BoardMessagesPage);



/***/ }),

/***/ "rZqS":
/*!***************************************************************!*\
  !*** ./src/app/pages/board-messages/board-messages.module.ts ***!
  \***************************************************************/
/*! exports provided: BoardMessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardMessagesPageModule", function() { return BoardMessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _board_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board-messages-routing.module */ "8WZW");
/* harmony import */ var _board_messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board-messages.page */ "gDvz");
/* harmony import */ var src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/unix-time-to-date.pipe */ "SA8l");








let BoardMessagesPageModule = class BoardMessagesPageModule {
};
BoardMessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _board_messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["BoardMessagesPageRoutingModule"]
        ],
        declarations: [_board_messages_page__WEBPACK_IMPORTED_MODULE_6__["BoardMessagesPage"], src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__["UnixTimeToDatePipe"]],
    })
], BoardMessagesPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-board-messages-board-messages-module-es2015.js.map