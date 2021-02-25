(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewer-food-drink-menu-food-drink-menu-module"],{

/***/ "+5NT":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/food-drink-menu/food-drink-menu.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-tab-button> \n      <ion-tab-button (click)=\"showCutomerOrders()\"> \n        <ion-icon name=\"fast-food-outline\"></ion-icon>\n        Siparişlerim\n      </ion-tab-button>\n      <ion-tab-button (click)=\"checkout()\">\n        <ion-icon name=\"cart-outline\"></ion-icon>\n        <ion-badge  color=\"danger\" mode=\"ios\">{{cartItemCount}}</ion-badge>\n        Sepetim\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar> \n\n\n<ion-content overflow-scroll=\"true\"> \n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar> \n      <ion-title>{{activeCategory?.title}}</ion-title>  \n    </ion-toolbar>\n  </ion-header>\n \n  <!-- ///////////////////////////////   PAGE           /////////////////////////// -->\n  <div  *ngFor=\"let food of activeCategory?.foods\">\n    <ion-card> \n      <ion-card-header> \n        <ion-card-title  color=\"medium\">{{food.title}}</ion-card-title>\n      </ion-card-header>  \n      <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"layout=='withimage'\">\n        <ion-slide *ngFor=\"let img of food.images\">\n          <img src=\"{{img.url}}\">\n        </ion-slide> \n      </ion-slides>\n\n      <ion-card-header>  \n        <ion-card-subtitle>{{food.subtitle}}</ion-card-subtitle> \n        <ion-badge style=\"right: 5px;\"  color=\"primary\">{{getFoodTotal(food) | currencyPipe}}</ion-badge> \n      </ion-card-header>\n\n      <ion-card-content >\n        <ion-label class=\"ion-text-wrap\" color=\"medium\">{{food.description}}</ion-label>\n      </ion-card-content>\n\n      <section *ngIf=\"showAdditionals==food\" class=\"additional-list\">\n        <ion-list> \n          <div *ngFor=\"let additional of food.additionals\"> \n            <ion-row *ngIf=\"additional.name\"> \n              <ion-col size=\"9\">\n                <ion-label color=\"medium\"> {{additional.name}} {{additional.price | currencyPipe}}</ion-label>\n              </ion-col> \n              <ion-col size=\"1\">\n                <ion-icon   name=\"remove-circle-outline\" (click)=\"removeFromFood(additional,food)\"></ion-icon>\n              </ion-col> \n              <ion-col size=\"1\">\n                <ion-input  color=\"medium\" disabled [(ngModel)]=\"additional.quantity\" ></ion-input>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-icon   name=\"add-circle-outline\" (click)=\"addToFood(additional,food)\"></ion-icon>\n              </ion-col>\n            </ion-row> \n          </div>\n        </ion-list>\n      </section>\n\n      <ion-row>\n        <ion-col size=\"6\"  *ngIf=\"food.additionals?.length\"> \n          <ion-button (click)=\"showAdditionals=(showAdditionals==food)?null:food\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"wine-outline\"></ion-icon>\n            Sos ve İçecek\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" > \n          <ion-button (click)=\"addToCart(food)\" fill=\"clear\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n            Sepete Ekle\n          </ion-button>\n        </ion-col> \n      </ion-row>\n    </ion-card>\n  </div>\n \n</ion-content>\n\n\n\n\n\n\n<!-- ///////////////////////////////  FOOTER            ////////////////////////// -->\n<ion-footer>\n  <ion-toolbar>\n\n    <ion-button (click)=\"layout='list'\" color=\"light\" *ngIf=\"layout=='withimage'\" class=\"ag-layout-btn\" >\n      <ion-icon slot=\"icon-only\" color=\"medium\"  name=\"menu-outline\" style=\"color: white;\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"layout='withimage'\"   *ngIf=\"layout=='list'\" class=\"ag-layout-btn\" >\n      <ion-icon slot=\"icon-only\" color=\"medium\" name=\"pizza-outline\" style=\"color: white;\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"changeCategory('-')\"  [disabled]=\"prevCategory == null\" class=\"left\">\n      <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color: white;\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"openCategoryList()\" >\n      <ion-icon name=\"book-outline\" style=\"font-size: 30px;color: white;\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"changeCategory('+')\"  [disabled]=\"nextCategory == null\" class=\"right\" >\n      <ion-icon name=\"chevron-forward-outline\" style=\"color: white;\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "McG6":
/*!****************************************************************!*\
  !*** ./src/app/viewer/food-drink-menu/food-drink-menu.page.ts ***!
  \****************************************************************/
/*! exports provided: FoodDrinkMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDrinkMenuPage", function() { return FoodDrinkMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_food_drink_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./food-drink-menu.page.html */ "+5NT");
/* harmony import */ var _food_drink_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-drink-menu.page.scss */ "YyFI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/objects/food-drink-menu.model */ "xc7y");
/* harmony import */ var src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/objects/message.model */ "Npzb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/url.service */ "jOSP");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");

















let FoodDrinkMenuPage = class FoodDrinkMenuPage {
    constructor(fs, channelService, toastController, route, actionSheetController, popoverController, location, authService, platform, urlService, cartService, messageService, loadingController, router) {
        this.fs = fs;
        this.channelService = channelService;
        this.toastController = toastController;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.popoverController = popoverController;
        this.location = location;
        this.authService = authService;
        this.platform = platform;
        this.urlService = urlService;
        this.cartService = cartService;
        this.messageService = messageService;
        this.loadingController = loadingController;
        this.router = router;
        this.foodDrinkMenu = new src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_6__["FoodDrinkMenu"]();
        this.activeCategory = new src_app_objects_food_drink_menu_model__WEBPACK_IMPORTED_MODULE_6__["FoodDrinkCategory"]();
        this.activeCategoryIndex = 0;
        this.layout = 'withimage';
        this.previousUrl = '';
        this.cartItemCount = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            this.loading.present();
            this.cid = this.route.snapshot.paramMap.get('cid');
            this.mid = this.route.snapshot.paramMap.get('mid');
            this.urlService.previousUrl$.subscribe((previousUrl) => {
                this.previousUrl = previousUrl;
            });
            this.backBtnSub = this.platform.backButton.subscribe(() => {
                this.back();
            });
            this.messageService.getMessageById(this.cid, this.mid).ref.get().then((snapshot) => {
                let menuVisitor = new src_app_objects_message_model__WEBPACK_IMPORTED_MODULE_7__["MenuVisitor"]();
                let uid = 'anonim_visitor';
                if (this.authService.USER) {
                    uid = this.authService.USER.uid;
                }
                menuVisitor.uid = uid;
                menuVisitor.created_at = firebase__WEBPACK_IMPORTED_MODULE_10__["firestore"].FieldValue.serverTimestamp();
                snapshot.ref.collection('visitors').add(Object.assign({}, menuVisitor));
                this.message = snapshot.data();
                this.foodDrinkMenu = this.message.food_drink_menu;
                this.activeCategory = this.foodDrinkMenu.categories[0];
                if (this.foodDrinkMenu.categories[1]) {
                    this.nextCategory = this.foodDrinkMenu.categories[1];
                }
            });
            yield this.channelService.getChannelInfo(this.cid).ref.get().then((channel) => {
                this.channel = channel.data();
            });
            this.loading.dismiss();
            this.getCart();
        });
    }
    getCart() {
        this.cartService.getCart(this.cid, this.channel).valueChanges().subscribe(data => {
            this.cartItemCount = data.length;
        });
    }
    changeCategory(artim) {
        if (artim == '-') {
            this.activeCategory = this.prevCategory;
        }
        else {
            this.activeCategory = this.nextCategory;
        }
        this.foodDrinkMenu.categories.map((category, i) => {
            if (category == this.activeCategory) {
                if (this.foodDrinkMenu.categories[i + 1]) {
                    this.nextCategory = this.foodDrinkMenu.categories[i + 1];
                }
                else {
                    this.nextCategory = null;
                }
                if (this.foodDrinkMenu.categories[i - 1]) {
                    this.prevCategory = this.foodDrinkMenu.categories[i - 1];
                }
                else {
                    this.prevCategory = null;
                }
            }
        });
    }
    openCategoryList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let action_menu = [];
            this.foodDrinkMenu.categories.forEach((c, i) => {
                action_menu.push({ text: c.title, role: 'destructive', handler: () => {
                        this.activeCategory = c;
                        this.foodDrinkMenu.categories.map((category, i) => {
                            if (category == this.activeCategory) {
                                if (this.foodDrinkMenu.categories[i + 1]) {
                                    this.nextCategory = this.foodDrinkMenu.categories[i + 1];
                                }
                                else {
                                    this.nextCategory = null;
                                }
                                if (this.foodDrinkMenu.categories[i - 1]) {
                                    this.prevCategory = this.foodDrinkMenu.categories[i - 1];
                                }
                                else {
                                    this.prevCategory = null;
                                }
                            }
                        });
                    } });
            });
            action_menu.push({ text: 'Menüden Çık',
                icon: 'close',
                role: 'destructive',
                handler: () => {
                    this.back();
                }
            });
            const actionSheet = yield this.actionSheetController.create({
                header: 'Kategoriler',
                cssClass: 'my-custom-class',
                buttons: action_menu
            });
            yield actionSheet.present();
        });
    }
    back() {
        if (this.previousUrl == undefined || this.previousUrl == null) {
            if (this.backBtnSub) {
                this.backBtnSub.unsubscribe();
            }
            this.router.navigate(['home']);
        }
        else {
            this.location.back();
        }
    }
    ngOnDestroy() {
        if (this.backBtnSub) {
            this.backBtnSub.unsubscribe();
        }
    }
    addToFood(additional, food) {
        let exist = false;
        food.orders.map((order, i) => {
            if (order.additional == additional) {
                order.additional.quantity++;
                exist = true;
            }
        });
        if (!exist) {
            additional.quantity = 1;
            food.orders.push({ additional: additional });
        }
    }
    removeFromFood(additional, food) {
        food.orders = food.orders.filter((order, i) => {
            if (order.additional == additional && additional.quantity > 1) {
                additional.quantity--;
                return order;
            }
            else if (order.additional == additional && additional.quantity == 1) {
                additional.quantity = 0;
                return;
            }
            else {
                return order;
            }
        });
    }
    getFoodTotal(food) {
        let total = 0;
        food.orders.map(orderitem => {
            total += orderitem.additional.quantity * orderitem.additional.price;
        });
        return food.price + total;
    }
    addToCart(food) {
        var _a;
        let uid = (_a = this.authService.USER) === null || _a === void 0 ? void 0 : _a.uid;
        if (!uid) {
            if (window.localStorage.getItem('uid')) {
                uid = window.localStorage.getItem('uid');
            }
            else {
                uid = this.fs.createId();
                window.localStorage.setItem('uid', uid);
            }
        }
        const created_at = firebase__WEBPACK_IMPORTED_MODULE_10__["firestore"].FieldValue.serverTimestamp();
        const cartItem = { uid: uid, created_at: created_at, food: Object.assign({}, food) };
        this.cartService.addToCart(cartItem, this.cid).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'success',
                message: "Yemek sepete eklendi",
                duration: 3000
            });
            toast.present();
        }));
    }
    checkout() {
        let navigationExtras = {
            state: {
                cid: this.cid
            }
        };
        this.router.navigate(['cart'], navigationExtras);
    }
    showCutomerOrders() {
        var _a;
        let uid = (_a = this.authService.USER) === null || _a === void 0 ? void 0 : _a.uid;
        if (!uid) {
            if (window.localStorage.getItem('uid')) {
                uid = window.localStorage.getItem('uid');
            }
            else {
                uid = this.fs.createId();
                window.localStorage.setItem('uid', uid);
            }
        }
        let navigationExtras = {
            state: {
                uid: uid,
                cid: this.cid
            }
        };
        this.router.navigate(['customer-orders'], navigationExtras);
    }
};
FoodDrinkMenuPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestore"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_14__["ChannelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"] },
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FoodDrinkMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-food-drink-menu',
        template: _raw_loader_food_drink_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_food_drink_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FoodDrinkMenuPage);



/***/ }),

/***/ "YyFI":
/*!******************************************************************!*\
  !*** ./src/app/viewer/food-drink-menu/food-drink-menu.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nion-footer ion-toolbar{\n    //--background: white;\n    text-align: center;\n}\n\nion-footer ion-toolbar ion-button{\n    --border-radius: 50px;\n    width: 64px;\n    height: 64px;\n    --padding-bottom: 0px;\n    --padding-end: 0;\n    --padding-start: 0;\n    --padding-top: 0; \n}\n\nion-footer ion-toolbar ion-button.left{ \n    width: 38px;\n    height: 38px;\n}\nion-footer ion-toolbar ion-button.right{ \n    width: 38px;\n    height: 38px;\n}\n\nion-footer ion-toolbar .ag-layout-btn{\n    width: 38px;\n    height: 38px; \n    margin-top: 15px;\n    position: absolute;\n    left: 5px;\n}\n*/\nion-badge {\n  display: block;\n  float: right;\n  position: absolute;\n  top: 5px;\n  z-index: 99;\n}\n.additional-list ion-input {\n  --padding-end:0;\n  --padding-top:0;\n  --padding-start:0;\n  --padding-bottom:0;\n  margin-top: 3px;\n  margin-left: 6px;\n}\n.additional-list {\n  font-size: 16px;\n}\nion-footer ion-toolbar {\n  text-align: center;\n}\nion-footer ion-toolbar ion-button {\n  --border-radius: 50px;\n  width: 64px;\n  height: 64px;\n  --padding-bottom: 0px;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n}\nion-footer ion-toolbar ion-button.left {\n  width: 38px;\n  height: 38px;\n}\nion-footer ion-toolbar ion-button.right {\n  width: 38px;\n  height: 38px;\n}\nion-footer ion-toolbar .ag-layout-btn {\n  width: 38px;\n  height: 38px;\n  margin-top: 15px;\n  position: absolute;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb2QtZHJpbmstbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUFpQ0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7QUFDSjtBQUdBO0VBQ0ksa0JBQUE7QUFBSjtBQUdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJmb29kLWRyaW5rLW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmlvbi1mb290ZXIgaW9uLXRvb2xiYXJ7XG4gICAgLy8tLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7IFxufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ubGVmdHsgXG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9uLnJpZ2h0eyBcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgLmFnLWxheW91dC1idG57XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4OyBcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1cHg7XG59XG4qL1xuaW9uLWJhZGdle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogNXB4O1xuICAgIHotaW5kZXg6IDk5O1xufVxuXG4uYWRkaXRpb25hbC1saXN0IGlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctZW5kOjA7XG4gICAgLS1wYWRkaW5nLXRvcDowO1xuICAgIC0tcGFkZGluZy1zdGFydDowO1xuICAgIC0tcGFkZGluZy1ib3R0b206MDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmFkZGl0aW9uYWwtbGlzdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXJ7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7IFxufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ubGVmdHsgXG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9uLnJpZ2h0eyBcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgLmFnLWxheW91dC1idG57XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4OyBcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "tHXe":
/*!**************************************************************************!*\
  !*** ./src/app/viewer/food-drink-menu/food-drink-menu-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FoodDrinkMenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDrinkMenuPageRoutingModule", function() { return FoodDrinkMenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _food_drink_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-drink-menu.page */ "McG6");




const routes = [
    {
        path: '',
        component: _food_drink_menu_page__WEBPACK_IMPORTED_MODULE_3__["FoodDrinkMenuPage"]
    }
];
let FoodDrinkMenuPageRoutingModule = class FoodDrinkMenuPageRoutingModule {
};
FoodDrinkMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FoodDrinkMenuPageRoutingModule);



/***/ }),

/***/ "thdm":
/*!******************************************************************!*\
  !*** ./src/app/viewer/food-drink-menu/food-drink-menu.module.ts ***!
  \******************************************************************/
/*! exports provided: FoodDrinkMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDrinkMenuPageModule", function() { return FoodDrinkMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _food_drink_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-drink-menu-routing.module */ "tHXe");
/* harmony import */ var _food_drink_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-drink-menu.page */ "McG6");
/* harmony import */ var src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/currency.pipe */ "X4wd");








let FoodDrinkMenuPageModule = class FoodDrinkMenuPageModule {
};
FoodDrinkMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _food_drink_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodDrinkMenuPageRoutingModule"]
        ],
        declarations: [_food_drink_menu_page__WEBPACK_IMPORTED_MODULE_6__["FoodDrinkMenuPage"], src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]]
    })
], FoodDrinkMenuPageModule);



/***/ })

}]);
//# sourceMappingURL=viewer-food-drink-menu-food-drink-menu-module-es2015.js.map