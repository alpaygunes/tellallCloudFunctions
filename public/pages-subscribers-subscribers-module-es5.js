(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subscribers-subscribers-module"], {
    /***/
    "/fKn":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/subscribers/subscribers.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fKn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button  fill=\"clear\" size=\"small\"  (click)=\"back()\"  >\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-tab-button> \n      <ion-title *ngIf=\"showed_list\">Aboneler</ion-title> \n      <ion-title *ngIf=\"!showed_list\">Onay Bekleyenler</ion-title>  \n      <ion-tab-button (click)=\"router.navigate(['home'])\"> \n        <ion-icon name=\"home\"></ion-icon> \n      </ion-tab-button>  \n    </ion-tab-bar>    \n  </ion-tabs>\n</ion-toolbar>  \n\n<ion-content> \n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-icon slot=\"start\" name=\"checkmark-done-circle-outline\"></ion-icon>\n      <ion-button (click)=\"switchList(true)\"    fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"people-outline\"></ion-icon>\n          Aboneleri Listele\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"switchList(false)\"     fill=\"clear\" size=\"small\"> \n        <ion-icon slot=\"start\" name=\"checkmark-outline\"></ion-icon>\n          Bekleyenleri Listele\n      </ion-button>\n    </ion-col>\n  </ion-row> \n\n  <!--  /////////////////////    HEPSİ   ////////////////////////// --> \n  <ion-list  >\n    <ion-item *ngIf=\"!subscribers?.length\" lines=\"full\">\n      <ion-label>Listelenecek öğe yok</ion-label>\n    </ion-item>\n    <div *ngFor=\"let subscriber of subscribers\">\n      \n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"subscriber.photoURL\" *ngIf=\"subscriber.photoURL\">\n          <ion-icon style=\"font-size: 40px;\" name=\"person-circle-outline\" *ngIf=\"!subscriber.photoURL\"></ion-icon>\n        </ion-avatar>\n        <ion-label> \n          <h2 *ngIf=\"subscriber.displayName\">{{subscriber.displayName}}</h2>\n          <h2 *ngIf=\"!subscriber.displayName\">{{subscriber.email}}</h2>  \n        </ion-label>\n        <ion-button (click)=\"unSubscribe(subscriber)\" fill=\"clear\">\n          <ion-icon  name=\"person-remove-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"verify(subscriber)\" fill=\"clear\" *ngIf=\"subscriber.veryfied==false\">\n          <ion-icon    name=\"checkmark-circle-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n\n    </div>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"getSubscribers('prev')\" [disabled]=\"noBefor\"   fill=\"clear\" style=\"position: absolute;right: 0;\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-circle-outline\"></ion-icon>\n      </ion-button> \n    </ion-col>\n    <ion-col size=\"6\">    \n      <ion-button (click)=\"getSubscribers('next')\" [disabled]=\"noNext\"  fill=\"clear\" >\n        <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\n      </ion-button>\n  </ion-col>\n  </ion-row>\n  <!--  /////////////////////    ONAY BEKLEYENLER   ////////////////////////// -->\n\n</ion-content>\n";
      /***/
    },

    /***/
    "HtUY":
    /*!**************************************************!*\
      !*** ./src/app/services/subscription.service.ts ***!
      \**************************************************/

    /*! exports provided: SubscriptionService */

    /***/
    function HtUY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscriptionService", function () {
        return SubscriptionService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SubscriptionService = /*#__PURE__*/function () {
        function SubscriptionService(fs, toastController) {
          _classCallCheck(this, SubscriptionService);

          this.fs = fs;
          this.toastController = toastController;
        }

        _createClass(SubscriptionService, [{
          key: "verify",
          value: function verify(cid, sbscrb_id) {
            return this.fs.collection('channels').doc(cid).collection('subscribers').doc(sbscrb_id).update({
              veryfied: true
            });
          }
        }]);

        return SubscriptionService;
      }();

      SubscriptionService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SubscriptionService);
      /***/
    },

    /***/
    "NwGF":
    /*!*********************************************************!*\
      !*** ./src/app/pages/subscribers/subscribers.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function NwGF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\nion-content{\n     --background: beige;  \n} \n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1YnNjcmliZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUFBIiwiZmlsZSI6InN1YnNjcmliZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tY29udGVudHtcbiAgICAgLS1iYWNrZ3JvdW5kOiBiZWlnZTsgIFxufSBcbiovIl19 */";
      /***/
    },

    /***/
    "Pn0e":
    /*!*********************************************************!*\
      !*** ./src/app/pages/subscribers/subscribers.module.ts ***!
      \*********************************************************/

    /*! exports provided: SubscribersPageModule */

    /***/
    function Pn0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscribersPageModule", function () {
        return SubscribersPageModule;
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


      var _subscribers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./subscribers-routing.module */
      "v30u");
      /* harmony import */


      var _subscribers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./subscribers.page */
      "q+1u");

      var SubscribersPageModule = function SubscribersPageModule() {
        _classCallCheck(this, SubscribersPageModule);
      };

      SubscribersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _subscribers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscribersPageRoutingModule"]],
        declarations: [_subscribers_page__WEBPACK_IMPORTED_MODULE_6__["SubscribersPage"]]
      })], SubscribersPageModule);
      /***/
    },

    /***/
    "q+1u":
    /*!*******************************************************!*\
      !*** ./src/app/pages/subscribers/subscribers.page.ts ***!
      \*******************************************************/

    /*! exports provided: SubscribersPage */

    /***/
    function q1u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscribersPage", function () {
        return SubscribersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_subscribers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./subscribers.page.html */
      "/fKn");
      /* harmony import */


      var _subscribers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./subscribers.page.scss */
      "NwGF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/channel.service */
      "0xJi");
      /* harmony import */


      var src_app_services_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/subscription.service */
      "HtUY");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/account.service */
      "flj8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var SubscribersPage = /*#__PURE__*/function () {
        function SubscribersPage(route, accountService, alertController, subscription, router, location, toastController, userService, channelService, loadingController) {
          _classCallCheck(this, SubscribersPage);

          this.route = route;
          this.accountService = accountService;
          this.alertController = alertController;
          this.subscription = subscription;
          this.router = router;
          this.location = location;
          this.toastController = toastController;
          this.userService = userService;
          this.channelService = channelService;
          this.loadingController = loadingController;
          this.showed_list = true;
          this.start_after_docs = [];
          this.noNext = false;
          this.noBefor = true;
          this.limit = 2;
          this.current_page_num = 0;
        }

        _createClass(SubscribersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cid = this.route.snapshot.paramMap.get('cid');
            this.getSubscribers('next');
          }
        }, {
          key: "getSubscribers",
          value: function getSubscribers(cmd) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var start_doc, loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (cmd == 'next' && !this.noNext) {
                        this.current_page_num++;
                      } else if (cmd == 'prev' && !this.noBefor) {
                        this.current_page_num--;
                        this.noNext = false;
                      }

                      this.noBefor = this.current_page_num - 1 ? false : true;
                      start_doc = this.start_after_docs[this.current_page_num - 1] ? this.start_after_docs[this.current_page_num - 1] : null;
                      _context3.next = 5;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 5000
                      });

                    case 5:
                      loading = _context3.sent;
                      _context3.next = 8;
                      return loading.present();

                    case 8:
                      if (start_doc) {
                        this.channelService.getSubscribers(this.cid).orderBy('created_at', 'desc').where('veryfied', '==', this.showed_list).startAfter(start_doc).limit(this.limit).get().then(function (sbscrb) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return loading.dismiss();

                                  case 2:
                                    this.subscribers = sbscrb.docs.map(function (doc) {
                                      return doc.data();
                                    });
                                    this.getUserProfileImage();
                                    this.start_after_docs[this.current_page_num] = sbscrb.docs[sbscrb.docs.length - 1];

                                    if (sbscrb.docs.length < this.limit) {
                                      this.noNext = true;
                                    }

                                  case 6:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        });
                      } else {
                        //end if
                        this.channelService.getSubscribers(this.cid).where('veryfied', '==', this.showed_list).orderBy('created_at', 'desc').limit(this.limit).get().then(function (sbscrb) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return loading.dismiss();

                                  case 2:
                                    this.subscribers = sbscrb.docs.map(function (doc) {
                                      return doc.data();
                                    });
                                    this.getUserProfileImage();
                                    this.start_after_docs[this.current_page_num] = sbscrb.docs[sbscrb.docs.length - 1];

                                    if (sbscrb.docs.length < this.limit) {
                                      this.noNext = true;
                                    }

                                  case 6:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                      } //end else


                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "switchList",
          value: function switchList(showed_list) {
            this.showed_list = showed_list;
            this.current_page_num = 0;
            this.start_after_docs = [];
            this.noNext = false;
            this.noBefor = true;
            this.getSubscribers('next');
          }
        }, {
          key: "unSubscribe",
          value: function unSubscribe(subscriber) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Abonolik işlemini iptal ediyorsunuz ?',
                        buttons: [{
                          text: 'Tamam',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                              var _this3 = this;

                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      this.userService.unsubscribeFromChannel(this.cid, subscriber.uid).then(function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                          var toast;
                                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                              switch (_context4.prev = _context4.next) {
                                                case 0:
                                                  _context4.next = 2;
                                                  return this.toastController.create({
                                                    color: 'dark',
                                                    message: "Abonelik sonlandırıldı",
                                                    duration: 1000
                                                  });

                                                case 2:
                                                  toast = _context4.sent;
                                                  toast.present();
                                                  this.subscribers = this.subscribers.filter(function (sbsc) {
                                                    if (sbsc != subscriber) {
                                                      return sbsc;
                                                    }
                                                  });

                                                case 5:
                                                case "end":
                                                  return _context4.stop();
                                              }
                                            }
                                          }, _callee4, this);
                                        }));
                                      });

                                    case 1:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5, this);
                            }));
                          }
                        }, {
                          text: 'Vazgeç',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "verify",
          value: function verify(subscriber) {
            var _this4 = this;

            this.subscription.verify(this.cid, subscriber.uid).then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var toast;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.toastController.create({
                          color: 'success',
                          message: "Abonelik onaylandı",
                          duration: 1000
                        });

                      case 2:
                        toast = _context8.sent;
                        toast.present();
                        subscriber.veryfied = true;
                        this.subscribers = this.subscribers.filter(function (sbsc) {
                          if (sbsc != subscriber) {
                            return sbsc;
                          }
                        });

                      case 6:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            });
          }
        }, {
          key: "getUserProfileImage",
          value: function getUserProfileImage() {
            var _this5 = this;

            this.subscribers.map(function (subscriber) {
              _this5.accountService.getAccount(subscriber.uid).then(function (data) {
                subscriber['photoURL'] = data.photoURL;
              });
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }]);

        return SubscribersPage;
      }();

      SubscribersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: src_app_services_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }];
      };

      SubscribersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscribers',
        template: _raw_loader_subscribers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscribers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SubscribersPage);
      /***/
    },

    /***/
    "v30u":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/subscribers/subscribers-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SubscribersPageRoutingModule */

    /***/
    function v30u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscribersPageRoutingModule", function () {
        return SubscribersPageRoutingModule;
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


      var _subscribers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./subscribers.page */
      "q+1u");

      var routes = [{
        path: '',
        component: _subscribers_page__WEBPACK_IMPORTED_MODULE_3__["SubscribersPage"]
      }];

      var SubscribersPageRoutingModule = function SubscribersPageRoutingModule() {
        _classCallCheck(this, SubscribersPageRoutingModule);
      };

      SubscribersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SubscribersPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-subscribers-subscribers-module-es5.js.map