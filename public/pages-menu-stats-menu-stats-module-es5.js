(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-stats-menu-stats-module"], {
    /***/
    "HlrC":
    /*!***************************************************************!*\
      !*** ./src/app/pages/menu-stats/menu-stats-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: MenuStatsPageRoutingModule */

    /***/
    function HlrC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuStatsPageRoutingModule", function () {
        return MenuStatsPageRoutingModule;
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


      var _menu_stats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-stats.page */
      "Shv/");

      var routes = [{
        path: '',
        component: _menu_stats_page__WEBPACK_IMPORTED_MODULE_3__["MenuStatsPage"]
      }];

      var MenuStatsPageRoutingModule = function MenuStatsPageRoutingModule() {
        _classCallCheck(this, MenuStatsPageRoutingModule);
      };

      MenuStatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuStatsPageRoutingModule);
      /***/
    },

    /***/
    "L6Vh":
    /*!************************************************!*\
      !*** ./src/app/services/menu-stats.service.ts ***!
      \************************************************/

    /*! exports provided: MenuStatsService */

    /***/
    function L6Vh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuStatsService", function () {
        return MenuStatsService;
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

      var MenuStatsService = /*#__PURE__*/function () {
        function MenuStatsService(fs) {
          _classCallCheck(this, MenuStatsService);

          this.fs = fs;
        }

        _createClass(MenuStatsService, [{
          key: "getStatsData",
          value: function getStatsData(time, cid, mid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var dateStart;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      dateStart = new Date(time);
                      return _context.abrupt("return", this.fs.collection('channels').doc(cid).collection('messages').doc(mid).collection('visitors').ref.where('created_at', '>', dateStart));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MenuStatsService;
      }();

      MenuStatsService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      MenuStatsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MenuStatsService);
      /***/
    },

    /***/
    "Shv/":
    /*!*****************************************************!*\
      !*** ./src/app/pages/menu-stats/menu-stats.page.ts ***!
      \*****************************************************/

    /*! exports provided: MenuStatsPage */

    /***/
    function Shv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuStatsPage", function () {
        return MenuStatsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_stats_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu-stats.page.html */
      "b/GS");
      /* harmony import */


      var _menu_stats_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-stats.page.scss */
      "fCOf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_menu_stats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/menu-stats.service */
      "L6Vh");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var MenuStatsPage = /*#__PURE__*/function () {
        function MenuStatsPage(route, loadingController, location, menuStatsService) {
          _classCallCheck(this, MenuStatsPage);

          this.route = route;
          this.loadingController = loadingController;
          this.location = location;
          this.menuStatsService = menuStatsService;
          this.stats_data = [];
          this.lastDay = 30;
          this.visitor_count = [];
          this.visitor_sigular_count = [];
        }

        _createClass(MenuStatsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.cid = this.route.snapshot.paramMap.get('cid');
                      this.mid = this.route.snapshot.paramMap.get('mid');
                      _context2.next = 4;
                      return this.getServerTime();

                    case 4:
                      this.serverTime = _context2.sent;
                      this.getVisitorsDatas();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getServerTime",
          value: function getServerTime() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var time;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      time = Date.now();
                      _context3.next = 3;
                      return firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('/.info/serverTimeOffset').once('value').then(function stv(data) {
                        time = data.val() + Date.now();
                      }, function (err) {
                        console.error("Server Time alınırken ", err.message);
                      });

                    case 3:
                      return _context3.abrupt("return", time);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "getVisitorsDatas",
          value: function getVisitorsDatas() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this = this;

              var loading, serverTime;
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
                      serverTime = this.serverTime - this.lastDay * 24 * 60 * 60 * 1000;
                      this.menuStatsService.getStatsData(serverTime, this.cid, this.mid).then(function (ref) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this2 = this;

                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  ref.get().then(function (snapshot) {
                                    _this2.stats_data = snapshot.docs.map(function (doc) {
                                      return Object.assign({}, doc.data());
                                    });

                                    _this2.visitorCount(30);

                                    _this2.singularVisitorCount(30);

                                    _this2.visitorCount(7);

                                    _this2.singularVisitorCount(7);

                                    _this2.visitorCount(1);

                                    _this2.singularVisitorCount(1);

                                    _this2.visitorCount(1 / 24);

                                    _this2.singularVisitorCount(1 / 24);
                                  });

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));
                      });

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "visitorCount",
          value: function visitorCount(day_count) {
            var _this3 = this;

            var strtTime = this.serverTime - day_count * 24 * 60 * 60 * 1000;
            this.visitor_count[day_count] = 0;
            this.stats_data.map(function (doc) {
              if (doc.created_at.seconds > strtTime / 1000) {
                _this3.visitor_count[day_count]++;
              }
            });
            return this.visitor_count[day_count];
          }
        }, {
          key: "singularVisitorCount",
          value: function singularVisitorCount(day_count) {
            var _this4 = this;

            var strtTime = this.serverTime - day_count * 24 * 60 * 60 * 1000;
            this.visitor_sigular_count = [];
            this.stats_data.map(function (doc) {
              if (doc.created_at.seconds > strtTime / 1000) {
                if (!_this4.visitor_sigular_count[doc.uid]) {
                  _this4.visitor_sigular_count[doc.uid] = 1;
                }
              }
            });
            return Object.keys(this.visitor_sigular_count).length;
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return MenuStatsPage;
      }();

      MenuStatsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: src_app_services_menu_stats_service__WEBPACK_IMPORTED_MODULE_5__["MenuStatsService"]
        }];
      };

      MenuStatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-stats',
        template: _raw_loader_menu_stats_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_stats_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuStatsPage);
      /***/
    },

    /***/
    "b/GS":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-stats/menu-stats.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bGS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-button  fill=\"clear\" size=\"small\"  (click)=\"back()\" >\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-button> \n      <ion-title>Menu İstatistikleri</ion-title>\n    </ion-tab-bar>\n    </ion-tabs>\n</ion-toolbar>\n \n \n\n<ion-content>\n  \n  <ion-card  >\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son 30 Gün</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(30)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(30)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son Yedi Gün</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(7)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(7)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son 24 Saat</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"today-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(1)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(1)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card> \n  \n  <ion-card>\n    <ion-item>   \n      <ion-card-title color=\"secondary\">Son Bir Saat</ion-card-title>    \n      <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\n    </ion-item> \n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label color=\"medium\">Toplam </ion-label> \n        <ion-badge color=\"medium\" slot=\"end\">{{visitorCount(1/24)}}</ion-badge>\n      </ion-item>\n      <ion-item  lines=\"none\"> \n        <ion-label color=\"medium\">Tekil </ion-label> \n        <ion-badge color=\"warning\" slot=\"end\">{{singularVisitorCount(1/24)}}</ion-badge>\n      </ion-item>\n    </ion-card-content>\n  </ion-card> \n\n</ion-content>\n";
      /***/
    },

    /***/
    "fCOf":
    /*!*******************************************************!*\
      !*** ./src/app/pages/menu-stats/menu-stats.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function fCOf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\nion-card-content ion-badge{\n    font-size: 32px;\n}\n\nion-card{\n    box-shadow:none;\n    border:1px solid rgb(235, 230, 211);\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnUtc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJtZW51LXN0YXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tY2FyZC1jb250ZW50IGlvbi1iYWRnZXtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbmlvbi1jYXJke1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMzUsIDIzMCwgMjExKTtcbn1cbiovIl19 */";
      /***/
    },

    /***/
    "jACn":
    /*!*******************************************************!*\
      !*** ./src/app/pages/menu-stats/menu-stats.module.ts ***!
      \*******************************************************/

    /*! exports provided: MenuStatsPageModule */

    /***/
    function jACn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuStatsPageModule", function () {
        return MenuStatsPageModule;
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


      var _menu_stats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-stats-routing.module */
      "HlrC");
      /* harmony import */


      var _menu_stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-stats.page */
      "Shv/");

      var MenuStatsPageModule = function MenuStatsPageModule() {
        _classCallCheck(this, MenuStatsPageModule);
      };

      MenuStatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_stats_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuStatsPageRoutingModule"]],
        declarations: [_menu_stats_page__WEBPACK_IMPORTED_MODULE_6__["MenuStatsPage"]]
      })], MenuStatsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-menu-stats-menu-stats-module-es5.js.map