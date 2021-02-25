(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "2Cor":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\"> \n      <ion-buttons   (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-buttons>\n      <ion-title>Siparişler</ion-title>\n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n\n\n\n<ion-content #content>\n  <ion-card *ngFor=\"let item of cartItems\">\n    <ion-item lines=\"full\">\n      <ion-label> {{ item.food.title }}   </ion-label> \n      <ion-badge color=\"medium\" mode=\"ios\" slot=\"end\" color=\"light\">{{ item.food.price  | currencyPipe}}</ion-badge>\n    </ion-item>\n    <ion-card-content>\n      <ion-item *ngFor=\"let order of item.food.orders\" >\n        <ion-label >{{order.additional.name}}</ion-label>\n        <ion-label >{{ order.additional.price }} x {{ order.additional.quantity }}</ion-label>\n        <ion-badge  color=\"light\" mode=\"ios\">{{ (order.additional.price * order.additional.quantity) | currencyPipe }}</ion-badge>\n      </ion-item>\n      <ion-item>\n        <ion-label  >İlaveler Toplamı</ion-label>\n        <ion-badge color=\"light\" mode=\"ios\">{{getAdditionalPrice(item.food.orders) | currencyPipe }}</ion-badge>\n      </ion-item>\n      <ion-item>\n        <ion-label > Toplam </ion-label> \n        <ion-badge color=\"medium\" > {{ getFoodTotal(item.food) | currencyPipe}} </ion-badge>\n      </ion-item>\n    </ion-card-content> \n    <ion-item lines=\"none\"> \n        <ion-button (click)=\"rejectFood(item)\" slot=\"end\" expand=\"block\" fill=\"clear\" size=\"small\" shape=\"round\">Sepetten çıkart</ion-button>\n    </ion-item>\n  </ion-card>\n\n  <ion-card *ngIf=\"!cartItems?.length\">\n    <ion-card-content>\n      <ion-label > Sepetiniz boş </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"order_success\">\n    <ion-card-content>\n      <ion-label color=\"success\"> Siparişiniz alındı </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <!--   ///////////////////////////////////  iletişim bilgileri ///////////////////////// -->\n  <div id=\"address-anchor\" style=\"margin-top: 50px;\" ></div>\n  <ion-card  *ngIf=\"cartItems?.length && show_address_box\">\n\n  <ion-row>\n    <ion-col size=\"6\" style=\"padding: 15px;\">\n      <ion-label color=\"dark\" >İletişim Bilgileri</ion-label>\n    </ion-col>\n    <ion-col size=\"6\">      \n      <ion-button (click)=\"newAdress()\" fill=\"clear\" size=\"small\">  \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        Adres Ekle\n      </ion-button>\n    </ion-col>\n  </ion-row>  \n\n    <ion-button *ngFor=\"let address of addresses\" (click)=\"switchAddress(address)\"  [fill]=\"(address==editedAddress)?'solid':'outline'\"  size=\"small\"   >\n      {{address?.name}}\n    </ion-button>\n     \n  <ion-card-content>  \n    <section *ngIf=\"editedAddress\"  >\n      <ion-item lines=\"none\" >\n        <ion-input type=\"text\" id=\"name\" placeholder=\"Adres tanımı: Ev adresim, İş adresim ...\" [(ngModel)]=\"editedAddress.name\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" >\n        <ion-input  type=\"text\" id=\"adi_soyadi\" placeholder=\"Adınız Soyadınız\" [(ngModel)]=\"editedAddress.adi_soyadi\"></ion-input>\n      </ion-item>\n        \n      <ion-item *ngIf=\"iller.length\" lines=\"none\">\n        <ion-label color=\"medium\">İl</ion-label>\n        <ion-select   ok-text=\"Tamam\" cancel-text=\"İptal\" (ionChange)=\"changeCtity($event)\" [(ngModel)]=\"editedAddress.city.id\" multiple = \"false\" placeholder=\"Şehir seçin\">\n          <ion-select-option *ngFor=\"let city of iller\" [value]=\"city.id\">{{city.name}}</ion-select-option> \n        </ion-select>\n      </ion-item> \n\n      <ion-item *ngIf=\"editedAddress.city.id\" lines=\"none\">\n        <ion-label color=\"medium\">İlçe</ion-label>\n        <ion-select ok-text=\"Tamam\" cancel-text=\"İptal\" (ionChange)=\"changeTown($event)\" [(ngModel)]=\"editedAddress.town.id\" multiple = \"false\" placeholder=\"Şehir seçin\">\n          <ion-select-option *ngFor=\"let town of ilceler\" [value]=\"town.id\">{{town.name}}</ion-select-option> \n        </ion-select>\n      </ion-item> \n\n      <ion-item lines=\"none\" > \n        <ion-input id=\"mahalle\" type=\"text\"  placeholder=\"Mahalle\" [(ngModel)]=\"editedAddress.mahalle\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" > \n        <ion-input id=\"cadde_sokak\" type=\"text\"  placeholder=\"Cadde, Sokak\" [(ngModel)]=\"editedAddress.cadde_sokak\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" >\n        <ion-input id=\"bina\" type=\"text\"  placeholder=\"Bina, aparman, plaza adı\" id=\"bina\" [(ngModel)]=\"editedAddress.bina\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" >\n        <ion-input id=\"tel\" type=\"text\"  placeholder=\"Telefon Num : 5XXXXXXXXX\"  [(ngModel)]=\"editedAddress.tel\"></ion-input>\n      </ion-item>\n      <ion-input  type=\"text\"  placeholder=\"Adresin devamı varsa yazın\" [(ngModel)]=\"editedAddress.adresin_devami\"></ion-input>\n      <ion-input  type=\"text\"  placeholder=\"Yol tarifi yazabilirsiniz\"  [(ngModel)]=\"editedAddress.yol_tarifi\"></ion-input>\n    </section>\n    \n    <ion-label color=\"danger\" *ngIf=\"!addresses\">Henüz kayıtlı teslimat adresiniz yok!</ion-label> \n\n  </ion-card-content>\n  <ion-button (click)=\"saveAdress()\" fill=\"clear\" size=\"small\" *ngIf=\"editedAddress\"> \n    Kaydet\n  </ion-button> \n  <ion-button (click)=\"deleteAdress()\" fill=\"clear\" size=\"small\" *ngIf=\"editedAddress\"> \n    Sil\n  </ion-button> \n  </ion-card>\n  <!--   ///////////////////////////////////  END iletişim ///////////////////////// -->\n\n\n<!--   ///////////////////////////////////  MASA bilgisi ///////////////////////// -->\n  <ion-card *ngIf=\"show_table_box && cartItems?.length\">\n    <ion-item lines=\"full\">\n      <ion-label>Masa bilgileriniz ve adınız ?</ion-label>\n    </ion-item>\n    <ion-card-content>\n      <ion-input type=\"text\" id=\"table_name_for_totable\"  [(ngModel)]=\"toTableAddress.table_name_for_totable\"  placeholder=\"Masa Numaranızı Yazın\">  </ion-input>\n      <div style=\"height: 30px;\"></div>\n      <ion-input type=\"text\" id=\"name_surname_for_totable\"    [(ngModel)]=\"toTableAddress.name_surname_for_totable\"    placeholder=\"Adınız Soyadınız\">       </ion-input>\n    </ion-card-content>\n  </ion-card>\n<!--   ///////////////////////////////////  MASA bilgisi END ///////////////////////// -->\n  \n  \n\n  <ion-item color=\"light\"  *ngIf=\"cartItems?.length\" lines=\"none\">\n    <ion-label *ngIf=\"show_address_box\"> Kapıda Ödenecek Miktar {{ totalAmount() | currencyPipe }} </ion-label> \n    <ion-label *ngIf=\"show_table_box\"> Ödenecek Miktar {{totalAmount() | currencyPipe }} </ion-label> \n  </ion-item>\n  <ion-button color=\"warning\" *ngIf=\"cartItems?.length\"  (click)=\"complateOrder()\" expand=\"full\">\n    Siparişi Tamamla\n  </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "Y+Iu":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "rqSi");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "rqSi":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.page.html */ "2Cor");
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss */ "vwaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/account.service */ "flj8");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/objects/account.model */ "pRzo");
/* harmony import */ var src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/objects/city-town.model */ "I31H");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/objects/cart.model */ "uYlw");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/channel.service */ "0xJi");















let CartPage = class CartPage {
    constructor(location, alertController, router, route, authService, accountService, channelService, cartService) {
        this.location = location;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.accountService = accountService;
        this.channelService = channelService;
        this.cartService = cartService;
        this.iller = [];
        this.show_address_box = false;
        this.show_table_box = false;
        this.order_success = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.router.getCurrentNavigation().extras.state) {
                this.cid = this.router.getCurrentNavigation().extras.state.cid;
                yield this.channelService.getChannelInfo(this.cid).ref.get().then((channel) => {
                    this.channel = channel.data();
                });
            }
            this.getCart();
            if (this.channel.shipping_type == 'TO_ADDRESS') {
                this.show_address_box = true;
                this.iller = (new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_10__["CityTown"]()).getCityes();
                this.getAddresses();
                this.getAccount();
            }
            if (this.channel.shipping_type == 'TO_TABLE') {
                this.toTableAddress = new src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_9__["Address"]();
                this.show_table_box = true;
                this.showInputTableNum();
                //BURADA KALDIN
            }
        });
    }
    showInputTableNum() { }
    getAccount() {
        this.accountService.getAccount(this.authService.USER.uid).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data) {
                this.account = data;
            }
            else {
                alert("Hesap bilgilerine erişilemedi");
                this.location.back();
            }
        }));
    }
    getCart() {
        this.cartService.getCart(this.cid, this.channel).valueChanges({ idField: 'id' }).subscribe(data => {
            this.cartItems = data;
            data.map(item => {
                item.food.orders.map((order) => {
                });
            });
            return data.length;
        });
    }
    getFoodTotal(food) {
        let total = 0;
        food.orders.map(orderitem => {
            total += orderitem.additional.quantity * orderitem.additional.price;
        });
        return food.price + total;
    }
    getAdditionalPrice(forders) {
        let total = 0;
        forders.map(orderitem => {
            total += orderitem.additional.quantity * orderitem.additional.price;
        });
        return total;
    }
    totalAmount() {
        var _a;
        let total_amount = 0;
        (_a = this.cartItems) === null || _a === void 0 ? void 0 : _a.map(item => {
            total_amount += this.getFoodTotal(item.food);
        });
        return total_amount;
    }
    rejectFood(item) {
        this.cartService.rejectFood(item, this.cid);
    }
    getAddresses() {
        let uid = this.authService.USER.uid;
        this.accountService.getAddresses(uid).valueChanges({ idField: 'id' }).subscribe((datas) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.addresses = datas.map(doc => {
                return Object.assign({ id: doc.id }, doc);
            });
        }));
    }
    saveAdress() {
        var _a, _b, _c, _d, _e, _f;
        let error = false;
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
        let uid = this.authService.USER.uid;
        this.accountService.saveAddress(uid, this.editedAddress);
        this.shippingAddress = this.editedAddress;
    }
    deleteAdress() {
        let uid = this.authService.USER.uid;
        this.accountService.deleteAdress(uid, this.editedAddress).then(() => {
            if (this.addresses[0]) {
                this.switchAddress(this.addresses[0]);
            }
            else {
                this.newAdress();
            }
        });
    }
    switchAddress(address) {
        try {
            document.getElementById('name').style.border = "1px solid #ccc";
            document.getElementById('adi_soyadi').style.border = "1px solid #ccc";
            document.getElementById('tel').style.border = "1px solid #ccc";
            document.getElementById('mahalle').style.border = "1px solid #ccc";
            document.getElementById('cadde_sokak').style.border = "1px solid #ccc";
            document.getElementById('bina').style.border = "1px solid #ccc";
        }
        catch (error) { }
        this.editedAddress = address;
        this.shippingAddress = address;
        this.ilceler = (new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_10__["CityTown"]()).getTowns(this.editedAddress.city['id']);
        let yOffset = document.getElementById("address-anchor").offsetTop;
        this.content.scrollToPoint(0, yOffset, 1000);
    }
    newAdress() {
        this.editedAddress = new src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_9__["Address"]();
        this.shippingAddress = null;
    }
    changeCtity(event) {
        this.ilceler = (new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_10__["CityTown"]()).getTowns(this.editedAddress.city['id']);
        this.iller.map(il => {
            if (event.target.value == il.id) {
                this.editedAddress.il_adi = il.name;
            }
        });
    }
    changeTown(event) {
        this.ilceler.map(ilce => {
            if (event.target.value == ilce.id) {
                this.editedAddress.ilce_adi = ilce.name;
            }
        });
    }
    complateOrder() {
        if (this.channel.shipping_type == 'TO_ADDRESS') {
            this.complateWithAddress();
        }
        else {
            this.complateWithTable();
        }
    }
    complateWithTable() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let error = false;
            document.getElementById('name_surname_for_totable').style.border = '1px solid #ccc';
            document.getElementById('table_name_for_totable').style.border = '1px solid #ccc';
            if (((_a = this.toTableAddress.name_surname_for_totable) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '').length) <= 3
                || this.toTableAddress.name_surname_for_totable === undefined) {
                document.getElementById('name_surname_for_totable').style.border = '1px solid red';
                error = true;
            }
            if (!((_b = this.toTableAddress.table_name_for_totable) === null || _b === void 0 ? void 0 : _b.replace(/\s/g, '').length)
                || this.toTableAddress.table_name_for_totable === undefined) {
                document.getElementById('table_name_for_totable').style.border = '1px solid red';
                error = true;
            }
            if (error) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Dikkat !',
                    message: 'Masanızı ve isminizi yazmadınız',
                    buttons: [{
                            text: 'Tamam',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            })
                        }
                    ]
                });
                yield alert.present();
                return;
            }
            let order = new src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_12__["Order"]();
            order.uid = window.localStorage.getItem('uid');
            order.shipping_address = JSON.parse(JSON.stringify(this.toTableAddress));
            order.created_at = firebase__WEBPACK_IMPORTED_MODULE_11___default.a.firestore.FieldValue.serverTimestamp();
            order.cart_items = this.cartItems;
            order.status = { status: (new src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_12__["OrderStatus"]()).status[0].id, created_at: order.created_at, cancel_by_cutomer: '' };
            this.cartService.complateOrder(order, this.cid).then(() => {
                this.cartItems.forEach((item) => {
                    this.rejectFood(item);
                });
            });
            this.order_success = true;
        });
    }
    complateWithAddress() {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let address_error = false;
            if (!this.shippingAddress) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Dikkat !',
                    message: 'Teslimat adresinizi seçmediniz',
                    buttons: [{
                            text: 'Tamam',
                            handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            })
                        }
                    ]
                });
                yield alert.present();
                return;
            }
            if (((_a = this.shippingAddress.name) === null || _a === void 0 ? void 0 : _a.length) < 3 || this.shippingAddress.name === undefined) {
                document.getElementById('name').style.borderBottom = "1px solid red";
                address_error = true;
            }
            if (((_b = this.shippingAddress.adi_soyadi) === null || _b === void 0 ? void 0 : _b.length) < 3 || this.shippingAddress.adi_soyadi === undefined) {
                document.getElementById('adi_soyadi').style.borderBottom = "1px solid red";
                address_error = true;
            }
            if (((_c = this.shippingAddress.mahalle) === null || _c === void 0 ? void 0 : _c.length) < 3 || this.shippingAddress.mahalle === undefined) {
                document.getElementById('mahalle').style.borderBottom = "1px solid red";
                address_error = true;
            }
            if (((_d = this.shippingAddress.cadde_sokak) === null || _d === void 0 ? void 0 : _d.length) < 3 || this.shippingAddress.cadde_sokak === undefined) {
                document.getElementById('cadde_sokak').style.borderBottom = "1px solid red";
                address_error = true;
            }
            if (((_e = this.shippingAddress.bina) === null || _e === void 0 ? void 0 : _e.length) < 3 || this.shippingAddress.bina === undefined) {
                document.getElementById('bina').style.borderBottom = "1px solid red";
                address_error = true;
            }
            if (((_f = this.shippingAddress.tel) === null || _f === void 0 ? void 0 : _f.length) < 3 || this.shippingAddress.tel === undefined) {
                document.getElementById('tel').style.borderBottom = "1px solid red";
                address_error = true;
            }
            if (address_error) {
                let yOffset = document.getElementById("address-anchor").offsetTop;
                this.content.scrollToPoint(0, yOffset + 100, 1000);
                return;
            }
            let order = new src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_12__["Order"]();
            order.uid = this.authService.USER.uid;
            order.account = this.account;
            order.shipping_address = JSON.parse(JSON.stringify(this.shippingAddress));
            order.created_at = firebase__WEBPACK_IMPORTED_MODULE_11___default.a.firestore.FieldValue.serverTimestamp();
            order.cart_items = this.cartItems;
            order.status = { status: (new src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_12__["OrderStatus"]()).status[0].id, created_at: order.created_at, cancel_by_cutomer: null };
            this.cartService.complateOrder(order, this.cid).then(() => {
                this.cartItems.forEach((item) => {
                    this.rejectFood(item);
                });
            });
            this.order_success = true;
        });
    }
    back() {
        this.location.back();
    }
};
CartPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
    { type: src_app_services_channel_service__WEBPACK_IMPORTED_MODULE_14__["ChannelService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
CartPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['content',] }]
};
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartPage);



/***/ }),

/***/ "sFz8":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "Y+Iu");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "rqSi");
/* harmony import */ var src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/currency.pipe */ "X4wd");








let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"], src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]]
    })
], CartPageModule);



/***/ }),

/***/ "vwaP":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module-es2015.js.map