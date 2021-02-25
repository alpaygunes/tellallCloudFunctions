(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-channels-my-channels-module"], {
    /***/
    "6DXG":
    /*!*******************************************************!*\
      !*** ./src/app/pages/my-channels/my-channels.page.ts ***!
      \*******************************************************/

    /*! exports provided: MyChannelsPage */

    /***/
    function DXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyChannelsPage", function () {
        return MyChannelsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_channels_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-channels.page.html */
      "Vbd1");
      /* harmony import */


      var _my_channels_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-channels.page.scss */
      "Fh5V");
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


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var MyChannelsPage = /*#__PURE__*/function () {
        function MyChannelsPage(channelService, authService, toastController, location, alertController, loadingController, router) {
          _classCallCheck(this, MyChannelsPage);

          this.channelService = channelService;
          this.authService = authService;
          this.toastController = toastController;
          this.location = location;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.router = router;
          this.channels = [];
          this.channel_not_found = false;
        }

        _createClass(MyChannelsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 5000
                      });

                    case 2:
                      this.loading = _context.sent;
                      this.authService.afAuth.onAuthStateChanged(function (user) {
                        if (user) {
                          _this.getChannels(user.uid);
                        }
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getChannels",
          value: function getChannels(uid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loading.present();
                      this.channelService.getUserChannels().get().subscribe(function (scets) {
                        _this2.loading.dismiss();

                        _this2.channels = [];
                        _this2.channel_not_found = scets.docs.length ? false : true;

                        if (scets.docs.length) {
                          scets.docs.map(function (doc, i) {
                            var id = doc.ref.parent.parent.id;

                            _this2.channelService.getChannelInfo(id).ref.get().then(function (channel) {
                              _this2.channels.push(Object.assign({
                                'id': id
                              }, channel.data()));
                            });
                          });
                        }
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "editChannel",
          value: function editChannel(channel_id) {
            this.router.navigate(['/form-channel/' + channel_id]);
          }
        }, {
          key: "creteQR",
          value: function creteQR(channel_id) {
            this.router.navigate(['/create-qr/' + channel_id]);
          }
        }, {
          key: "addNew",
          value: function addNew(channel) {
            if (channel.announce_type == 'text') {
              this.router.navigate(['/add-message-text/' + channel.id]);
            } else if (channel.announce_type == 'brochure') {
              this.router.navigate(['/edit-message-brochure/' + channel.id]);
            } else if (channel.announce_type == 'food_drink_menu') {
              this.router.navigate(['/edit-message-food-drink-menu/' + channel.id]);
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }, {
          key: "deleteChannel",
          value: function deleteChannel(channel_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        //header: 'Onaylıyor musunuz ?',
                        message: 'Kanalınız ve mesajlar silinecek ! ',
                        buttons: [{
                          text: 'İptal',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Sil',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                              var _this4 = this;

                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      _context4.next = 2;
                                      return this.loading.present();

                                    case 2:
                                      this.channelService.deleteChannel(channel_id).then(function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                          var toast;
                                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                            while (1) {
                                              switch (_context3.prev = _context3.next) {
                                                case 0:
                                                  _context3.next = 2;
                                                  return this.loading.dismiss();

                                                case 2:
                                                  this.channels = this.channels.filter(function (c) {
                                                    if (c.id !== channel_id) {
                                                      return c;
                                                    }
                                                  });
                                                  _context3.next = 5;
                                                  return this.toastController.create({
                                                    color: 'success',
                                                    message: 'Kanal silindi.',
                                                    duration: 2000
                                                  });

                                                case 5:
                                                  toast = _context3.sent;
                                                  toast.present();

                                                case 7:
                                                case "end":
                                                  return _context3.stop();
                                              }
                                            }
                                          }, _callee3, this);
                                        }));
                                      });

                                    case 3:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee4, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "showMessages",
          value: function showMessages(channel) {
            if (channel.announce_type == 'menu') {
              this.router.navigate(['/edit-message-menu/' + channel.id]);
            } else {
              this.router.navigate(['/channel-messages/' + channel.id]);
            }
          }
        }, {
          key: "subscribers",
          value: function subscribers(channel_id) {
            this.router.navigate(['subscribers/' + channel_id]);
          }
        }]);

        return MyChannelsPage;
      }();

      MyChannelsPage.ctorParameters = function () {
        return [{
          type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      MyChannelsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-channels',
        template: _raw_loader_my_channels_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_channels_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyChannelsPage);
      /***/
    },

    /***/
    "Fh5V":
    /*!*********************************************************!*\
      !*** ./src/app/pages/my-channels/my-channels.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Fh5V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\nion-content{\n    --background: url('/assets/wall.png') 50% 30%  no-repeat,url('/assets/bg.png'),beige;  \n} \n\n\nion-item-sliding{\n    padding: 0px!important;\n}\n\nion-item-sliding ion-item{ \n    --background: rgba(255, 255, 255, 0.829);  \n    --padding-start:0px;\n}\n\nion-item-sliding ion-item ion-label { \n    margin-left: 22%; \n\n}\n\nion-item-sliding ion-item ion-label.channel-name{ \n    font-size: 18px;  \n    text-shadow: 1px 1px 1px white;\n}\n\nion-item-sliding ion-item ion-thumbnail {\n    position: absolute;\n    height: 100%;\n    width: 18%;\n}\n\n.not-found-cart { \n    box-shadow: none;\n    text-align: center;\n    position: absolute;\n    top: 60%;\n    left: 50%;\n    transform: translateY(-50%) translateX(-50%); \n    --background: transparent;\n    width: 300px;\n}\n\n.ag-tools{\n    width: 100%;\n    display: block; \n}\n\nion-card ion-icon{ \n    margin: 10px;\n    font-size: 20px;\n    opacity: .8;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL215LWNoYW5uZWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6Im15LWNoYW5uZWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy93YWxsLnBuZycpIDUwJSAzMCUgIG5vLXJlcGVhdCx1cmwoJy9hc3NldHMvYmcucG5nJyksYmVpZ2U7ICBcbn0gXG5cblxuaW9uLWl0ZW0tc2xpZGluZ3tcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xufVxuXG5pb24taXRlbS1zbGlkaW5nIGlvbi1pdGVteyBcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjkpOyAgXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBpb24tbGFiZWwgeyBcbiAgICBtYXJnaW4tbGVmdDogMjIlOyBcblxufVxuXG5pb24taXRlbS1zbGlkaW5nIGlvbi1pdGVtIGlvbi1sYWJlbC5jaGFubmVsLW5hbWV7IFxuICAgIGZvbnQtc2l6ZTogMThweDsgIFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxOCU7XG59XG5cbi5ub3QtZm91bmQtY2FydCB7IFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7IFxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYWctdG9vbHN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7IFxufVxuXG5pb24tY2FyZCBpb24taWNvbnsgXG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvcGFjaXR5OiAuODtcbn1cbiovIl19 */";
      /***/
    },

    /***/
    "Fw1W":
    /*!*********************************************************!*\
      !*** ./src/app/pages/my-channels/my-channels.module.ts ***!
      \*********************************************************/

    /*! exports provided: MyChannelsPageModule */

    /***/
    function Fw1W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyChannelsPageModule", function () {
        return MyChannelsPageModule;
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


      var _my_channels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-channels-routing.module */
      "vGmd");
      /* harmony import */


      var _my_channels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-channels.page */
      "6DXG");

      var MyChannelsPageModule = function MyChannelsPageModule() {
        _classCallCheck(this, MyChannelsPageModule);
      };

      MyChannelsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_channels_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyChannelsPageRoutingModule"]],
        declarations: [_my_channels_page__WEBPACK_IMPORTED_MODULE_6__["MyChannelsPage"]],
        providers: [{
          provide: "ag_subscribers",
          useValue: []
        }]
      })], MyChannelsPageModule);
      /***/
    },

    /***/
    "Vbd1":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-channels/my-channels.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vbd1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar > \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">  \n      <ion-tab-button (click)=\"router.navigate(['home'])\"> \n        <ion-icon name=\"home\"></ion-icon> \n      </ion-tab-button>\n      <ion-title   >Kanallarım</ion-title>\n      <ion-tab-button routerLink=\"/form-channel\"> \n        <ion-icon name=\"add-circle\"></ion-icon> \n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>    \n\n<ion-content > \n\n    <ion-card *ngFor=\"let channel of channels\">\n      <img (click)=\"showMessages(channel)\" src=\"{{channel.logo}}\"   /> \n      <ion-card-header (click)=\"showMessages(channel)\"> \n        <ion-card-title>{{channel.channel_name}}</ion-card-title>\n      </ion-card-header> \n      <ion-card-content>\n        {{channel.description}}\n      </ion-card-content>\n      <ion-toolbar>\n        <ion-row  >\n          <ion-col size=\"2\">\n            <ion-icon  (click)=\"showMessages(channel)\" name=\"chatbox-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-icon  (click)=\"editChannel(channel.id)\" name=\"settings-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-icon  (click)=\"creteQR(channel.id)\"  name=\"share-social-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon  (click)=\"subscribers(channel.id)\"  name=\"people-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-icon   color=\"danger\" (click)=\"deleteChannel(channel.id)\"   name=\"trash-outline\"></ion-icon> \n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n\n    </ion-card>\n\n\n\n<!-- NOT FOUND--> \n <ion-grid fixed *ngIf=\"channel_not_found\" style=\"margin-top: 100px;\">\n   <ion-row>\n     <ion-col size=\"12\" style=\"text-align: center;\">  \n      <ion-icon name=\"megaphone-outline\" style=\"font-size: 100px;\"></ion-icon>\n     </ion-col>\n    </ion-row> \n    <ion-row> \n     <ion-col size=\"12\">\n      <ion-button fill=\"clear\" expand=\"full\">\n        Kanalınız yok.\n      </ion-button>\n     </ion-col> \n   </ion-row>\n   <ion-row>\n     <ion-col size=\"12\"> \n      <ion-button fill=\"clear\" expand=\"full\" routerLink=\"/form-channel\">\n        <ion-icon slot=\"start\" name=\"add-circle\" ></ion-icon> \n        Hemen birtane oluşturun.\n      </ion-button> \n     </ion-col> \n   </ion-row>\n </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "vGmd":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/my-channels/my-channels-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MyChannelsPageRoutingModule */

    /***/
    function vGmd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyChannelsPageRoutingModule", function () {
        return MyChannelsPageRoutingModule;
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


      var _my_channels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-channels.page */
      "6DXG");

      var routes = [{
        path: '',
        component: _my_channels_page__WEBPACK_IMPORTED_MODULE_3__["MyChannelsPage"]
      }];

      var MyChannelsPageRoutingModule = function MyChannelsPageRoutingModule() {
        _classCallCheck(this, MyChannelsPageRoutingModule);
      };

      MyChannelsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyChannelsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-my-channels-my-channels-module-es5.js.map