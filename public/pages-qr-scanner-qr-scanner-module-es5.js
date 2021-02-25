(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qr-scanner-qr-scanner-module"], {
    /***/
    "/xXi":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qr-scanner/qr-scanner.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xXi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header   class=\"ion-no-border\">\n  <ion-toolbar> \n    <ion-title  >\n      QR Oku\n    </ion-title>\n    <ion-buttons slot=\"start\" (click)=\"back()\">\n      <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "3Vir":
    /*!*******************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner.module.ts ***!
      \*******************************************************/

    /*! exports provided: QrScannerPageModule */

    /***/
    function Vir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPageModule", function () {
        return QrScannerPageModule;
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


      var _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qr-scanner-routing.module */
      "P1wM");
      /* harmony import */


      var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qr-scanner.page */
      "olSS");

      var QrScannerPageModule = function QrScannerPageModule() {
        _classCallCheck(this, QrScannerPageModule);
      };

      QrScannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qr_scanner_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrScannerPageRoutingModule"]],
        declarations: [_qr_scanner_page__WEBPACK_IMPORTED_MODULE_6__["QrScannerPage"]]
      })], QrScannerPageModule);
      /***/
    },

    /***/
    "P1wM":
    /*!***************************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: QrScannerPageRoutingModule */

    /***/
    function P1wM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPageRoutingModule", function () {
        return QrScannerPageRoutingModule;
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


      var _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qr-scanner.page */
      "olSS");

      var routes = [{
        path: '',
        component: _qr_scanner_page__WEBPACK_IMPORTED_MODULE_3__["QrScannerPage"]
      }];

      var QrScannerPageRoutingModule = function QrScannerPageRoutingModule() {
        _classCallCheck(this, QrScannerPageRoutingModule);
      };

      QrScannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QrScannerPageRoutingModule);
      /***/
    },

    /***/
    "X0Xd":
    /*!*******************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function X0Xd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zY2FubmVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "bkFD":
    /*!********************************************!*\
      !*** ./src/app/services/qrscan.service.ts ***!
      \********************************************/

    /*! exports provided: QrscanService */

    /***/
    function bkFD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrscanService", function () {
        return QrscanService;
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


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var QrscanService = /*#__PURE__*/function () {
        function QrscanService(qrScanner) {
          _classCallCheck(this, QrscanService);

          this.qrScanner = qrScanner;
          this.segments = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(QrscanService, [{
          key: "qrScan",
          value: function qrScan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.qrScanner.prepare().then(function (status) {
                        if (status.authorized) {
                          _this.qrScanner.show();

                          document.getElementsByTagName("body")[0].style.opacity = "0";
                        } else if (status.denied) {
                          _this.qrScanner.openSettings();
                        }
                      })["catch"](function (e) {
                        return console.log('Error is', e);
                      });

                    case 2:
                      this.scanSub = this.qrScanner.scan().subscribe(function (text) {
                        document.getElementsByTagName("body")[0].style.opacity = "1";

                        _this.segments.next(text);
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "cancelQrScann",
          value: function cancelQrScann() {
            this.scanSub.unsubscribe();
            this.qrScanner.destroy();
          }
        }]);

        return QrscanService;
      }();

      QrscanService.ctorParameters = function () {
        return [{
          type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"]
        }];
      };

      QrscanService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], QrscanService);
      /***/
    },

    /***/
    "olSS":
    /*!*****************************************************!*\
      !*** ./src/app/pages/qr-scanner/qr-scanner.page.ts ***!
      \*****************************************************/

    /*! exports provided: QrScannerPage */

    /***/
    function olSS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrScannerPage", function () {
        return QrScannerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./qr-scanner.page.html */
      "/xXi");
      /* harmony import */


      var _qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./qr-scanner.page.scss */
      "X0Xd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/channel.service */
      "0xJi");
      /* harmony import */


      var src_app_services_qrscan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/qrscan.service */
      "bkFD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");

      var QrScannerPage = /*#__PURE__*/function () {
        function QrScannerPage(location, alertController, qrscanservice, channelService, platform, loadingController, authService, router) {
          _classCallCheck(this, QrScannerPage);

          this.location = location;
          this.alertController = alertController;
          this.qrscanservice = qrscanservice;
          this.channelService = channelService;
          this.platform = platform;
          this.loadingController = loadingController;
          this.authService = authService;
          this.router = router;
        }

        _createClass(QrScannerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (this.backBtnSub) {
              this.backBtnSub.unsubscribe();
            }

            this.backBtnSub = this.platform.backButton.subscribe(function () {
              document.getElementsByTagName("body")[0].style.opacity = "1";

              _this2.cancelQrScann();
            });
            this.openCamera();
          }
        }, {
          key: "openCamera",
          value: function openCamera() {
            var _this3 = this;

            this.cameraActive = true;
            this.qrscanservice.qrScan();

            if (this.abonelik) {
              this.abonelik.unsubscribe();
            }

            this.abonelik = this.qrscanservice.segments.subscribe(function (val) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var url;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        url = new URL(val);
                        this.channel_id = new URLSearchParams(url.search).get('c');
                        this.message_id = new URLSearchParams(url.search).get('m');
                        this.cameraActive = false;
                        this.qrscanservice.cancelQrScann();
                        this.getChannelInfo();

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "cancelQrScann",
          value: function cancelQrScann() {
            this.cameraActive = false;
            this.qrscanservice.cancelQrScann();
          }
        }, {
          key: "getChannelInfo",
          value: function getChannelInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 5000
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                      this.channelService.getChannelInfo(this.channel_id).get().subscribe(function (snapshot) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this5 = this;

                          var alert;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  loading.dismiss();
                                  this.channel = snapshot.data();

                                  if (!this.channel.registered_users_only) {
                                    _context4.next = 10;
                                    break;
                                  }

                                  if (this.authService.USER) {
                                    _context4.next = 10;
                                    break;
                                  }

                                  _context4.next = 6;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: 'Üyelik Gerekli',
                                    message: 'Mesajı görebilmeniz için hesabınız olmalı',
                                    buttons: [{
                                      text: 'Okay',
                                      handler: function handler() {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                            while (1) {
                                              switch (_context3.prev = _context3.next) {
                                                case 0:
                                                  this.router.navigate(['login']);

                                                case 1:
                                                case "end":
                                                  return _context3.stop();
                                              }
                                            }
                                          }, _callee3, this);
                                        }));
                                      }
                                    }]
                                  });

                                case 6:
                                  alert = _context4.sent;
                                  _context4.next = 9;
                                  return alert.present();

                                case 9:
                                  return _context4.abrupt("return");

                                case 10:
                                  if (this.channel.flash) {
                                    this.showFlashMessage();
                                  } else {
                                    this.router.navigate(['/channel-details/' + this.channel_id]); //window.location.href = '/channel-details/'+this.channel_id
                                  }

                                case 11:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // TODO: Kanal barkodu oluşturulken. mesajı olmayan kanlda barkod dözükmüyor doğal olarak. Mesaj barkodu gibi kanal barkoduda oluşmalı.

        }, {
          key: "showFlashMessage",
          value: function showFlashMessage() {
            if (this.channel.announce_type == 'text') {
              if (this.message_id) {
                this.router.navigate(['/text/' + this.channel_id + '/' + this.message_id]);
              } else {
                this.router.navigate(['/board-messages/' + this.channel_id]);
              }
            } else if (this.channel.announce_type == 'brochure') {
              if (this.message_id) {
                this.router.navigate(['/brochure/' + this.channel_id + '/' + this.message_id]);
              } else {
                this.router.navigate(['/board-messages/' + this.channel_id]);
              }
            } else if (this.channel.announce_type == 'food_drink_menu') {
              if (this.message_id) {
                this.router.navigate(['/food-drink-menu/' + this.channel_id + '/' + this.message_id]);
              } else {
                this.router.navigate(['/board-messages/' + this.channel_id]);
              }
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return QrScannerPage;
      }();

      QrScannerPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_services_qrscan_service__WEBPACK_IMPORTED_MODULE_7__["QrscanService"]
        }, {
          type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_6__["ChannelService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      QrScannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qr-scanner',
        template: _raw_loader_qr_scanner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qr_scanner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QrScannerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-qr-scanner-qr-scanner-module-es5.js.map