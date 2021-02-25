(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "+tdy":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons  (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\"c></ion-icon>\n      </ion-buttons>\n      <ion-title >Sipariş Detayları</ion-title>\n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n   \n \n<ion-content>\n  <ion-item color=\"warning\" lines=\"none\">\n    <ion-label> Sipariş Toplamı </ion-label> \n    <ion-badge color=\"primary\"> {{ getOrderPrice() | currencyPipe }} </ion-badge>\n  </ion-item>\n\n  <ion-card>\n    <ion-card-header> \n      <ion-card-title>Sipariş Durumu</ion-card-title>\n    </ion-card-header>\n    <ion-item lines=\"none\"> \n      <ion-label>Sipariş durumun </ion-label>\n      <ion-select multiple=\"false\" placeholder=\"Değerlendiriliyor\" (ionChange)=\"newStatus($event)\" [(ngModel)]=\"order.status.status\" multiple=\"false\">\n        <ion-select-option *ngFor=\"let status of orderStatus.status;\" [value]=\"status.id\">{{status.value}}</ion-select-option> \n      </ion-select> \n    </ion-item>\n\n    <ion-button (click)=\"updateOrderStatus()\" size=\"small\" expand=\"block\" *ngIf=\"update_btn_show\"    > \n      <ion-label>Güncelle</ion-label> \n    </ion-button>\n  </ion-card>\n\n  <!-- ///////////////////////////////    SİPARİŞLER          ////////////////////////// -->\n  <ion-card *ngFor=\"let cart_item of order.cart_items\">\n    <ion-card-header> \n      <ion-card-title> {{cart_item.food.title}} </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>Yemek ücreti</ion-label>\n          <ion-badge color=\"light\" mode=\"ios\">{{cart_item.food.price | currencyPipe}}</ion-badge>\n        </ion-item>\n        <ion-list-header>\n          <ion-label>İlaveler</ion-label>\n        </ion-list-header>\n        <div *ngFor=\"let forder of cart_item.food.orders\">\n          <ion-item *ngIf=\"forder.additional.quantity\">\n            <ion-label>{{forder.additional.name}}</ion-label>\n            <ion-label>{{forder.additional.quantity}} adet x {{forder.additional.price}}</ion-label>\n            <ion-badge color=\"light\" mode=\"ios\">{{(forder.additional.quantity*forder.additional.price) | currencyPipe}}</ion-badge>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-label>Toplam</ion-label>\n          <ion-badge color=\"medium\" mode=\"ios\">{{getFoodTotalPrice(cart_item) | currencyPipe}}</ion-badge>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card> \n  <!-- ///////////////////////////////    END SİPARİŞLER      ////////////////////////// -->\n\n\n  <!--  ////////////////////////////////  customer detail     ////////////////////////// -->\n  <ion-card *ngIf=\"order.account\"> \n    <ion-list>\n      <ion-list-header>\n        <ion-label>İletişim Bilgileri</ion-label> \n      </ion-list-header>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.adi_soyadi}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.il_adi}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.ilce_adi}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.mahalle}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.cadde_sokak}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.bina}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.adresin_devami}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.yol_tarifi}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label > {{order.shipping_address.tel}} </ion-label>\n      </ion-item>\n\n      <ion-list-header>\n        <ion-label>Hesap Sahibi</ion-label> \n      </ion-list-header>\n      <ion-item lines=\"none\">\n        <ion-label> {{order.account.displayName}} </ion-label> \n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label> {{order.account.phoneNumber}} </ion-label> \n      </ion-item>\n    </ion-list> \n  </ion-card> \n\n  <!--- ---------------------------  MASAYA sipariş ------------------- -->\n  <ion-card *ngIf=\"!order.account\">\n    <ion-card-header>\n      <ion-card-title>Masa : {{order.shipping_address.table_name_for_totable}}</ion-card-title> \n    </ion-card-header>\n    <ion-card-content> \n      <ion-item lines=\"none\"> \n        <ion-label *ngIf=\"order.shipping_address\"> {{order.shipping_address.name_surname_for_totable}} </ion-label>\n      </ion-item> \n    </ion-card-content>\n  </ion-card>\n  <!-- ----- end masaya sipariş -------------- -->\n\n  <!--  ////////////////////////////////  END customer detail ////////////////////////// -->\n\n</ion-content>\n");

/***/ }),

/***/ "ABqe":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-details/order-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function() { return OrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.page */ "PfQs");




const routes = [
    {
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }
];
let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {
};
OrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailsPageRoutingModule);



/***/ }),

/***/ "Muxh":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "PfQs":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-details.page.html */ "+tdy");
/* harmony import */ var _order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details.page.scss */ "Muxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/cart.model */ "uYlw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");








let OrderDetailsPage = class OrderDetailsPage {
    constructor(route, location, orderService, router) {
        this.route = route;
        this.location = location;
        this.orderService = orderService;
        this.router = router;
        this.update_btn_show = false;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.order = this.router.getCurrentNavigation().extras.state.order;
                this.cid = this.router.getCurrentNavigation().extras.state.cid;
            }
        });
        this.orderStatus = new src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_5__["OrderStatus"]();
    }
    ngOnInit() {
    }
    getFoodTotalPrice(cart_item) {
        return this.orderService.getFoodTotalPrice(cart_item);
    }
    getOrderPrice() {
        return this.orderService.getOrderPrice(this.order);
    }
    updateOrderStatus() {
        this.orderService.updateOrderStatus(this.order.id, this.cid, this.order.status.status).then(() => {
            this.update_btn_show = false;
            if (this.order.status.status == 'gonderildi') {
                this.location.back();
            }
        });
    }
    newStatus(event) {
        this.update_btn_show = true;
    }
    back() {
        this.location.back();
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-details',
        template: _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderDetailsPage);



/***/ }),

/***/ "j2J9":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details-routing.module */ "ABqe");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "PfQs");
/* harmony import */ var src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/currency.pipe */ "X4wd");








let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"], src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]]
    })
], OrderDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es2015.js.map