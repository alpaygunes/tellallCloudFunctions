(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
    /***/
    "DdsG":
    /*!****************************************************!*\
      !*** ./src/app/auth/login/login-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function DdsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "v04T");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "eqV2":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function eqV2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-buttons>\n      <ion-title>Giriş</ion-title>\n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n\n\n<ion-content>  \n\n    <ion-grid fixed *ngIf=\"!password_reminder\" style=\"margin-top: 150px;\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label   color=\"medium\">Eposta</ion-label>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\"  [(ngModel)]=\"email\"></ion-input>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label  color=\"medium\">Password</ion-label>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"password\" [(ngModel)]=\"password\" ></ion-input>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <small color=\"danger\" style=\"color: red;\">{{login_error}}</small>\n          <ion-button  (click)=\"login()\" color=\"secondary\" expand=\"full\" fill=\"solid\">\n            Giriş\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\"> \n          <ion-button (click)=\"password_reminder=true\"   expand=\"full\" fill=\"clear\">\n            Parolamı unuttum ! \n          </ion-button>  \n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button routerLink=\"/register\" expand=\"full\" fill=\"clear\"  >  Kayıt ol  </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid fixed style=\"margin-top: 150px;\"  *ngIf=\"password_reminder\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Eposta adresiniz</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\"  [(ngModel)]=\"email\"></ion-input>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button (click)=\"sendResetLink()\" color=\"secondary\" expand=\"full\" fill=\"solid\">\n            Parola sıfırlama linki gönder\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"password_reminder && send_reset_link_msg\">\n        <ion-col size=\"12\">\n          <ion-icon   name=\"checkmark-circle-outline\" size=\"large\" color=\"success\"></ion-icon>\n          <ion-label  color=\"success\" class=\"ion-text-wrap\">\n            {{send_reset_link_msg}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"password_reminder && send_reset_link_error\">\n        <ion-col size=\"12\"> \n          <ion-icon   name=\"close-circle-outline\" size=\"large\" color=\"danger\"></ion-icon>\n          <ion-label  color=\"danger\" class=\"ion-text-wrap\">\n            {{send_reset_link_error}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n \n\n</ion-content>";
      /***/
    },

    /***/
    "lu3c":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.module.ts ***!
      \********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function lu3c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "DdsG");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "v04T");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "v04T":
    /*!******************************************!*\
      !*** ./src/app/auth/login/login.page.ts ***!
      \******************************************/

    /*! exports provided: LoginPage */

    /***/
    function v04T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "eqV2");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "zjRc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "uJRU");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService, appVersion, loadingController, router, location, route, platform) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.appVersion = appVersion;
          this.loadingController = loadingController;
          this.router = router;
          this.location = location;
          this.route = route;
          this.platform = platform;
          this.login_error = '';
          this.password_reminder = false;
          this.send_reset_link_msg = '';
          this.send_reset_link_error = '';
          this.returnURL = 'home';
          this.loader();
        }

        _createClass(LoginPage, [{
          key: "loader",
          value: function loader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.authService.afAuth.authState.subscribe(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (user) {
                          this.router.navigate(['home']);
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
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.route.queryParams.subscribe(function (params) {
                        if (params) {
                          _this2.returnURL = params['returnURL'] ? params['returnURL'] : 'home';
                        }
                      });

                      if (this.platform.is('cordova')) {
                        this.appVersion.getAppName().then(function (n) {
                          _this2.appName = n;
                        });
                      } else {
                        this.appName = 'appName';
                      }

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var BU;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      BU = this;
                      this.login_error = '';
                      _context6.next = 4;
                      return this.loading.present();

                    case 4:
                      this.authService.login(this.email, this.password, this.returnURL).then(function (firebaseUser) {
                        var _this3 = this;

                        this.router.navigate(BU.returnURL).then(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.next = 2;
                                    return this.loading.dismiss();

                                  case 2:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        });
                      }.bind(this))["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  if (error.code == 'auth/wrong-password') {
                                    this.login_error = "Yanlış parola !";
                                  } else if (error.code == "auth/user-not-found") {
                                    this.login_error = "Kullanıcı bulunamadı";
                                  } else if (error.code == "auth/invalid-email") {
                                    this.login_error = "Eposta adresi uygun biçimde değil";
                                  } else {
                                    this.login_error = "Giriş yapılamadı.";
                                  }

                                  _context5.next = 3;
                                  return this.loading.dismiss();

                                case 3:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }.bind(this));

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "sendResetLink",
          value: function sendResetLink() {
            this.send_reset_link_error = "";
            this.send_reset_link_msg = null;
            var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            if (regexp.test(this.email)) {
              this.loading.present();
              this.authService.afAuth.sendPasswordResetEmail(this.email).then(function () {
                this.loading.dismiss();
                this.send_reset_link_msg = "Sıfırlama linki gönderdik. Lütfen gelen kutunuzu kontrol edin.";
              }.bind(this))["catch"](function (error) {
                this.loading.dismiss();

                if (error.code == 'auth/wrong-password') {
                  this.send_reset_link_error = "Yanlış parola !";
                } else if (error.code == "auth/user-not-found") {
                  this.send_reset_link_error = "Kullanıcı bulunamadı";
                } else if (error.code == "auth/invalid-email") {
                  this.send_reset_link_error = "Eposta adresi uygun biçimde değil";
                } else if (error.code == "auth/too-many-requests") {
                  this.send_reset_link_error = "Çok fazla istek yaptınız. Biraz bekleyin";
                } else {
                  this.send_reset_link_error = "Giriş yapılamadı: Bilinmeyen hata!";
                }
              }.bind(this));
            } else {
              this.send_reset_link_error = "Eposta adresi uygunsuz biçimde";
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "zjRc":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function zjRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-login-login-module-es5.js.map