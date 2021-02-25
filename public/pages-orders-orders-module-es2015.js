(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"],{

/***/ "8veL":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "Ep+G");




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "Ep+G":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.page.html */ "iVDW");
/* harmony import */ var _orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.page.scss */ "F6Pd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/objects/cart.model */ "uYlw");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/order.service */ "kVqo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let OrdersPage = class OrdersPage {
    constructor(route, orderService, loadingController, router, location) {
        this.route = route;
        this.orderService = orderService;
        this.loadingController = loadingController;
        this.router = router;
        this.location = location;
        this.filter_status = 'hepsi';
        this.showFilterCard = false;
        this.limit = 1;
        this.orderStatus = new src_app_objects_cart_model__WEBPACK_IMPORTED_MODULE_6__["OrderStatus"]();
        this.filter_end_date = (new Date()).toString();
        this.filter_start_date = new Date(0);
    }
    ngOnInit() {
        this.cid = this.route.snapshot.paramMap.get('cid');
        this.getOrders();
    }
    getOrders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield this.loading.present();
            this.startAfterDoc = null;
            let filter_end_date = new Date(this.filter_end_date);
            this.orderService.getOrders(this.cid, this.filter_status, this.filter_start_date, filter_end_date, this.startAfterDoc, this.limit).snapshotChanges().subscribe((orders) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.loading.dismiss();
                this.orders = orders.map(order => {
                    return Object.assign({ id: order.payload.doc.id }, order.payload.doc.data());
                });
                if (orders.length) {
                    this.startAfterDoc = orders[orders.length - 1].payload.doc;
                }
            }));
        });
    }
    getNextOrders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let filter_end_date = new Date(this.filter_end_date);
            let filter_start_date = new Date(this.filter_start_date);
            let reference = this.orderService.orderReference(this.cid)
                .orderBy('created_at', 'desc')
                .where('created_at', '>', filter_start_date)
                .where('created_at', '<', filter_end_date)
                .startAfter(this.startAfterDoc)
                .limit(this.limit);
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield this.loading.present();
            if (this.filter_status === undefined || this.filter_status === 'hepsi') {
                reference.get().then((orders) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loading.dismiss();
                    orders.docs.map(order => {
                        this.orders.push(Object.assign({ id: order.id }, order.data()));
                    });
                    if (orders.docs.length <= this.limit) {
                        this.startAfterDoc = orders.docs[orders.docs.length - 1];
                    }
                    else {
                        this.startAfterDoc = null;
                    }
                }));
            }
            else {
                reference.where('status.status', '==', this.filter_status).get().then((orders) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.loading.dismiss();
                    orders.docs.map(order => {
                        this.orders.push(Object.assign({ id: order.id }, order.data()));
                    });
                    if (orders.docs.length <= this.limit) {
                        this.startAfterDoc = orders.docs[orders.docs.length - 1];
                    }
                    else {
                        this.startAfterDoc = null;
                    }
                }));
            }
        });
    }
    next() {
        this.getNextOrders();
    }
    back() {
        this.location.back();
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
    showOrderDetails(order) {
        let navigationExtras = {
            state: { order: order, cid: this.cid }
        };
        this.router.navigate(['/order-details'], navigationExtras);
    }
    switchFilterCard() {
        this.showFilterCard = !this.showFilterCard;
    }
    getStatus(order) {
        return this.orderStatus.getValue(order.status.status);
    }
};
OrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersPage);



/***/ }),

/***/ "F6Pd":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  background-color: aliceblue;\n  border: 1px solid #e0e8f0;\n  width: 90%;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoib3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI0LCAyMzIsIDI0MCk7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "Xlj8":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "8veL");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "Ep+G");
/* harmony import */ var src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/currency.pipe */ "X4wd");
/* harmony import */ var src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/unix-time-to-date.pipe */ "SA8l");









let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"], src_app_pipes_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], src_app_pipes_unix_time_to_date_pipe__WEBPACK_IMPORTED_MODULE_8__["UnixTimeToDatePipe"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "iVDW":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-buttons>\n      <ion-title>Siparişleri</ion-title>\n    </ion-tab-bar> \n  </ion-tabs>\n</ion-toolbar>\n\n \n\n\n<ion-content>\n\n<!-- ///////////////////////////////// Filitre Tablosu //////////////////////////// --> \n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-toolbar >\n          <ion-label>Flitre Uygula</ion-label>\n          <ion-buttons slot=\"end\" (click)=\"switchFilterCard()\">\n            <ion-icon name=\"filter-circle-outline\"></ion-icon>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n    <section  *ngIf=\"showFilterCard\"> \n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>Sipariş Durumu</ion-label> \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-select multiple=\"false\" placeholder=\"Hepsi\"  [(ngModel)]=\"filter_status\" multiple=\"false\">\n            <ion-select-option *ngFor=\"let status of orderStatus.status;\" [value]=\"status.id\">{{status.value}}</ion-select-option> \n          </ion-select> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-label>Başlangıç Tarihi</ion-label> \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-datetime display-format=\"DD MMM YYYY\" [(ngModel)]=\"filter_start_date\" monthShortNames=\"Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara\" doneText=\"Tamam\" cancelText=\"İptal\" picker-format=\"DD MMM YYYY\" placeholder=\"Başlangıç Tarihi\"></ion-datetime> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">          \n          <ion-label>Bitiş Tarihi</ion-label> \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-datetime display-format=\"DD MMM YYYY\"     [(ngModel)]=\"filter_end_date\" monthShortNames=\"Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara\" doneText=\"Tamam\" cancelText=\"İptal\" picker-format=\"DD MMM YYYY\"  placeholder=\"Bitiş Tarihi\"></ion-datetime> \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button (click)=\"getOrders()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n            Uygula\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </section>\n  </ion-grid>\n\n<!-- ////////////////////////////////// Sipariş Listesi //////////////////////////// --> \n  <ion-grid fixed *ngFor=\"let order of orders\" button (click)=\"showOrderDetails(order)\">\n    \n      <ion-row >\n        <ion-col size=\"10\" *ngIf=\"order.account\">\n          {{ order.account.displayName }}\n        </ion-col>\n        <ion-col size=\"10\" *ngIf=\"order.shipping_address.name_surname_for_totable\">\n          {{ order.shipping_address.name_surname_for_totable }}\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-badge  color=\"light\">{{ getOrderPrice(order) | currencyPipe }}</ion-badge>\n        </ion-col>\n      </ion-row>  \n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label color=\"danger\" *ngIf=\"order.status.cancel_by_cutomer=='cancel_by_cutomer'\"> Müşteri siparişi iptal etti</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>\n            Sipariş tarihi : {{ order.created_at | unixTimeToDate: 'date' }} {{ order.created_at | unixTimeToDate: 'hm' }}\n          </ion-label>\n        </ion-col> \n      </ion-row>\n      <ion-row> \n        <ion-col size=\"12\">\n          <ion-label>Sipariş Durumu {{ getStatus(order) }} - {{ order.status.created_at | unixTimeToDate: 'hm' }}</ion-label>\n        </ion-col>\n      </ion-row>\n\n  </ion-grid>   \n\n  <ion-button (click)=\"next()\" [disabled]=\"!startAfterDoc\" expand=\"block\" fill=\"clear\">\n    Sonraki Siparişler\n    <ion-icon slot=\"start\" name=\"next-cricle\"></ion-icon>\n  </ion-button> \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module-es2015.js.map