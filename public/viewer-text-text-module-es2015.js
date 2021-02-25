(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewer-text-text-module"],{

/***/ "2CEm":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/text/text.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>  \n    <ion-buttons slot=\"start\" (click)=\"back()\">\n      <ion-icon name=\"chevron-back-outline\"  ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n<div class=\"message-box\">\n  <p [innerHtml]=\"message?.text\"></p>\n\n  <!--- =========================================  IMAGES  ========================================= -->\n  <div *ngFor=\"let src of message?.image_srcs\">\n    <img [src]=\"src\"> \n  </div>\n  <div *ngFor=\"let file of image_input_files\">\n    <img [src]=\"file.src\"> \n  </div>\n</div>\n\n<!--  =========================================    MEDIA FILES      =============================== -->\n<section *ngIf=\"message?.media_files\" >\n  <video id=\"myvideo\" controls  style=\"width: 100%;\"  [hidden]=\"!now_played_file\"></video>\n  <ion-list lines=\"none\">\n    <div *ngFor=\"let file of message.media_files ; let i = index\" >\n      <ion-item [class.active-media]=\"now_played_file == file\" [class.pasive-media]=\"now_played_file != file\" line=\"none\">\n        <ion-icon slot=\"start\" name=\"play-circle-outline\"   *ngIf=\"now_played_file != file\" (click)=\"playMedia(file)\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"pause-circle-outline\"  *ngIf=\"now_played_file == file\" (click)=\"stopMedia()\"></ion-icon> \n        <ion-label>\n          {{ file.name }}\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</section> \n\n<!--  =========================================    QUIZ & SURVEY     =============================== -->\n<section *ngIf=\"message?.call_back_id==4 || message?.call_back_id==0\">\n  <section id=\"ag-choices\">\n    <ion-item lines=\"none\" *ngFor=\"let choice of message?.choices let i = index\"> \n      <ion-label color=\"medium\"   class=\"choice_{{i}} ion-text-wrap\"> {{choice.text}} </ion-label> \n      <ion-checkbox slot=\"start\" [(ngModel)]='feedback.checked[i]'  color=\"secondary\"></ion-checkbox>\n    </ion-item>\n  </section> \n</section>\n</ion-content>\n\n<!--   =========================================    QUIZ   OK BUTTON       ngIf e && firs_respons eklersen ikinci cevap verilmez  -->\n<section *ngIf=\"message?.call_back_id==0\"> \n  <ion-button (click)=\"sendFeedBack()\" expand=\"block\" fill=\"solid\">\n    Gönder\n  </ion-button>\n</section>\n<!--   =========================================    SURVEY OK BUTTON       -->\n<section *ngIf=\"message?.call_back_id==4\"> \n  <ion-button (click)=\"sendFeedBack()\" expand=\"block\" fill=\"solid\">\n    Gönder\n  </ion-button>\n</section>\n\n<!--  =========================================        REPLY         =============================== -->\n<section *ngIf=\"message?.call_back_id==5\"  id=\"ag-editor-area\">\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-textarea rows=\"4\" [(ngModel)]=\"feedback.reply\"  maxlength=\"{{max_reply_length}}\" placeholder=\"Mesajınızı yazın...\" color=\"medium\">\n    </ion-textarea>\n  \n    <ion-chip outline  color=\"secondary\"   (click)=\"textReply()\">\n      <ion-icon name=\"send-outline\"></ion-icon> \n    </ion-chip>\n    <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\n      <ion-label>{{(max_reply_length - feedback.reply.length)}} / {{max_reply_length}}</ion-label>\n    </ion-chip>\n  </ion-toolbar>\n</section>\n\n<!--  =========================================      Yes No          =============================== -->\n<section *ngIf=\"message?.call_back_id==3\" >\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-chip  (click)=\"sendFeedBack(1)\" [color]=\"feedback?.f===1 ? 'primary' : 'default'\">\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <ion-label>Yes</ion-label>\n    </ion-chip> \n    <ion-chip  (click)=\"sendFeedBack(-1)\"  [color]=\"feedback?.f===-1 ? 'primary' : 'default'\">\n      <ion-icon name=\"close-circle-outline\"></ion-icon>\n      <ion-label>No</ion-label>\n    </ion-chip>   \n  </ion-toolbar>\n</section>\n\n<!--  =========================================      Like Unlike          =============================== -->\n<section *ngIf=\"message?.call_back_id==1\">\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-chip  (click)=\"sendFeedBack(1)\"  [color]=\"feedback?.f === 1 ? 'primary' : 'default'\">\n      <ion-icon name=\"thumbs-up-outline\"></ion-icon> \n    </ion-chip> \n    <ion-chip  (click)=\"sendFeedBack(-1)\"  [color]=\"feedback?.f===-1 ? 'primary' : 'default'\">\n      <ion-icon name=\"thumbs-down-outline\"></ion-icon> \n    </ion-chip> \n  </ion-toolbar>  \n</section>\n\n<!--  =========================================      :)  0   :(         =============================== -->\n\n<section *ngIf=\"message?.call_back_id==2\" >\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-chip  (click)=\"sendFeedBack(1)\"  [color]=\"feedback?.f=== 1 ? 'primary' : 'default'\">\n      <ion-icon name=\"happy-outline\"></ion-icon>\n    </ion-chip>\n    <ion-chip  (click)=\"sendFeedBack(0)\"  [color]=\"feedback?.f=== 0 ? 'primary' : 'default'\">\n      <ion-icon name=\"ellipsis-horizontal-circle-outline\"></ion-icon>\n    </ion-chip>\n    <ion-chip  (click)=\"sendFeedBack(-1)\"  [color]=\"feedback?.f===-1 ? 'primary' : 'default'\">\n      <ion-icon name=\"sad-outline\"></ion-icon> \n    </ion-chip> \n  </ion-toolbar>\n</section>");

/***/ }),

/***/ "OzQE":
/*!****************************************************!*\
  !*** ./src/app/viewer/text/text-routing.module.ts ***!
  \****************************************************/
/*! exports provided: TextPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPageRoutingModule", function() { return TextPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _text_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text.page */ "xON0");




const routes = [
    {
        path: '',
        component: _text_page__WEBPACK_IMPORTED_MODULE_3__["TextPage"]
    }
];
let TextPageRoutingModule = class TextPageRoutingModule {
};
TextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TextPageRoutingModule);



/***/ }),

/***/ "d5dw":
/*!********************************************!*\
  !*** ./src/app/viewer/text/text.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-badge{\n    margin-right: 10px;\n}\n\nion-content{\n    --padding-start: 20px;\n    --padding-end: 20px;\n    --padding-top: 20px;\n    --padding-bottom: 100px;\n    --background: url('/assets/bg.png'),beige;\n}\n\nion-chip{\n    height: 32px;\n}\nion-chip ion-icon{\n    font-size: 30px;\n}\n\n.message-box{\n    font-size: 16px;\n    display: block;\n    background-color: #f7f7f7;\n    padding: 20px;\n    border-radius: 5px; \n    margin-left: auto;\n    margin-right: auto;\n    text-align: justify; \n    box-shadow:none;\n    border:1px solid rgb(235, 230, 211);\n}\n\n#ag-editor-area ion-textarea{ \n    width: 100%;\n    margin: 0px;\n    padding: 10px;\n}\n\nion-item{\n    --bacground-color:#ffffff\n}\n\nsection{ \n    bottom: 0;\n    left: 0;\n    display: block;\n    width: 100%;    \n    background-color: #ffffff;\n}\n\n.media-list{ \n    background-color: transparent;\n}\n\n.pasive-media{\n    border: 1px solid #e9f1e9;\n    border-radius: 50px;\n    background-color: whitesmoke;\n}\n\n.active-media{\n    border: 1px solid #e9f1e9;\n    border-radius: 50px;\n    background-color:navajowhite\n}\n*/\n.message-box {\n  display: block;\n  background-color: #f7f7f7;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px;\n  margin-top: 0px;\n  text-align: justify;\n  box-shadow: none;\n  border: 1px solid #ebe6d3;\n}\n.message-box p {\n  font-size: 14px;\n  line-height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBQXFFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQURKIiwiZmlsZSI6InRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmlvbi1iYWRnZXtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcucG5nJyksYmVpZ2U7XG59XG5cbmlvbi1jaGlwe1xuICAgIGhlaWdodDogMzJweDtcbn1cbmlvbi1jaGlwIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm1lc3NhZ2UtYm94e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTsgXG4gICAgYm94LXNoYWRvdzpub25lO1xuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDIzNSwgMjMwLCAyMTEpO1xufVxuXG4jYWctZWRpdG9yLWFyZWEgaW9uLXRleHRhcmVheyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24taXRlbXtcbiAgICAtLWJhY2dyb3VuZC1jb2xvcjojZmZmZmZmXG59XG5cbnNlY3Rpb257IFxuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlOyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWVkaWEtbGlzdHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYXNpdmUtbWVkaWF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZjFlOTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hY3RpdmUtbWVkaWF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZjFlOTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6bmF2YWpvd2hpdGVcbn1cbiovXG5cblxuLm1lc3NhZ2UtYm94eyBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICBtYXJnaW46MTBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTsgXG4gICAgYm94LXNoYWRvdzpub25lO1xuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDIzNSwgMjMwLCAyMTEpO1xufVxuXG4ubWVzc2FnZS1ib3ggcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "xON0":
/*!******************************************!*\
  !*** ./src/app/viewer/text/text.page.ts ***!
  \******************************************/
/*! exports provided: TextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPage", function() { return TextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_text_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./text.page.html */ "2CEm");
/* harmony import */ var _text_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text.page.scss */ "d5dw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/message.model */ "Npzb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/url.service */ "jOSP");











let TextPage = class TextPage {
    constructor(navCtrl, toastController, loadingController, messageService, router, location, urlService, platform, route) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.messageService = messageService;
        this.router = router;
        this.location = location;
        this.urlService = urlService;
        this.platform = platform;
        this.route = route;
        this.feedback = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__["FeedBack"]();
        this.firs_respons = true;
        this.image_input_files = [];
        this.media_input_files = [];
        this.previousUrl = '';
        this.max_reply_length = 300;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.message = this.router.getCurrentNavigation().extras.state.message;
                this.message.text = this.message.text.replace(/<[^>]*>/g, '');
                this.message.text = this.linkify(this.message.text);
                this.image_input_files = this.router.getCurrentNavigation().extras.state.image_input_files;
                this.media_input_files = this.router.getCurrentNavigation().extras.state.media_input_files;
            }
        });
    }
    ionViewWillEnter() {
        /*this.backBtnSub = this.platform.backButton.subscribe(() => {
          window.location.href ="/home"
          return false;
        });*/
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.urlService.previousUrl$.subscribe((previousUrl) => {
                this.previousUrl = previousUrl;
            });
            this.cid = this.route.snapshot.paramMap.get('cid');
            this.mid = this.route.snapshot.paramMap.get('mid');
            if (!this.message) {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    duration: 5000,
                });
                yield loading.present();
                this.messageService.getMessageById(this.cid, this.mid).get().subscribe((snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.message = snapshot.data();
                    this.message.text = this.message.text.replace(/<[^>]*>/g, '');
                    this.message.text = this.linkify(this.message.text);
                    yield loading.dismiss();
                }));
            }
            this.getFeedBack();
        });
    }
    linkify(text) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function (url) {
            return '<a href="' + url + '">' + url + '</a>';
        });
    }
    getFeedBack() {
        this.messageService.getFeedBackByUID(this.mid, this.cid).then(snapshot => {
            if (snapshot.data() !== undefined) {
                this.feedback = snapshot.data();
                this.firs_respons = false;
            }
            else {
                let feedback = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_5__["FeedBack"]();
                if (this.message.call_back_id == 4 || this.message.call_back_id == 0) {
                    this.message.choices.forEach((v, i) => {
                        feedback.checked[i] = false;
                    });
                }
                this.messageService.sendFeedBack(feedback, this.cid, this.mid);
            }
        });
    }
    textReply() {
        this.messageService.sendFeedBack(this.feedback, this.cid, this.mid).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.message.call_back_id == 5) {
                this.feedback.reply = '';
            }
            const toast = yield this.toastController.create({
                color: 'dark',
                message: 'Cevabınız gönderildi, dilerseniz düzenleyebilirsiniz.',
                duration: 2000
            });
            toast.present();
        }));
    }
    sendFeedBack(f = null) {
        let respose_exist = false;
        this.feedback.f = f;
        if (this.message.call_back_id == 4 || this.message.call_back_id == 0) {
            this.message.choices.forEach((v, i) => {
                if (this.feedback.checked[i] == null) {
                    this.feedback.checked[i] = false;
                }
                if (v['correct']) {
                    document.getElementsByClassName('choice_' + i)[0].parentElement.setAttribute('color', 'success');
                }
            });
        }
        if (this.message.call_back_id == 0) {
            this.feedback.checked.forEach((v, i) => {
                if (this.feedback.checked[i] == true) {
                    respose_exist = true;
                }
            });
        }
        this.messageService.sendFeedBack(this.feedback, this.cid, this.mid).then(() => {
            if (this.message.call_back_id == 0) {
                this.firs_respons = false;
            }
            if (this.message.call_back_id == 4 || this.message.call_back_id == 0) {
                this.location.back();
            }
        });
    }
    back() {
        this.location.back();
    }
    playMedia(file) {
        this.now_played_file = file;
        this.video = document.getElementById('myvideo');
        this.video.setAttribute('src', this.now_played_file.url);
        this.video.play();
    }
    stopMedia() {
        this.video.pause();
        this.video.currentTime = 0;
        this.now_played_file = null;
    }
    ngOnDestroy() {
    }
};
TextPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_9__["UrlService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
TextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-text',
        template: _raw_loader_text_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TextPage);



/***/ }),

/***/ "ySKb":
/*!********************************************!*\
  !*** ./src/app/viewer/text/text.module.ts ***!
  \********************************************/
/*! exports provided: TextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPageModule", function() { return TextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _text_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-routing.module */ "OzQE");
/* harmony import */ var _text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text.page */ "xON0");







let TextPageModule = class TextPageModule {
};
TextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _text_routing_module__WEBPACK_IMPORTED_MODULE_5__["TextPageRoutingModule"]
        ],
        declarations: [_text_page__WEBPACK_IMPORTED_MODULE_6__["TextPage"]]
    })
], TextPageModule);



/***/ })

}]);
//# sourceMappingURL=viewer-text-text-module-es2015.js.map