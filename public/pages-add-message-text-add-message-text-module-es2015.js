(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-message-text-add-message-text-module"],{

/***/ "/r3U":
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-message-text/add-message-text.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddMessageTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessageTextPageModule", function() { return AddMessageTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_message_text_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-message-text-routing.module */ "5lie");
/* harmony import */ var _add_message_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-message-text.page */ "3K7r");
/* harmony import */ var src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/unix-time-to-date.pipe */ "SA8l");








let AddMessageTextPageModule = class AddMessageTextPageModule {
};
AddMessageTextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_message_text_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddMessageTextPageRoutingModule"],
        ],
        declarations: [_add_message_text_page__WEBPACK_IMPORTED_MODULE_6__["AddMessageTextPage"], src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__["UnixTimeToDatePipe"]],
        providers: [
            { provide: "ag_subscribers", useValue: [] },
        ]
    })
], AddMessageTextPageModule);



/***/ }),

/***/ "3K7r":
/*!*****************************************************************!*\
  !*** ./src/app/pages/add-message-text/add-message-text.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddMessageTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessageTextPage", function() { return AddMessageTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_message_text_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-message-text.page.html */ "veS4");
/* harmony import */ var _add_message_text_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-message-text.page.scss */ "4kXb");
/* harmony import */ var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/objects/message.model */ "Npzb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/file.service */ "cpn4");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");













let AddMessageTextPage = class AddMessageTextPage {
    constructor(route, modalController, actionSheetController, location, alertController, authService, fileService, ag_subscribers, loadingController, router, messageService) {
        this.route = route;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.location = location;
        this.alertController = alertController;
        this.authService = authService;
        this.fileService = fileService;
        this.ag_subscribers = ag_subscribers;
        this.loadingController = loadingController;
        this.router = router;
        this.messageService = messageService;
        this.channel_id = '';
        this.message = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]();
        this.image_input_files = [];
        this.media_input_files = [];
        this.show_call_back_options = false;
        this.message_length = 500;
        this.types = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["CallBackTypes"]();
        this.feedback = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["FeedBack"]();
    }
    ngOnInit() {
        let BU = this;
        this.channel_id = this.route.snapshot.paramMap.get('id');
        if (this.ag_subscribers[this.channel_id]) {
            this.ag_subscribers[this.channel_id].unsubscribe();
        }
        //this.getMessages() 
    }
    setCallBackTypes(type_id) {
        this.message.call_back_id = type_id;
        //this.showCallBackOptions();
        if (this.message.call_back_id == 0 || this.message.call_back_id == 4) {
            setTimeout(() => {
                this.content.scrollToBottom(this.content.el.clientHeight);
            }, 500);
        }
    }
    addChoice() {
        const choice = { text: '', correct: false };
        this.message.choices.push(choice);
    }
    removeChoce(i) {
        this.message.choices.splice(i, 1);
    }
    setCorrect(i) {
        this.message.choices[i]['correct'] = !this.message.choices[i]['correct'];
    }
    addImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let BU = this;
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 10000
            });
            let fileEl;
            fileEl = document.createElement('input');
            fileEl.type = "file";
            fileEl.setAttribute("multiple", "true");
            fileEl.setAttribute("accept", "image/*");
            fileEl.addEventListener('change', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.present();
                let files = event.target.files;
                for (let i in files) {
                    let a = new Promise((res, rej) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (files[i].size) {
                            if (Number(i) >= files.length - 1) {
                                yield loading.dismiss();
                            }
                            const reader = new FileReader();
                            reader.readAsDataURL(files[i]);
                            reader.onload = (revent) => {
                                BU.image_input_files.push(files[i]);
                                res(revent.target.result);
                            };
                            reader.onerror = error => {
                                rej(error);
                            };
                        }
                    }));
                    a.then((result) => {
                        files[i]['src'] = result;
                    }).catch((error) => {
                        console.error("Hata resim işlenemedi", error);
                    });
                }
                setTimeout(() => {
                    this.content.scrollToBottom(this.content.el.clientHeight);
                }, 500);
            }));
            fileEl.click();
        });
    }
    addMedia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mediaFileEl;
            mediaFileEl = document.createElement('input');
            mediaFileEl.type = "file";
            mediaFileEl.setAttribute("multiple", "true");
            mediaFileEl.setAttribute("accept", "audio/*,video/*");
            mediaFileEl.addEventListener('change', (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let files = event.target.files;
                for (let i in Object.keys(files)) {
                    if (files[i].size < 20000000) {
                        this.media_input_files.push(files[i]);
                        let totalsize = 0;
                        this.media_input_files.map(file => {
                            totalsize += file.size;
                        });
                        if (totalsize > 40000000) {
                            this.media_input_files.pop();
                            const alert = yield this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Dikkat !',
                                message: 'Toplam dosya boyutu limiti aşıldı.(Max 40 MB)',
                                buttons: [{
                                        text: 'Okay',
                                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        })
                                    }
                                ]
                            });
                            yield alert.present();
                            break;
                        }
                    }
                    else {
                        const alert = yield this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Dikkat !',
                            message: 'Dosya boyutu enfazla 20 MB olabilir. ',
                            buttons: [{
                                    text: 'Okay',
                                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    })
                                }
                            ]
                        });
                        yield alert.present();
                    }
                }
                setTimeout(() => {
                    this.content.scrollToBottom(this.content.el.clientHeight);
                }, 500);
            }));
            mediaFileEl.click();
        });
    }
    removeMediaFile(media) {
        this.media_input_files = this.media_input_files.filter(f => {
            if (f !== media) {
                return f;
            }
        });
        if (this.now_played_media == media) {
            this.video.pause();
            this.video.currentTime = 0;
            this.now_played_media = null;
        }
    }
    deleteImage(i) {
        this.image_input_files.splice(i, 1);
    }
    preview() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message = this.message;
            let navigationExtras = {
                state: {
                    message: message,
                    feedback: this.feedback,
                    image_input_files: this.image_input_files,
                }
            };
            this.router.navigate(['/text/' + this.channel_id + '/' + message.id], navigationExtras);
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.message.call_back_id === 0) {
                let corret_is_set = false;
                this.message.choices.forEach((v, i) => {
                    if (v['correct']) {
                        corret_is_set = true;
                    }
                });
                if (!corret_is_set) {
                    alert("En az bir doğru seçenek olmalı");
                    return;
                }
            }
            this.message.uid = this.authService.USER.uid;
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 100000
            });
            yield loading.present();
            let doc_id = this.messageService.fs.createId();
            this.message.image_srcs = yield this.uploadImages(doc_id);
            doc_id = this.messageService.fs.createId();
            this.message.media_files = yield this.uploadMedia(doc_id);
            this.message = JSON.parse(JSON.stringify(this.message));
            this.message.created_at = firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp();
            this.messageService.save(this.message, this.channel_id, doc_id).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
                this.router.navigate(['channel-messages/' + this.channel_id]);
                this.message = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]();
            }));
        });
    }
    uploadImages(doc_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let srcs = [];
            const images = this.image_input_files;
            let blob;
            for (let i = 0; i < images.length; i++) {
                let image = images[i];
                blob = yield this.fileService.resizeImage(image, 512, 512, .8);
                let a = new Promise((res, rej) => {
                    let filePath = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/' + this.channel_id + '/' + doc_id + '_' + i;
                    firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref(filePath).put(blob).then((upload) => {
                        upload.ref.getDownloadURL().then((url) => {
                            res(url);
                        }).catch((err) => {
                            console.log("getLogo : Resim storage de bulunamadı", err.messages);
                            rej(err.messages);
                        });
                    });
                });
                srcs.push(yield a);
            }
            return srcs;
        });
    }
    uploadMedia(doc_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let srcs = [];
            const files = this.media_input_files;
            for (let i = 0; i < files.length; i++) {
                let a = new Promise((res, rej) => {
                    let file = files[i];
                    let progres_bar = document.getElementById('file_' + i);
                    progres_bar.style.display = "block";
                    let filePath = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/' + this.channel_id + '/' + doc_id + '_' + i;
                    firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref(filePath).put(file).then((upload) => {
                        progres_bar.style.display = "none";
                        upload.ref.getDownloadURL().then((url) => {
                            let file_data = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["MediaFile"]();
                            file_data.name = file.name;
                            file_data.url = url;
                            file_data.type = file.type;
                            res(file_data);
                        }).catch((err) => {
                            console.log("uploadMedia : mediya gönderilirken hata", err.messages);
                            rej(err.messages);
                        });
                    });
                });
                srcs.push(yield a);
            }
            return srcs;
        });
    }
    playMedia(media) {
        var url = URL.createObjectURL(media);
        this.now_played_media = media;
        this.video = document.getElementById('myvideo');
        this.video.setAttribute('src', url);
        this.video.play();
    }
    stopMedia() {
        this.video.pause();
        this.video.currentTime = 0;
        this.now_played_media = null;
    }
    back() {
        this.location.back();
    }
    showCallBackOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.show_call_back_options=!this.show_call_back_options
            const actionSheet = yield this.actionSheetController.create({
                header: 'Geri Bildirim Türü Seçin',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Geri bildirim olmasın',
                        icon: 'assets/icon/' + this.types.getIconByID(null),
                        handler: () => {
                            this.setCallBackTypes(null);
                        }
                    }, {
                        text: this.types.getNameByID(3),
                        icon: 'assets/icon/' + this.types.getIconByID(3),
                        handler: () => {
                            this.setCallBackTypes(3);
                        }
                    }, {
                        text: this.types.getNameByID(1),
                        icon: 'assets/icon/' + this.types.getIconByID(1),
                        handler: () => {
                            this.setCallBackTypes(1);
                        }
                    }, {
                        text: this.types.getNameByID(2),
                        icon: 'assets/icon/' + this.types.getIconByID(2),
                        handler: () => {
                            this.setCallBackTypes(2);
                        }
                    }, {
                        text: this.types.getNameByID(0),
                        icon: 'assets/icon/' + this.types.getIconByID(0),
                        handler: () => {
                            this.setCallBackTypes(0);
                        }
                    }, {
                        text: this.types.getNameByID(4),
                        icon: 'assets/icon/' + this.types.getIconByID(4),
                        handler: () => {
                            this.setCallBackTypes(4);
                        }
                    }, {
                        text: this.types.getNameByID(5),
                        icon: 'assets/icon/' + this.types.getIconByID(5),
                        handler: () => {
                            this.setCallBackTypes(5);
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
AddMessageTextPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: ["ag_subscribers",] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
];
AddMessageTextPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['content',] }]
};
AddMessageTextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-message-text',
        template: _raw_loader_add_message_text_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_message_text_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddMessageTextPage);



/***/ }),

/***/ "4kXb":
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-message-text/add-message-text.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ag-choices .ag-correct {\n  font-size: 20px;\n  color: green;\n  font-weight: bold;\n  -webkit-margin-end: 2px;\n          margin-inline-end: 2px;\n}\n\nion-chip ion-icon {\n  margin-inline: unset;\n}\n\n/* The animation code */\n\n@-webkit-keyframes example {\n  from {\n    top: -50px;\n  }\n  to {\n    top: 0;\n  }\n}\n\n@keyframes example {\n  from {\n    top: -50px;\n  }\n  to {\n    top: 0;\n  }\n}\n\n/* The element to apply the animation to */\n\n.call-back-type-icons ion-chip {\n  position: absolute;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1tZXNzYWdlLXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0FBQUY7O0FBSUEsdUJBQUE7O0FBQ0E7RUFDSTtJQUFNLFVBQUE7RUFBUjtFQUNFO0lBQUksTUFBQTtFQUVOO0FBQ0Y7O0FBTEE7RUFDSTtJQUFNLFVBQUE7RUFBUjtFQUNFO0lBQUksTUFBQTtFQUVOO0FBQ0Y7O0FBQUUsMENBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FBRUoiLCJmaWxlIjoiYWRkLW1lc3NhZ2UtdGV4dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNhZy1jaG9pY2VzIC5hZy1jb3JyZWN0e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBncmVlbjsgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4taW5saW5lLWVuZDoycHg7XG59XG5cbmlvbi1jaGlwIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZTp1bnNldDtcbn1cblxuXG4vKiBUaGUgYW5pbWF0aW9uIGNvZGUgKi9cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gICAgZnJvbSB7dG9wOiAtNTBweDt9XG4gICAgdG8ge3RvcDogMH1cbiAgfVxuICBcbiAgLyogVGhlIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGFuaW1hdGlvbiB0byAqL1xuICAuY2FsbC1iYWNrLXR5cGUtaWNvbnMgaW9uLWNoaXAgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjJzO1xuICB9Il19 */");

/***/ }),

/***/ "5lie":
/*!***************************************************************************!*\
  !*** ./src/app/pages/add-message-text/add-message-text-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddMessageTextPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessageTextPageRoutingModule", function() { return AddMessageTextPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_message_text_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-message-text.page */ "3K7r");




const routes = [
    {
        path: '',
        component: _add_message_text_page__WEBPACK_IMPORTED_MODULE_3__["AddMessageTextPage"]
    }
];
let AddMessageTextPageRoutingModule = class AddMessageTextPageRoutingModule {
};
AddMessageTextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddMessageTextPageRoutingModule);



/***/ }),

/***/ "veS4":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-message-text/add-message-text.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-buttons>\n      <ion-title>Mesaj Düzenle</ion-title>\n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n\n \n<ion-content #content>\n  \n  <!--  =========================================    IMAGES      =============================== --> \n  <section  id=\"ag-message-images\">\n    <ion-card *ngFor=\"let file of image_input_files; let i=index\">\n      <img [src]=\"file.src\" />\n      <ion-card-content>\n        <ion-button (click)=\"deleteImage(i)\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Delete\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </section>\n\n  <!--  =========================================    MEDIA FILES      =============================== -->\n  <section *ngIf=\"media_input_files.length\">\n    <video id=\"myvideo\" controls  [hidden]=\"!now_played_media\"></video>\n    <ion-list lines=\"none\">\n      <ion-item *ngFor=\"let media of media_input_files ; let i = index\">\n        <ion-icon slot=\"start\" name=\"play-circle-outline\"   *ngIf=\"now_played_media != media\" (click)=\"playMedia(media)\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"pause-circle-outline\"  *ngIf=\"now_played_media == media\" (click)=\"stopMedia()\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"trash-outline\" (click)=\"removeMediaFile(media)\"></ion-icon>\n        <ion-label>\n          {{media.name}} {{(i+1)}}\n        </ion-label>\n        <ion-progress-bar  type=\"indeterminate\" id=\"file_{{i}}\" style=\"display: none;\"></ion-progress-bar>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <!--  =========================================    QUIZ & SURVEY     =============================== -->\n  <section *ngIf=\"message.call_back_id==4 || message.call_back_id==0\" >\n    <section id=\"ag-choices\">\n      <ion-item lines=\"none\" *ngFor=\"let choice of message.choices let i = index\">\n        <ion-icon   slot=\"start\" *ngIf=\"message.call_back_id==0\" style=\"margin-inline-end:2px;\" \n                    [class.ag-correct]=\"choice.correct\"\n                    name=\"checkmark-circle-outline\" (click)=\"setCorrect(i)\"></ion-icon>\n        <ion-input  type=\"text\" color=\"medium\" [(ngModel)]=\"choice.text\" placeholder=\"Seçenek yazın\"></ion-input>\n        <ion-icon   slot=\"end\"  name=\"remove-circle-outline\" (click)=\"removeChoce(i)\"></ion-icon>\n      </ion-item>\n    </section>\n    <ion-item lines=\"none\" style=\"text-align:right\">\n      <ion-label color=\"medium\" >Seçenek ekle</ion-label>\n      <ion-icon slot=\"end\" name=\"add-circle-outline\" (click)=\"addChoice()\"></ion-icon>\n    </ion-item>\n  </section>\n    \n</ion-content>\n\n<section id=\"ag-editor-area\">\n  <!--  =========================================    TEXTAREA     =============================== --> \n  <ion-textarea rows=\"4\" [(ngModel)]= \"message.text\" color=\"medium\" maxlength=\"{{message_length}}\"  placeholder=\"Mesajınızı yazın...\" >\n  </ion-textarea>\n  <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\n    <ion-label>{{(message_length - message.text.length)}} / {{message_length}}</ion-label>\n  </ion-chip>\n  <!--  =========================================    CALLBACK ICONS ============================= -->\n  <ion-grid color=\"medium\">\n    <ion-row>\n      <ion-col size=\"3\" (click)=\"addImage()\">\n        <ion-chip outline  color=\"secondary\">\n          <ion-icon name=\"image-outline\" ></ion-icon> \n        </ion-chip>\n      </ion-col>\n      <ion-col size=\"4\" (click)=\"addMedia()\">\n        <ion-chip outline  color=\"secondary\" >\n          <ion-icon name=\"mic-outline\"></ion-icon> \n          <ion-icon name=\"film-outline\"></ion-icon>\n        </ion-chip>\n      </ion-col> \n      <ion-col size=\"3\">        \n        <ion-chip outline  color=\"secondary\" (click)=\"showCallBackOptions()\" >\n          <ion-icon  *ngIf=\"message.call_back_id == null\"   [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 0\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 1\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 2\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 3\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 4\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 5\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n        </ion-chip>\n      </ion-col>\n      <ion-col size=\"2\" (click)=\"save()\">\n        <ion-chip outline  color=\"secondary\" >\n          <ion-icon name=\"send-outline\"></ion-icon> \n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</section>");

/***/ })

}]);
//# sourceMappingURL=pages-add-message-text-add-message-text-module-es2015.js.map