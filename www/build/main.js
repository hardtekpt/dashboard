webpackJsonp([4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.loadProfilePage = function () {
        this.navCtrl.push('ProfilePage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Definições</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadProfilePage()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_compras_lista_compras__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compras_urgentes_compras_urgentes__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotesPage = (function () {
    function NotesPage(navCtrl, navParams, productProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.products = [];
        this.urgent = [];
    }
    NotesPage.prototype.ionViewDidEnter = function () {
        this.getAllProducts();
        this.getAllUrgent();
    };
    NotesPage.prototype.getAllProducts = function () {
        var _this = this;
        this.productProvider.getAll(false)
            .then(function (result) {
            _this.products = result;
        });
    };
    NotesPage.prototype.getAllUrgent = function () {
        var _this = this;
        this.productProvider.getAll(true)
            .then(function (result) {
            _this.urgent = result;
        });
    };
    NotesPage.prototype.showNotas = function () {
        //this.navCtrl.push(NotasPage);
    };
    NotesPage.prototype.showListaUrgentes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__compras_urgentes_compras_urgentes__["a" /* ComprasUrgentesPage */]);
    };
    NotesPage.prototype.showListaCompras = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lista_compras_lista_compras__["a" /* ListaComprasPage */]);
    };
    return NotesPage;
}());
NotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notes',template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/pages/notes/notes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Dashboard\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadProfilePage()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list>\n\n    <ion-list-header>Notas</ion-list-header>\n\n    <ion-item (click)="showNotas()">\n      <ion-avatar item-start>\n        <img src="assets/note.ico">\n      </ion-avatar>\n      <h2>Notas</h2>\n      <p>Última nota: youtube apk mod</p>\n      <ion-note item-end><ion-badge color="primary">27</ion-badge></ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/task.ico">\n      </ion-avatar>\n      <h2>Tarefas</h2>\n      <p>Última tarefa: ir as compras</p>\n      <ion-note item-end><ion-badge color="primary">2/13</ion-badge></ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Lista de compras</ion-list-header>\n\n    <ion-item (click)="showListaUrgentes()">\n      <ion-avatar item-start>\n        <img src="assets/urgent.ico">\n      </ion-avatar>\n      <h2>Urgente</h2>\n      <ion-note item-end><ion-badge color="danger">{{urgent.length}}</ion-badge></ion-note>\n    </ion-item>\n\n    <ion-item (click)="showListaCompras()">\n      <ion-avatar item-start>\n        <img src="assets/shopping.ico">\n      </ion-avatar>\n      <h2>Lista</h2>\n      <ion-note item-end *ngIf="products"><ion-badge color="light">{{products.length}}</ion-badge></ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Banco</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/bank.ico">\n      </ion-avatar>\n      <h2>Painel</h2>\n      <ion-note item-end><ion-badge color="secondary"><ion-icon name=\'checkmark-circle\'></ion-icon></ion-badge></ion-note>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/pages/notes/notes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["b" /* ProductProvider */]])
], NotesPage);

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-product/edit-product.module": [
		282,
		3
	],
	"../pages/notes/notes.module": [
		283,
		2
	],
	"../pages/profile/profile.module": [
		284,
		0
	],
	"../pages/settings/settings.module": [
		281,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryProvider = (function () {
    function CategoryProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    CategoryProvider.prototype.getAll = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql('select * from categories', [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    var categories = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var category = data.rows.item(i);
                        categories.push(category);
                    }
                    return categories;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    return CategoryProvider;
}());
CategoryProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
], CategoryProvider);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaComprasPage = (function () {
    function ListaComprasPage(navCtrl, toast, productProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.productProvider = productProvider;
        this.products = [];
        this.urgent = [];
        this.searchText = null;
    }
    ListaComprasPage.prototype.ionViewDidEnter = function () {
        this.getAllProducts();
        this.getAllUrgent();
    };
    ListaComprasPage.prototype.getAllProducts = function () {
        var _this = this;
        this.productProvider.getAll(false, this.searchText)
            .then(function (result) {
            _this.urgent = result;
        });
    };
    ListaComprasPage.prototype.getAllUrgent = function () {
        var _this = this;
        this.productProvider.getAll(true, this.searchText)
            .then(function (result) {
            _this.products = result;
        });
    };
    ListaComprasPage.prototype.addProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product__["a" /* EditProductPage */]);
    };
    ListaComprasPage.prototype.editProduct = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product__["a" /* EditProductPage */], { id: id });
    };
    ListaComprasPage.prototype.removeProduct = function (product) {
        var _this = this;
        this.productProvider.remove(product.id)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.products.indexOf(product);
            _this.products.splice(index, 1);
            _this.toast.create({ message: 'Produto removido.', duration: 2000, position: 'botton' }).present();
        });
    };
    ListaComprasPage.prototype.filterProducts = function (ev) {
        this.getAllProducts();
        this.getAllUrgent();
    };
    return ListaComprasPage;
}());
ListaComprasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista-compras',template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/pages/lista-compras/lista-compras.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Lista de compras\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-searchbar (ionInput)="filterProducts($event)" [(ngModel)]="searchText"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor="let product of products">\n\n      <button ion-item (click)="editProduct(product.id)">\n        <h2>{{ product.name }}</h2>\n        <p>{{ product.category_name }}</p>\n      </button>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="removeProduct(product)">\n          <ion-icon name="trash"></ion-icon>\n          Excluir\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-item-sliding *ngFor="let item of urgent">\n\n      <button ion-item (click)="editProduct(item.id)">\n        <h2>{{ item.name }}</h2>\n        <p>{{ item.category_name }}</p>\n      </button>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="removeProduct(item)">\n          <ion-icon name="trash"></ion-icon>\n          Excluir\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addProduct()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/pages/lista-compras/lista-compras.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["b" /* ProductProvider */]])
], ListaComprasPage);

//# sourceMappingURL=lista-compras.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasUrgentesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComprasUrgentesPage = (function () {
    function ComprasUrgentesPage(navCtrl, toast, productProvider) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.productProvider = productProvider;
        this.products = [];
        this.searchText = null;
    }
    ComprasUrgentesPage.prototype.ionViewDidEnter = function () {
        this.getAllUrgent();
    };
    ComprasUrgentesPage.prototype.getAllUrgent = function () {
        var _this = this;
        this.productProvider.getAll(true, this.searchText)
            .then(function (result) {
            _this.products = result;
        });
    };
    ComprasUrgentesPage.prototype.addProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product__["a" /* EditProductPage */]);
    };
    ComprasUrgentesPage.prototype.editProduct = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product__["a" /* EditProductPage */], { id: id });
    };
    ComprasUrgentesPage.prototype.removeProduct = function (product) {
        var _this = this;
        this.productProvider.remove(product.id)
            .then(function () {
            // Removendo do array de produtos
            var index = _this.products.indexOf(product);
            _this.products.splice(index, 1);
            _this.toast.create({ message: 'Produto removido.', duration: 2000, position: 'botton' }).present();
        });
    };
    ComprasUrgentesPage.prototype.filterProducts = function (ev) {
        this.getAllUrgent();
    };
    return ComprasUrgentesPage;
}());
ComprasUrgentesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-compras-urgentes',template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/pages/compras-urgentes/compras-urgentes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Lista de compras\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-searchbar (ionInput)="filterProducts($event)" [(ngModel)]="searchText"></ion-searchbar>\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of products">\n\n      <button ion-item (click)="editProduct(item.id)">\n        <h2>{{ item.name }}</h2>\n        <p>{{ item.category_name }}</p>\n      </button>\n\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="removeProduct(item)">\n          <ion-icon name="trash"></ion-icon>\n          Excluir\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addProduct()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/pages/compras-urgentes/compras-urgentes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["b" /* ProductProvider */]])
], ComprasUrgentesPage);

//# sourceMappingURL=compras-urgentes.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(statusBar) {
        this.statusBar = statusBar;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__notes_notes__["a" /* NotesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#303F9F');
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Notas" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Definições" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mqtt_mqtt__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, mqttProvider, weatherProvider) {
        this.navCtrl = navCtrl;
        this.mqttProvider = mqttProvider;
        this.weatherProvider = weatherProvider;
        this.bulbColor = 'bright';
        this.online = 'bright';
        this.safeZone = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    HomePage.prototype.toggleCandeeiro = function () {
        var _this = this;
        this.safeZone = false;
        var message;
        var topic = "hardtek/quarto/ceiling";
        var x = this.switchCandeeiro;
        if (x) {
            message = 'L';
            this.bulbColor = 'primary';
        }
        else {
            message = 'D';
            this.bulbColor = 'bright';
        }
        this.mqttProvider.sendMessage(message, topic);
        setTimeout(function () { _this.safeZone = true; }, 3000);
    };
    HomePage.prototype.refresh = function (refresher) {
        this.loadData();
        setTimeout(function () {
            refresher.complete();
        }, 200);
    };
    HomePage.prototype.loadProfilePage = function () {
        this.navCtrl.push('ProfilePage');
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        this.weatherProvider.getWeather().subscribe(function (weather) {
            _this.weather = weather.weather;
        }, function (err) {
            console.log(err);
            return false;
        });
        var id = Math.floor((Math.random() * 1000000) + 1);
        this.mqttProvider.connect(id.toString());
        this.mqttProvider.onMessage(function (topic, message) {
            if (topic == 'ceiling') {
                if (_this.safeZone == true) {
                    if (message == 'L') {
                        _this.bulbColor = 'primary';
                        _this.switchCandeeiro = true;
                        console.log('ligado');
                    }
                    else {
                        _this.bulbColor = 'bright';
                        _this.switchCandeeiro = false;
                        console.log('desligado');
                    }
                }
            }
        });
        this.mqttProvider.onConnectionLost();
        this.mqttProvider.checkConnection(function (data) {
            if (data == false) {
                _this.online = 'danger';
            }
            else {
                _this.online = 'secondary';
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadProfilePage()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="masters">\n	<ion-refresher (ionRefresh)="refresh($event)">\n		<ion-refresher-content>\n	    </ion-refresher-content>\n	</ion-refresher>\n	<ion-card>\n		<ion-card-header>\n			Mqtt &nbsp;\n			<ion-icon name=\'checkmark-circle\' [color]="online" item-start></ion-icon>\n			{{connected}}\n		</ion-card-header>\n		<ion-card-content>\n		  <ion-grid>\n		  	<ion-row>\n		  		<ion-col col-12>\n		  			<ion-list>\n						<ion-item>\n							<ion-label>Candeeiro</ion-label>\n	    					<ion-toggle (ionChange)="toggleCandeeiro()" [(ngModel)]="switchCandeeiro"></ion-toggle>\n	    					<ion-icon name=\'bulb\' [color]="bulbColor" item-start></ion-icon>\n						</ion-item>\n					</ion-list>\n		  		</ion-col>\n		  	</ion-row>\n		  </ion-grid>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card *ngIf="weather">\n		<ion-grid>\n			<ion-row>\n				<ion-col col-5>\n					<ion-row>\n						<h5 style="font-size:19px; color:rgb(117,117,117)">Lisboa</h5>\n					</ion-row>\n					<ion-row>\n						<h5 id="skytext" style="font-size:12px; color:rgb(117,117,117)">{{weather.skytext}}</h5>\n					</ion-row>\n					<br>\n					<ion-row>\n						<h6 id="wind" style="font-size:10px; color:rgb(107,107,107); margin: 0">{{weather.wind}}</h6>\n					</ion-row>\n					<ion-row >\n	                	<h6 id="humidity" style="font-size:10px; color:rgb(107,107,107); margin: 0">Humidity {{weather.humidity}}%</h6>\n					</ion-row>\n				</ion-col>\n				<ion-col col-2>\n					<br><br>\n					<ion-row>\n						<div class="icon">\n							<img src="{{weather.img}}">\n						</div>\n					</ion-row>\n				</ion-col>\n				<ion-col col-5>\n					<h1 id="current_temp" style="font-size:80px; color:rgb(117,117,117); margin:0; font-family: \'Roboto\', sans-serif;">{{weather.temp}}º</h1>\n				</ion-col>\n			</ion-row>\n		</ion-grid>	    \n	</ion-card>\n  <ion-fab right bottom >\n    <button ion-fab color="primary"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="add"></ion-icon></button>\n      <button ion-fab (click)="addTask($event, fab)"><ion-icon name="list"></ion-icon></button>\n      <button ion-fab><ion-icon name="alarm"></ion-icon></button>\n      <button ion-fab><ion-icon name="aperture"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mqtt_mqtt__["a" /* MqttProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__["a" /* WeatherProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MqttProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_mqtt_mqttws31__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_mqtt_mqttws31___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_mqtt_mqttws31__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MqttProvider = (function () {
    function MqttProvider(http) {
        this.http = http;
        this.connected = false;
    }
    MqttProvider.prototype.connect = function (id) {
        //this.client = new Paho.MQTT.Client('m20.cloudmqtt.com', 33504, id );
        this.client = new __WEBPACK_IMPORTED_MODULE_3_ng2_mqtt_mqttws31__["Paho"].MQTT.Client("192.168.1.6", 11883, id);
        var options = {
            //useSSL: true,
            //userName: "hardtek",
            //password: "hardtek",
            onSuccess: this.onConnected.bind(this),
            onFailure: this.onFailure.bind(this)
        };
        // connect the client
        this.client.connect(options);
        //this.client.connect( {onSuccess: this.onConnected.bind(this), userName:'wpyxibcf', password:'ednAC25T4bVd'});
    };
    MqttProvider.prototype.onConnected = function () {
        this.connected = true;
        console.log("Connected to mqtt broker");
        this.client.subscribe("hardtek/quarto/ceiling/logs");
        this.client.subscribe("hardtek/quarto/ceiling");
    };
    MqttProvider.prototype.sendMessage = function (message, topic) {
        var packet = new __WEBPACK_IMPORTED_MODULE_3_ng2_mqtt_mqttws31__["Paho"].MQTT.Message(message);
        packet.destinationName = topic;
        this.client.send(packet);
    };
    MqttProvider.prototype.onMessage = function (callback) {
        this.client.onMessageArrived = function (message) {
            if (message.destinationName == 'hardtek/quarto/ceiling/logs') {
                if (message.payloadString == 'L') {
                    callback('ceiling', 'L');
                }
                else {
                    callback('ceiling', 'D');
                }
            }
        };
    };
    MqttProvider.prototype.onConnectionLost = function () {
        var _this = this;
        this.client.onConnectionLost = function (responseObject) {
            _this.connected = false;
            console.log('Connection lost : ' + JSON.stringify(responseObject));
        };
    };
    //*****************
    MqttProvider.prototype.sendToQuartoAll = function (x) {
        var topic = 'hardtek/quarto/all';
        if (x) {
            this.sendMessage('L', topic);
        }
        else {
            this.sendMessage('D', topic);
        }
    };
    MqttProvider.prototype.checkConnection = function (callback) {
        callback(this.connected);
    };
    MqttProvider.prototype.onFailure = function () {
    };
    return MqttProvider;
}());
MqttProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MqttProvider);

//# sourceMappingURL=mqtt.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
    }
    WeatherProvider.prototype.getWeather = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://morning-headland-11208.herokuapp.com/get/weather', { headers: headers }).map(function (res) { return res.json(); });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notes_notes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_product_edit_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lista_compras_lista_compras__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_compras_urgentes_compras_urgentes__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_mqtt_mqtt__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_weather_weather__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_tasks_tasks__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_database_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_product_product__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_category_category__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_notes_notes__["a" /* NotesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_product_edit_product__["a" /* EditProductPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_lista_compras_lista_compras__["a" /* ListaComprasPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_compras_urgentes_compras_urgentes__["a" /* ComprasUrgentesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-product/edit-product.module#EditProductPageModule', name: 'EditProductPage', segment: 'edit-product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notes/notes.module#NotesPageModule', name: 'NotesPage', segment: 'notes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_notes_notes__["a" /* NotesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_product_edit_product__["a" /* EditProductPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_lista_compras_lista_compras__["a" /* ListaComprasPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_compras_urgentes_compras_urgentes__["a" /* ComprasUrgentesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_mqtt_mqtt__["a" /* MqttProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_weather_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_tasks_tasks__["a" /* TasksProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */], useValue: 'pt-PT' },
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_19__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_product_product__["b" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_category_category__["a" /* CategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_product_product__["b" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_category_category__["a" /* CategoryProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //splashScreen.hide();
            dbProvider.createDatabase()
                .then(function () {
                _this.openHomePage(splashScreen);
            })
                .catch(function () {
                _this.openHomePage(splashScreen);
            });
        });
    }
    MyApp.prototype.openHomePage = function (splashScreen) {
        splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksProvider = (function () {
    function TasksProvider(http) {
        this.http = http;
    }
    TasksProvider.prototype.showTasks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://morning-headland-11208.herokuapp.com/tasks/show', { headers: headers }).map(function (res) { return res.json(); });
    };
    TasksProvider.prototype.addTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://morning-headland-11208.herokuapp.com/tasks/add', task, { headers: headers }).map(function (res) { return res.json(); });
    };
    TasksProvider.prototype.deleteTask = function (task_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://morning-headland-11208.herokuapp.com/tasks/' + task_id + '/delete', { headers: headers }).map(function (res) { return res.json(); });
    };
    return TasksProvider;
}());
TasksProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TasksProvider);

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductProvider = (function () {
    function ProductProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    ProductProvider.prototype.insert = function (product) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into products (name, active, category_id) values (?, ?, ?)';
            var data = [product.name, product.active ? 1 : 0, product.category_id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.update = function (product) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update products set name = ?, active = ?, category_id = ? where id = ?';
            var data = [product.name, product.active ? 1 : 0, product.category_id, product.id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.remove = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from products where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.get = function (id) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from products where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var product = new Product();
                    product.id = item.id;
                    product.name = item.name;
                    product.active = item.active;
                    product.category_id = item.category_id;
                    return product;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ProductProvider.prototype.getAll = function (active, name) {
        if (name === void 0) { name = null; }
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT p.*, c.name as category_name FROM products p inner join categories c on p.category_id = c.id where p.active = ?';
            var data = [active ? 1 : 0];
            // filtrando pelo nome
            if (name) {
                sql += ' and p.name like ?';
                data.push('%' + name + '%');
            }
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var products = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var product = data.rows.item(i);
                        products.push(product);
                    }
                    return products;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    return ProductProvider;
}());
ProductProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
], ProductProvider);

var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseProvider = (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
    }
    /**
     * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
     */
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'products.db',
            location: 'default'
        });
    };
    /**
     * Cria a estrutura inicial do banco de dados
     */
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            // Criando as tabelas
            _this.createTables(db);
            // Inserindo dados padrão
            _this.insertDefaultItems(db);
        })
            .catch(function (e) { return console.log(e); });
    };
    /**
     * Criando as tabelas no banco de dados
     * @param db
     */
    DatabaseProvider.prototype.createTables = function (db) {
        // Criando as tabelas
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS categories (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
            ['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, active integer, category_id integer, FOREIGN KEY(category_id) REFERENCES categories(id))']
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    /**
     * Incluindo os dados padrões
     * @param db
     */
    DatabaseProvider.prototype.insertDefaultItems = function (db) {
        db.executeSql('select COUNT(id) as qtd from categories', {})
            .then(function (data) {
            //Se não existe nenhum registro
            if (data.rows.item(0).qtd == 0) {
                // Criando as tabelas
                db.sqlBatch([
                    ['delete from categories'],
                    ['insert into categories (name) values (?)', ['Comidas']],
                    ['insert into categories (name) values (?)', ['Bebidas']],
                    ['insert into categories (name) values (?)', ['Casa, jardim']],
                    ['insert into categories (name) values (?)', ['Farmácia']],
                    ['insert into categories (name) values (?)', ['Eletrônicos e acessórios']],
                    ['insert into categories (name) values (?)', ['Roupas']],
                    ['insert into categories (name) values (?)', ['Compras - Outros']]
                ])
                    .then(function () { return console.log('Dados padrões incluídos'); })
                    .catch(function (e) { return console.error('Erro ao incluir dados padrões', e); });
            }
        })
            .catch(function (e) { return console.error('Erro ao consultar a qtd de categorias', e); });
    };
    return DatabaseProvider;
}());
DatabaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
], DatabaseProvider);

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_category_category__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProductPage = (function () {
    function EditProductPage(navCtrl, navParams, toast, productProvider, categoryProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.productProvider = productProvider;
        this.categoryProvider = categoryProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* Product */]();
        if (this.navParams.data.id) {
            this.productProvider.get(this.navParams.data.id)
                .then(function (result) {
                _this.model = result;
            });
        }
    }
    /**
     * Runs when the page has loaded
     */
    EditProductPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.categoryProvider.getAll()
            .then(function (result) {
            _this.categories = result;
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao carregar as categorias.', duration: 3000, position: 'botton' }).present();
        });
    };
    EditProductPage.prototype.save = function () {
        var _this = this;
        this.saveProduct()
            .then(function () {
            _this.toast.create({ message: 'Produto salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000, position: 'botton' }).present();
        });
    };
    EditProductPage.prototype.saveProduct = function () {
        if (this.model.id) {
            return this.productProvider.update(this.model);
        }
        else {
            return this.productProvider.insert(this.model);
        }
    };
    return EditProductPage;
}());
EditProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-product',template:/*ion-inline-start:"/Users/franciscovelez/code/android/dashboard/src/pages/edit-product/edit-product.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Produto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" name="name" [(ngModel)]="model.name"></ion-input>\n    </ion-item>\n\n    <br><br>\n\n    <ion-item>\n      <ion-label stacked>Categoria</ion-label>\n      <ion-select name="category_id" [(ngModel)]="model.category_id">\n        <ion-option *ngFor="let category of categories" value="{{ category.id }}">{{ category.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <br><br>\n\n    <ion-item>\n      <ion-label>Urgente</ion-label>\n      <ion-checkbox name="active" [(ngModel)]="model.active"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block (click)="save()">Salvar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/franciscovelez/code/android/dashboard/src/pages/edit-product/edit-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["b" /* ProductProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_category_category__["a" /* CategoryProvider */]])
], EditProductPage);

//# sourceMappingURL=edit-product.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map