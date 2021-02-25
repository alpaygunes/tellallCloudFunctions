(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewer-brochure-brochure-module"], {
    /***/
    "6JUu":
    /*!****************************************************!*\
      !*** ./src/app/viewer/brochure/brochurepg.page.ts ***!
      \****************************************************/

    /*! exports provided: BrochurePg */

    /***/
    function JUu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrochurePg", function () {
        return BrochurePg;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_brochure_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./brochure.page.html */
      "N4xJ");
      /* harmony import */


      var _brochure_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brochure.page.scss */
      "GS8O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/objects/brochure.model */
      "pkPj");
      /* harmony import */


      var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/objects/message.model */
      "Npzb");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/message.service */
      "tZre");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_viewer_brochure_popover_cat_list_brochure_popover_cat_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/viewer/brochure-popover-cat-list/brochure-popover-cat-list.page */
      "jEZn");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/url.service */
      "jOSP");

      var BrochurePg = /*#__PURE__*/function () {
        function BrochurePg(route, actionSheetController, popoverController, location, router, authService, platform, urlService, messageService) {
          _classCallCheck(this, BrochurePg);

          this.route = route;
          this.actionSheetController = actionSheetController;
          this.popoverController = popoverController;
          this.location = location;
          this.router = router;
          this.authService = authService;
          this.platform = platform;
          this.urlService = urlService;
          this.messageService = messageService;
          this.brochure = new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_5__["Brochure"]();
          this.activeCategori = new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_5__["BrochureCategory"]();
          this.activePage = new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_5__["BrochurePage"]();
          this.nextPage = null;
          this.prevPage = null;
          this.activePageIndex = 0;
          this.previousUrl = '';
        }

        _createClass(BrochurePg, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cid = this.route.snapshot.paramMap.get('cid');
            this.mid = this.route.snapshot.paramMap.get('mid');
            this.urlService.previousUrl$.subscribe(function (previousUrl) {
              _this.previousUrl = previousUrl;
            });
            this.backBtnSub = this.platform.backButton.subscribe(function () {
              _this.back();
            });
            this.messageService.getMessageById(this.cid, this.mid).ref.get().then(function (snapshot) {
              var menuVisitor = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_6__["MenuVisitor"]();
              var uid = 'anonim_visitor';

              if (_this.authService.USER) {
                uid = _this.authService.USER.uid;
              }

              menuVisitor.uid = uid;
              menuVisitor.created_at = firebase__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldValue.serverTimestamp();
              ;
              snapshot.ref.collection('visitors').add(Object.assign({}, menuVisitor));
              _this.message = snapshot.data();
              _this.brochure = _this.message.brochure;

              _this.changeCategory(_this.brochure.categories[0]);
            });
          }
        }, {
          key: "showCategoriList",
          value: function showCategoriList(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: src_app_viewer_brochure_popover_cat_list_brochure_popover_cat_list_page__WEBPACK_IMPORTED_MODULE_10__["BrochurePopoverCatListPage"],
                        componentProps: {
                          categories: this.brochure.categories
                        },
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      popover.onWillDismiss().then(function (cDat) {
                        if (cDat.data) {
                          if (cDat.data['cat'] == 'back') {
                            _this2.back();
                          } else {
                            _this2.changeCategory(cDat.data['cat']);
                          }
                        }
                      });
                      _context.next = 6;
                      return popover.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "changeCategory",
          value: function changeCategory(cat) {
            cat = cat ? cat : new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_5__["BrochureCategory"]();
            this.activeCategori = cat;
            this.activePage = cat.pages.length ? cat.pages[0] : new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_5__["BrochurePage"]();

            if (cat.pages[1]) {
              this.nextPage = cat.pages[1];
            }
          }
        }, {
          key: "changePage",
          value: function changePage(artim) {
            var _this3 = this;

            if (artim == '-') {
              this.activePage = this.prevPage;
            } else {
              this.activePage = this.nextPage;
            }

            this.activeCategori.pages.map(function (page, i) {
              if (page == _this3.activePage) {
                if (_this3.activeCategori.pages[i + 1]) {
                  _this3.nextPage = _this3.activeCategori.pages[i + 1];
                } else {
                  _this3.nextPage = null;
                }

                if (_this3.activeCategori.pages[i - 1]) {
                  _this3.prevPage = _this3.activeCategori.pages[i - 1];
                } else {
                  _this3.prevPage = null;
                }
              }
            });
          }
        }, {
          key: "openPageList",
          value: function openPageList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var action_menu, actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      action_menu = [];
                      this.activeCategori.pages.forEach(function (p, i) {
                        action_menu.push({
                          text: p.title,
                          role: 'destructive',
                          handler: function handler() {
                            _this4.activePage = p;

                            _this4.activeCategori.pages.map(function (page, i) {
                              if (page == _this4.activePage) {
                                if (_this4.activeCategori.pages[i + 1]) {
                                  _this4.nextPage = _this4.activeCategori.pages[i + 1];
                                } else {
                                  _this4.nextPage = null;
                                }

                                if (_this4.activeCategori.pages[i - 1]) {
                                  _this4.prevPage = _this4.activeCategori.pages[i - 1];
                                } else {
                                  _this4.prevPage = null;
                                }
                              }
                            });
                          }
                        });
                      });
                      _context2.next = 4;
                      return this.actionSheetController.create({
                        header: 'Sayfalar',
                        cssClass: 'my-custom-class',
                        buttons: action_menu
                      });

                    case 4:
                      actionSheet = _context2.sent;
                      _context2.next = 7;
                      return actionSheet.present();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            if (this.previousUrl == undefined || this.previousUrl == null) {
              if (this.backBtnSub) {
                this.backBtnSub.unsubscribe();
              }

              this.router.navigate(['home']);
            } else {
              this.location.back();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.backBtnSub) {
              this.backBtnSub.unsubscribe();
            }
          }
        }]);

        return BrochurePg;
      }();

      BrochurePg.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_13__["UrlService"]
        }, {
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }];
      };

      BrochurePg.propDecorators = {
        ionContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"]]
        }]
      };
      BrochurePg = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-brochure',
        template: _raw_loader_brochure_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brochure_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BrochurePg);
      /***/
    },

    /***/
    "9A/B":
    /*!**************************************************************************************!*\
      !*** ./src/app/viewer/brochure-popover-cat-list/brochure-popover-cat-list.page.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function AB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicm9jaHVyZS1wb3BvdmVyLWNhdC1saXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "GS8O":
    /*!****************************************************!*\
      !*** ./src/app/viewer/brochure/brochure.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function GS8O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\nion-footer ion-toolbar{\n    //--background:beige;\n    text-align: center;\n}\n\nion-footer ion-toolbar ion-button{\n    --border-radius: 50px;\n    width: 64px;\n    height: 64px;\n    --padding-bottom: 0px;\n    --padding-end: 0;\n    --padding-start: 0;\n    --padding-top: 0; \n}\n\nion-footer ion-toolbar ion-button.left{ \n    width: 38px;\n    height: 38px;\n}\nion-footer ion-toolbar ion-button.right{ \n    width: 38px;\n    height: 38px;\n}\n\nion-content{\n    --background:beige!important;\n    --background: url('/assets/bg.png');\n}\n\nion-card{\n    --background: #f0f0f0;\n}\n*/\nion-footer ion-toolbar {\n  text-align: center;\n}\nion-footer ion-toolbar ion-button {\n  --border-radius: 50px;\n  width: 64px;\n  height: 64px;\n  --padding-bottom: 0px;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\nion-footer ion-toolbar ion-button.left {\n  width: 38px;\n  height: 38px;\n}\nion-footer ion-toolbar ion-button.right {\n  width: 38px;\n  height: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jyb2NodXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUFtQ0E7RUFDSSxrQkFBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJicm9jaHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuaW9uLWZvb3RlciBpb24tdG9vbGJhcntcbiAgICAvLy0tYmFja2dyb3VuZDpiZWlnZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwOyBcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9uLmxlZnR7IFxuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbi5yaWdodHsgXG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xufVxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6YmVpZ2UhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnLnBuZycpO1xufVxuXG5pb24tY2FyZHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG4qL1xuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyeyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwOyBcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9uLmxlZnR7IFxuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbi5yaWdodHsgXG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "JpZm":
    /*!************************************************************!*\
      !*** ./src/app/viewer/brochure/brochure-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: BrochurePageRoutingModule */

    /***/
    function JpZm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrochurePageRoutingModule", function () {
        return BrochurePageRoutingModule;
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


      var _brochurepg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brochurepg.page */
      "6JUu");

      var routes = [{
        path: '',
        component: _brochurepg_page__WEBPACK_IMPORTED_MODULE_3__["BrochurePg"]
      }];

      var BrochurePageRoutingModule = function BrochurePageRoutingModule() {
        _classCallCheck(this, BrochurePageRoutingModule);
      };

      BrochurePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BrochurePageRoutingModule);
      /***/
    },

    /***/
    "N4xJ":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/brochure/brochure.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function N4xJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-fab vertical=\"top\"   horizontal=\"start\"  slot=\"fixed\" style=\"opacity: .8;\">\n  <ion-fab-button (click)=\"showCategoriList($event)\" >\n    <ion-icon style=\"font-size: 40px;color: white;\" name=\"menu-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-content overflow-scroll=\"true\"> \n \n  <!-- ///////////////////////////////   PAGE           /////////////////////////// -->\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let img of activePage?.images\">\n      <img src=\"{{img.url}}\">\n    </ion-slide> \n  </ion-slides>\n\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-title>{{activeCategori?.title}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n   <ion-card style=\"box-shadow: unset;\"> \n     <ion-card-header> \n      <ion-card-subtitle>{{activePage?.title}}</ion-card-subtitle>\n      <ion-card-title>{{activePage?.subtitle}}</ion-card-title>\n     </ion-card-header>    \n    <ion-card-content>\n      {{activePage?.description}}\n    </ion-card-content>\n   </ion-card>\n \n</ion-content>\n\n\n\n   <!-- ///////////////////////////////  FOOTER            ////////////////////////// -->\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"changePage('-')\" class=\"left\" style=\"color: white;\" \n                [disabled]=\"prevPage == null\">\n      <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"openPageList()\" >\n      <ion-icon name=\"book-outline\" style=\"font-size: 30px;color: white;\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"changePage('+')\" class=\"right\" style=\"color: white;\"\n                [disabled]=\"nextPage == null\">\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n";
      /***/
    },

    /***/
    "fXYm":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/brochure-popover-cat-list/brochure-popover-cat-list.page.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fXYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-list>\n    <ion-list-header lines=\"full\">\n      <ion-label><h1>Kategoriler</h1></ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let cat of categories\" button (click)=\"dismissPopover(cat)\">{{cat.title}}</ion-item>\n    <ion-item lines=\"none\"  > \n      <ion-label color=\"danger\" (click)=\"back()\"> Broşurü Kapat </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "jEZn":
    /*!************************************************************************************!*\
      !*** ./src/app/viewer/brochure-popover-cat-list/brochure-popover-cat-list.page.ts ***!
      \************************************************************************************/

    /*! exports provided: BrochurePopoverCatListPage */

    /***/
    function jEZn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrochurePopoverCatListPage", function () {
        return BrochurePopoverCatListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_brochure_popover_cat_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./brochure-popover-cat-list.page.html */
      "fXYm");
      /* harmony import */


      var _brochure_popover_cat_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brochure-popover-cat-list.page.scss */
      "9A/B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var BrochurePopoverCatListPage = /*#__PURE__*/function () {
        function BrochurePopoverCatListPage(popoverController, location) {
          _classCallCheck(this, BrochurePopoverCatListPage);

          this.popoverController = popoverController;
          this.location = location;
        }

        _createClass(BrochurePopoverCatListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissPopover",
          value: function dismissPopover(cat) {
            this.popoverController.dismiss({
              'cat': cat
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.popoverController.dismiss({
              'cat': 'back'
            });
          }
        }]);

        return BrochurePopoverCatListPage;
      }();

      BrochurePopoverCatListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      BrochurePopoverCatListPage.propDecorators = {
        categories: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      BrochurePopoverCatListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-brochure-popover-cat-list',
        template: _raw_loader_brochure_popover_cat_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brochure_popover_cat_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BrochurePopoverCatListPage);
      /***/
    },

    /***/
    "lqkX":
    /*!****************************************************!*\
      !*** ./src/app/viewer/brochure/brochure.module.ts ***!
      \****************************************************/

    /*! exports provided: BrochurePageModule */

    /***/
    function lqkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrochurePageModule", function () {
        return BrochurePageModule;
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


      var _brochure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./brochure-routing.module */
      "JpZm");
      /* harmony import */


      var _brochurepg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./brochurepg.page */
      "6JUu");
      /* harmony import */


      var src_app_viewer_brochure_popover_cat_list_brochure_popover_cat_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/viewer/brochure-popover-cat-list/brochure-popover-cat-list.page */
      "jEZn");

      var BrochurePageModule = function BrochurePageModule() {
        _classCallCheck(this, BrochurePageModule);
      };

      BrochurePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _brochure_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrochurePageRoutingModule"]],
        declarations: [_brochurepg_page__WEBPACK_IMPORTED_MODULE_6__["BrochurePg"], src_app_viewer_brochure_popover_cat_list_brochure_popover_cat_list_page__WEBPACK_IMPORTED_MODULE_7__["BrochurePopoverCatListPage"]]
      })], BrochurePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=viewer-brochure-brochure-module-es5.js.map