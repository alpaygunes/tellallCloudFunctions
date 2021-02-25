(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Npzb":
/*!******************************************!*\
  !*** ./src/app/objects/message.model.ts ***!
  \******************************************/
/*! exports provided: Message, CallBackTypes, FeedBack, MenuVisitor, MediaFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallBackTypes", function() { return CallBackTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBack", function() { return FeedBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuVisitor", function() { return MenuVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaFile", function() { return MediaFile; });
class Message {
    constructor() {
        this.type = 'text';
        this.text = '';
        this.image_srcs = [];
        this.created_at = null;
        this.uid = null;
        this.call_back_id = null; //CallBackTypes id
        this.choices = [{ text: '', correct: false }]; // {text:'question text',correct:'true||false',value:'1-10 arası gibi'}
        this.reader_count = 0;
    }
}
class CallBackTypes {
    constructor() {
        this.types = [
            { id: 0, name: 'Soru', icon: 'msg-quiz.svg' },
            { id: 1, name: 'Beğen', icon: 'msg-like.svg' },
            { id: 2, name: 'Beğendim -Normal- Beğenmedim', icon: 'msg-1-0-1.svg' },
            { id: 3, name: 'Evet-Hayır', icon: 'msg-yesno.svg' },
            { id: 4, name: 'Anket', icon: 'msg-survey.svg' },
            { id: 5, name: 'Cevap yaz', icon: 'msg-reply.svg' }
        ];
    }
    getNameByID(id) {
        let name = 'Text Mesaj';
        this.types.forEach((type) => {
            if (type.id == id) {
                name = type.name;
            }
        });
        return name;
    }
    getIconByID(id) {
        if (id == null)
            return 'msg.svg';
        let icon;
        this.types.forEach((type) => {
            if (type.id == id) {
                icon = type.icon;
            }
        });
        return icon;
    }
}
class FeedBack {
    constructor() {
        this.f = null;
        this.checked = [];
        this.reply = '';
        this.uid = '';
    }
}
class MenuVisitor {
    constructor() {
        this.uid = null;
    }
}
class MediaFile {
}


/***/ }),

/***/ "SA8l":
/*!*************************************************!*\
  !*** ./src/app/pipes/unix-time-to-date.pipe.ts ***!
  \*************************************************/
/*! exports provided: UnixTimeToDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnixTimeToDatePipe", function() { return UnixTimeToDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let UnixTimeToDatePipe = class UnixTimeToDatePipe {
    transform(value, ...args) {
        if (value === null)
            return;
        value = value['seconds'] * 1000;
        const d = new Date(value).toLocaleDateString("tr-TR");
        const h = this.addZero(new Date(value).getHours());
        const m = this.addZero(new Date(value).getMinutes());
        if (args[0] == 'date') {
            return d;
        }
        else if (args[0] == 'hm') {
            return h + ':' + m;
        }
    }
    addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
};
UnixTimeToDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'unixTimeToDate'
    })
], UnixTimeToDatePipe);



/***/ }),

/***/ "X4wd":
/*!****************************************!*\
  !*** ./src/app/pipes/currency.pipe.ts ***!
  \****************************************/
/*! exports provided: CurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyPipe", function() { return CurrencyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CurrencyPipe = class CurrencyPipe {
    transform(value, ...args) {
        let currency = '₺';
        return value + ' ' + currency;
    }
};
CurrencyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'currencyPipe'
    })
], CurrencyPipe);



/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");




let CartService = class CartService {
    constructor(fs, authService) {
        this.fs = fs;
        this.authService = authService;
    }
    addToCart(cartItem, cid) {
        return this.fs.collection('channels').doc(cid).collection('carts').add(Object.assign({}, cartItem));
    }
    getCart(cid, channel) {
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
        return this.fs.collection('channels').doc(cid).collection('carts', ref => ref.where('uid', '==', uid));
    }
    rejectFood(item, cid) {
        this.fs.collection('channels').doc(cid).collection('carts').doc(item.id).delete();
    }
    complateOrder(order, cid) {
        return this.fs.collection('channels').doc(cid).collection('orders').add(Object.assign({}, order));
    }
};
CartService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "cpn4":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FileService = class FileService {
    constructor() { }
    resizeImage(image, w, h, q) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((res, rej) => {
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = (revent) => {
                    const img = new Image();
                    img.onload = function (oimg) {
                        let resizeCanvas = document.createElement("canvas");
                        var ctx = resizeCanvas.getContext("2d");
                        let oW = resizeCanvas.width;
                        let oH = resizeCanvas.height;
                        resizeCanvas.width = img.width * (h / img.height);
                        resizeCanvas.height = h;
                        if (w) {
                            resizeCanvas.width = w;
                            resizeCanvas.height = img.height * (w / img.width);
                        }
                        ctx.drawImage(img, 0, 0, resizeCanvas.width, resizeCanvas.height);
                        resizeCanvas.toBlob(function (blob) {
                            res(blob);
                        }, 'image/jpeg', q);
                    };
                    img.src = revent.target.result;
                };
                reader.onerror = error => {
                    console.log("File resize edilemedi " + error);
                    rej(error);
                };
            }).catch((e) => {
                console.log("File resize edilemedi " + e);
            });
        });
    }
    base64ToBlob(base64Image) {
        // Split into two parts
        const parts = base64Image.split(';base64,');
        // Hold the content type
        const imageType = parts[0].split(':')[1];
        // Decode Base64 string
        const decodedData = window.atob(parts[1]);
        // Create UNIT8ARRAY of size same as row data length
        const uInt8Array = new Uint8Array(decodedData.length);
        // Insert all character code into uInt8Array
        for (let i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        // Return BLOB image after conversion
        return new Blob([uInt8Array], { type: imageType });
    }
};
FileService.ctorParameters = () => [];
FileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileService);



/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




let OrderService = class OrderService {
    constructor(fs) {
        this.fs = fs;
    }
    getFoodTotalPrice(cart_item) {
        let total = 0;
        cart_item.food.orders.map((order) => {
            total += order.additional.quantity * order.additional.price;
        });
        total += cart_item.food.price;
        return total;
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
    getOrders(cid, filter_status, filter_start_date, filter_end_date, startAfterDoc, limit) {
        if (!filter_end_date) {
            filter_end_date = new Date();
        }
        else {
            filter_end_date = new Date(filter_end_date);
        }
        if (!filter_start_date) {
            filter_start_date = new Date(0);
        }
        else {
            filter_start_date = new Date(filter_start_date);
        }
        let filter_status_operant = '==';
        // --------------------  Eğer filitrede status yok ise yada HEPSİ ise  ---------------------------
        if (filter_status === undefined || filter_status === 'hepsi') {
            if (startAfterDoc) {
                return this.fs.collection('channels').doc(cid)
                    .collection('orders', ref => ref
                    .orderBy('created_at', 'desc')
                    .where('created_at', '>', filter_start_date)
                    .where('created_at', '<', filter_end_date)
                    .startAfter(startAfterDoc)
                    .limit(limit));
            }
            else {
                return this.fs.collection('channels').doc(cid)
                    .collection('orders', ref => ref
                    .orderBy('created_at', 'desc')
                    .where('created_at', '>', filter_start_date)
                    .where('created_at', '<', filter_end_date).limit(limit));
            }
        }
        else {
            // -------------------- filitre status Belirtilmişse  ---------------------------
            return this.fs.collection('channels').doc(cid)
                .collection('orders', ref => ref
                .orderBy('created_at', 'desc')
                .where('created_at', '>', filter_start_date)
                .where('created_at', '<', filter_end_date)
                .where('status.status', '==', filter_status).limit(limit));
        }
    }
    orderReference(cid) {
        return this.fs.collection('channels').doc(cid).collection('orders').ref;
    }
    updateOrderStatus(orderId, cid, last_status) {
        let created_at = firebase__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp();
        let status = { created_at: created_at, status: last_status };
        return this.fs.collection('channels').doc(cid).collection('orders').doc(orderId).update({ status: Object.assign({}, status) });
    }
    getCutomerOrders(cid) {
        return this.fs.collection('channels').doc(cid).collection('orders').ref;
    }
    cancelOrder(cid, order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let created_at = firebase__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp();
            let status = order.status;
            status.cancel_by_cutomer = 'cancel_by_cutomer';
            yield this.fs.collection('channels').doc(cid).collection('orders').doc(order.id).update({ status: Object.assign({}, status)
            });
        });
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "pkPj":
/*!*******************************************!*\
  !*** ./src/app/objects/brochure.model.ts ***!
  \*******************************************/
/*! exports provided: Brochure, BrochureCategory, BrochurePage, BroshurePageImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brochure", function() { return Brochure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrochureCategory", function() { return BrochureCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrochurePage", function() { return BrochurePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroshurePageImage", function() { return BroshurePageImage; });
class Brochure {
    constructor() {
        this.categories = [];
    }
}
class BrochureCategory {
    constructor() {
        this.pages = [];
    }
}
class BrochurePage {
    constructor() {
        this.images = [];
    }
}
class BroshurePageImage {
    constructor() {
        this.id = '';
        this.url = '';
        this.gsPath = '';
    }
}


/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "uYlw":
/*!***************************************!*\
  !*** ./src/app/objects/cart.model.ts ***!
  \***************************************/
/*! exports provided: CartItem, Order, OrderStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatus", function() { return OrderStatus; });
class CartItem {
}
class Order {
}
class OrderStatus {
    constructor() {
        this.status = [{ id: 'degerlendiriliyor', value: 'Değerlendiriliyor' },
            { id: 'hazirlaniyor', value: 'Hazırlanıyor' },
            { id: 'gonderildi', value: 'Gönderildi' },
            { id: 'iptal_edildi', value: 'İptal Edildi' },
            { id: 'hepsi', value: 'Hepsi' }];
    }
    getValue(id) {
        let val = this.status.find(status => {
            return status.id == id;
        });
        return val.value;
    }
}


/***/ }),

/***/ "xc7y":
/*!**************************************************!*\
  !*** ./src/app/objects/food-drink-menu.model.ts ***!
  \**************************************************/
/*! exports provided: FoodDrinkMenu, FoodDrinkCategory, FoodDrinkFood, FoodDrinkImage, Additional, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDrinkMenu", function() { return FoodDrinkMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDrinkCategory", function() { return FoodDrinkCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDrinkFood", function() { return FoodDrinkFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDrinkImage", function() { return FoodDrinkImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Additional", function() { return Additional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
class FoodDrinkMenu {
    constructor() {
        this.categories = [];
    }
}
class FoodDrinkCategory {
    constructor() {
        this.foods = [];
    }
}
class FoodDrinkFood {
    constructor() {
        this.images = [];
        this.additionals = [];
        this.orders = [];
    }
}
class FoodDrinkImage {
    constructor() {
        this.id = '';
        this.url = '';
        this.gsPath = '';
    }
}
class Additional {
    constructor() {
        this.id = '';
        this.name = '';
        this.quantity = 0;
    }
}
class OrderItem {
}


/***/ }),

/***/ "ySeB":
/*!******************************************!*\
  !*** ./src/app/objects/channel.model.ts ***!
  \******************************************/
/*! exports provided: Channel, Scret, AnnounceTypes, ShippingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Channel", function() { return Channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scret", function() { return Scret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnounceTypes", function() { return AnnounceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingType", function() { return ShippingType; });
class Channel {
    constructor() {
        this.id = null;
        this.channel_name = '';
        this.description = '';
        this.registered_users_only = false;
        this.confirmation_required = false;
        this.announce_type = 'text';
        this.logo = 'assets/good-logo.png';
        this.with_password = false;
        this.hide_in_list = false;
        this.flash = false;
    }
}
class Scret {
    constructor() {
        this.uid = "";
        this.password = "";
    }
}
class AnnounceTypes {
    constructor() {
        this.announce_types = [
            { 'name': 'Text Mesaj', 'value': 'text' },
            { 'name': 'Broşür', 'value': 'brochure' },
            { 'name': 'Food&Drink Menu', 'value': 'food_drink_menu' },
        ];
    }
    getAnnounceName(val) {
        let name = 'anonce_type_not_found';
        this.announce_types.forEach(element => {
            if (element.value == val) {
                name = element.name;
            }
        });
        return name;
    }
}
var ShippingType;
(function (ShippingType) {
    ShippingType["NO_SERVICE"] = "Servis Yok";
    ShippingType["TO_TABLE"] = "Masaya Servis";
    ShippingType["TO_ADDRESS"] = "Adrese Servis";
})(ShippingType || (ShippingType = {}));


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map