(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customer-orders-customer-orders-module"],{

/***/ "3typ":
/*!***************************************************************!*\
  !*** ./src/app/pages/customer-orders/customer-orders.page.ts ***!
  \***************************************************************/
/*! exports provided: CustomerOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersPage", function() { return CustomerOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-orders.page.html */ "OtvC");
/* harmony import */ var _customer_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-orders.page.scss */ "Uix4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");
/* harmony import */ var src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/objects/cart.model */ "uYlw");








let CustomerOrdersPage = class CustomerOrdersPage {
    constructor(location, route, orderService, router) {
        this.location = location;
        this.route = route;
        this.orderService = orderService;
        this.router = router;
        this.limit = 10;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.uid = this.router.getCurrentNavigation().extras.state.uid;
                this.cid = this.router.getCurrentNavigation().extras.state.cid;
            }
        });
        this.orderStatus = new src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_7__["OrderStatus"]();
    }
    ngOnInit() {
        this.getCutomerOrders();
    }
    getCutomerOrders() {
        let orders_ref = this.orderService.getCutomerOrders(this.cid);
        orders_ref.orderBy('created_at', 'desc');
        orders_ref.where('uid', '==', this.uid);
        orders_ref.limit(this.limit);
        orders_ref.get().then((customer_orders) => {
            this.customerOrders = customer_orders.docs.map(order => {
                return Object.assign({ id: order.id }, order.data());
            });
        });
    }
    getOrderPrice(order) {
        let total = 0;
        order.cart_items.map((cart_item) => {
            cart_item.food.orders.map((order) => {
                total += order.additional.quantity * order.additional.price;
            });
            total += cart_item.food.price;
        });
        return total;
    }
    getFoodTotalPrice(cart_item) {
        return this.orderService.getFoodTotalPrice(cart_item);
    }
    getStatus(order) {
        if (order.status.cancel_by_cutomer == 'cancel_by_cutomer') {
            return; // siz iptal ettiniz
        }
        return this.orderStatus.getValue(order.status.status);
    }
    cancelOrder(order) {
        this.orderService.cancelOrder(this.cid, order).then(() => {
            order.status.cancel_by_cutomer == "cancel_by_cutomer";
        });
    }
    back() {
        this.location.back();
    }
};
CustomerOrdersPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CustomerOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-orders',
        template: _raw_loader_customer_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerOrdersPage);



/***/ }),

/***/ "OX5x":
/*!*************************************************************************!*\
  !*** ./src/app/pages/customer-orders/customer-orders-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerOrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersPageRoutingModule", function() { return CustomerOrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-orders.page */ "3typ");




const routes = [
    {
        path: '',
        component: _customer_orders_page__WEBPACK_IMPORTED_MODULE_3__["CustomerOrdersPage"]
    }
];
let CustomerOrdersPageRoutingModule = class CustomerOrdersPageRoutingModule {
};
CustomerOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerOrdersPageRoutingModule);



/***/ }),

/***/ "OtvC":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-orders/customer-orders.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\"> \n      <ion-tab-button (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-tab-button> \n      <ion-title>Siparişlerim</ion-title>\n      <ion-tab-button  >\n         \n      </ion-tab-button> \n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n \n\n<ion-content>\n  <!-- herbir order -->\n  <ion-card *ngFor = \"let cOrder of customerOrders\" button >\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-button *ngIf=\"cOrder.account\" fill=\"clear\" size=\"small\"> \n          {{ cOrder.account?.displayName }}\n        </ion-button>\n        <ion-button *ngIf = \"cOrder.shipping_address.name_surname_for_totable\" fill=\"clear\" size=\"small\"> \n          {{ cOrder.shipping_address.name_surname_for_totable }}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button  (click)=\"cancelOrder(cOrder)\" *ngIf=\"(cOrder.status.status != 'gonderildi' && cOrder.status.cancel_by_cutomer!='cancel_by_cutomer')\"   fill=\"clear\" color=\"danger\" size=\"small\">\n          İptal\n        </ion-button>\n        <ion-button disabled *ngIf=\"cOrder.status.cancel_by_cutomer=='cancel_by_cutomer'\"  fill=\"clear\" size=\"small\">\n          İptal Ettiniz\n        </ion-button>\n      </ion-col>\n      \n\n    </ion-row>\n    <ion-card-content>\n      <!-- herbir food --> \n      <div *ngFor=\"let item of cOrder.cart_items\" style=\"margin-top: 10px;\">\n        <div style=\"font-weight: bold;font-style: italic;\" > </div>\n        <ion-item lines=\"none\">\n          <ion-label>{{item.food.title}}   {{ item.food.price | currencyPipe }}</ion-label> \n        </ion-item> \n        <ion-item *ngFor=\"let forder of item.food.orders\" lines=\"none\">\n          <ion-note > \n            {{forder.additional.name}} \n            {{forder.additional.price | currencyPipe}} x {{forder.additional.quantity}} =\n            {{(forder.additional.price * forder.additional.quantity) | currencyPipe}}            \n          </ion-note> \n        </ion-item> \n        <ion-item  lines=\"none\">\n          <ion-label color=\"medium\">Yemek + İlaveler : </ion-label>\n          <ion-badge color=\"medium\">{{ getFoodTotalPrice(item) | currencyPipe }}</ion-badge> \n        </ion-item>\n      </div><!-- herbir food END-->  \n\n      <ion-item lines=\"none\">\n        <ion-label> Genel Toplam : </ion-label>\n        <ion-badge color=\"medium\">{{ getOrderPrice(cOrder) | currencyPipe }}</ion-badge>\n      </ion-item>\n    </ion-card-content> \n    <ion-row>\n      <ion-col size=\"5\">{{ cOrder.created_at | unixTimeToDate: 'date' }} {{ cOrder.created_at | unixTimeToDate: 'hm' }} </ion-col>\n      <ion-col size=\"7\">{{ getStatus(cOrder) }} - {{ cOrder.status.created_at | unixTimeToDate: 'hm' }}</ion-col>\n    </ion-row>\n  </ion-card> <!-- herbir order END -->\n</ion-content>\n");

/***/ }),

/***/ "Uix4":
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer-orders/customer-orders.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  --background: aliceblue;\n  box-shadow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1c3RvbWVyLW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY3VzdG9tZXItb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IGFsaWNlYmx1ZTsgXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG59Il19 */");

/***/ }),

/***/ "yvKD":
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer-orders/customer-orders.module.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersPageModule", function() { return CustomerOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _customer_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-orders-routing.module */ "OX5x");
/* harmony import */ var _customer_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-orders.page */ "3typ");
/* harmony import */ var src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/currency.pipe */ "X4wd");
/* harmony import */ var src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/unix-time-to-date.pipe */ "SA8l");









let CustomerOrdersPageModule = class CustomerOrdersPageModule {
};
CustomerOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customer_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerOrdersPageRoutingModule"]
        ],
        declarations: [_customer_orders_page__WEBPACK_IMPORTED_MODULE_6__["CustomerOrdersPage"], src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_8__["UnixTimeToDatePipe"]]
    })
], CustomerOrdersPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-customer-orders-customer-orders-module-es2015.js.map