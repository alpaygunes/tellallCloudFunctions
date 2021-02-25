(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /builds/alpaygunes/TellAll.app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0xJi":
    /*!*********************************************!*\
      !*** ./src/app/services/channel.service.ts ***!
      \*********************************************/

    /*! exports provided: ChannelService */

    /***/
    function xJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChannelService", function () {
        return ChannelService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/message.service */
      "tZre");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var ChannelService = /*#__PURE__*/function () {
        function ChannelService(fs, httpClient, authService, messageService) {
          _classCallCheck(this, ChannelService);

          this.fs = fs;
          this.httpClient = httpClient;
          this.authService = authService;
          this.messageService = messageService;
        }

        _createClass(ChannelService, [{
          key: "getUserChannels",
          value: function getUserChannels() {
            var _a;

            if (!((_a = this.authService.USER) === null || _a === void 0 ? void 0 : _a.uid)) {
              window.location.href = "/home";
            }

            ;
            var uid = this.authService.USER.uid;
            return this.fs.collectionGroup('screts', function (ref) {
              return ref.where("uid", "==", uid);
            });
          }
        }, {
          key: "saveChannel",
          value: function saveChannel(channel, scret) {
            var _this = this;

            if (channel.id) {
              var id = channel.id;
              delete channel.id;
              this.fs.doc('channels' + '/' + id).update(channel).then(function () {
                _this.getUserChannels();
              });
              return this.fs.doc('channels' + '/' + id).collection('screts').doc('scret_fields').update(scret);
            } else {
              delete channel.id;
              return this.fs.collection("channels").add(Object.assign({}, channel)).then(function (docRef) {
                scret.channelDoc = docRef;
                docRef.collection('screts').doc('scret_fields').set(Object.assign({}, scret));
              }.bind(this))["catch"](function (error) {
                console.error("Kanal eklenirken bir hata oldu ", error.message);
              });
            }
          }
        }, {
          key: "deleteChannel",
          value: function deleteChannel(channel_id) {
            return this.fs.collection('channels').doc(channel_id)["delete"]();
          }
        }, {
          key: "getChannelInfo",
          value: function getChannelInfo(id) {
            return this.fs.collection('channels').doc(id);
          }
        }, {
          key: "removeChannelMessages",
          value: function removeChannelMessages(channel_id) {
            this.messageService.removeAllMessegeOfChannel(channel_id).then(function () {
              console.log("Mesajlar silindi");
            });
          }
        }, {
          key: "checkSubscriptionVerify",
          value: function checkSubscriptionVerify(uid, channel_id) {
            return this.fs.collection('channels').doc(channel_id).collection('subscribers').doc(uid);
          }
        }, {
          key: "getSubscribers",
          value: function getSubscribers(channel_id) {
            return this.fs.collection('channels').doc(channel_id).collection('subscribers').ref;
          }
        }, {
          key: "getOrders",
          value: function getOrders(cid) {
            return this.fs.collection('channels').doc(cid).collection('orders');
          }
        }]);

        return ChannelService;
      }();

      ChannelService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }];
      };

      ChannelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ChannelService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyD9bmzz6cMVy_7u2kApWekC_5NyT39f1Co",
          authDomain: "cepboard-6150e.firebaseapp.com",
          databaseURL: "https://cepboard-6150e.firebaseio.com",
          projectId: "cepboard-6150e",
          storageBucket: "cepboard-6150e.appspot.com",
          messagingSenderId: "237605832842",
          appId: "1:237605832842:web:e964ea44a76d08b9a80573",
          measurementId: "G-12BVSB3THD"
        },
        googleWebClientId: '237605832842-t4li56t4rdq2b71ob435q79hna2616eo.apps.googleusercontent.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "MKys":
    /*!************************************************!*\
      !*** ./src/app/services/auth-guard.service.ts ***!
      \************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function MKys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(router, authService) {
          _classCallCheck(this, AuthGuardService);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            //return true; // burayı kaldır aktif olması için
            if (!this.authService.USER) {
              this.router.navigate(["login"], {
                queryParams: {
                  returnURL: state.url
                }
              });
              console.error("YASAKLI ADRES");
              return false;
            }

            return true;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], AuthGuardService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/url.service */
      "jOSP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "uJRU");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/user.service */
      "qfBg");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/account.service */
      "flj8");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, authService, router, userService, appVersion, urlService, menu, accountService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.authService = authService;
          this.router = router;
          this.userService = userService;
          this.appVersion = appVersion;
          this.urlService = urlService;
          this.menu = menu;
          this.accountService = accountService;
          this.selectedIndex = 0;
          this.uid = null;
          this.isAnonymous = false;
          this.userLess = false;
          this.previousUrl = null;
          this.currentUrl = null;
          this.appPages = [{
            title: 'Anasayfa',
            url: '/home',
            icon: 'home'
          }, {
            title: 'Aboneliklerim',
            url: '/my-ears',
            icon: 'thumbs-up'
          }, {
            title: 'Kanallarım',
            url: '/my-channels',
            icon: 'megaphone'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.statusBar.styleDefault();
                        this.statusBar.backgroundColorByHexString('#ffffff');
                        this.splashScreen.hide();

                        if (this.platform.is('cordova')) {
                          this.appVersion.getVersionNumber().then(function (v) {
                            _this3.versionNumber = v;
                          });
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = window.location.pathname.split('/')[1];

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }

            this.getUser();
            this.setPreviousUrl();
          }
        }, {
          key: "setPreviousUrl",
          value: function setPreviousUrl() {
            var _this4 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"];
            })).subscribe(function (event) {
              _this4.previousUrl = _this4.currentUrl;
              _this4.currentUrl = event.url;

              _this4.urlService.setPreviousUrl(_this4.previousUrl);
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this5 = this;

            this.authService.afAuth.authState.subscribe(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (user) {
                          this.menu.enable(true);
                          this.authService.USER = user;
                          this.user = user;
                          this.uid = this.user.uid;
                          this.isAnonymous = this.user.isAnonymous;
                          this.userLess = false;
                          this.getAccount();
                        } else {
                          this.menu.enable(false);
                          this.user = null;
                          this.uid = null;
                          this.userLess = true;
                        }

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var uid;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      uid = this.authService.USER.uid;
                      this.accountService.getAccount(uid).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (data) {
                                    this.account = data;
                                  }

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "goRoute",
          value: function goRoute(route) {
            this.router.navigate([route]);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.menu.close();
            this.selectedIndex = 101;
            this.authService.logout();
            this.account = null;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__["AppVersion"]
        }, {
          type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_9__["UrlService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\"  >\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n\n          <div *ngIf=\"user\">\n            <ion-item lines=\"none\" *ngIf=\"!account\">\n              <ion-avatar style=\"margin: auto;width: 30%;height: auto;\" *ngIf=\"user.photoURL\">\n                <img  src=\"{{user.photoURL}}\" >\n              </ion-avatar>\n              <span style=\"display: block;margin: auto;\" *ngIf=\"!user.photoURL\">\n                <ion-icon style=\"font-size: 64px;\"   name=\"person-circle\"></ion-icon>\n              </span>\n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"account\">\n              <ion-avatar style=\"margin: auto;width: 80px;height: 80px;\" *ngIf=\"account.photoURL\">\n                <img  src=\"{{account.photoURL}}\" >\n              </ion-avatar>\n              <span style=\"display: block;margin: auto;\" *ngIf=\"!account.photoURL\">\n                <ion-icon style=\"font-size: 64px;\"   name=\"person-circle\"></ion-icon>\n              </span>\n            </ion-item>\n            \n            <ion-item lines=\"none\" style=\"--padding-end: 0px;\" *ngIf=\"!userLess\">   \n                <ion-label *ngIf=\"user.displayName\" style=\"text-align: center\">{{user.displayName}}</ion-label> \n            </ion-item>\n            <ion-item lines=\"none\" *ngIf=\"user.email\">\n              <ion-note style=\"margin: auto;margin-top: 0;--padding-end: 0px;\">{{user.email}}</ion-note>\n            </ion-item>\n          </div>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click) = \"goRoute(p.url)\"  lines = \"none\"   >\n              <ion-icon slot=\"start\" name=\"{{p.icon}}\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list>\n\n        <ion-list>\n            <ion-menu-toggle auto-hide=\"false\" *ngIf=\"(isAnonymous || userLess)\">\n              <ion-item (click) = \"goRoute('login')\"  lines = \"none\"   >\n                <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n                <ion-label>Giriş</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n\n            <ion-menu-toggle auto-hide=\"false\" *ngIf=\"uid && !isAnonymous\">\n              <ion-item (click) = \"logout()\"  lines = \"none\"   >\n                <ion-icon slot=\"start\" name=\"exit\"></ion-icon>\n                <ion-label>Çıkış</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n\n            <ion-menu-toggle auto-hide=\"false\" *ngIf=\"uid && !isAnonymous\">\n              <ion-item (click) = \"goRoute('account')\"  lines = \"none\"  >\n                <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n                <ion-label>Üyelik Bilgilerim</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"settings-outline\"></ion-icon>\n        <ion-badge slot=\"end\" color=\"light\" class=\"version\" >Version :{{versionNumber}}</ion-badge>\n      </ion-item>\n      \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    \n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _services_channel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/channel.service */
      "0xJi");
      /* harmony import */


      var _services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/message.service */
      "tZre");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "up+p");
      /* harmony import */


      var _services_url_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/url.service */
      "jOSP");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "uJRU");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "/XPu"); //import { AuthService } from 'src/app/services/auth.service';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__["GooglePlus"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_21__["SocialSharing"], _services_channel_service__WEBPACK_IMPORTED_MODULE_14__["ChannelService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], _services_message_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"], _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_16__["QRScanner"], _services_url_service__WEBPACK_IMPORTED_MODULE_19__["UrlService"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__["AppVersion"], {
          provide: "rootURL",
          useValue: "https://cepboard.com"
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "flj8":
    /*!*********************************************!*\
      !*** ./src/app/services/account.service.ts ***!
      \*********************************************/

    /*! exports provided: AccountService */

    /***/
    function flj8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(fs, rootURL, httpClient) {
          _classCallCheck(this, AccountService);

          this.fs = fs;
          this.rootURL = rootURL;
          this.httpClient = httpClient;
        }

        _createClass(AccountService, [{
          key: "isExistTag",
          value: function isExistTag(tag) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var exist;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      exist = true;
                      return _context5.abrupt("return", this.fs.collection('accounts').ref.where('tag', '==', tag).get().then(function (snapshot) {
                        exist = snapshot.docs.length ? true : false;
                        return exist;
                      }));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getAccount",
          value: function getAccount(uid) {
            var a = this.fs.collection('accounts').doc(uid).ref.get();
            return a.then(function (acc) {
              return Object.assign({}, acc.data());
            });
          }
        }, {
          key: "getAddresses",
          value: function getAddresses(uid) {
            return this.fs.collection('accounts').doc(uid).collection('addresses');
          }
        }, {
          key: "saveAddress",
          value: function saveAddress(uid, editedAddress) {
            if (!editedAddress.id) {
              editedAddress.id = this.fs.createId();
            }

            return this.fs.collection('accounts').doc(uid).collection('addresses').doc(editedAddress.id).set(Object.assign({}, editedAddress));
          }
        }, {
          key: "saveAccount",
          value: function saveAccount(account) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var headers, options, url;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                      headers.append("Accept", 'application/json');
                      headers.append('Content-Type', 'application/json');
                      headers.append('Access-Control-Allow-Origin', '*');
                      options = {
                        headers: headers
                      }; //rootURL olacak

                      url = this.rootURL + "/SaveAccount";
                      return _context6.abrupt("return", this.httpClient.post(url, account, options));

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "deleteAdress",
          value: function deleteAdress(uid, editedAddress) {
            return this.fs.collection('accounts').doc(uid).collection('addresses').doc(editedAddress.id)["delete"]();
          }
        }]);

        return AccountService;
      }();

      AccountService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: URL,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ["rootURL"]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AccountService);
      /***/
    },

    /***/
    "jOSP":
    /*!*****************************************!*\
      !*** ./src/app/services/url.service.ts ***!
      \*****************************************/

    /*! exports provided: UrlService */

    /***/
    function jOSP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlService", function () {
        return UrlService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var UrlService = /*#__PURE__*/function () {
        function UrlService() {
          _classCallCheck(this, UrlService);

          this.previousUrl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.previousUrl$ = this.previousUrl.asObservable();
        }

        _createClass(UrlService, [{
          key: "setPreviousUrl",
          value: function setPreviousUrl(previousUrl) {
            this.previousUrl.next(previousUrl);
          }
        }]);

        return UrlService;
      }();

      UrlService.ctorParameters = function () {
        return [];
      };

      UrlService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UrlService);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "up+p");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(afAuth, googlePlus, loadingController, platform, router) {
          _classCallCheck(this, AuthService);

          this.afAuth = afAuth;
          this.googlePlus = googlePlus;
          this.loadingController = loadingController;
          this.platform = platform;
          this.router = router;
          this.loader();
        }

        _createClass(AuthService, [{
          key: "loader",
          value: function loader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 5000
                      });

                    case 2:
                      this.loading = _context7.sent;

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "anonymousLogin",
          value: function anonymousLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this7 = this;

              var BU;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      BU = this;
                      return _context8.abrupt("return", new Promise(function (res, rej) {
                        _this7.afAuth.signInAnonymously().then(function () {
                          _this7.afAuth.onAuthStateChanged(function (user) {
                            if (user) {
                              BU.USER = user;
                              res(user);
                            }
                          })["catch"](function (error) {
                            res(null);
                          });
                        })["catch"](function (error) {
                          res(null);
                        });
                      }));

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "login",
          value: function login(email, password, returnURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.afAuth.signInWithEmailAndPassword(email, password).then(function (data) {
                        if (data) {
                          _this8.USER = data.user;

                          _this8.router.navigate(['home']);
                        }
                      });

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.afAuth.signOut().then(function () {
                        _this9.USER = null;

                        _this9.router.navigate(['guest']).then(function () {//window.location.reload();
                        });
                      });

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "register",
          value: function register(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.afAuth.createUserWithEmailAndPassword(email, password).then(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  _context11.next = 2;
                                  return this.sendEmailVerification();

                                case 2:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      })["catch"](function (error) {
                        alert("Biçimsiz eposta formatı");
                      });

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "sendEmailVerification",
          value: function sendEmailVerification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var BU;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      BU = this;
                      return _context13.abrupt("return", this.afAuth.currentUser.then(function (u) {
                        return u.sendEmailVerification();
                      }).then(function () {
                        alert("Doğrulama için eposta adresi gönderdik");
                        BU.router.navigate(['/home']).then(function () {//window.location.reload()
                        });
                      })["catch"](function () {
                        alert("Hata! Doğrulama için eposta gönderemedik");
                      }));

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "loginWithGoogle",
          value: function loginWithGoogle(returnURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var BU;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.loading.present();
                      BU = this;
                      _context15.next = 4;
                      return this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider()).then(function (data) {
                        var _this11 = this;

                        BU.USER = data.user;
                        BU.router.navigate([returnURL]).then(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                            return regeneratorRuntime.wrap(function _callee14$(_context14) {
                              while (1) {
                                switch (_context14.prev = _context14.next) {
                                  case 0:
                                    BU.loading.dismiss();

                                  case 1:
                                  case "end":
                                    return _context14.stop();
                                }
                              }
                            }, _callee14);
                          }));
                        });
                      })["catch"](function (error) {
                        alert(error.message);
                      });

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "doNativeGoogleLogin",
          value: function doNativeGoogleLogin(returnURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this12 = this;

              var BU;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.loading.present();

                    case 2:
                      BU = this;
                      this.googlePlus.login({
                        'scopes': '',
                        'webClientId': src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].googleWebClientId,
                        'offline': true
                      }).then(function (user) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                          var _this13 = this;

                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                            while (1) {
                              switch (_context17.prev = _context17.next) {
                                case 0:
                                  BU.USER = user;
                                  _context17.next = 3;
                                  return this.loading.present();

                                case 3:
                                  BU.router.navigate([returnURL]).then(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                                      return regeneratorRuntime.wrap(function _callee16$(_context16) {
                                        while (1) {
                                          switch (_context16.prev = _context16.next) {
                                            case 0:
                                              _context16.next = 2;
                                              return this.loading.dismiss();

                                            case 2:
                                            case "end":
                                              return _context16.stop();
                                          }
                                        }
                                      }, _callee16, this);
                                    }));
                                  });
                                  _context17.next = 6;
                                  return this.afAuth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(user.idToken));

                                case 6:
                                case "end":
                                  return _context17.stop();
                              }
                            }
                          }, _callee17, this);
                        }));
                      }, function (err) {
                        console.log(err);

                        if (!_this12.platform.is('cordova')) {
                          alert("doNativeGoogleLogin hata");
                        }
                      });

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var UserService = /*#__PURE__*/function () {
        function UserService(fs, toastController) {
          _classCallCheck(this, UserService);

          this.fs = fs;
          this.toastController = toastController; //user_ears:Channel[]=[];

          this.user_ears = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(UserService, [{
          key: "subsicribeToChannel",
          value: function subsicribeToChannel(USER, channel_id, password, confirmation_required) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var user_to_channel, r, toast, _toast;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      user_to_channel = {
                        uid: USER.uid,
                        created_at: firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp(),
                        channelDoc: this.fs.collection('channels').doc(channel_id).ref,
                        password: password,
                        veryfied: confirmation_required ? false : true,
                        displayName: USER.displayName,
                        email: USER.email
                      };
                      _context19.prev = 1;
                      _context19.next = 4;
                      return this.fs.collection('channels').doc(channel_id).collection('subscribers').doc(USER.uid).set(Object.assign({}, user_to_channel));

                    case 4:
                      r = _context19.sent;
                      _context19.next = 7;
                      return this.toastController.create({
                        color: 'dark',
                        message: confirmation_required ? 'Abonelik isteği gönderildi. Onay bekleniyor' : 'Abone oldunuz.',
                        duration: 2000
                      });

                    case 7:
                      toast = _context19.sent;
                      toast.present();
                      return _context19.abrupt("return", true);

                    case 12:
                      _context19.prev = 12;
                      _context19.t0 = _context19["catch"](1);
                      _context19.next = 16;
                      return this.toastController.create({
                        color: 'danger',
                        message: "Abonelik işlemi sırasında bir hata oldu !",
                        duration: 2000
                      });

                    case 16:
                      _toast = _context19.sent;

                      _toast.present();

                      return _context19.abrupt("return", false);

                    case 19:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this, [[1, 12]]);
            }));
          }
        }, {
          key: "unsubscribeFromChannel",
          value: function unsubscribeFromChannel(channel_id, subscribe_id) {
            return this.fs.collection('channels').doc(channel_id).collection('subscribers').doc(subscribe_id)["delete"]();
          }
        }, {
          key: "checkChannelExistInUserEarsList",
          value: function checkChannelExistInUserEarsList(uid, channel_id) {
            return this.fs.collection('channels').doc(channel_id).collection('subscribers').doc(uid);
          }
        }, {
          key: "getUserEars",
          value: function getUserEars(uid) {
            return this.fs.collectionGroup('subscribers', function (ref) {
              return ref.where("uid", "==", uid);
            });
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "tZre":
    /*!*********************************************!*\
      !*** ./src/app/services/message.service.ts ***!
      \*********************************************/

    /*! exports provided: MessageService */

    /***/
    function tZre(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var MessageService = /*#__PURE__*/function () {
        function MessageService(fs, authService, storage) {
          _classCallCheck(this, MessageService);

          this.fs = fs;
          this.authService = authService;
          this.storage = storage;
        }

        _createClass(MessageService, [{
          key: "save",
          value: function save(message, cid, doc_id) {
            return this.fs.collection('channels').doc(cid).collection('messages').doc(doc_id).set(Object.assign({}, message));
          }
        }, {
          key: "saveMenu",
          value: function saveMenu(message, cid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var id, upload;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      id = message.id;
                      delete message.id;
                      _context20.next = 4;
                      return this.uploadFiles(message, cid);

                    case 4:
                      upload = _context20.sent;

                      if (!upload) {
                        console.log("Resimler Gönderilemedi");
                      }

                      message = JSON.parse(JSON.stringify(message));

                      if (!id) {
                        _context20.next = 11;
                        break;
                      }

                      return _context20.abrupt("return", this.fs.collection('channels').doc(cid).collection('messages').doc(id).update(Object.assign({}, message)).then(function () {
                        console.log("Menü Güncellendi");
                      }));

                    case 11:
                      message.created_at = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp();
                      return _context20.abrupt("return", this.fs.collection('channels').doc(cid).collection('messages').add(Object.assign({}, message)).then(function () {
                        console.log("Yeni Menü Kaydedildi");
                      }));

                    case 13:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "saveBrochure",
          value: function saveBrochure(message, cid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var id;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.uploadBroshureImages(message.brochure, cid);

                    case 2:
                      id = message.id;
                      delete message.id;
                      message = JSON.parse(JSON.stringify(message));

                      if (!id) {
                        _context21.next = 9;
                        break;
                      }

                      return _context21.abrupt("return", this.fs.collection('channels').doc(cid).collection('messages').doc(id).update(Object.assign({}, message)).then(function (res) {
                        return res;
                      }));

                    case 9:
                      message.created_at = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp();
                      return _context21.abrupt("return", this.fs.collection('channels').doc(cid).collection('messages').add(Object.assign({}, message)).then(function (res) {
                        return res;
                      }));

                    case 11:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "saveFoodDrinkMenu",
          value: function saveFoodDrinkMenu(message, cid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var id;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.uploadFoodDrinkMenuImages(message.food_drink_menu, cid);

                    case 2:
                      id = message.id;
                      delete message.id;
                      message = JSON.parse(JSON.stringify(message));

                      if (!id) {
                        _context22.next = 9;
                        break;
                      }

                      return _context22.abrupt("return", this.fs.collection('channels').doc(cid).collection('messages').doc(id).update(Object.assign({}, message)).then(function (res) {
                        return res;
                      }));

                    case 9:
                      message.created_at = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp();
                      return _context22.abrupt("return", this.fs.collection('channels').doc(cid).collection('messages').add(Object.assign({}, message)).then(function (res) {
                        return res;
                      }));

                    case 11:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "uploadBroshureImages",
          value: function uploadBroshureImages(broshure, cid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _this14 = this;

              var prms;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      prms = [];
                      broshure.categories.map(function (cat) {
                        cat.pages.map(function (page) {
                          page.images.map(function (img) {
                            if (!img.File) return;
                            var prm = new Promise(function (res) {
                              _this14.resizeImage(img.File).then(function (Blob) {
                                var filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + img.id;
                                firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then(function (gsfile) {
                                  gsfile.ref.getDownloadURL().then(function (url) {
                                    img.File = null;
                                    img.base64data = null;
                                    img.url = url;
                                    res();
                                  });
                                });
                              });
                            });
                            prms.push(prm);
                          });
                        });
                      });
                      _context23.next = 4;
                      return Promise.all(prms);

                    case 4:
                      return _context23.abrupt("return", _context23.sent);

                    case 5:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23);
            }));
          }
        }, {
          key: "uploadFoodDrinkMenuImages",
          value: function uploadFoodDrinkMenuImages(foodDrinkMenu, cid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this15 = this;

              var prms;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      prms = [];
                      foodDrinkMenu.categories.map(function (cat) {
                        cat.foods.map(function (page) {
                          page.images.map(function (img) {
                            if (!img.File) return;
                            var prm = new Promise(function (res) {
                              _this15.resizeImage(img.File).then(function (Blob) {
                                var filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + img.id;
                                firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then(function (gsfile) {
                                  gsfile.ref.getDownloadURL().then(function (url) {
                                    img.File = null;
                                    img.base64data = null;
                                    img.url = url;
                                    res();
                                  });
                                });
                              });
                            });
                            prms.push(prm);
                          });
                        });
                      });
                      _context24.next = 4;
                      return Promise.all(prms);

                    case 4:
                      return _context24.abrupt("return", _context24.sent);

                    case 5:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }));
          }
        }, {
          key: "sendFeedBack",
          value: function sendFeedBack(feedback, cid, message_id) {
            var uid = new Date().getTime().toString();

            if (window.localStorage.getItem('anonim_uid')) {
              uid = window.localStorage.getItem('anonim_uid');
            } else {
              window.localStorage.setItem('anonim_uid', uid);
            }

            if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
              uid = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
            }

            feedback.uid = uid;
            feedback = JSON.parse(JSON.stringify(feedback));
            return this.fs.collection('channels').doc(cid).collection('messages').doc(message_id).collection('feedbacks').doc(uid).set(Object.assign({}, feedback));
          }
        }, {
          key: "deleteMessage",
          value: function deleteMessage(id, cid) {
            return this.fs.collection('channels').doc(cid).collection('messages').doc(id)["delete"]();
          }
        }, {
          key: "removeAllMessegeOfChannel",
          value: function removeAllMessegeOfChannel(cid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this16 = this;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      return _context25.abrupt("return", new Promise(function (resolve, reject) {
                        _this16.fs.collection('channels').doc(cid).collection("messages").get().subscribe(function (m) {
                          m.forEach(function (a) {
                            _this16.fs.collection('channels').doc(cid).collection("messages").doc(a.id)["delete"]();
                          });
                          console.log("removeAllMessegeOfChannel aboneliği tetiklendi");
                          resolve(true);
                        });
                      })["catch"](function (err) {
                        console.log("Mesajlar silinirken hata oldu : " + err);
                      }));

                    case 1:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25);
            }));
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles(message, cid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var _this17 = this;

              var itemPrms, catPrms, all;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      itemPrms = new Promise(function (res, rej) {
                        var itemFiles = [];
                        Object.keys(message.menu['items']).forEach(function (i) {
                          if (message.menu['items'][i].logoFiles) {
                            itemFiles[i] = message.menu['items'][i].logoFiles;
                            message.menu['items'][i].logo = '';
                          }

                          delete message.menu['items'][i].logoFiles;
                        });

                        if (Object.keys(itemFiles).length) {
                          var _loop = function _loop(i) {
                            _this17.resizeImage(itemFiles[i][0]).then(function (Blob) {
                              var filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + i;
                              firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then(function () {
                                res();
                              });
                            });
                          };

                          for (var i in itemFiles) {
                            _loop(i);
                          }
                        } else {
                          res();
                        }
                      })["catch"](function () {
                        return console.log("Categori resmi gönderilemedi");
                      });
                      catPrms = new Promise(function (res, rej) {
                        var categoriFiles = [];
                        Object.keys(message.menu['categories']).forEach(function (k) {
                          if (message.menu['categories'][k].logoFiles) {
                            categoriFiles[k] = message.menu['categories'][k].logoFiles;
                            message.menu['categories'][k].logo = '';
                          }

                          delete message.menu['categories'][k].logoFiles;
                        });

                        if (Object.keys(categoriFiles).length) {
                          var _loop2 = function _loop2(k) {
                            _this17.resizeImage(categoriFiles[k][0]).then(function (Blob) {
                              var filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + k;
                              firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath).put(Blob).then(function () {
                                res(true);
                              });
                            });
                          };

                          for (var k in categoriFiles) {
                            _loop2(k);
                          }
                        } else {
                          res(false);
                        }
                      })["catch"](function () {
                        return console.log("İtem resmi gönderilemedi");
                      });
                      all = new Promise(function (res, rej) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                          var _this18 = this;

                          return regeneratorRuntime.wrap(function _callee27$(_context27) {
                            while (1) {
                              switch (_context27.prev = _context27.next) {
                                case 0:
                                  _context27.next = 2;
                                  return catPrms.then(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
                                      return regeneratorRuntime.wrap(function _callee26$(_context26) {
                                        while (1) {
                                          switch (_context26.prev = _context26.next) {
                                            case 0:
                                              _context26.next = 2;
                                              return itemPrms.then(function () {
                                                res(true);
                                              })["catch"](function () {
                                                rej(false);
                                              });

                                            case 2:
                                            case "end":
                                              return _context26.stop();
                                          }
                                        }
                                      }, _callee26);
                                    }));
                                  })["catch"](function () {
                                    rej(false);
                                  });

                                case 2:
                                case "end":
                                  return _context27.stop();
                              }
                            }
                          }, _callee27);
                        }));
                      });
                      _context28.next = 5;
                      return all;

                    case 5:
                      return _context28.abrupt("return", _context28.sent);

                    case 6:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28);
            }));
          }
        }, {
          key: "resizeImage",
          value: function resizeImage(file) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return new Promise(function (res, rej) {
                        var resizedFile;
                        var reader = new FileReader();
                        reader.readAsDataURL(file);

                        reader.onload = function (revent) {
                          var img = new Image();

                          img.onload = function (oimg) {
                            var resizeCanvas = document.createElement("canvas");
                            var ctx = resizeCanvas.getContext("2d");
                            resizeCanvas.width = 512;
                            resizeCanvas.height = img.height * (512 / img.width);
                            ctx.drawImage(img, 0, 0, resizeCanvas.width, resizeCanvas.height);
                            resizeCanvas.toBlob(function (blob) {
                              res(blob);
                            }, 'image/jpeg', 0.95);
                          };

                          img.src = revent.target.result;
                        };

                        reader.onerror = function (error) {
                          console.log("File resize edilemedi " + error);
                          rej(error);
                        };
                      })["catch"](function (e) {
                        console.log("File resize edilemedi " + e);
                      });

                    case 2:
                      return _context29.abrupt("return", _context29.sent);

                    case 3:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29);
            }));
          }
        }, {
          key: "deleteFilesFromStorage",
          value: function deleteFilesFromStorage(_deleteFilesFromStorage, cid) {
            _deleteFilesFromStorage.forEach(function (filesID) {
              var filePath = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + cid + '/' + filesID;
              firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref(filePath)["delete"]().then(function () {
                return console.log("Belge Silindi");
              })["catch"](function (err) {
                return console.log("Belge silinemedi", err);
              });
            });
          }
        }, {
          key: "getTextMessages",
          value: function getTextMessages(cid) {
            return this.fs.collection('channels').doc(cid).collection('messages', function (ref) {
              return ref.where("type", "==", "text").orderBy("created_at", "desc");
            });
          }
        }, {
          key: "getBrochureMessages",
          value: function getBrochureMessages(cid) {
            return this.fs.collection('channels').doc(cid).collection('messages', function (ref) {
              return ref.where("type", "==", "brochure").orderBy("created_at", "desc");
            });
          }
        }, {
          key: "getFoodDrinkMessages",
          value: function getFoodDrinkMessages(cid) {
            return this.fs.collection('channels').doc(cid).collection('messages', function (ref) {
              return ref.where("type", "==", "food_drink_menu").orderBy("created_at", "desc");
            });
          }
        }, {
          key: "getUserFeedbackIfExist",
          value: function getUserFeedbackIfExist(cid, mid) {
            return this.fs.collection('channels').doc(cid).collection('messages').doc(mid).collection('feedbacks').doc(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid);
          }
        }, {
          key: "getAllMessages",
          value: function getAllMessages(cid) {
            return this.fs.collection('channels').doc(cid).collection('messages');
          }
        }, {
          key: "getMenuMessage",
          value: function getMenuMessage(cid) {
            return this.fs.collection('channels').doc(cid).collection('messages', function (ref) {
              return ref.where("type", "==", "menu").orderBy("created_at", "desc").limit(1);
            });
          }
        }, {
          key: "getMessageById",
          value: function getMessageById(cid, mid) {
            return this.fs.collection('channels').doc(cid).collection('messages').doc(mid);
          }
        }, {
          key: "getFeedBackByUID",
          value: function getFeedBackByUID(mid, cid) {
            var uid = new Date().getTime().toString();

            if (window.localStorage.getItem('anonim_uid')) {
              uid = window.localStorage.getItem('anonim_uid');
            } else {
              window.localStorage.setItem('anonim_uid', uid);
            }

            if (firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
              uid = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
            }

            return this.fs.doc('/channels/' + cid + '/messages/' + mid + '/feedbacks/' + uid).ref.get();
          }
        }, {
          key: "getMessageStats",
          value: function getMessageStats(mid, cid) {
            return this.fs.doc('/channels/' + cid + '/messages/' + mid + '/feedbacks/stats');
          }
        }, {
          key: "getMessageReplyes",
          value: function getMessageReplyes(mid, cid, start_after_doc, limit) {
            if (start_after_doc) {
              return this.fs.collection('/channels/' + cid + '/messages/' + mid + '/feedbacks', function (ref) {
                return ref.startAfter(start_after_doc).limit(limit);
              });
            } else {
              return this.fs.collection('/channels/' + cid + '/messages/' + mid + '/feedbacks', function (ref) {
                return ref.limit(limit);
              });
            }
          }
        }]);

        return MessageService;
      }();

      MessageService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }];
      };

      MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MessageService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      "MKys");

      var routes = [{
        path: '',
        redirectTo: 'guest',
        pathMatch: 'full'
      }, {
        path: 'my-ears',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-my-ears-my-ears-module */
          "pages-my-ears-my-ears-module").then(__webpack_require__.bind(null,
          /*! ./pages/my-ears/my-ears.module */
          "jlO9")).then(function (m) {
            return m.MyEarsPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'my-channels',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-my-channels-my-channels-module */
          "pages-my-channels-my-channels-module").then(__webpack_require__.bind(null,
          /*! ./pages/my-channels/my-channels.module */
          "Fw1W")).then(function (m) {
            return m.MyChannelsPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'form-ear',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-form-ear-form-ear-module */
          "pages-form-ear-form-ear-module").then(__webpack_require__.bind(null,
          /*! ./pages/form-ear/form-ear.module */
          "bz6l")).then(function (m) {
            return m.FormEarPageModule;
          });
        }
      }, {
        path: 'form-channel',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-channel-form-channel-module */
          [__webpack_require__.e("default~pages-account-account-module~pages-form-channel-form-channel-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-channel-form-channel-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-channel/form-channel.module */
          "p1Rs")).then(function (m) {
            return m.FormChannelPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'form-channel/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-form-channel-form-channel-module */
          [__webpack_require__.e("default~pages-account-account-module~pages-form-channel-form-channel-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-form-channel-form-channel-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/form-channel/form-channel.module */
          "p1Rs")).then(function (m) {
            return m.FormChannelPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'add-message-text',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-add-message-text-add-message-text-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-add-message-text-add-message-text-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/add-message-text/add-message-text.module */
          "/r3U")).then(function (m) {
            return m.AddMessageTextPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'add-message-text/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-add-message-text-add-message-text-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-add-message-text-add-message-text-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/add-message-text/add-message-text.module */
          "/r3U")).then(function (m) {
            return m.AddMessageTextPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'channel-messages/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-channel-messages-channel-messages-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-channel-messages-channel-messages-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/channel-messages/channel-messages.module */
          "LDEp")).then(function (m) {
            return m.ChannelMessagesPageModule;
          });
        }
      }, {
        path: 'board-messages/:cid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-board-messages-board-messages-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-board-messages-board-messages-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/board-messages/board-messages.module */
          "rZqS")).then(function (m) {
            return m.BoardMessagesPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'board-messages/:cid/:mid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-board-messages-board-messages-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-board-messages-board-messages-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/board-messages/board-messages.module */
          "rZqS")).then(function (m) {
            return m.BoardMessagesPageModule;
          });
        }
      }, {
        path: 'channel-details/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-channel-details-channel-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-channel-details-channel-details-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/channel-details/channel-details.module */
          "FTb4")).then(function (m) {
            return m.ChannelDetailsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-login-login-module */
          "auth-login-login-module").then(__webpack_require__.bind(null,
          /*! ./auth/login/login.module */
          "lu3c")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-register-register-module */
          "auth-register-register-module").then(__webpack_require__.bind(null,
          /*! ./auth/register/register.module */
          "UrDz")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'create-qr/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-create-qr-create-qr-module */
          "pages-create-qr-create-qr-module").then(__webpack_require__.bind(null,
          /*! ./pages/create-qr/create-qr.module */
          "iy5y")).then(function (m) {
            return m.CreateQrPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-account-account-module */
          [__webpack_require__.e("default~pages-account-account-module~pages-form-channel-form-channel-module"), __webpack_require__.e("default~pages-account-account-module~pages-cart-cart-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-account-account-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/account/account.module */
          "4+IK")).then(function (m) {
            return m.AccountPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'message-stats/:cid/:mid',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-message-stats-message-stats-module */
          "pages-message-stats-message-stats-module").then(__webpack_require__.bind(null,
          /*! ./pages/message-stats/message-stats.module */
          "DdGS")).then(function (m) {
            return m.MessageStatsPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'menu-stats/:cid/:mid',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-menu-stats-menu-stats-module */
          "pages-menu-stats-menu-stats-module").then(__webpack_require__.bind(null,
          /*! ./pages/menu-stats/menu-stats.module */
          "jACn")).then(function (m) {
            return m.MenuStatsPageModule;
          });
        }
      }, {
        path: 'edit-message-brochure/:cid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-edit-message-brochure-edit-message-brochure-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-brochure-edit-message-brochure-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/edit-message-brochure/edit-message-brochure.module */
          "A4jc")).then(function (m) {
            return m.EditMessageBrochurePageModule;
          });
        }
      }, {
        path: 'edit-message-brochure/:cid/:mid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-edit-message-brochure-edit-message-brochure-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-brochure-edit-message-brochure-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/edit-message-brochure/edit-message-brochure.module */
          "A4jc")).then(function (m) {
            return m.EditMessageBrochurePageModule;
          });
        }
      }, {
        path: 'brochure/:cid/:mid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | viewer-brochure-brochure-module */
          [__webpack_require__.e("common"), __webpack_require__.e("viewer-brochure-brochure-module")]).then(__webpack_require__.bind(null,
          /*! ./viewer/brochure/brochure.module */
          "lqkX")).then(function (m) {
            return m.BrochurePageModule;
          });
        }
      }, {
        path: 'edit-message-food-drink-menu/:cid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/edit-message-food-drink-menu/edit-message-food-drink-menu.module */
          "k3dg")).then(function (m) {
            return m.EditMessageFoodDrinkMenuPageModule;
          });
        }
      }, {
        path: 'edit-message-food-drink-menu/:cid/:mid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/edit-message-food-drink-menu/edit-message-food-drink-menu.module */
          "k3dg")).then(function (m) {
            return m.EditMessageFoodDrinkMenuPageModule;
          });
        }
      }, {
        path: 'food-drink-menu/:cid/:mid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | viewer-food-drink-menu-food-drink-menu-module */
          [__webpack_require__.e("common"), __webpack_require__.e("viewer-food-drink-menu-food-drink-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./viewer/food-drink-menu/food-drink-menu.module */
          "thdm")).then(function (m) {
            return m.FoodDrinkMenuPageModule;
          });
        }
      }, {
        path: 'qr-scanner',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-qr-scanner-qr-scanner-module */
          "pages-qr-scanner-qr-scanner-module").then(__webpack_require__.bind(null,
          /*! ./pages/qr-scanner/qr-scanner.module */
          "3Vir")).then(function (m) {
            return m.QrScannerPageModule;
          });
        }
      }, {
        path: 'text/:cid/:mid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | viewer-text-text-module */
          [__webpack_require__.e("common"), __webpack_require__.e("viewer-text-text-module")]).then(__webpack_require__.bind(null,
          /*! ./viewer/text/text.module */
          "ySKb")).then(function (m) {
            return m.TextPageModule;
          });
        }
      }, {
        path: 'guest',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-guest-guest-module */
          "pages-guest-guest-module").then(__webpack_require__.bind(null,
          /*! ./pages/guest/guest.module */
          "UbqY")).then(function (m) {
            return m.GuestPageModule;
          });
        }
      }, {
        path: 'subscribers/:cid',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-subscribers-subscribers-module */
          "pages-subscribers-subscribers-module").then(__webpack_require__.bind(null,
          /*! ./pages/subscribers/subscribers.module */
          "Pn0e")).then(function (m) {
            return m.SubscribersPageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-cart-cart-module */
          [__webpack_require__.e("default~pages-account-account-module~pages-cart-cart-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-cart-cart-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/cart/cart.module */
          "sFz8")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'orders/:cid',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-orders-orders-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/orders/orders.module */
          "Xlj8")).then(function (m) {
            return m.OrdersPageModule;
          });
        }
      }, {
        path: 'order-details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-order-details-order-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-order-details-order-details-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/order-details/order-details.module */
          "j2J9")).then(function (m) {
            return m.OrderDetailsPageModule;
          });
        }
      }, {
        path: 'customer-orders',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-customer-orders-customer-orders-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-customer-orders-customer-orders-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/customer-orders/customer-orders.module */
          "yvKD")).then(function (m) {
            return m.CustomerOrdersPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".version {\n  font-size: 12px;\n  font-weight: unset;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQU9BO0VBQ0UsMkVBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BOztFQUVFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSwyREFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxzREFBQTtBQVJGOztBQVdBO0VBQ0UsK0JBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxzQkFBQTtBQVJGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsK0JBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVdBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQVRGOztBQVlBO0VBQ0UsaUNBQUE7QUFURiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FscGF5Z3VuZXNcbi52ZXJzaW9ue1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcbn1cblxuXG5cblxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map