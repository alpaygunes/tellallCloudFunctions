(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
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
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "Npzb":
    /*!******************************************!*\
      !*** ./src/app/objects/message.model.ts ***!
      \******************************************/

    /*! exports provided: Message, CallBackTypes, FeedBack, MenuVisitor, MediaFile */

    /***/
    function Npzb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Message", function () {
        return Message;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallBackTypes", function () {
        return CallBackTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedBack", function () {
        return FeedBack;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuVisitor", function () {
        return MenuVisitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaFile", function () {
        return MediaFile;
      });

      var Message = function Message() {
        _classCallCheck(this, Message);

        this.type = 'text';
        this.text = '';
        this.image_srcs = [];
        this.created_at = null;
        this.uid = null;
        this.call_back_id = null; //CallBackTypes id

        this.choices = [{
          text: '',
          correct: false
        }]; // {text:'question text',correct:'true||false',value:'1-10 arası gibi'}

        this.reader_count = 0;
      };

      var CallBackTypes = /*#__PURE__*/function () {
        function CallBackTypes() {
          _classCallCheck(this, CallBackTypes);

          this.types = [{
            id: 0,
            name: 'Soru',
            icon: 'msg-quiz.svg'
          }, {
            id: 1,
            name: 'Beğen',
            icon: 'msg-like.svg'
          }, {
            id: 2,
            name: 'Beğendim -Normal- Beğenmedim',
            icon: 'msg-1-0-1.svg'
          }, {
            id: 3,
            name: 'Evet-Hayır',
            icon: 'msg-yesno.svg'
          }, {
            id: 4,
            name: 'Anket',
            icon: 'msg-survey.svg'
          }, {
            id: 5,
            name: 'Cevap yaz',
            icon: 'msg-reply.svg'
          }];
        }

        _createClass(CallBackTypes, [{
          key: "getNameByID",
          value: function getNameByID(id) {
            var name = 'Text Mesaj';
            this.types.forEach(function (type) {
              if (type.id == id) {
                name = type.name;
              }
            });
            return name;
          }
        }, {
          key: "getIconByID",
          value: function getIconByID(id) {
            if (id == null) return 'msg.svg';
            var icon;
            this.types.forEach(function (type) {
              if (type.id == id) {
                icon = type.icon;
              }
            });
            return icon;
          }
        }]);

        return CallBackTypes;
      }();

      var FeedBack = function FeedBack() {
        _classCallCheck(this, FeedBack);

        this.f = null;
        this.checked = [];
        this.reply = '';
        this.uid = '';
      };

      var MenuVisitor = function MenuVisitor() {
        _classCallCheck(this, MenuVisitor);

        this.uid = null;
      };

      var MediaFile = function MediaFile() {
        _classCallCheck(this, MediaFile);
      };
      /***/

    },

    /***/
    "SA8l":
    /*!*************************************************!*\
      !*** ./src/app/pipes/unix-time-to-date.pipe.ts ***!
      \*************************************************/

    /*! exports provided: UnixTimeToDatePipe */

    /***/
    function SA8l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnixTimeToDatePipe", function () {
        return UnixTimeToDatePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UnixTimeToDatePipe = /*#__PURE__*/function () {
        function UnixTimeToDatePipe() {
          _classCallCheck(this, UnixTimeToDatePipe);
        }

        _createClass(UnixTimeToDatePipe, [{
          key: "transform",
          value: function transform(value) {
            if (value === null) return;
            value = value['seconds'] * 1000;
            var d = new Date(value).toLocaleDateString("tr-TR");
            var h = this.addZero(new Date(value).getHours());
            var m = this.addZero(new Date(value).getMinutes());

            if ((arguments.length <= 1 ? undefined : arguments[1]) == 'date') {
              return d;
            } else if ((arguments.length <= 1 ? undefined : arguments[1]) == 'hm') {
              return h + ':' + m;
            }
          }
        }, {
          key: "addZero",
          value: function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }

            return i;
          }
        }]);

        return UnixTimeToDatePipe;
      }();

      UnixTimeToDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'unixTimeToDate'
      })], UnixTimeToDatePipe);
      /***/
    },

    /***/
    "X4wd":
    /*!****************************************!*\
      !*** ./src/app/pipes/currency.pipe.ts ***!
      \****************************************/

    /*! exports provided: CurrencyPipe */

    /***/
    function X4wd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrencyPipe", function () {
        return CurrencyPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CurrencyPipe = /*#__PURE__*/function () {
        function CurrencyPipe() {
          _classCallCheck(this, CurrencyPipe);
        }

        _createClass(CurrencyPipe, [{
          key: "transform",
          value: function transform(value) {
            var currency = '₺';
            return value + ' ' + currency;
          }
        }]);

        return CurrencyPipe;
      }();

      CurrencyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'currencyPipe'
      })], CurrencyPipe);
      /***/
    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context2.abrupt("return", el);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var CartService = /*#__PURE__*/function () {
        function CartService(fs, authService) {
          _classCallCheck(this, CartService);

          this.fs = fs;
          this.authService = authService;
        }

        _createClass(CartService, [{
          key: "addToCart",
          value: function addToCart(cartItem, cid) {
            return this.fs.collection('channels').doc(cid).collection('carts').add(Object.assign({}, cartItem));
          }
        }, {
          key: "getCart",
          value: function getCart(cid, channel) {
            var _a;

            var uid = (_a = this.authService.USER) === null || _a === void 0 ? void 0 : _a.uid;

            if (!uid) {
              if (window.localStorage.getItem('uid')) {
                uid = window.localStorage.getItem('uid');
              } else {
                uid = this.fs.createId();
                window.localStorage.setItem('uid', uid);
              }
            }

            return this.fs.collection('channels').doc(cid).collection('carts', function (ref) {
              return ref.where('uid', '==', uid);
            });
          }
        }, {
          key: "rejectFood",
          value: function rejectFood(item, cid) {
            this.fs.collection('channels').doc(cid).collection('carts').doc(item.id)["delete"]();
          }
        }, {
          key: "complateOrder",
          value: function complateOrder(order, cid) {
            return this.fs.collection('channels').doc(cid).collection('orders').add(Object.assign({}, order));
          }
        }]);

        return CartService;
      }();

      CartService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CartService);
      /***/
    },

    /***/
    "cpn4":
    /*!******************************************!*\
      !*** ./src/app/services/file.service.ts ***!
      \******************************************/

    /*! exports provided: FileService */

    /***/
    function cpn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return FileService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FileService = /*#__PURE__*/function () {
        function FileService() {
          _classCallCheck(this, FileService);
        }

        _createClass(FileService, [{
          key: "resizeImage",
          value: function resizeImage(image, w, h, q) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return new Promise(function (res, rej) {
                        var reader = new FileReader();
                        reader.readAsDataURL(image);

                        reader.onload = function (revent) {
                          var img = new Image();

                          img.onload = function (oimg) {
                            var resizeCanvas = document.createElement("canvas");
                            var ctx = resizeCanvas.getContext("2d");
                            var oW = resizeCanvas.width;
                            var oH = resizeCanvas.height;
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

                        reader.onerror = function (error) {
                          console.log("File resize edilemedi " + error);
                          rej(error);
                        };
                      })["catch"](function (e) {
                        console.log("File resize edilemedi " + e);
                      });

                    case 2:
                      return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "base64ToBlob",
          value: function base64ToBlob(base64Image) {
            // Split into two parts
            var parts = base64Image.split(';base64,'); // Hold the content type

            var imageType = parts[0].split(':')[1]; // Decode Base64 string

            var decodedData = window.atob(parts[1]); // Create UNIT8ARRAY of size same as row data length

            var uInt8Array = new Uint8Array(decodedData.length); // Insert all character code into uInt8Array

            for (var i = 0; i < decodedData.length; ++i) {
              uInt8Array[i] = decodedData.charCodeAt(i);
            } // Return BLOB image after conversion


            return new Blob([uInt8Array], {
              type: imageType
            });
          }
        }]);

        return FileService;
      }();

      FileService.ctorParameters = function () {
        return [];
      };

      FileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FileService);
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
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
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "kVqo":
    /*!*******************************************!*\
      !*** ./src/app/services/order.service.ts ***!
      \*******************************************/

    /*! exports provided: OrderService */

    /***/
    function kVqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
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


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);

      var OrderService = /*#__PURE__*/function () {
        function OrderService(fs) {
          _classCallCheck(this, OrderService);

          this.fs = fs;
        }

        _createClass(OrderService, [{
          key: "getFoodTotalPrice",
          value: function getFoodTotalPrice(cart_item) {
            var total = 0;
            cart_item.food.orders.map(function (order) {
              total += order.additional.quantity * order.additional.price;
            });
            total += cart_item.food.price;
            return total;
          }
        }, {
          key: "getOrderPrice",
          value: function getOrderPrice(order) {
            var total = 0;
            order.cart_items.map(function (cart_item) {
              cart_item.food.orders.map(function (order) {
                total += order.additional.quantity * order.additional.price;
              });
              total += cart_item.food.price;
            });
            return total;
          }
        }, {
          key: "getOrders",
          value: function getOrders(cid, filter_status, filter_start_date, filter_end_date, startAfterDoc, limit) {
            if (!filter_end_date) {
              filter_end_date = new Date();
            } else {
              filter_end_date = new Date(filter_end_date);
            }

            if (!filter_start_date) {
              filter_start_date = new Date(0);
            } else {
              filter_start_date = new Date(filter_start_date);
            }

            var filter_status_operant = '=='; // --------------------  Eğer filitrede status yok ise yada HEPSİ ise  ---------------------------

            if (filter_status === undefined || filter_status === 'hepsi') {
              if (startAfterDoc) {
                return this.fs.collection('channels').doc(cid).collection('orders', function (ref) {
                  return ref.orderBy('created_at', 'desc').where('created_at', '>', filter_start_date).where('created_at', '<', filter_end_date).startAfter(startAfterDoc).limit(limit);
                });
              } else {
                return this.fs.collection('channels').doc(cid).collection('orders', function (ref) {
                  return ref.orderBy('created_at', 'desc').where('created_at', '>', filter_start_date).where('created_at', '<', filter_end_date).limit(limit);
                });
              }
            } else {
              // -------------------- filitre status Belirtilmişse  ---------------------------
              return this.fs.collection('channels').doc(cid).collection('orders', function (ref) {
                return ref.orderBy('created_at', 'desc').where('created_at', '>', filter_start_date).where('created_at', '<', filter_end_date).where('status.status', '==', filter_status).limit(limit);
              });
            }
          }
        }, {
          key: "orderReference",
          value: function orderReference(cid) {
            return this.fs.collection('channels').doc(cid).collection('orders').ref;
          }
        }, {
          key: "updateOrderStatus",
          value: function updateOrderStatus(orderId, cid, last_status) {
            var created_at = firebase__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp();
            var status = {
              created_at: created_at,
              status: last_status
            };
            return this.fs.collection('channels').doc(cid).collection('orders').doc(orderId).update({
              status: Object.assign({}, status)
            });
          }
        }, {
          key: "getCutomerOrders",
          value: function getCutomerOrders(cid) {
            return this.fs.collection('channels').doc(cid).collection('orders').ref;
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(cid, order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var created_at, status;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      created_at = firebase__WEBPACK_IMPORTED_MODULE_3___default.a.firestore.FieldValue.serverTimestamp();
                      status = order.status;
                      status.cancel_by_cutomer = 'cancel_by_cutomer';
                      _context4.next = 5;
                      return this.fs.collection('channels').doc(cid).collection('orders').doc(order.id).update({
                        status: Object.assign({}, status)
                      });

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return OrderService;
      }();

      OrderService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OrderService);
      /***/
    },

    /***/
    "pkPj":
    /*!*******************************************!*\
      !*** ./src/app/objects/brochure.model.ts ***!
      \*******************************************/

    /*! exports provided: Brochure, BrochureCategory, BrochurePage, BroshurePageImage */

    /***/
    function pkPj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Brochure", function () {
        return Brochure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrochureCategory", function () {
        return BrochureCategory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrochurePage", function () {
        return BrochurePage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BroshurePageImage", function () {
        return BroshurePageImage;
      });

      var Brochure = function Brochure() {
        _classCallCheck(this, Brochure);

        this.categories = [];
      };

      var BrochureCategory = function BrochureCategory() {
        _classCallCheck(this, BrochureCategory);

        this.pages = [];
      };

      var BrochurePage = function BrochurePage() {
        _classCallCheck(this, BrochurePage);

        this.images = [];
      };

      var BroshurePageImage = function BroshurePageImage() {
        _classCallCheck(this, BroshurePageImage);

        this.id = '';
        this.url = '';
        this.gsPath = '';
      };
      /***/

    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "uYlw":
    /*!***************************************!*\
      !*** ./src/app/objects/cart.model.ts ***!
      \***************************************/

    /*! exports provided: CartItem, Order, OrderStatus */

    /***/
    function uYlw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartItem", function () {
        return CartItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderStatus", function () {
        return OrderStatus;
      });

      var CartItem = function CartItem() {
        _classCallCheck(this, CartItem);
      };

      var Order = function Order() {
        _classCallCheck(this, Order);
      };

      var OrderStatus = /*#__PURE__*/function () {
        function OrderStatus() {
          _classCallCheck(this, OrderStatus);

          this.status = [{
            id: 'degerlendiriliyor',
            value: 'Değerlendiriliyor'
          }, {
            id: 'hazirlaniyor',
            value: 'Hazırlanıyor'
          }, {
            id: 'gonderildi',
            value: 'Gönderildi'
          }, {
            id: 'iptal_edildi',
            value: 'İptal Edildi'
          }, {
            id: 'hepsi',
            value: 'Hepsi'
          }];
        }

        _createClass(OrderStatus, [{
          key: "getValue",
          value: function getValue(id) {
            var val = this.status.find(function (status) {
              return status.id == id;
            });
            return val.value;
          }
        }]);

        return OrderStatus;
      }();
      /***/

    },

    /***/
    "xc7y":
    /*!**************************************************!*\
      !*** ./src/app/objects/food-drink-menu.model.ts ***!
      \**************************************************/

    /*! exports provided: FoodDrinkMenu, FoodDrinkCategory, FoodDrinkFood, FoodDrinkImage, Additional, OrderItem */

    /***/
    function xc7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDrinkMenu", function () {
        return FoodDrinkMenu;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDrinkCategory", function () {
        return FoodDrinkCategory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDrinkFood", function () {
        return FoodDrinkFood;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDrinkImage", function () {
        return FoodDrinkImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Additional", function () {
        return Additional;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderItem", function () {
        return OrderItem;
      });

      var FoodDrinkMenu = function FoodDrinkMenu() {
        _classCallCheck(this, FoodDrinkMenu);

        this.categories = [];
      };

      var FoodDrinkCategory = function FoodDrinkCategory() {
        _classCallCheck(this, FoodDrinkCategory);

        this.foods = [];
      };

      var FoodDrinkFood = function FoodDrinkFood() {
        _classCallCheck(this, FoodDrinkFood);

        this.images = [];
        this.additionals = [];
        this.orders = [];
      };

      var FoodDrinkImage = function FoodDrinkImage() {
        _classCallCheck(this, FoodDrinkImage);

        this.id = '';
        this.url = '';
        this.gsPath = '';
      };

      var Additional = function Additional() {
        _classCallCheck(this, Additional);

        this.id = '';
        this.name = '';
        this.quantity = 0;
      };

      var OrderItem = function OrderItem() {
        _classCallCheck(this, OrderItem);
      };
      /***/

    },

    /***/
    "ySeB":
    /*!******************************************!*\
      !*** ./src/app/objects/channel.model.ts ***!
      \******************************************/

    /*! exports provided: Channel, Scret, AnnounceTypes, ShippingType */

    /***/
    function ySeB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Channel", function () {
        return Channel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scret", function () {
        return Scret;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnounceTypes", function () {
        return AnnounceTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShippingType", function () {
        return ShippingType;
      });

      var Channel = function Channel() {
        _classCallCheck(this, Channel);

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
      };

      var Scret = function Scret() {
        _classCallCheck(this, Scret);

        this.uid = "";
        this.password = "";
      };

      var AnnounceTypes = /*#__PURE__*/function () {
        function AnnounceTypes() {
          _classCallCheck(this, AnnounceTypes);

          this.announce_types = [{
            'name': 'Text Mesaj',
            'value': 'text'
          }, {
            'name': 'Broşür',
            'value': 'brochure'
          }, {
            'name': 'Food&Drink Menu',
            'value': 'food_drink_menu'
          }];
        }

        _createClass(AnnounceTypes, [{
          key: "getAnnounceName",
          value: function getAnnounceName(val) {
            var name = 'anonce_type_not_found';
            this.announce_types.forEach(function (element) {
              if (element.value == val) {
                name = element.name;
              }
            });
            return name;
          }
        }]);

        return AnnounceTypes;
      }();

      var ShippingType;

      (function (ShippingType) {
        ShippingType["NO_SERVICE"] = "Servis Yok";
        ShippingType["TO_TABLE"] = "Masaya Servis";
        ShippingType["TO_ADDRESS"] = "Adrese Servis";
      })(ShippingType || (ShippingType = {}));
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map