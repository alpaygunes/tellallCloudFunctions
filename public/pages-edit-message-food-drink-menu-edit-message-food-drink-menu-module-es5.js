(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module"], {
    /***/
    "418r":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/edit-message-food-drink-menu/edit-message-food-drink-menu.page.ts ***!
      \*****************************************************************************************/

    /*! exports provided: EditMessageFoodDrinkMenuPage */

    /***/
    function r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMessageFoodDrinkMenuPage", function () {
        return EditMessageFoodDrinkMenuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_message_food_drink_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-message-food-drink-menu.page.html */
      "NfaU");
      /* harmony import */


      var _edit_message_food_drink_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-message-food-drink-menu.page.scss */
      "Dkaz");
      /* harmony import */


      var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/objects/message.model */
      "Npzb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/message.service */
      "tZre");
      /* harmony import */


      var src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/objects/food-drink-menu.model */
      "xc7y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);

      var EditMessageFoodDrinkMenuPage = /*#__PURE__*/function () {
        function EditMessageFoodDrinkMenuPage(route, alertController, location, loadingController, authService, toastController, messageService) {
          _classCallCheck(this, EditMessageFoodDrinkMenuPage);

          this.route = route;
          this.alertController = alertController;
          this.location = location;
          this.loadingController = loadingController;
          this.authService = authService;
          this.toastController = toastController;
          this.messageService = messageService;
          this.message = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]();
          this.foodDrinkMenu = new src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_9__["FoodDrinkMenu"]();
          this.showedElement = 'cat_list';
          this.isNew = true;
          this.description_length = 300;
          this.showAddCategoriButtonForFirstInput = false; // yeni menüde  Kategori Ekle düğmesi kaydedildikten sonra görünmesi için
        }

        _createClass(EditMessageFoodDrinkMenuPage, [{
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
                _this.foodDrinkMenu = _this.message.food_drink_menu;
                _this.showAddCategoriButtonForFirstInput = snapshot.data.length ? true : false;
              });
            }
          }
        }, {
          key: "listFoods",
          value: function listFoods(cat) {
            this.edited_food_drink_category = cat;
            this.showedElement = "list_foods";
            this.isNew = false;
          }
        }, {
          key: "addCategori",
          value: function addCategori() {
            var cat = new src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_9__["FoodDrinkCategory"]();
            cat.id = Math.random().toString(36).substring(7);
            this.edited_food_drink_category = cat;
            this.showedElement = "edit_cat";
            this.isNew = true;
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(cat) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Kategori alıcı olarak silinecek ! ',
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
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                              var _this3 = this;

                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      this.foodDrinkMenu.categories.forEach(function (v, i) {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                          var _this4 = this;

                                          return regeneratorRuntime.wrap(function _callee$(_context) {
                                            while (1) {
                                              switch (_context.prev = _context.next) {
                                                case 0:
                                                  if (v.id == cat.id) {
                                                    cat.foods.forEach(function (d, i) {
                                                      _this4.deleteFood(d);
                                                    });
                                                    this.foodDrinkMenu.categories.splice(i, 1);
                                                  }

                                                case 1:
                                                case "end":
                                                  return _context.stop();
                                              }
                                            }
                                          }, _callee, this);
                                        }));
                                      });

                                    case 1:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "editCategory",
          value: function editCategory(cat) {
            this.edited_food_drink_category = cat;
            this.showedElement = "edit_cat";
            this.isNew = false;
          }
        }, {
          key: "deleteFood",
          value: function deleteFood(page) {
            var _this5 = this;

            this.edited_food_drink_category.foods.forEach(function (v, i) {
              if (v.id == page.id) {
                _this5.edited_food_drink_category.foods.splice(i, 1);
              }
            });
          }
        }, {
          key: "editFood",
          value: function editFood(food) {
            this.edited_food = food;
            this.showedElement = "edit_food";
            this.isNew = false;
          }
        }, {
          key: "addFood",
          value: function addFood() {
            var food = new src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_9__["FoodDrinkFood"]();
            food.images = [];
            food.id = Math.random().toString(36).substring(7);
            food.cid = this.edited_food_drink_category.id;
            this.edited_food = food;
            this.showedElement = "edit_food";
            this.isNew = true;
          }
        }, {
          key: "removeImage",
          value: function removeImage(img) {
            var _this6 = this;

            this.edited_food.images.forEach(function (v, i) {
              if (v.File == img.File) {
                _this6.edited_food.images.splice(i, 1);
              }
            });
          }
        }, {
          key: "addImage",
          value: function addImage() {
            var _this7 = this;

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
                        var foodImage = new src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_9__["FoodDrinkImage"]();
                        foodImage.id = Math.random().toString(36).substring(20);
                        foodImage.base64data = base64data;
                        foodImage.File = file;
                        BU.edited_food.images.push(foodImage);
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
              _this7.imgInputElm = document.createElement('input');
              _this7.imgInputElm.type = "file";

              _this7.imgInputElm.setAttribute("multiple", "true");

              _this7.imgInputElm.setAttribute("accept", "image/*");

              _this7.imgInputElm.addEventListener('change', changeHandler);

              _this7.imgInputElm.click();
            }, 1);
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        duration: 10000
                      });

                    case 2:
                      loading = _context5.sent;
                      _context5.next = 5;
                      return loading.present();

                    case 5:
                      this.message.food_drink_menu = this.foodDrinkMenu;
                      this.message.type = 'food_drink_menu';
                      this.message.uid = this.authService.USER.uid;

                      if (!this.mid) {
                        this.message.created_at = firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].FieldValue.serverTimestamp();
                      } else {
                        this.message.id = this.mid;
                      }

                      this.messageService.saveFoodDrinkMenu(this.message, this.cid).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (res) {
                                    this.mid = res.id;
                                  }

                                  _context4.next = 3;
                                  return this.toastController.create({
                                    color: 'success',
                                    message: "Kayıt işlemi tamamlandı",
                                    duration: 3000
                                  });

                                case 3:
                                  toast = _context4.sent;
                                  toast.present();
                                  _context4.next = 7;
                                  return loading.dismiss();

                                case 7:
                                  this.showAddCategoriButtonForFirstInput = true;

                                case 8:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "doReorderCat",
          value: function doReorderCat(ev) {
            ev.detail.complete(true);
            this.foodDrinkMenu.categories.splice(ev.detail.to, 0, this.foodDrinkMenu.categories.splice(ev.detail.from, 1)[0]);
          }
        }, {
          key: "doReorderFoods",
          value: function doReorderFoods(ev) {
            ev.detail.complete(true);
            this.edited_food_drink_category.foods.splice(ev.detail.to, 0, this.edited_food_drink_category.foods.splice(ev.detail.from, 1)[0]);
          }
        }, {
          key: "showFoodList",
          value: function showFoodList() {
            var _a;

            this.showedElement = 'list_foods';

            if (((_a = this.edited_food.title) === null || _a === void 0 ? void 0 : _a.trim()) != '' && this.edited_food.title !== undefined && this.isNew) {
              this.edited_food_drink_category.foods.push(this.edited_food);
            }

            this.isNew = false;
          }
        }, {
          key: "showCategoryList",
          value: function showCategoryList() {
            var _a;

            this.showedElement = 'cat_list';

            if (((_a = this.edited_food_drink_category.title) === null || _a === void 0 ? void 0 : _a.trim()) != '' && this.edited_food_drink_category.title !== undefined && this.isNew) {
              this.foodDrinkMenu.categories.push(this.edited_food_drink_category);
            }

            this.isNew = false;
          }
        }, {
          key: "back",
          value: function back() {
            this.location.back();
          }
        }, {
          key: "additional",
          value: function additional() {
            var addtnls = new src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_9__["Additional"]();
            this.edited_food.additionals.push(addtnls);
          }
        }]);

        return EditMessageFoodDrinkMenuPage;
      }();

      EditMessageFoodDrinkMenuPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }];
      };

      EditMessageFoodDrinkMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-message-food-drink-menu',
        template: _raw_loader_edit_message_food_drink_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_message_food_drink_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditMessageFoodDrinkMenuPage);
      /***/
    },

    /***/
    "Dkaz":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/edit-message-food-drink-menu/edit-message-food-drink-menu.page.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dkaz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\nion-thumbnail{\n    display: block;\n    float: left;\n    padding: 7px;\n    width: 100%;\n    height: auto;\n    border: 1px solid #ccc;\n    margin-left: auto;\n    margin-right: auto;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtbWVzc2FnZS1mb29kLWRyaW5rLW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6ImVkaXQtbWVzc2FnZS1mb29kLWRyaW5rLW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmlvbi10aHVtYm5haWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiovIl19 */";
      /***/
    },

    /***/
    "Hfsn":
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/edit-message-food-drink-menu/edit-message-food-drink-menu-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: EditMessageFoodDrinkMenuPageRoutingModule */

    /***/
    function Hfsn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMessageFoodDrinkMenuPageRoutingModule", function () {
        return EditMessageFoodDrinkMenuPageRoutingModule;
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


      var _edit_message_food_drink_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-message-food-drink-menu.page */
      "418r");

      var routes = [{
        path: '',
        component: _edit_message_food_drink_menu_page__WEBPACK_IMPORTED_MODULE_3__["EditMessageFoodDrinkMenuPage"]
      }];

      var EditMessageFoodDrinkMenuPageRoutingModule = function EditMessageFoodDrinkMenuPageRoutingModule() {
        _classCallCheck(this, EditMessageFoodDrinkMenuPageRoutingModule);
      };

      EditMessageFoodDrinkMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditMessageFoodDrinkMenuPageRoutingModule);
      /***/
    },

    /***/
    "NfaU":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-message-food-drink-menu/edit-message-food-drink-menu.page.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NfaU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar>  \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons  (click)=\"back()\" *ngIf=\"showedElement == 'cat_list'\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-buttons>\n      <ion-buttons  (click)=\"showCategoryList()\" *ngIf=\"showedElement == 'edit_cat'\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-buttons> \n      <ion-buttons  (click)=\"showCategoryList()\" *ngIf=\"showedElement == 'list_foods'\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-buttons>\n      <ion-buttons  (click)=\"showFoodList()\" *ngIf=\"showedElement == 'edit_food'\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-buttons>\n      <ion-title *ngIf=\"showedElement == 'edit_food'\" >Yemek Düzenle</ion-title>\n      <ion-title *ngIf=\"showedElement == 'list_foods'\" >Yemek Listesi</ion-title>\n      <ion-title *ngIf=\"showedElement == 'edit_cat'\" >Kategori Düzenle</ion-title>\n      <ion-title *ngIf=\"showedElement == 'cat_list'\" >Menü Düzenle</ion-title>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>\n\n\n<ion-content>\n\n  <!-- //////////////////////////     MENU ADI    ///////////////////////////   -->\n  <section *ngIf=\"showedElement == 'cat_list'\" > \n    <ion-grid style=\"margin: 10px;padding: 10px;\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label color=\"dark\">Menü Başığı</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" placeholder=\"Menü Başlığı\" [(ngModel)]='foodDrinkMenu.title'></ion-input>\n        </ion-col>\n      </ion-row> \n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label  color=\"dark\">Alt Başlık</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" placeholder=\"Menü Başlık\" [(ngModel)]='foodDrinkMenu.subtitle' ></ion-input>\n        </ion-col>\n      </ion-row> \n    </ion-grid>\n  </section>\n\n\n  <!-- //////////////////////////  SHOW CATEGORY LİST ///////////////////////////// --> \n  <div *ngIf=\"showedElement == 'cat_list' && foodDrinkMenu.categories.length\" style=\"margin-top: 50px;\" >\n    <ion-header class=\"ion-no-border\">\n      <ion-toolbar>\n        <ion-title>İçece ve Yiyecek Kategorileri</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <!-- sıradaki kategori-->\n    <ion-reorder-group (ionItemReorder)=\"doReorderCat($event)\" disabled=\"false\"> \n      <ion-item-sliding *ngFor=\"let categori of foodDrinkMenu.categories\">\n        <ion-card> \n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-label>{{categori.title}}</ion-label>\n              <ion-reorder slot=\"end\" ></ion-reorder>\n            </ion-item> \n          </ion-card-content>\n          <ion-row>\n            <ion-col size=\"2\"> \n            </ion-col>\n            <ion-col size=\"4\" (click)=\"deleteCategory(categori)\">\n              <ion-icon   name=\"trash-outline\"></ion-icon> \n            </ion-col>\n            <ion-col size=\"4\" (click)=\"editCategory(categori)\">\n              <ion-icon   name=\"create-outline\"></ion-icon> \n            </ion-col>\n            <ion-col size=\"2\"  (click)=\"listFoods(categori)\">\n              <ion-icon   name=\"fast-food-outline\"></ion-icon> \n            </ion-col>\n            \n          </ion-row>\n        </ion-card>\n      </ion-item-sliding>\n    </ion-reorder-group><!-- sıradaki kategori END-->  \n  </div>\n\n  <ion-button (click)=\"addCategori()\"  fill=\"clear\" size=\"small\" expand=\"full\" \n              *ngIf=\"(foodDrinkMenu.categories.length || showAddCategoriButtonForFirstInput) && showedElement == 'cat_list'\"> \n              Kategori Ekle\n  </ion-button> \n  \n\n  <!-- //////////////////////////  EDİT CATEGORY ///////////////////////////// -->\n  <section *ngIf=\"showedElement == 'edit_cat'\" style=\"margin-top: 50px;\">\n    <ion-grid fixed> \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label >Kategori Başlığı</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" [(ngModel)]=\"edited_food_drink_category.title\" placeholder=\"Kategori Adı Yazın\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n           <div style=\"height:20px ;\"> </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label >Kategori Alt Başlığı</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" [(ngModel)]=\"edited_food_drink_category.subtitle\"  placeholder=\"Alt Başlık Yazın\"></ion-input>\n        </ion-col>\n      </ion-row> \n\n    </ion-grid>\n  </section> \n\n\n  <!-- //////////////////////////  LIST FOODS ///////////////////////////// -->\n  <div *ngIf=\"showedElement == 'list_foods'\">\n    <ion-item  lines=\"none\">\n      <h3>{{edited_food_drink_category.title}}</h3>\n    </ion-item>\n    <ion-card>  \n      <ion-card-content *ngIf=\"!edited_food_drink_category.foods.length\">\n        Bu kategoride hiç yemek yok.\n      </ion-card-content>\n      <ion-reorder-group (ionItemReorder)=\"doReorderFoods($event)\" disabled=\"false\"> \n        <ion-item-sliding *ngFor=\"let food of edited_food_drink_category.foods\">\n          <ion-item (click)=\"editFood(food)\" lines=\"none\">\n            <ion-label>{{food.title}}</ion-label>\n            <ion-reorder slot=\"end\"></ion-reorder>  \n          </ion-item>\n          <ion-item-options side=\"start\">\n            <ion-item-option color=\"danger\" (click)=\"deleteFood(food)\">Delete</ion-item-option> \n          </ion-item-options>\n          <ion-item-options side=\"end\">\n            <ion-item-option color=\"secondary\" (click)=\"editFood(food)\">Edit</ion-item-option> \n          </ion-item-options>\n        </ion-item-sliding> \n      </ion-reorder-group>\n    </ion-card>\n    <ion-button (click)=\"addFood()\"  fill=\"clear\" expand=\"full\" size=\"small\"> \n      Yemek Ekle\n    </ion-button> \n  </div>\n\n\n  <!-- //////////////////////////  EDİT FOODS ///////////////////////////// -->\n  <div *ngIf=\"showedElement == 'edit_food'\"> \n\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label >Yemek Başlığı</ion-label>\n        </ion-col> \n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\"  [(ngModel)]=\"edited_food.title\"></ion-input>\n        </ion-col> \n      </ion-row>  \n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label >Yemek Alt Başlığı</ion-label>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\"> \n          <ion-input type=\"text\"  [(ngModel)]=\"edited_food.subtitle\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label >Açıklama {{ (description_length - edited_food.description?.length) }} karakter</ion-label>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-textarea rows=\"10\"  [(ngModel)]=\"edited_food.description\" maxlength=\"{{description_length}}\"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\"> \n          <ion-label >Fiyat</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\"> \n          <ion-input type=\"number\" [(ngModel)]=\"edited_food.price\"></ion-input>\n        </ion-col>\n      </ion-row> \n    </ion-grid>\n \n    <!--   İLAVELER   ---> \n    <ion-grid fixed *ngIf=\"edited_food.additionals?.length\">\n      <ion-item lines=\"none\">\n        <h2 lines=\"none\">İlaveler</h2>\n      </ion-item>\n      <section *ngFor=\"let additional of edited_food.additionals\"> \n        <ion-row >\n          <ion-col size=\"12\">  \n              <ion-label >Ürün adı</ion-label> \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\"> \n            <ion-input type=\"text\" [(ngModel)]=\"additional.name\" ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label >Fiyat</ion-label>\n          </ion-col>\n        </ion-row> \n        <ion-row> \n          <ion-input type=\"number\" [(ngModel)]=\"additional.price\"></ion-input>\n        </ion-row>\n        <div style=\"height: 30px;\"></div>\n      </section>\n    </ion-grid> \n    <!-- ------------------  resimve ilave ekleme düğmeleri -->\n    <ion-item lines=\"none\">\n      <ion-button  (click)=\"additional()\" fill=\"clear\" expand=\"full\" size=\"small\">  \n        İlave Ekle\n      </ion-button> \n      <ion-button (click)=\"addImage()\" fill=\"clear\" expand=\"full\"  size=\"small\">  \n        Resim Ekle\n      </ion-button> \n    </ion-item> \n\n    <!--   RESİMLER   ---> \n    <ion-card *ngFor=\"let img of edited_food.images\"> \n      <ion-card-content>   \n          <img *ngIf=\"img.base64data\" src=\"{{img.base64data}}\" />\n          <img *ngIf=\"img.url\" src=\"{{img.url}}\" />         \n        <ion-button (click)=\"removeImage(img)\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Delete\n        </ion-button>\n      </ion-card-content> \n    </ion-card>\n  </div> <!-- //////////////////////////  EDİT FOODS END-->\n \n</ion-content>\n\n\n\n\n<!--             Yemeği kaydet düğmesi                --> \n<ion-button (click)=\"showFoodList()\"  expand=\"full\" color=\"secondary\" *ngIf=\"showedElement == 'edit_food'\">\n  Tamam\n</ion-button> \n\n<!--             kategoriyi kaydet düğmesi                --> \n<ion-button (click)=\"showCategoryList()\" expand=\"full\" color=\"secondary\" *ngIf=\"showedElement == 'edit_cat'\">\n  Tamam\n</ion-button>\n\n<!--              menüyü kaydet düğmesi           -->\n<ion-button *ngIf=\"showedElement=='cat_list'\" (click)=\"save()\"  expand=\"full\" color=\"secondary\">\n  Menüyü Kaydet\n</ion-button>\n\n\n";
      /***/
    },

    /***/
    "k3dg":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/edit-message-food-drink-menu/edit-message-food-drink-menu.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: EditMessageFoodDrinkMenuPageModule */

    /***/
    function k3dg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMessageFoodDrinkMenuPageModule", function () {
        return EditMessageFoodDrinkMenuPageModule;
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


      var _edit_message_food_drink_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-message-food-drink-menu-routing.module */
      "Hfsn");
      /* harmony import */


      var _edit_message_food_drink_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-message-food-drink-menu.page */
      "418r");

      var EditMessageFoodDrinkMenuPageModule = function EditMessageFoodDrinkMenuPageModule() {
        _classCallCheck(this, EditMessageFoodDrinkMenuPageModule);
      };

      EditMessageFoodDrinkMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_message_food_drink_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditMessageFoodDrinkMenuPageRoutingModule"]],
        declarations: [_edit_message_food_drink_menu_page__WEBPACK_IMPORTED_MODULE_6__["EditMessageFoodDrinkMenuPage"]]
      })], EditMessageFoodDrinkMenuPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-edit-message-food-drink-menu-edit-message-food-drink-menu-module-es5.js.map