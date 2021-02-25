(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-message-text-add-message-text-module"], {
    /***/
    "/r3U":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/add-message-text/add-message-text.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AddMessageTextPageModule */

    /***/
    function r3U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMessageTextPageModule", function () {
        return AddMessageTextPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _add_message_text_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-message-text-routing.module */
      "5lie");
      /* harmony import */


      var _add_message_text_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-message-text.page */
      "3K7r");
      /* harmony import */


      var src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/unix-time-to-date.pipe */
      "SA8l");

      var AddMessageTextPageModule = function AddMessageTextPageModule() {
        _classCallCheck(this, AddMessageTextPageModule);
      };

      AddMessageTextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_message_text_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddMessageTextPageRoutingModule"]],
        declarations: [_add_message_text_page__WEBPACK_IMPORTED_MODULE_6__["AddMessageTextPage"], src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_7__["UnixTimeToDatePipe"]],
        providers: [{
          provide: "ag_subscribers",
          useValue: []
        }]
      })], AddMessageTextPageModule);
      /***/
    },

    /***/
    "3K7r":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/add-message-text/add-message-text.page.ts ***!
      \*****************************************************************/

    /*! exports provided: AddMessageTextPage */

    /***/
    function K7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMessageTextPage", function () {
        return AddMessageTextPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_message_text_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-message-text.page.html */
      "veS4");
      /* harmony import */


      var _add_message_text_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-message-text.page.scss */
      "4kXb");
      /* harmony import */


      var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/objects/message.model */
      "Npzb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/message.service */
      "tZre");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/file.service */
      "cpn4");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");

      var AddMessageTextPage = /*#__PURE__*/function () {
        function AddMessageTextPage(route, modalController, actionSheetController, location, alertController, authService, fileService, ag_subscribers, loadingController, router, messageService) {
          _classCallCheck(this, AddMessageTextPage);

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

        _createClass(AddMessageTextPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var BU = this;
            this.channel_id = this.route.snapshot.paramMap.get('id');

            if (this.ag_subscribers[this.channel_id]) {
              this.ag_subscribers[this.channel_id].unsubscribe();
            } //this.getMessages() 

          }
        }, {
          key: "setCallBackTypes",
          value: function setCallBackTypes(type_id) {
            var _this = this;

            this.message.call_back_id = type_id; //this.showCallBackOptions();

            if (this.message.call_back_id == 0 || this.message.call_back_id == 4) {
              setTimeout(function () {
                _this.content.scrollToBottom(_this.content.el.clientHeight);
              }, 500);
            }
          }
        }, {
          key: "addChoice",
          value: function addChoice() {
            var choice = {
              text: '',
              correct: false
            };
            this.message.choices.push(choice);
          }
        }, {
          key: "removeChoce",
          value: function removeChoce(i) {
            this.message.choices.splice(i, 1);
          }
        }, {
          key: "setCorrect",
          value: function setCorrect(i) {
            this.message.choices[i]['correct'] = !this.message.choices[i]['correct'];
          }
        }, {
          key: "addImage",
          value: function addImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var BU, loading, fileEl;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      BU = this;
                      _context3.next = 3;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 10000
                      });

                    case 3:
                      loading = _context3.sent;
                      fileEl = document.createElement('input');
                      fileEl.type = "file";
                      fileEl.setAttribute("multiple", "true");
                      fileEl.setAttribute("accept", "image/*");
                      fileEl.addEventListener('change', function (event) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this3 = this;

                          var files, _loop, i;

                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  loading.present();
                                  files = event.target.files;

                                  _loop = function _loop(i) {
                                    var a = new Promise(function (res, rej) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                        var reader;
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                          while (1) {
                                            switch (_context.prev = _context.next) {
                                              case 0:
                                                if (!files[i].size) {
                                                  _context.next = 8;
                                                  break;
                                                }

                                                if (!(Number(i) >= files.length - 1)) {
                                                  _context.next = 4;
                                                  break;
                                                }

                                                _context.next = 4;
                                                return loading.dismiss();

                                              case 4:
                                                reader = new FileReader();
                                                reader.readAsDataURL(files[i]);

                                                reader.onload = function (revent) {
                                                  BU.image_input_files.push(files[i]);
                                                  res(revent.target.result);
                                                };

                                                reader.onerror = function (error) {
                                                  rej(error);
                                                };

                                              case 8:
                                              case "end":
                                                return _context.stop();
                                            }
                                          }
                                        }, _callee);
                                      }));
                                    });
                                    a.then(function (result) {
                                      files[i]['src'] = result;
                                    })["catch"](function (error) {
                                      console.error("Hata resim işlenemedi", error);
                                    });
                                  };

                                  for (i in files) {
                                    _loop(i);
                                  }

                                  setTimeout(function () {
                                    _this3.content.scrollToBottom(_this3.content.el.clientHeight);
                                  }, 500);

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));
                      });
                      fileEl.click();

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addMedia",
          value: function addMedia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this4 = this;

              var mediaFileEl;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      mediaFileEl = document.createElement('input');
                      mediaFileEl.type = "file";
                      mediaFileEl.setAttribute("multiple", "true");
                      mediaFileEl.setAttribute("accept", "audio/*,video/*");
                      mediaFileEl.addEventListener('change', function (event) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var _this5 = this;

                          var files, i, totalsize, _alert, _alert2;

                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  files = event.target.files;
                                  _context6.t0 = regeneratorRuntime.keys(Object.keys(files));

                                case 2:
                                  if ((_context6.t1 = _context6.t0()).done) {
                                    _context6.next = 25;
                                    break;
                                  }

                                  i = _context6.t1.value;

                                  if (!(files[i].size < 20000000)) {
                                    _context6.next = 18;
                                    break;
                                  }

                                  this.media_input_files.push(files[i]);
                                  totalsize = 0;
                                  this.media_input_files.map(function (file) {
                                    totalsize += file.size;
                                  });

                                  if (!(totalsize > 40000000)) {
                                    _context6.next = 16;
                                    break;
                                  }

                                  this.media_input_files.pop();
                                  _context6.next = 12;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: 'Dikkat !',
                                    message: 'Toplam dosya boyutu limiti aşıldı.(Max 40 MB)',
                                    buttons: [{
                                      text: 'Okay',
                                      handler: function handler() {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                              switch (_context4.prev = _context4.next) {
                                                case 0:
                                                case "end":
                                                  return _context4.stop();
                                              }
                                            }
                                          }, _callee4);
                                        }));
                                      }
                                    }]
                                  });

                                case 12:
                                  _alert = _context6.sent;
                                  _context6.next = 15;
                                  return _alert.present();

                                case 15:
                                  return _context6.abrupt("break", 25);

                                case 16:
                                  _context6.next = 23;
                                  break;

                                case 18:
                                  _context6.next = 20;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: 'Dikkat !',
                                    message: 'Dosya boyutu enfazla 20 MB olabilir. ',
                                    buttons: [{
                                      text: 'Okay',
                                      handler: function handler() {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                            while (1) {
                                              switch (_context5.prev = _context5.next) {
                                                case 0:
                                                case "end":
                                                  return _context5.stop();
                                              }
                                            }
                                          }, _callee5);
                                        }));
                                      }
                                    }]
                                  });

                                case 20:
                                  _alert2 = _context6.sent;
                                  _context6.next = 23;
                                  return _alert2.present();

                                case 23:
                                  _context6.next = 2;
                                  break;

                                case 25:
                                  setTimeout(function () {
                                    _this5.content.scrollToBottom(_this5.content.el.clientHeight);
                                  }, 500);

                                case 26:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });
                      mediaFileEl.click();

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "removeMediaFile",
          value: function removeMediaFile(media) {
            this.media_input_files = this.media_input_files.filter(function (f) {
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
        }, {
          key: "deleteImage",
          value: function deleteImage(i) {
            this.image_input_files.splice(i, 1);
          }
        }, {
          key: "preview",
          value: function preview() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var message, navigationExtras;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      message = this.message;
                      navigationExtras = {
                        state: {
                          message: message,
                          feedback: this.feedback,
                          image_input_files: this.image_input_files
                        }
                      };
                      this.router.navigate(['/text/' + this.channel_id + '/' + message.id], navigationExtras);

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this6 = this;

              var corret_is_set, loading, doc_id;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!(this.message.call_back_id === 0)) {
                        _context10.next = 6;
                        break;
                      }

                      corret_is_set = false;
                      this.message.choices.forEach(function (v, i) {
                        if (v['correct']) {
                          corret_is_set = true;
                        }
                      });

                      if (corret_is_set) {
                        _context10.next = 6;
                        break;
                      }

                      alert("En az bir doğru seçenek olmalı");
                      return _context10.abrupt("return");

                    case 6:
                      this.message.uid = this.authService.USER.uid;
                      _context10.next = 9;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 100000
                      });

                    case 9:
                      loading = _context10.sent;
                      _context10.next = 12;
                      return loading.present();

                    case 12:
                      doc_id = this.messageService.fs.createId();
                      _context10.next = 15;
                      return this.uploadImages(doc_id);

                    case 15:
                      this.message.image_srcs = _context10.sent;
                      doc_id = this.messageService.fs.createId();
                      _context10.next = 19;
                      return this.uploadMedia(doc_id);

                    case 19:
                      this.message.media_files = _context10.sent;
                      this.message = JSON.parse(JSON.stringify(this.message));
                      this.message.created_at = firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp();
                      this.messageService.save(this.message, this.channel_id, doc_id).then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  _context9.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  this.router.navigate(['channel-messages/' + this.channel_id]);
                                  this.message = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]();

                                case 4:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      });

                    case 23:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "uploadImages",
          value: function uploadImages(doc_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this7 = this;

              var srcs, images, blob, _loop2, i;

              return regeneratorRuntime.wrap(function _callee11$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      srcs = [];
                      images = this.image_input_files;
                      _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(i) {
                        var image, a;
                        return regeneratorRuntime.wrap(function _loop2$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                image = images[i];
                                _context11.next = 3;
                                return _this7.fileService.resizeImage(image, 512, 512, .8);

                              case 3:
                                blob = _context11.sent;
                                a = new Promise(function (res, rej) {
                                  var filePath = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/' + _this7.channel_id + '/' + doc_id + '_' + i;
                                  firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref(filePath).put(blob).then(function (upload) {
                                    upload.ref.getDownloadURL().then(function (url) {
                                      res(url);
                                    })["catch"](function (err) {
                                      console.log("getLogo : Resim storage de bulunamadı", err.messages);
                                      rej(err.messages);
                                    });
                                  });
                                });
                                _context11.t0 = srcs;
                                _context11.next = 8;
                                return a;

                              case 8:
                                _context11.t1 = _context11.sent;

                                _context11.t0.push.call(_context11.t0, _context11.t1);

                              case 10:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _loop2);
                      });
                      i = 0;

                    case 4:
                      if (!(i < images.length)) {
                        _context12.next = 9;
                        break;
                      }

                      return _context12.delegateYield(_loop2(i), "t0", 6);

                    case 6:
                      i++;
                      _context12.next = 4;
                      break;

                    case 9:
                      return _context12.abrupt("return", srcs);

                    case 10:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "uploadMedia",
          value: function uploadMedia(doc_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this8 = this;

              var srcs, files, _loop3, i;

              return regeneratorRuntime.wrap(function _callee12$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      srcs = [];
                      files = this.media_input_files;
                      _loop3 = /*#__PURE__*/regeneratorRuntime.mark(function _loop3(i) {
                        var a;
                        return regeneratorRuntime.wrap(function _loop3$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                a = new Promise(function (res, rej) {
                                  var file = files[i];
                                  var progres_bar = document.getElementById('file_' + i);
                                  progres_bar.style.display = "block";
                                  var filePath = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid + '/' + _this8.channel_id + '/' + doc_id + '_' + i;
                                  firebase__WEBPACK_IMPORTED_MODULE_7__["storage"]().ref(filePath).put(file).then(function (upload) {
                                    progres_bar.style.display = "none";
                                    upload.ref.getDownloadURL().then(function (url) {
                                      var file_data = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["MediaFile"]();
                                      file_data.name = file.name;
                                      file_data.url = url;
                                      file_data.type = file.type;
                                      res(file_data);
                                    })["catch"](function (err) {
                                      console.log("uploadMedia : mediya gönderilirken hata", err.messages);
                                      rej(err.messages);
                                    });
                                  });
                                });
                                _context13.t0 = srcs;
                                _context13.next = 4;
                                return a;

                              case 4:
                                _context13.t1 = _context13.sent;

                                _context13.t0.push.call(_context13.t0, _context13.t1);

                              case 6:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _loop3);
                      });
                      i = 0;

                    case 4:
                      if (!(i < files.length)) {
                        _context14.next = 9;
                        break;
                      }

                      return _context14.delegateYield(_loop3(i), "t0", 6);

                    case 6:
                      i++;
                      _context14.next = 4;
                      break;

                    case 9:
                      return _context14.abrupt("return", srcs);

                    case 10:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "playMedia",
          value: function playMedia(media) {
            var url = URL.createObjectURL(media);
            this.now_played_media = media;
            this.video = document.getElementById('myvideo');
            this.video.setAttribute('src', url);
            this.video.play();
          }
        }, {
          key: "stopMedia",
          value: function stopMedia() {
            this.video.pause();
            this.video.currentTime = 0;
            this.now_played_media = null;
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }, {
          key: "showCallBackOptions",
          value: function showCallBackOptions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this9 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee13$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.actionSheetController.create({
                        header: 'Geri Bildirim Türü Seçin',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Geri bildirim olmasın',
                          icon: 'assets/icon/' + this.types.getIconByID(null),
                          handler: function handler() {
                            _this9.setCallBackTypes(null);
                          }
                        }, {
                          text: this.types.getNameByID(3),
                          icon: 'assets/icon/' + this.types.getIconByID(3),
                          handler: function handler() {
                            _this9.setCallBackTypes(3);
                          }
                        }, {
                          text: this.types.getNameByID(1),
                          icon: 'assets/icon/' + this.types.getIconByID(1),
                          handler: function handler() {
                            _this9.setCallBackTypes(1);
                          }
                        }, {
                          text: this.types.getNameByID(2),
                          icon: 'assets/icon/' + this.types.getIconByID(2),
                          handler: function handler() {
                            _this9.setCallBackTypes(2);
                          }
                        }, {
                          text: this.types.getNameByID(0),
                          icon: 'assets/icon/' + this.types.getIconByID(0),
                          handler: function handler() {
                            _this9.setCallBackTypes(0);
                          }
                        }, {
                          text: this.types.getNameByID(4),
                          icon: 'assets/icon/' + this.types.getIconByID(4),
                          handler: function handler() {
                            _this9.setCallBackTypes(4);
                          }
                        }, {
                          text: this.types.getNameByID(5),
                          icon: 'assets/icon/' + this.types.getIconByID(5),
                          handler: function handler() {
                            _this9.setCallBackTypes(5);
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context15.sent;
                      _context15.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return AddMessageTextPage;
      }();

      AddMessageTextPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
        }, {
          type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: ["ag_subscribers"]
          }]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }];
      };

      AddMessageTextPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['content']
        }]
      };
      AddMessageTextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-message-text',
        template: _raw_loader_add_message_text_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_message_text_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddMessageTextPage);
      /***/
    },

    /***/
    "4kXb":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/add-message-text/add-message-text.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function kXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#ag-choices .ag-correct {\n  font-size: 20px;\n  color: green;\n  font-weight: bold;\n  -webkit-margin-end: 2px;\n          margin-inline-end: 2px;\n}\n\nion-chip ion-icon {\n  margin-inline: unset;\n}\n\n/* The animation code */\n\n@-webkit-keyframes example {\n  from {\n    top: -50px;\n  }\n  to {\n    top: 0;\n  }\n}\n\n@keyframes example {\n  from {\n    top: -50px;\n  }\n  to {\n    top: 0;\n  }\n}\n\n/* The element to apply the animation to */\n\n.call-back-type-icons ion-chip {\n  position: absolute;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1tZXNzYWdlLXRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0FBQUY7O0FBSUEsdUJBQUE7O0FBQ0E7RUFDSTtJQUFNLFVBQUE7RUFBUjtFQUNFO0lBQUksTUFBQTtFQUVOO0FBQ0Y7O0FBTEE7RUFDSTtJQUFNLFVBQUE7RUFBUjtFQUNFO0lBQUksTUFBQTtFQUVOO0FBQ0Y7O0FBQUUsMENBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FBRUoiLCJmaWxlIjoiYWRkLW1lc3NhZ2UtdGV4dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNhZy1jaG9pY2VzIC5hZy1jb3JyZWN0e1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBncmVlbjsgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4taW5saW5lLWVuZDoycHg7XG59XG5cbmlvbi1jaGlwIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZTp1bnNldDtcbn1cblxuXG4vKiBUaGUgYW5pbWF0aW9uIGNvZGUgKi9cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gICAgZnJvbSB7dG9wOiAtNTBweDt9XG4gICAgdG8ge3RvcDogMH1cbiAgfVxuICBcbiAgLyogVGhlIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGFuaW1hdGlvbiB0byAqL1xuICAuY2FsbC1iYWNrLXR5cGUtaWNvbnMgaW9uLWNoaXAgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjJzO1xuICB9Il19 */";
      /***/
    },

    /***/
    "5lie":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/add-message-text/add-message-text-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AddMessageTextPageRoutingModule */

    /***/
    function lie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMessageTextPageRoutingModule", function () {
        return AddMessageTextPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_message_text_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-message-text.page */
      "3K7r");

      var routes = [{
        path: '',
        component: _add_message_text_page__WEBPACK_IMPORTED_MODULE_3__["AddMessageTextPage"]
      }];

      var AddMessageTextPageRoutingModule = function AddMessageTextPageRoutingModule() {
        _classCallCheck(this, AddMessageTextPageRoutingModule);
      };

      AddMessageTextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddMessageTextPageRoutingModule);
      /***/
    },

    /***/
    "veS4":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-message-text/add-message-text.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function veS4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-buttons>\n      <ion-title>Mesaj Düzenle</ion-title>\n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n\n \n<ion-content #content>\n  \n  <!--  =========================================    IMAGES      =============================== --> \n  <section  id=\"ag-message-images\">\n    <ion-card *ngFor=\"let file of image_input_files; let i=index\">\n      <img [src]=\"file.src\" />\n      <ion-card-content>\n        <ion-button (click)=\"deleteImage(i)\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Delete\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </section>\n\n  <!--  =========================================    MEDIA FILES      =============================== -->\n  <section *ngIf=\"media_input_files.length\">\n    <video id=\"myvideo\" controls  [hidden]=\"!now_played_media\"></video>\n    <ion-list lines=\"none\">\n      <ion-item *ngFor=\"let media of media_input_files ; let i = index\">\n        <ion-icon slot=\"start\" name=\"play-circle-outline\"   *ngIf=\"now_played_media != media\" (click)=\"playMedia(media)\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"pause-circle-outline\"  *ngIf=\"now_played_media == media\" (click)=\"stopMedia()\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"trash-outline\" (click)=\"removeMediaFile(media)\"></ion-icon>\n        <ion-label>\n          {{media.name}} {{(i+1)}}\n        </ion-label>\n        <ion-progress-bar  type=\"indeterminate\" id=\"file_{{i}}\" style=\"display: none;\"></ion-progress-bar>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <!--  =========================================    QUIZ & SURVEY     =============================== -->\n  <section *ngIf=\"message.call_back_id==4 || message.call_back_id==0\" >\n    <section id=\"ag-choices\">\n      <ion-item lines=\"none\" *ngFor=\"let choice of message.choices let i = index\">\n        <ion-icon   slot=\"start\" *ngIf=\"message.call_back_id==0\" style=\"margin-inline-end:2px;\" \n                    [class.ag-correct]=\"choice.correct\"\n                    name=\"checkmark-circle-outline\" (click)=\"setCorrect(i)\"></ion-icon>\n        <ion-input  type=\"text\" color=\"medium\" [(ngModel)]=\"choice.text\" placeholder=\"Seçenek yazın\"></ion-input>\n        <ion-icon   slot=\"end\"  name=\"remove-circle-outline\" (click)=\"removeChoce(i)\"></ion-icon>\n      </ion-item>\n    </section>\n    <ion-item lines=\"none\" style=\"text-align:right\">\n      <ion-label color=\"medium\" >Seçenek ekle</ion-label>\n      <ion-icon slot=\"end\" name=\"add-circle-outline\" (click)=\"addChoice()\"></ion-icon>\n    </ion-item>\n  </section>\n    \n</ion-content>\n\n<section id=\"ag-editor-area\">\n  <!--  =========================================    TEXTAREA     =============================== --> \n  <ion-textarea rows=\"4\" [(ngModel)]= \"message.text\" color=\"medium\" maxlength=\"{{message_length}}\"  placeholder=\"Mesajınızı yazın...\" >\n  </ion-textarea>\n  <ion-chip color=\"light\" mode=\"ios\" outline=\"true\">\n    <ion-label>{{(message_length - message.text.length)}} / {{message_length}}</ion-label>\n  </ion-chip>\n  <!--  =========================================    CALLBACK ICONS ============================= -->\n  <ion-grid color=\"medium\">\n    <ion-row>\n      <ion-col size=\"3\" (click)=\"addImage()\">\n        <ion-chip outline  color=\"secondary\">\n          <ion-icon name=\"image-outline\" ></ion-icon> \n        </ion-chip>\n      </ion-col>\n      <ion-col size=\"4\" (click)=\"addMedia()\">\n        <ion-chip outline  color=\"secondary\" >\n          <ion-icon name=\"mic-outline\"></ion-icon> \n          <ion-icon name=\"film-outline\"></ion-icon>\n        </ion-chip>\n      </ion-col> \n      <ion-col size=\"3\">        \n        <ion-chip outline  color=\"secondary\" (click)=\"showCallBackOptions()\" >\n          <ion-icon  *ngIf=\"message.call_back_id == null\"   [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 0\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 1\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 2\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 3\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 4\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n          <ion-icon  *ngIf=\"message.call_back_id == 5\"      [src]=\"'assets/icon/'+types.getIconByID(message.call_back_id)\" ></ion-icon>\n        </ion-chip>\n      </ion-col>\n      <ion-col size=\"2\" (click)=\"save()\">\n        <ion-chip outline  color=\"secondary\" >\n          <ion-icon name=\"send-outline\"></ion-icon> \n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</section>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-message-text-add-message-text-module-es5.js.map