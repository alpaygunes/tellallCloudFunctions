(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-channel-form-channel-module"], {
    /***/
    "EhlD":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-channel/form-channel.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EhlD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-toolbar>\n    <ion-tabs>\n      <ion-tab-bar slot=\"top\">\n        <ion-button  fill=\"clear\" size=\"small\"  (click)=\"back()\" *ngIf=\"agCropperClose\">\n          <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n        </ion-button>\n        <ion-title >Kanal Düzenle</ion-title>\n        <ion-tab-button (click)=\"agCropperClose=true\" *ngIf=\"!agCropperClose\">\n          <ion-icon name=\"close-outline\" ></ion-icon>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>  \n\n<ion-content #content>\n\n  <image-cropper *ngIf=\"!agCropperClose\"\n    [imageChangedEvent]=\"imageChangedEvent\"\n    [maintainAspectRatio]=\"true\"\n    [aspectRatio]=\"9 / 3\"\n    [resizeToWidth]=\"512\"\n    backgroundColor=#000000\n    format=\"png\"\n    (imageCropped)=\"imageCropped($event)\"\n    (imageLoaded)=\"imageLoaded()\"\n    (cropperReady)=\"cropperReady()\"\n    (loadImageFailed)=\"loadImageFailed()\">\n  </image-cropper>\n\n  <div *ngIf=\"agCropperClose\">\n    <ion-grid fixed> \n      <ion-row (click)=\"openFileCtrl()\" justify-content-start align-items-start>\n        <ion-col size=\"12\">  \n            <img [src]=\"channel.logo\" style=\"max-height: 300px;margin-left: auto;margin-right: auto;display: block;\" /> \n          <ion-input type=\"hidden\" [(ngModel)]=\"channel.logo\"></ion-input> \n        </ion-col>     \n      </ion-row> \n      <input type=\"file\" style=\"display: none;\" accept=\"image/x-png,image/gif,image/jpeg\" id=\"file-ctrl\"> \n\n      <ion-row >\n        <ion-col size=\"12\" style=\"text-align: center;\">\n          <p style=\"width: 100%;\">Harika bir logo ekleye bilirsiniz</p> \n        </ion-col>\n      </ion-row>\n    \n      <div style=\"margin-top: 40px; width: 100%; display: block;\" ></div>\n      <!--- /////////////////////////   KANAL ADI ///////////////////////-->\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon   name=\"bookmark-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-label position=\"stacked\" color=\"medium\">Kanal Adı</ion-label>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input #ChannelName type=\"text\" placeholder=\"Kanal Adı\"  [(ngModel)]=\"channel.channel_name\" > </ion-input>\n        </ion-col>\n      </ion-row>\n        \n\n      <div style=\"margin-top: 40px; width: 100%; display: block;\" ></div>\n      <!--- /////////////////////////   AÇIKLAMA ///////////////////////-->\n      <div id=\"anchor\"></div>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label position=\"stacked\" color=\"medium\">Açıklama {{(description_length - channel.description.length)}} karakter</ion-label>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-textarea #Description id=\"kanal-aciklamasi\" rows=\"3\" maxlength=\"{{description_length}}\" color=\"medium\" [(ngModel)]=\"channel.description\" placeholder=\"Kanalızın amacı hakkında kısa açıklama yazın\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n  \n  \n      <div style=\"margin-top: 40px; width: 100%; display: block;\" ></div> \n      <!--- /////////////////////////   PAROLA  ///////////////////////-->\n      <ion-row>\n        <ion-col size=\"1\"><ion-icon name=\"key-outline\"></ion-icon></ion-col>\n        <ion-col size=\"11\"><ion-label position=\"stacked\" color=\"medium\">Parola</ion-label></ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" (keydown)=\"onPasswordChange($event)\"   placeholder=\"Parola boş olabilir\" [(ngModel)]=\"scret.password\"></ion-input>\n        </ion-col>\n      </ion-row> \n      <ion-item lines=\"none\">\n        <ion-note>Parola seçerseniz, kullanıcılardan bu parola istenir.</ion-note>\n      </ion-item>\n\n      <div style=\"margin-top: 40px; width: 100%; display: block;\" ></div>\n      \n      <!--- /////////////////////////   ONAYLI ABONELİK  ///////////////////////-->\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-label color=\"medium\">Onaylı abonelik</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-checkbox  checked=\"channel.confirmation_required\" (ionChange)=\"onChangeConfirmationReq()\" [(ngModel)]=\"channel.confirmation_required\" color=\"primary\" ></ion-checkbox>\n        </ion-col>\n      </ion-row>  \n      <ion-item lines=\"none\">\n        <ion-note>Abonelikler, sizin onayınızı bekler.</ion-note>\n      </ion-item>   \n\n\n      <div style=\"margin-top: 40px; width: 100%; display: block;\" ></div>\n      <!--- /////////////////////////   KANAL TÜRÜ  ///////////////////////--> \n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon  name=\"flag-outline\" style=\"margin-top:12px\"></ion-icon>\n        </ion-col> \n        <ion-col size=\"10\">\n          <ion-item lines=\"none\">\n            <ion-label color=\"medium\">Kanal Türü</ion-label>\n            <ion-select #AnnounceType multiple=\"false\" [(ngModel)]=\"channel.announce_type\" \n                        ok-text=\"Tamam\" cancel-text=\"İptal\" (ionChange)=\"onChangeAnnounceType()\">\n              <ion-select-option *ngFor=\"let atype of announceTypes.announce_types\" value=\"{{atype.value}}\">{{atype.name}}</ion-select-option> \n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\">\n        <ion-note>Mesajlarınıza en uygun olanı seçmelisiniz. Farklı mesaj türleri için farklı kanallar oluşturabilirsiniz.</ion-note>\n      </ion-item> \n\n      <!--- /////////////////////////   FOOD DRİNK İÇİN SERVİS TÜRÜ  ///////////////////////--> \n      <ion-row *ngIf=\"channel.announce_type == 'food_drink_menu'\">\n        <ion-col size=\"1\">\n          <ion-icon name=\"cafe-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label color=\"medium\" >Servis Türü</ion-label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-select [(ngModel)]=\"channel.shipping_type\" multiple=\"false\" placeholder=\"Servis türünü seçin\">\n            <ion-select-option *ngFor=\"let item of shippingTypeKeys\" value=\"{{item}}\">{{shippingType[item]}}</ion-select-option> \n          </ion-select>\n        </ion-col>\n      </ion-row> \n      <ion-item lines=\"none\" *ngIf=\"channel.announce_type == 'food_drink_menu'\">\n        <ion-note>Yemek ve içecekleri servis edecekmisiniz ?</ion-note>\n      </ion-item> \n\n\n\n\n      <div style=\"margin-top: 40px; width: 100%; display: block;\" ></div>\n      <!--- /////////////////////////  FLASH  ///////////////////////-->\n      <ion-row *ngIf=\"!channel.confirmation_required\">\n        <ion-col size=\"1\">\n          <ion-icon  name=\"flash-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-label color=\"medium\">Flash</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-checkbox  checked=\"channel.flash\" (ionChange)=\"onChangeFlash()\" [(ngModel)]=\"channel.flash\" color=\"primary\" ></ion-checkbox>\n        </ion-col>\n      </ion-row> \n      <ion-item *ngIf=\"!channel.confirmation_required\" lines=\"none\"> \n        <ion-note> Flash kanal içerikleri QR kod ile paylaşılabilir Her içerik için ayrı bir QRkod oluşturulur. Kanala abonelik olmaz. \n          </ion-note>\n      </ion-item>\n\n\n      <!--- /////////////////////////   SADECE HESABI OLAN KULLANICILAR  ///////////////////////-->\n      <ion-row *ngIf=\"channel.flash && !channel.confirmation_required\">\n        <ion-col size=\"1\">\n          <ion-icon   name=\"lock-closed-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-label    color=\"medium\"> Sadece hesabı olan kullanıcılar</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-checkbox color=\"primary\" checked=\"channel.registered_users_only\" [(ngModel)]=\"channel.registered_users_only\"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\" *ngIf=\"channel.flash && !channel.confirmation_required\">\n        <ion-note>Flash mesajlarınızı  sadece hesabı olanlar görebilir</ion-note>\n      </ion-item> \n\n    </ion-grid>\n \n  </div>\n\n  <!-- ------------------------  KAYDET BUTTONU ----------------------- -->\n  <ion-toolbar *ngIf=\"agCropperClose\" button>\n    <ion-tabs> \n      <ion-button (click)=\"saveChannel()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Kaydet\n      </ion-button>  \n    </ion-tabs>\n  </ion-toolbar>\n\n</ion-content>\n\n\n<!-- ------------------------  KIRPMAYI BİTİR BUTTONU ----------------------- -->\n<ion-toolbar *ngIf=\"!agCropperClose\" button>\n  <ion-tabs  (click)=\"kirp()\"> \n    <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\">\n      <ion-icon slot=\"start\"  name=\"crop-outline\"></ion-icon>  \n      Kırp\n    </ion-button> \n  </ion-tabs>\n</ion-toolbar>\n";
      /***/
    },

    /***/
    "Qhvk":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/form-channel/form-channel-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: FormChannelPageRoutingModule */

    /***/
    function Qhvk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormChannelPageRoutingModule", function () {
        return FormChannelPageRoutingModule;
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


      var _form_channel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form-channel.page */
      "lptg");

      var routes = [{
        path: '',
        component: _form_channel_page__WEBPACK_IMPORTED_MODULE_3__["FormChannelPage"]
      }];

      var FormChannelPageRoutingModule = function FormChannelPageRoutingModule() {
        _classCallCheck(this, FormChannelPageRoutingModule);
      };

      FormChannelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FormChannelPageRoutingModule);
      /***/
    },

    /***/
    "lptg":
    /*!*********************************************************!*\
      !*** ./src/app/pages/form-channel/form-channel.page.ts ***!
      \*********************************************************/

    /*! exports provided: FormChannelPage */

    /***/
    function lptg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormChannelPage", function () {
        return FormChannelPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_form_channel_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./form-channel.page.html */
      "EhlD");
      /* harmony import */


      var _form_channel_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./form-channel.page.scss */
      "nJsw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/channel.service */
      "0xJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/objects/channel.model */
      "ySeB");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var FormChannelPage = /*#__PURE__*/function () {
        function FormChannelPage(route, authService, toastController, router, location, alertController, loadingController, channelService) {
          _classCallCheck(this, FormChannelPage);

          this.route = route;
          this.authService = authService;
          this.toastController = toastController;
          this.router = router;
          this.location = location;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.channelService = channelService;
          this.channel = new src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__["Channel"]();
          this.scret = new src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__["Scret"]();
          this.announceTypes = new src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__["AnnounceTypes"]();
          this.shippingTypeKeys = Object.keys(src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__["ShippingType"]);
          this.shippingType = src_app_objects_channel_model__WEBPACK_IMPORTED_MODULE_6__["ShippingType"];
          this.description_length = 120;
          this.imageChangedEvent = '';
          this.agCropperClose = true;
        }

        _createClass(FormChannelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.USER) {
              this.scret.uid = this.authService.USER.uid;
            }

            var channel_id = this.route.snapshot.paramMap.get('id');
            if (channel_id) this.showChannelInfo(channel_id);
          }
        }, {
          key: "showChannelInfo",
          value: function showChannelInfo(channel_id) {
            var _this = this;

            this.channelService.getChannelInfo(channel_id).collection('screts').doc('scret_fields').valueChanges().subscribe(function (data) {
              _this.scret = data;
            });
            this.channelService.getChannelInfo(channel_id).valueChanges().subscribe(function (data) {
              if (data) {
                data.id = channel_id;
                _this.channel = data;
                _this.old_announce_type = _this.channel.announce_type;
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            var BU = this;
            this.fileEl = document.getElementById('file-ctrl');
            this.fileEl.addEventListener('change', function (event) {
              BU.imageChangedEvent = event;
              if (event.currentTarget['files'].length) _this2.agCropperClose = false;
            });
          }
        }, {
          key: "openFileCtrl",
          value: function openFileCtrl() {
            this.fileEl.click();
          }
        }, {
          key: "saveChannel",
          value: function saveChannel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var error, yOffset, loading, _alert, save;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      error = false;
                      this.ChannelName.nativeElement.style.border = "0px solid #e7e7e7";
                      this.Description.nativeElement.style.borderColor = "#e7e7e7";

                      if (this.channel.channel_name.replace(/\s/g, "").length < 3) {
                        this.ChannelName.nativeElement.style.border = "1px solid #FF0000";
                        error = true;
                      }

                      this.channel.channel_name = this.channel.channel_name.trim();

                      if (this.channel.description.replace(/\s/g, "").length < 4) {
                        this.Description.nativeElement.style.borderColor = "red";
                        yOffset = document.getElementById("anchor").offsetTop;
                        this.content.scrollToPoint(0, yOffset, 1000);
                        error = true;
                      }

                      if (this.channel.description.length > 120) {
                        alert("Kanal amacını en falza 120 karater olmalı");
                        this.Description.nativeElement.style.borderColor = "red";
                        error = true;
                      }

                      if (this.scret.uid == '') {
                        alert("Kullanıcı bilgileri alınmadığından kaydedilmedi. Sonra tekrar deneyin");
                        error = true;
                      }

                      if (this.scret.password !== null && this.scret.password !== "") {
                        this.scret.password = this.scret.password.replace(/\s/g, "");
                        this.channel.with_password = true;
                      } else {
                        this.scret.uid = this.scret.uid ? this.scret.uid : "";
                      }

                      if (!error) {
                        _context6.next = 11;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 11:
                      _context6.next = 13;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 13:
                      loading = _context6.sent;

                      if (!(this.channel.id && this.channel.announce_type != this.old_announce_type)) {
                        _context6.next = 22;
                        break;
                      }

                      _context6.next = 17;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        //header: 'Onaylıyor musunuz?',
                        message: 'Kanal türünü değiştridiniz. Eski mesajlarınız silinecek.',
                        buttons: [{
                          text: 'Vazgeç',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Sil',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              var _this4 = this;

                              var channel_id, save;
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      _context3.next = 2;
                                      return loading.present();

                                    case 2:
                                      channel_id = this.channel.id;
                                      this.channelService.removeChannelMessages(channel_id);
                                      save = this.channelService.saveChannel(this.channel, this.scret);
                                      save.then(function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                          var toast;
                                          return regeneratorRuntime.wrap(function _callee$(_context) {
                                            while (1) {
                                              switch (_context.prev = _context.next) {
                                                case 0:
                                                  _context.next = 2;
                                                  return loading.dismiss();

                                                case 2:
                                                  _context.next = 4;
                                                  return this.toastController.create({
                                                    color: 'success',
                                                    message: 'Kanal oluşturuldu.',
                                                    duration: 2000
                                                  });

                                                case 4:
                                                  toast = _context.sent;
                                                  toast.present();
                                                  this.router.navigate(['/my-channels']);

                                                case 7:
                                                case "end":
                                                  return _context.stop();
                                              }
                                            }
                                          }, _callee, this);
                                        }));
                                      })["catch"](function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                          var toast;
                                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                              switch (_context2.prev = _context2.next) {
                                                case 0:
                                                  _context2.next = 2;
                                                  return this.toastController.create({
                                                    color: 'danger',
                                                    message: 'Kanal oluşturulurken sorun çıktı.',
                                                    duration: 2000
                                                  });

                                                case 2:
                                                  toast = _context2.sent;
                                                  _context2.next = 5;
                                                  return toast.present();

                                                case 5:
                                                case "end":
                                                  return _context2.stop();
                                              }
                                            }
                                          }, _callee2, this);
                                        }));
                                      });

                                    case 6:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          }
                        }]
                      });

                    case 17:
                      _alert = _context6.sent;
                      _context6.next = 20;
                      return _alert.present();

                    case 20:
                      _context6.next = 26;
                      break;

                    case 22:
                      _context6.next = 24;
                      return loading.present();

                    case 24:
                      save = this.channelService.saveChannel(this.channel, this.scret);
                      save.then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  _context4.next = 4;
                                  return this.toastController.create({
                                    color: 'success',
                                    message: 'Kanal oluşturuldu.',
                                    duration: 2000
                                  });

                                case 4:
                                  toast = _context4.sent;
                                  toast.present();
                                  this.router.navigate(['/my-channels']);

                                case 7:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      })["catch"](function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.toastController.create({
                                    color: 'danger',
                                    message: 'Kanal oluşturulurken sorun çıktı.',
                                    duration: 2000
                                  });

                                case 2:
                                  toast = _context5.sent;
                                  _context5.next = 5;
                                  return toast.present();

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 26:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onPasswordChange",
          value: function onPasswordChange(event) {
            if (event.keyCode == 32) {
              return false;
            }
          }
        }, {
          key: "onChangeConfirmationReq",
          value: function onChangeConfirmationReq() {
            if (!this.channel.confirmation_required) {
              this.channel.flash = false;
              this.channel.registered_users_only = false;
            }
          }
        }, {
          key: "onChangeFlash",
          value: function onChangeFlash() {
            if (!this.channel.flash) {
              this.channel.registered_users_only = false;
            }
          }
        }, {
          key: "onChangeAnnounceType",
          value: function onChangeAnnounceType() {
            if (this.channel.announce_type != 'food_drink_menu') {
              this.channel.shipping_type = 'NO_SERVICE';
            }
          } //----------------------------------------------      I m a g e C r o p     --------

        }, {
          key: "kirp",
          value: function kirp() {
            this.imageChangedEvent = false;
            this.agCropperClose = true;
          }
        }, {
          key: "imageCropped",
          value: function imageCropped(event) {
            this.agCropperClose = false;
            this.channel.logo = event.base64;
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded() {// show cropper
          }
        }, {
          key: "cropperReady",
          value: function cropperReady() {// cropper ready
          }
        }, {
          key: "loadImageFailed",
          value: function loadImageFailed() {// show message
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return FormChannelPage;
      }();

      FormChannelPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }, {
          type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"]
        }];
      };

      FormChannelPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['content']
        }],
        ChannelName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['ChannelName', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }],
        Description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['Description', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      FormChannelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-form-channel',
        template: _raw_loader_form_channel_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_form_channel_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormChannelPage);
      /***/
    },

    /***/
    "nJsw":
    /*!***********************************************************!*\
      !*** ./src/app/pages/form-channel/form-channel.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function nJsw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\n#kanal-aciklamasi{\n    border: 1px solid ;\n    padding: 10px;\n    border-radius: 5px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvcm0tY2hhbm5lbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoiZm9ybS1jaGFubmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbi8qXG4ja2FuYWwtYWNpa2xhbWFzaXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuKi9cblxuICJdfQ== */";
      /***/
    },

    /***/
    "p1Rs":
    /*!***********************************************************!*\
      !*** ./src/app/pages/form-channel/form-channel.module.ts ***!
      \***********************************************************/

    /*! exports provided: FormChannelPageModule */

    /***/
    function p1Rs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormChannelPageModule", function () {
        return FormChannelPageModule;
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


      var _form_channel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-channel-routing.module */
      "Qhvk");
      /* harmony import */


      var _form_channel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form-channel.page */
      "lptg");
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-image-cropper */
      "rIor");

      var FormChannelPageModule = function FormChannelPageModule() {
        _classCallCheck(this, FormChannelPageModule);
      };

      FormChannelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _form_channel_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormChannelPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]],
        declarations: [_form_channel_page__WEBPACK_IMPORTED_MODULE_6__["FormChannelPage"]]
      })], FormChannelPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-form-channel-form-channel-module-es5.js.map