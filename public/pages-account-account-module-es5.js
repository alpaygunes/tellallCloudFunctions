(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
    /***/
    "3Bst":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/account-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function Bst(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "S9xc");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "4+IK":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.module.ts ***!
      \*************************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function IK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "3Bst");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "S9xc");
      /* harmony import */


      var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-image-cropper */
      "rIor");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "E4AK":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function E4AK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons   (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-buttons>\n      <ion-title  >Account</ion-title>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar> \n \n\n<ion-content #content> \n\n  <image-cropper *ngIf  =\"!agCropperClose\"\n    [imageChangedEvent]   =\"imageChangedEvent\"\n    [maintainAspectRatio]=\"true\"\n    [aspectRatio]       =\"4 / 3\"\n    [resizeToWidth]     =\"512\"\n    backgroundColor     = #000000\n    format              = \"png\"\n    (imageCropped)      =\"imageCropped($event)\"\n    (imageLoaded)       =\"imageLoaded()\"\n    (cropperReady)      =\"cropperReady()\"\n    (loadImageFailed)   =\"loadImageFailed()\">\n  </image-cropper>\n\n<div *ngIf=\"agCropperClose\">\n  <!--  ///////////////////////////////  PHOTO URL ///////////////////// -->\n  <ion-card> \n    <ion-avatar *ngIf=\"account.photoURL\">\n      <img [src]=\"account.photoURL\"/>\n    </ion-avatar>\n    <ion-avatar *ngIf=\"!account.photoURL\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-avatar>\n    <ion-button (click)=\"selectPhoto()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Güncelle\n    </ion-button>\n  </ion-card>\n\n  <!--  ///////////////////////////////  ETİKET ///////////////////// -->\n  <ion-card>\n    <ion-card-content> \n      <ion-item lines=\"none\" >\n        <ion-icon slot=\"start\" name=\"pricetag-outline\"></ion-icon>\n        <small class=\"ion-text-wrap\"> \n          Benzersiz bir etiket seçin. \n          <br>Boşluk ve özel karakterler olmamalı\n          <br>Enaz 3 karakter olmalı.\n        </small>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\"  color=\"medium\" >        \n            Etiket\n          </ion-label>\n        <ion-input [(ngModel)]='account.tag'(keyup)=isExistTag($event) placeholder=\"Benzersiz bir etiket yazın\"></ion-input>\n      </ion-item> \n\n      <ion-item lines=\"none\">\n        <ion-spinner *ngIf=\"checking\" name=\"lines-small\"></ion-spinner>\n        <ion-label color=\"danger\"  *ngIf=\"tag_exist==1\"> \n          Farklı bir etiket yazın. Bu uygun değil\n        </ion-label>\n        <ion-label color=\"success\" *ngIf=\"tag_exist==0\"> \n          Uygun\n        </ion-label>\n      </ion-item> \n\n      <input type=\"hidden\" [(ngModel)]=\"account.id\">\n    </ion-card-content>\n  </ion-card>\n\n  <!--  ///////////////////////////////  ADI SOYADI ///////////////////// -->\n  <ion-grid fixed>\n    <ion-row> \n      <ion-col size=\"12\">\n        <ion-label position=\"floating\" >Adınız Soyadınız</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row> \n      <ion-col size=\"12\">\n        <ion-input type=\"text\" placeholder=\"Adınız Soyadınız\" [(ngModel)]=\"account.displayName\"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--  /////////////////////////////// TELEFON ///////////////////// --> \n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label position=\"floating\" >Telefon</ion-label>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" placeholder=\"Telefon Numaranız\" [(ngModel)]=\"account.phoneNumber\"></ion-input>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n\n<!--  /////////////////////////////// İLETİŞİM /////////////////////  -->  \n<div id=\"anchor\"></div>\n<ion-grid fixed> \n  <ion-row>\n    <ion-col size=\"6\" style=\"padding: 15px;\">\n      <ion-label color=\"dark\" >İletişim Bilgileri</ion-label>\n    </ion-col>\n    <ion-col size=\"6\">      \n      <ion-button (click)=\"newAdress()\" fill=\"clear\" size=\"small\">  \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        Adres Ekle\n      </ion-button>\n    </ion-col>\n  </ion-row> \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button *ngFor=\"let address of addresses\" (click)=\"switchAddress(address)\" [fill]=\"(address==editedAddress)?'solid':'outline'\" size=\"small\">\n        {{address?.name}}\n      </ion-button> \n    </ion-col>\n  </ion-row>\n</ion-grid> \n\n<section *ngIf=\"editedAddress\" class=\"addresses\" >\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" id=\"name\" placeholder=\"Adres tanımı: Ev adresim, İş adresim ...\" [(ngModel)]=\"editedAddress.name\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\" id=\"adi_soyadi\"  placeholder=\"Adınız Soyadınız\" [(ngModel)]=\"editedAddress.adi_soyadi\"></ion-input>\n      </ion-col> \n    </ion-row> \n    <ion-row *ngIf=\"iller.length\"> \n      <ion-col size=\"6\"> \n        <ion-label color=\"medium\">İl</ion-label>\n      </ion-col> \n      <ion-col size=\"6\"> \n          <ion-select   ok-text=\"Tamam\" cancel-text=\"İptal\" (ionChange)=\"changeCtity($event)\" [(ngModel)]=\"editedAddress.city['id']\" multiple = \"false\" placeholder=\"Şehir seçin\">\n            <ion-select-option *ngFor=\"let city of iller\" [value]=\"city.id\">{{city.name}}</ion-select-option> \n          </ion-select> \n      </ion-col> \n    </ion-row> \n    <ion-row> \n      <ion-col size=\"6\" *ngIf=\"editedAddress.city['id']\">\n        <ion-label color=\"medium\">İlçe</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"editedAddress.city['id']\"> \n        <ion-select ok-text=\"Tamam\" cancel-text=\"İptal\" (ionChange)=\"changeTown($event)\" [(ngModel)]=\"editedAddress.town['id']\" multiple = \"false\" placeholder=\"İlçe seçin\">\n          <ion-select-option *ngFor=\"let town of ilceler\" [value]=\"town['id']\">{{town.name}}</ion-select-option> \n        </ion-select> \n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input  type=\"text\" id=\"mahalle\"  placeholder=\"Mahalle\" [(ngModel)]=\"editedAddress.mahalle\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input   type=\"text\"  id=\"cadde_sokak\" placeholder=\"Cadde, Sokak\" [(ngModel)]=\"editedAddress.cadde_sokak\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input  type=\"text\"  id=\"bina\" placeholder=\"Bina, aparman, plaza adı\"  [(ngModel)]=\"editedAddress.bina\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\"  placeholder=\"Adresin devamı varsa yazın\" [(ngModel)]=\"editedAddress.adresin_devami\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\"  id=\"tel\" placeholder=\"Telefon Num : 5XXXXXXXXX\" [(ngModel)]=\"editedAddress.tel\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\" placeholder=\"Yol tarifi yazabilirsiniz\" [(ngModel)]=\"editedAddress.yol_tarifi\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\"> \n        <ion-button (click)=\"saveAdress()\" fill=\"clear\" size=\"small\" *ngIf=\"editedAddress\"> \n          Adresi Kaydet\n        </ion-button> \n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"deleteAdress()\" fill=\"clear\" size=\"small\" *ngIf=\"editedAddress\"> \n          Adresi Sil\n        </ion-button> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</section>\n\n<!--   ///////////////////////////////////  END iletişim /////////////////////////  -->\n\n\n\n</div>\n\n<ion-button (click)=\"save()\" *ngIf=\"agCropperClose\" expand=\"block\" fill=\"clear\">\n  Bilgileri Kaydet \n</ion-button>\n   \n</ion-content>\n\n<ion-toolbar *ngIf=\"!agCropperClose\">\n  <ion-tabs (click)=\"kirp()\">\n    <ion-tab-bar    slot=\"bottom\">  \n        <ion-icon   name=\"crop-outline\"></ion-icon> \n    </ion-tab-bar>    \n  </ion-tabs>\n</ion-toolbar>";
      /***/
    },

    /***/
    "S9xc":
    /*!***********************************************!*\
      !*** ./src/app/pages/account/account.page.ts ***!
      \***********************************************/

    /*! exports provided: AccountPage */

    /***/
    function S9xc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account.page.html */
      "E4AK");
      /* harmony import */


      var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account.page.scss */
      "c5PT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/objects/account.model */
      "pRzo");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/account.service */
      "flj8");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/file.service */
      "cpn4");
      /* harmony import */


      var src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/objects/city-town.model */
      "I31H");

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(location, authService, router, fileService, loadingController, accountService) {
          _classCallCheck(this, AccountPage);

          this.location = location;
          this.authService = authService;
          this.router = router;
          this.fileService = fileService;
          this.loadingController = loadingController;
          this.accountService = accountService;
          this.account = new src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_5__["Account"]();
          this.tag_exist = 2;
          this.checking = false;
          this.iller = [];
          this.imageChangedEvent = '';
          this.agCropperClose = true;
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.iller = new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__["CityTown"]().getCityes();

                    case 1:
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.authService.USER === undefined)) {
                        _context2.next = 3;
                        break;
                      }

                      this.router.navigate(['/']);
                      return _context2.abrupt("return");

                    case 3:
                      this.getAccount();
                      this.getAddresses();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getAccount",
          value: function getAccount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this = this;

              var uid;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      uid = this.authService.USER.uid;
                      this.accountService.getAccount(uid).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
          key: "getAddresses",
          value: function getAddresses() {
            var _this2 = this;

            var uid = this.authService.USER.uid;
            this.accountService.getAddresses(uid).valueChanges({
              idField: 'id'
            }).subscribe(function (datas) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        this.addresses = datas.map(function (doc) {
                          return Object.assign({
                            id: doc.id
                          }, doc);
                        });

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
        }, {
          key: "saveAdress",
          value: function saveAdress() {
            var _this3 = this;

            var _a, _b, _c, _d, _e, _f;

            var error = false;
            document.getElementById('name').style.border = "1px solid #ccc";
            document.getElementById('adi_soyadi').style.border = "1px solid #ccc";
            document.getElementById('tel').style.border = "1px solid #ccc";
            document.getElementById('mahalle').style.border = "1px solid #ccc";
            document.getElementById('cadde_sokak').style.border = "1px solid #ccc";
            document.getElementById('bina').style.border = "1px solid #ccc";

            if (((_a = this.editedAddress.name) === null || _a === void 0 ? void 0 : _a.trim()) == '' || this.editedAddress.name === undefined) {
              document.getElementById('name').style.border = "1px solid red";
              error = true;
            }

            if (((_b = this.editedAddress.adi_soyadi) === null || _b === void 0 ? void 0 : _b.trim()) == '' || this.editedAddress.adi_soyadi === undefined) {
              document.getElementById('adi_soyadi').style.border = "1px solid red";
              error = true;
            }

            if (((_c = this.editedAddress.tel) === null || _c === void 0 ? void 0 : _c.trim()) == '' || this.editedAddress.tel === undefined) {
              document.getElementById('tel').style.border = "1px solid red";
              error = true;
            }

            if (((_d = this.editedAddress.mahalle) === null || _d === void 0 ? void 0 : _d.trim()) == '' || this.editedAddress.mahalle === undefined) {
              document.getElementById('mahalle').style.border = "1px solid red";
              error = true;
            }

            if (((_e = this.editedAddress.cadde_sokak) === null || _e === void 0 ? void 0 : _e.trim()) == '' || this.editedAddress.cadde_sokak === undefined) {
              document.getElementById('cadde_sokak').style.border = "1px solid red";
              error = true;
            }

            if (((_f = this.editedAddress.bina) === null || _f === void 0 ? void 0 : _f.trim()) == '' || this.editedAddress.bina === undefined) {
              document.getElementById('bina').style.border = "1px solid red";
              error = true;
            }

            if (error) {
              return;
            }

            var uid = this.authService.USER.uid;
            this.accountService.saveAddress(uid, this.editedAddress).then(function () {
              setTimeout(function () {
                _this3.editedAddress = _this3.addresses[_this3.addresses.length - 1];
              }, 500);
            });
          }
        }, {
          key: "deleteAdress",
          value: function deleteAdress() {
            var _this4 = this;

            if (!this.editedAddress.id) {
              this.editedAddress = null;
              return;
            }

            var uid = this.authService.USER.uid;
            this.accountService.deleteAdress(uid, this.editedAddress).then(function () {
              if (_this4.addresses[0]) {
                _this4.switchAddress(_this4.addresses[0]);
              } else {
                _this4.newAdress();
              }
            });
          }
        }, {
          key: "switchAddress",
          value: function switchAddress(address) {
            try {
              document.getElementById('name').style.border = "1px solid #ccc";
              document.getElementById('adi_soyadi').style.border = "1px solid #ccc";
              document.getElementById('tel').style.border = "1px solid #ccc";
              document.getElementById('mahalle').style.border = "1px solid #ccc";
              document.getElementById('cadde_sokak').style.border = "1px solid #ccc";
              document.getElementById('bina').style.border = "1px solid #ccc";
            } catch (error) {}

            this.editedAddress = address;
            this.ilceler = new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__["CityTown"]().getTowns(this.editedAddress.city['id']);
            var yOffset = document.getElementById("anchor").offsetTop;
            this.content.scrollToPoint(0, yOffset, 1000);
          }
        }, {
          key: "newAdress",
          value: function newAdress() {
            this.editedAddress = new src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_5__["Address"]();
            var yOffset = document.getElementById("anchor").offsetTop;
            this.content.scrollToPoint(0, yOffset, 1000);
          }
        }, {
          key: "changeCtity",
          value: function changeCtity(event) {
            var _this5 = this;

            this.ilceler = new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__["CityTown"]().getTowns(this.editedAddress.city['id']);
            this.iller.map(function (il) {
              if (event.target.value == il.id) {
                _this5.editedAddress.il_adi = il.name;
              }
            });
          }
        }, {
          key: "changeTown",
          value: function changeTown(event) {
            var _this6 = this;

            this.ilceler.map(function (ilce) {
              if (event.target.value == ilce.id) {
                _this6.editedAddress.ilce_adi = ilce.name;
              }
            });
          }
        }, {
          key: "isExistTag",
          value: function isExistTag(event) {
            var _this7 = this;

            this.checking = true;
            var elm = event.currentTarget;

            if (event.keyCode == 32) {
              elm.value = this.Cevir(elm.value);
              this.checking = false;
              return false;
            }

            if (elm.value.length < 3) {
              this.checking = false;
              this.tag_exist = 1;
              return;
            }

            elm.value = this.Cevir(elm.value);
            this.accountService.isExistTag(elm.value).then(function (res) {
              _this7.tag_exist = res ? 1 : 0;
              _this7.checking = false;
            });
          }
        }, {
          key: "Cevir",
          value: function Cevir(text) {
            var trMap = {
              'çÇ': 'c',
              'ğĞ': 'g',
              'şŞ': 's',
              'üÜ': 'u',
              'ıİ': 'i',
              'öÖ': 'o'
            };

            for (var key in trMap) {
              text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
            }

            return text.replace(/[^-a-zA-Z0-9\s]+/ig, '').replace(/\s/gi, "-").replace(/[-]+/gi, "-").toLowerCase();
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.saveAccount();

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "saveAccount",
          value: function saveAccount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this8 = this;

              var loading, prflData, a;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.account.id = this.authService.USER.uid;
                      _context8.next = 3;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 5000
                      });

                    case 3:
                      loading = _context8.sent;
                      _context8.next = 6;
                      return loading.present();

                    case 6:
                      prflData = {
                        displayName: this.account.displayName,
                        photoURL: this.account.photoURL
                      };
                      this.authService.USER.updateProfile(prflData);
                      a = this.accountService.saveAccount(this.account);
                      a.then(function (response) {
                        debugger;
                        response.subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    _context7.next = 2;
                                    return loading.dismiss();

                                  case 2:
                                    if (!(res['result'] == 'OK')) {
                                      _context7.next = 8;
                                      break;
                                    }

                                    if (res['id']) {
                                      this.tag_exist = 2;
                                    }

                                    this.router.navigate(['home']);
                                    return _context7.abrupt("return");

                                  case 8:
                                    if (res['result'] == "Error") {
                                      alert("Kayıt gerçekleşmedi" + res['message']);
                                    }

                                  case 9:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));
                        });
                      });

                    case 10:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "selectPhoto",
          value: function selectPhoto() {
            var _this9 = this;

            var BU = this;
            setTimeout(function () {
              _this9.imgInputElm = document.createElement('input');
              _this9.imgInputElm.type = "file";

              _this9.imgInputElm.setAttribute("accept", "image/*");

              _this9.imgInputElm.addEventListener('change', function (event) {
                BU.imageChangedEvent = event;
                if (event.currentTarget['files'].length) _this9.agCropperClose = false;
              });

              _this9.imgInputElm.click();
            }, 1);
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          } //----------------------------------------------      I m a g e C r o p     --------

        }, {
          key: "kirp",
          value: function kirp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this10 = this;

              var blob, file, prflBlob, filePath;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (this.account.id) {
                        _context9.next = 3;
                        break;
                      }

                      alert("Hesaba erişilemedi !");
                      return _context9.abrupt("return");

                    case 3:
                      this.imageChangedEvent = false;
                      this.agCropperClose = true;
                      blob = this.fileService.base64ToBlob(this.profilPhotoBase64);
                      file = new File([blob], 'deneme');
                      _context9.next = 9;
                      return this.fileService.resizeImage(file, 512, 512, .8);

                    case 9:
                      prflBlob = _context9.sent;
                      filePath = 'profile/' + this.account.id;
                      firebase__WEBPACK_IMPORTED_MODULE_10__["storage"]().ref(filePath).put(prflBlob).then(function (upload) {
                        upload.ref.getDownloadURL().then(function (url) {
                          _this10.account.photoURL = url;
                        })["catch"](function (err) {
                          console.log("selectPhoto : Resim storage de bulunamadı", err.messages);
                        });
                      });

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "imageCropped",
          value: function imageCropped(event) {
            this.agCropperClose = false;
            this.profilPhotoBase64 = event.base64;
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
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }];
      };

      AccountPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['content']
        }]
      };
      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountPage);
      /***/
    },

    /***/
    "c5PT":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function c5PT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-avatar {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWF2YXRhcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-account-account-module-es5.js.map