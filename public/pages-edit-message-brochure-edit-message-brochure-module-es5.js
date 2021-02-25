(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-message-brochure-edit-message-brochure-module"], {
    /***/
    "3f20":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/edit-message-brochure/edit-message-brochure-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: EditMessageBrochurePageRoutingModule */

    /***/
    function f20(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMessageBrochurePageRoutingModule", function () {
        return EditMessageBrochurePageRoutingModule;
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


      var _edit_message_brochure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-message-brochure.page */
      "GzU6");

      var routes = [{
        path: '',
        component: _edit_message_brochure_page__WEBPACK_IMPORTED_MODULE_3__["EditMessageBrochurePage"]
      }];

      var EditMessageBrochurePageRoutingModule = function EditMessageBrochurePageRoutingModule() {
        _classCallCheck(this, EditMessageBrochurePageRoutingModule);
      };

      EditMessageBrochurePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditMessageBrochurePageRoutingModule);
      /***/
    },

    /***/
    "5b6Z":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/edit-message-brochure/edit-message-brochure.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function b6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\nion-thumbnail{\n    display: block;\n    float: left;\n    padding: 7px;\n    width: 100%;\n    height: auto;\n    border: 1px solid #ccc;\n    margin-left: auto;\n    margin-right: auto;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtbWVzc2FnZS1icm9jaHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoiZWRpdC1tZXNzYWdlLWJyb2NodXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pb24tdGh1bWJuYWlse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4qL1xuICJdfQ== */";
      /***/
    },

    /***/
    "A4jc":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/edit-message-brochure/edit-message-brochure.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: EditMessageBrochurePageModule */

    /***/
    function A4jc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMessageBrochurePageModule", function () {
        return EditMessageBrochurePageModule;
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


      var _edit_message_brochure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-message-brochure-routing.module */
      "3f20");
      /* harmony import */


      var _edit_message_brochure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-message-brochure.page */
      "GzU6");

      var EditMessageBrochurePageModule = function EditMessageBrochurePageModule() {
        _classCallCheck(this, EditMessageBrochurePageModule);
      };

      EditMessageBrochurePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_message_brochure_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditMessageBrochurePageRoutingModule"]],
        declarations: [_edit_message_brochure_page__WEBPACK_IMPORTED_MODULE_6__["EditMessageBrochurePage"]]
      })], EditMessageBrochurePageModule);
      /***/
    },

    /***/
    "CvKm":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-message-brochure/edit-message-brochure.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CvKm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar > \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"back()\" *ngIf=\"showedElement == 'cat_list'\"> \n          <ion-icon name=\"chevron-back-outline\" ></ion-icon> \n        </ion-button>\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"showedElement='cat_list'\" *ngIf=\"showedElement == 'edit_cat'\">\n          <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n        </ion-button> \n        <ion-button fill=\"clear\" size=\"small\" (click)=\"showedElement='cat_list'\" *ngIf=\"showedElement == 'list_page'\">\n          <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"showedElement='list_page'\" *ngIf=\"showedElement == 'edit_page'\">\n          <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n        </ion-button> \n        <ion-title *ngIf=\"showedElement == 'edit_page'\">Sayfa Düzenle</ion-title>\n        <ion-title *ngIf=\"showedElement == 'list_page'\">Sayfa Listesi</ion-title>\n        <ion-title *ngIf=\"showedElement == 'edit_cat'\">Bölüm Düzenle</ion-title>\n        <ion-title *ngIf=\"showedElement == 'cat_list'\">Broşür Düzenle</ion-title>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar> \n\n<ion-content> \n  <!-- //////////////////////////  BROŞÜR ADI    ///////////////////////////  -->\n  <ion-grid fixed *ngIf=\"showedElement == 'cat_list'\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label>Broşür Başlığı</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" placeholder=\"Etkili bir başlık bulun\" [(ngModel)]='brochure.title'></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label>Alt Başlık</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input type=\"text\" [(ngModel)]='brochure.subtitle'></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- //////////////////////////  SHOW CATEGORY LİST ///////////////////////////// --> \n  <div *ngIf=\"showedElement == 'cat_list' && brochure.categories.length\" style=\"margin-top: 50px;\" >\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\" name=\"bookmark-outline\"></ion-icon>\n      <ion-label>Bölümler</ion-label>\n    </ion-item> \n    <!-- sıradaki kategori-->\n    <ion-reorder-group (ionItemReorder)=\"doReorderCat($event)\" disabled=\"false\"> \n      <ion-item-sliding *ngFor=\"let categori of brochure.categories\">\n        <ion-card> \n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-label>{{categori.title}}</ion-label>\n              <ion-reorder slot=\"end\" ></ion-reorder>\n            </ion-item> \n          </ion-card-content>\n          <ion-row>\n            <ion-col size=\"2\"> \n            </ion-col>\n            <ion-col size=\"4\" (click)=\"deleteCategory(categori)\">\n              <ion-icon   name=\"trash-outline\"></ion-icon> \n            </ion-col>\n            <ion-col size=\"4\" (click)=\"editCategory(categori)\">\n              <ion-icon   name=\"create-outline\"></ion-icon> \n            </ion-col>\n            <ion-col size=\"2\"  (click)=\"listPage(categori)\">\n              <ion-icon   name=\"book-outline\"></ion-icon> \n            </ion-col> \n          </ion-row>\n        </ion-card>\n      </ion-item-sliding>\n    </ion-reorder-group><!-- sıradaki kategori END-->  \n  </div>\n  <ion-button (click)=\"addCategori()\"  fill=\"clear\" size=\"small\" expand=\"full\" *ngIf=\"(brochure.categories.length || showAddCategoriButtonForFirstInput) && showedElement == 'cat_list'\"> \n    Bölüm Ekle\n  </ion-button> \n\n\n  <!-- //////////////////////////  EDİT CATEGORY ///////////////////////////// --> \n  <section *ngIf=\"showedElement == 'edit_cat'\">\n    <ion-grid fixed >\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Bölüm Başlığı</ion-label>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" [(ngModel)]=\"edited_brochure_category.title\" placeholder=\"Kategori Adı Yazın\"></ion-input>\n        </ion-col> \n      </ion-row>\n  \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>Alt Başlık</ion-label>\n        </ion-col> \n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" [(ngModel)]=\"edited_brochure_category.subtitle\"  placeholder=\"Alt Başlık Yazın\"></ion-input>\n        </ion-col> \n      </ion-row>\n    </ion-grid>\n  </section>\n \n\n  <!-- //////////////////////////  LIST PAGE ///////////////////////////// -->\n  <section *ngIf=\"showedElement == 'list_page'\">  \n    <ion-icon  name=\"book-outline\" style=\"font-size: 50px;margin-left: auto;margin-right:auto; display: block;margin-top: 50px;margin-bottom: 20px;\"></ion-icon>\n    <ion-reorder-group (ionItemReorder)=\"doReorderPage($event)\" disabled=\"false\"> \n      <ion-item-sliding *ngFor=\"let page of edited_brochure_category.pages\">\n        <ion-item (click)=\"editPage(page)\" lines=\"full\">\n          <ion-label>{{page.title}}</ion-label>\n          <ion-reorder slot=\"end\"></ion-reorder>  \n        </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"deletePage(page)\">\n            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n          </ion-item-option> \n        </ion-item-options>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\" (click)=\"editPage(page)\">\n            <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n          </ion-item-option> \n        </ion-item-options>\n      </ion-item-sliding> \n    </ion-reorder-group>      \n    <ion-button (click)=\"addPage()\" expand=\"full\" fill=\"clear\" size=\"small\" > \n      Sayfa Ekle\n    </ion-button> \n  </section> \n \n\n  <!-- //////////////////////////  EDİT PAGE /////////////////////////////  -->\n  <section *ngIf=\"showedElement == 'edit_page'\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label >Sayfa Başlığı</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"12\"> \n          <ion-input type=\"text\" placeholder=\"Sayfa Başlığı\" [(ngModel)]=\"edited_brochure_page.title\"></ion-input>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\"> \n            <ion-label>Alt Başlık</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" placeholder=\"Alt Başlık\" [(ngModel)]=\"edited_brochure_page.subtitle\"></ion-input>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\"> \n            <ion-label position=\"floating\">Açıklama</ion-label>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-textarea rows=\"15\" id=\"ag-desicription\" placeholder=\"Ürün açıklamasını yazın\" \n                        [(ngModel)]=\"edited_brochure_page.description\" color=\"medium\"></ion-textarea>\n        </ion-col>\n      </ion-row> \n    </ion-grid>\n\n    <ion-button (click)=\"addImage()\" expand=\"full\" fill=\"clear\"> \n      Resim Ekle\n    </ion-button>   \n    <ion-card *ngFor=\"let img of edited_brochure_page.images\"> \n      <ion-card-content>   \n          <img *ngIf=\"img.base64data\" src=\"{{img.base64data}}\"/>\n          <img *ngIf=\"img.url\" src=\"{{img.url}}\" />         \n        <ion-button (click)=\"removeImage(img)\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Delete\n        </ion-button>\n      </ion-card-content> \n    </ion-card>\n  \n\n  </section>\n\n\n\n</ion-content>\n\n<!--    BROŞÜRE kaydet düğmesi                -->\n<ion-button (click)=\"save()\" *ngIf=\"showedElement=='cat_list'\"   expand=\"full\"  color=\"primary\" >\n  Broşürü Kaydet\n</ion-button> \n\n\n<!--      bölüm kaydet düğmesi                -->\n<ion-button (click)=\"saveCategory()\" *ngIf=\"showedElement == 'edit_cat'\"  expand=\"full\" color=\"secondary\"  >\n  Kaydet\n</ion-button> \n\n<!--      sayfa kaydet düğmesi                -->\n<ion-button (click)=\"savePage()\" *ngIf=\"showedElement == 'edit_page'\"  expand=\"full\" color=\"secondary\">\n  Tamam\n</ion-button> ";
      /***/
    },

    /***/
    "GzU6":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/edit-message-brochure/edit-message-brochure.page.ts ***!
      \***************************************************************************/

    /*! exports provided: EditMessageBrochurePage */

    /***/
    function GzU6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMessageBrochurePage", function () {
        return EditMessageBrochurePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_message_brochure_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-message-brochure.page.html */
      "CvKm");
      /* harmony import */


      var _edit_message_brochure_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-message-brochure.page.scss */
      "5b6Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/objects/brochure.model */
      "pkPj");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/message.service */
      "tZre");
      /* harmony import */


      var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/objects/message.model */
      "Npzb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);

      var EditMessageBrochurePage = /*#__PURE__*/function () {
        function EditMessageBrochurePage(route, location, loadingController, authService, toastController, messageService) {
          _classCallCheck(this, EditMessageBrochurePage);

          this.route = route;
          this.location = location;
          this.loadingController = loadingController;
          this.authService = authService;
          this.toastController = toastController;
          this.messageService = messageService;
          this.showedElement = 'cat_list';
          this.showAddCategoriButtonForFirstInput = false;
          this.isNew = true;
          this.brochure = new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_6__["Brochure"]();
          this.message = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_8__["Message"]();
        }

        _createClass(EditMessageBrochurePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cid = this.route.snapshot.paramMap.get('cid');
            this.mid = this.route.snapshot.paramMap.get('mid');
            this.getMessage();
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            var _this = this;

            if (this.mid) {
              this.messageService.getMessageById(this.cid, this.mid).ref.get().then(function (snapshot) {
                _this.message = snapshot.data();
                _this.brochure = _this.message.brochure;
                _this.showAddCategoriButtonForFirstInput = snapshot.data.length ? true : false;
              });
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }, {
          key: "doReorderCat",
          value: function doReorderCat(ev) {
            ev.detail.complete(true);
            this.brochure.categories.splice(ev.detail.to, 0, this.brochure.categories.splice(ev.detail.from, 1)[0]);
          }
        }, {
          key: "doReorderPage",
          value: function doReorderPage(ev) {
            ev.detail.complete(true);
            this.edited_brochure_category.pages.splice(ev.detail.to, 0, this.edited_brochure_category.pages.splice(ev.detail.from, 1)[0]);
          }
        }, {
          key: "addCategori",
          value: function addCategori() {
            var cat = new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_6__["BrochureCategory"]();
            cat.id = Math.random().toString(36).substring(7);
            this.edited_brochure_category = cat;
            this.showedElement = "edit_cat";
            this.isNew = true;
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(cat) {
            var _this2 = this;

            debugger;
            this.brochure.categories.forEach(function (v, i) {
              if (v.id == cat.id) {
                cat.pages = [];

                _this2.brochure.categories.splice(i, 1);
              }
            });
          }
        }, {
          key: "editCategory",
          value: function editCategory(cat) {
            this.edited_brochure_category = cat;
            this.showedElement = "edit_cat";
            this.isNew = false;
          }
        }, {
          key: "saveCategory",
          value: function saveCategory() {
            var _a;

            debugger;
            this.showedElement = 'cat_list';

            if (((_a = this.edited_brochure_category.title) === null || _a === void 0 ? void 0 : _a.trim()) != '' && this.edited_brochure_category.title !== undefined && this.isNew) {
              this.brochure.categories.push(this.edited_brochure_category);
              this.save();
            }

            this.isNew = false;
          }
        }, {
          key: "addPage",
          value: function addPage() {
            var page = new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_6__["BrochurePage"]();
            page.images = [];
            page.id = Math.random().toString(36).substring(7);
            page.catid = this.edited_brochure_category.id;
            this.edited_brochure_page = page;
            this.showedElement = "edit_page";
            this.isNew = true;
          }
        }, {
          key: "editPage",
          value: function editPage(page) {
            this.edited_brochure_page = page;
            this.showedElement = "edit_page";
            this.isNew = false;
          }
        }, {
          key: "savePage",
          value: function savePage() {
            var _a;

            if (((_a = this.edited_brochure_page.title) === null || _a === void 0 ? void 0 : _a.trim()) != '' && this.edited_brochure_page.title !== undefined && this.isNew) {
              this.edited_brochure_category.pages.push(this.edited_brochure_page);
              this.save();
            }

            this.isNew = false;
            this.showedElement = 'list_page';
          }
        }, {
          key: "listPage",
          value: function listPage(cat) {
            this.edited_brochure_category = cat;
            this.showedElement = "list_page";
          }
        }, {
          key: "deletePage",
          value: function deletePage(page) {
            var _this3 = this;

            this.edited_brochure_category.pages.forEach(function (v, i) {
              if (v.id == page.id) {
                _this3.edited_brochure_category.pages.splice(i, 1);
              }
            });
          }
        }, {
          key: "addImage",
          value: function addImage() {
            var _this4 = this;

            var BU = this;

            var changeHandler = function changeHandler(event) {
              try {
                var _iterator = _createForOfIteratorHelper(event.target.files),
                    _step;

                try {
                  var _loop = function _loop() {
                    var file = _step.value;
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
                        var base64data = resizeCanvas.toDataURL('image/jpeg', 0.8);
                        var pageImage = new src_app_objects_brochure_model__WEBPACK_IMPORTED_MODULE_6__["BroshurePageImage"]();
                        pageImage.id = Math.random().toString(36).substring(20);
                        pageImage.base64data = base64data;
                        pageImage.File = file;
                        BU.edited_brochure_page.images.push(pageImage);
                      };

                      img.src = revent.target.result;
                    };

                    reader.onerror = function (error) {
                      console.error("Resim base64 yapılamadı " + error);
                    };
                  };

                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } catch (err) {
                console.error("Resim alınırken hata oldu " + err);
              }
            };

            setTimeout(function () {
              _this4.imgInputElm = document.createElement('input');
              _this4.imgInputElm.type = "file";

              _this4.imgInputElm.setAttribute("multiple", "true");

              _this4.imgInputElm.setAttribute("accept", "image/*");

              _this4.imgInputElm.addEventListener('change', changeHandler);

              _this4.imgInputElm.click();
            }, 1);
          }
        }, {
          key: "removeImage",
          value: function removeImage(img) {
            var _this5 = this;

            this.edited_brochure_page.images.forEach(function (v, i) {
              if (v.File == img.File) {
                _this5.edited_brochure_page.images.splice(i, 1);
              }
            });
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 10000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.message.brochure = this.brochure;
                      this.message.type = "brochure";
                      this.message.uid = this.authService.USER.uid;

                      if (!this.mid) {
                        this.message.created_at = firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.serverTimestamp();
                      } else {
                        this.message.id = this.mid;
                      }

                      this.messageService.saveBrochure(this.message, this.cid).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (res) {
                                    this.mid = res.id;
                                  }

                                  _context.next = 3;
                                  return this.toastController.create({
                                    color: 'success',
                                    message: "Kayıt işlemi tamamlandı",
                                    duration: 4000
                                  });

                                case 3:
                                  toast = _context.sent;
                                  toast.present();
                                  _context.next = 7;
                                  return loading.dismiss();

                                case 7:
                                  this.showAddCategoriButtonForFirstInput = true;

                                case 8:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return EditMessageBrochurePage;
      }();

      EditMessageBrochurePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]
        }, {
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }];
      };

      EditMessageBrochurePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-message-brochure',
        template: _raw_loader_edit_message_brochure_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_message_brochure_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditMessageBrochurePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-edit-message-brochure-edit-message-brochure-module-es5.js.map