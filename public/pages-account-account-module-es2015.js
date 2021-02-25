(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "3Bst":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "S9xc");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "4+IK":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "3Bst");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "S9xc");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "rIor");








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "E4AK":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar> \n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-buttons   (click)=\"back()\">\n        <ion-icon name=\"chevron-back-outline\" ></ion-icon>\n      </ion-buttons>\n      <ion-title  >Account</ion-title>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar> \n \n\n<ion-content #content> \n\n  <image-cropper *ngIf  =\"!agCropperClose\"\n    [imageChangedEvent]   =\"imageChangedEvent\"\n    [maintainAspectRatio]=\"true\"\n    [aspectRatio]       =\"4 / 3\"\n    [resizeToWidth]     =\"512\"\n    backgroundColor     = #000000\n    format              = \"png\"\n    (imageCropped)      =\"imageCropped($event)\"\n    (imageLoaded)       =\"imageLoaded()\"\n    (cropperReady)      =\"cropperReady()\"\n    (loadImageFailed)   =\"loadImageFailed()\">\n  </image-cropper>\n\n<div *ngIf=\"agCropperClose\">\n  <!--  ///////////////////////////////  PHOTO URL ///////////////////// -->\n  <ion-card> \n    <ion-avatar *ngIf=\"account.photoURL\">\n      <img [src]=\"account.photoURL\"/>\n    </ion-avatar>\n    <ion-avatar *ngIf=\"!account.photoURL\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-avatar>\n    <ion-button (click)=\"selectPhoto()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Güncelle\n    </ion-button>\n  </ion-card>\n\n  <!--  ///////////////////////////////  ETİKET ///////////////////// -->\n  <ion-card>\n    <ion-card-content> \n      <ion-item lines=\"none\" >\n        <ion-icon slot=\"start\" name=\"pricetag-outline\"></ion-icon>\n        <small class=\"ion-text-wrap\"> \n          Benzersiz bir etiket seçin. \n          <br>Boşluk ve özel karakterler olmamalı\n          <br>Enaz 3 karakter olmalı.\n        </small>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\"  color=\"medium\" >        \n            Etiket\n          </ion-label>\n        <ion-input [(ngModel)]='account.tag'(keyup)=isExistTag($event) placeholder=\"Benzersiz bir etiket yazın\"></ion-input>\n      </ion-item> \n\n      <ion-item lines=\"none\">\n        <ion-spinner *ngIf=\"checking\" name=\"lines-small\"></ion-spinner>\n        <ion-label color=\"danger\"  *ngIf=\"tag_exist==1\"> \n          Farklı bir etiket yazın. Bu uygun değil\n        </ion-label>\n        <ion-label color=\"success\" *ngIf=\"tag_exist==0\"> \n          Uygun\n        </ion-label>\n      </ion-item> \n\n      <input type=\"hidden\" [(ngModel)]=\"account.id\">\n    </ion-card-content>\n  </ion-card>\n\n  <!--  ///////////////////////////////  ADI SOYADI ///////////////////// -->\n  <ion-grid fixed>\n    <ion-row> \n      <ion-col size=\"12\">\n        <ion-label position=\"floating\" >Adınız Soyadınız</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row> \n      <ion-col size=\"12\">\n        <ion-input type=\"text\" placeholder=\"Adınız Soyadınız\" [(ngModel)]=\"account.displayName\"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--  /////////////////////////////// TELEFON ///////////////////// --> \n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label position=\"floating\" >Telefon</ion-label>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" placeholder=\"Telefon Numaranız\" [(ngModel)]=\"account.phoneNumber\"></ion-input>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n\n<!--  /////////////////////////////// İLETİŞİM /////////////////////  -->  \n<div id=\"anchor\"></div>\n<ion-grid fixed> \n  <ion-row>\n    <ion-col size=\"6\" style=\"padding: 15px;\">\n      <ion-label color=\"dark\" >İletişim Bilgileri</ion-label>\n    </ion-col>\n    <ion-col size=\"6\">      \n      <ion-button (click)=\"newAdress()\" fill=\"clear\" size=\"small\">  \n        <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\n        Adres Ekle\n      </ion-button>\n    </ion-col>\n  </ion-row> \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button *ngFor=\"let address of addresses\" (click)=\"switchAddress(address)\" [fill]=\"(address==editedAddress)?'solid':'outline'\" size=\"small\">\n        {{address?.name}}\n      </ion-button> \n    </ion-col>\n  </ion-row>\n</ion-grid> \n\n<section *ngIf=\"editedAddress\" class=\"addresses\" >\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" id=\"name\" placeholder=\"Adres tanımı: Ev adresim, İş adresim ...\" [(ngModel)]=\"editedAddress.name\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\" id=\"adi_soyadi\"  placeholder=\"Adınız Soyadınız\" [(ngModel)]=\"editedAddress.adi_soyadi\"></ion-input>\n      </ion-col> \n    </ion-row> \n    <ion-row *ngIf=\"iller.length\"> \n      <ion-col size=\"6\"> \n        <ion-label color=\"medium\">İl</ion-label>\n      </ion-col> \n      <ion-col size=\"6\"> \n          <ion-select   ok-text=\"Tamam\" cancel-text=\"İptal\" (ionChange)=\"changeCtity($event)\" [(ngModel)]=\"editedAddress.city['id']\" multiple = \"false\" placeholder=\"Şehir seçin\">\n            <ion-select-option *ngFor=\"let city of iller\" [value]=\"city.id\">{{city.name}}</ion-select-option> \n          </ion-select> \n      </ion-col> \n    </ion-row> \n    <ion-row> \n      <ion-col size=\"6\" *ngIf=\"editedAddress.city['id']\">\n        <ion-label color=\"medium\">İlçe</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"editedAddress.city['id']\"> \n        <ion-select ok-text=\"Tamam\" cancel-text=\"İptal\" (ionChange)=\"changeTown($event)\" [(ngModel)]=\"editedAddress.town['id']\" multiple = \"false\" placeholder=\"İlçe seçin\">\n          <ion-select-option *ngFor=\"let town of ilceler\" [value]=\"town['id']\">{{town.name}}</ion-select-option> \n        </ion-select> \n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input  type=\"text\" id=\"mahalle\"  placeholder=\"Mahalle\" [(ngModel)]=\"editedAddress.mahalle\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input   type=\"text\"  id=\"cadde_sokak\" placeholder=\"Cadde, Sokak\" [(ngModel)]=\"editedAddress.cadde_sokak\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input  type=\"text\"  id=\"bina\" placeholder=\"Bina, aparman, plaza adı\"  [(ngModel)]=\"editedAddress.bina\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\"  placeholder=\"Adresin devamı varsa yazın\" [(ngModel)]=\"editedAddress.adresin_devami\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\"  id=\"tel\" placeholder=\"Telefon Num : 5XXXXXXXXX\" [(ngModel)]=\"editedAddress.tel\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\"> \n        <ion-input  type=\"text\" placeholder=\"Yol tarifi yazabilirsiniz\" [(ngModel)]=\"editedAddress.yol_tarifi\"></ion-input>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\"> \n        <ion-button (click)=\"saveAdress()\" fill=\"clear\" size=\"small\" *ngIf=\"editedAddress\"> \n          Adresi Kaydet\n        </ion-button> \n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"deleteAdress()\" fill=\"clear\" size=\"small\" *ngIf=\"editedAddress\"> \n          Adresi Sil\n        </ion-button> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</section>\n\n<!--   ///////////////////////////////////  END iletişim /////////////////////////  -->\n\n\n\n</div>\n\n<ion-button (click)=\"save()\" *ngIf=\"agCropperClose\" expand=\"block\" fill=\"clear\">\n  Bilgileri Kaydet \n</ion-button>\n   \n</ion-content>\n\n<ion-toolbar *ngIf=\"!agCropperClose\">\n  <ion-tabs (click)=\"kirp()\">\n    <ion-tab-bar    slot=\"bottom\">  \n        <ion-icon   name=\"crop-outline\"></ion-icon> \n    </ion-tab-bar>    \n  </ion-tabs>\n</ion-toolbar>");

/***/ }),

/***/ "S9xc":
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "E4AK");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "c5PT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/account.model */ "pRzo");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/account.service */ "flj8");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/file.service */ "cpn4");
/* harmony import */ var src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/objects/city-town.model */ "I31H");













let AccountPage = class AccountPage {
    constructor(location, authService, router, fileService, loadingController, accountService) {
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
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.iller = (new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__["CityTown"]()).getCityes();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.authService.USER === undefined) {
                this.router.navigate(['/']);
                return;
            }
            this.getAccount();
            this.getAddresses();
        });
    }
    getAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let uid = this.authService.USER.uid;
            this.accountService.getAccount(uid).then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data) {
                    this.account = data;
                }
            }));
        });
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
        this.accountService.saveAddress(uid, this.editedAddress).then(() => {
            setTimeout(() => {
                this.editedAddress = this.addresses[this.addresses.length - 1];
            }, 500);
        });
    }
    deleteAdress() {
        if (!this.editedAddress.id) {
            this.editedAddress = null;
            return;
        }
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
        this.ilceler = (new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__["CityTown"]()).getTowns(this.editedAddress.city['id']);
        let yOffset = document.getElementById("anchor").offsetTop;
        this.content.scrollToPoint(0, yOffset, 1000);
    }
    newAdress() {
        this.editedAddress = new src_app_objects_account_model__WEBPACK_IMPORTED_MODULE_5__["Address"]();
        let yOffset = document.getElementById("anchor").offsetTop;
        this.content.scrollToPoint(0, yOffset, 1000);
    }
    changeCtity(event) {
        this.ilceler = (new src_app_objects_city_town_model__WEBPACK_IMPORTED_MODULE_12__["CityTown"]()).getTowns(this.editedAddress.city['id']);
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
    isExistTag(event) {
        this.checking = true;
        let elm = event.currentTarget;
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
        this.accountService.isExistTag(elm.value).then((res) => {
            this.tag_exist = res ? 1 : 0;
            this.checking = false;
        });
    }
    Cevir(text) {
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
        return text.replace(/[^-a-zA-Z0-9\s]+/ig, '')
            .replace(/\s/gi, "-")
            .replace(/[-]+/gi, "-")
            .toLowerCase();
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.saveAccount();
        });
    }
    saveAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.account.id = this.authService.USER.uid;
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 5000
            });
            yield loading.present();
            const prflData = { displayName: this.account.displayName, photoURL: this.account.photoURL };
            this.authService.USER.updateProfile(prflData);
            let a = this.accountService.saveAccount(this.account);
            a.then(response => {
                debugger;
                response.subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                    if (res['result'] == 'OK') {
                        if (res['id']) {
                            this.tag_exist = 2;
                        }
                        this.router.navigate(['home']);
                        return;
                    }
                    else if (res['result'] == "Error") {
                        alert("Kayıt gerçekleşmedi" + res['message']);
                    }
                }));
            });
        });
    }
    selectPhoto() {
        let BU = this;
        setTimeout(() => {
            this.imgInputElm = document.createElement('input');
            this.imgInputElm.type = "file";
            this.imgInputElm.setAttribute("accept", "image/*");
            this.imgInputElm.addEventListener('change', (event) => {
                BU.imageChangedEvent = event;
                if (event.currentTarget['files'].length)
                    this.agCropperClose = false;
            });
            this.imgInputElm.click();
        }, 1);
    }
    back() {
        this.location.back();
    }
    //----------------------------------------------      I m a g e C r o p     --------
    kirp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.account.id) {
                alert("Hesaba erişilemedi !");
                return;
            }
            this.imageChangedEvent = false;
            this.agCropperClose = true;
            let blob = this.fileService.base64ToBlob(this.profilPhotoBase64);
            let file = new File([blob], 'deneme');
            let prflBlob = yield this.fileService.resizeImage(file, 512, 512, .8);
            let filePath = 'profile/' + this.account.id;
            firebase__WEBPACK_IMPORTED_MODULE_10__["storage"]().ref(filePath).put(prflBlob).then((upload) => {
                upload.ref.getDownloadURL().then((url) => {
                    this.account.photoURL = url;
                }).catch((err) => {
                    console.log("selectPhoto : Resim storage de bulunamadı", err.messages);
                });
            });
        });
    }
    imageCropped(event) {
        this.agCropperClose = false;
        this.profilPhotoBase64 = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
AccountPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['content',] }]
};
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



/***/ }),

/***/ "c5PT":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWF2YXRhcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es2015.js.map