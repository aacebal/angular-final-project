webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_login_signup_login_component__ = __webpack_require__("../../../../../src/app/signup-login/signup-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__beer_search_beer_search_component__ = __webpack_require__("../../../../../src/app/beer-search/beer-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







;




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__signup_login_signup_login_component__["a" /* SignupLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__beer_search_beer_search_component__["a" /* BeerSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_login_signup_login_component__ = __webpack_require__("../../../../../src/app/signup-login/signup-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beer_search_beer_search_component__ = __webpack_require__("../../../../../src/app/beer-search/beer-search.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__signup_login_signup_login_component__["a" /* SignupLoginComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_1__beer_search_beer_search_component__["a" /* BeerSearchComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/beer-search/beer-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-page{\n  width: 100%;\n  height: 1024px;\n  background-color: #f8f8f8;\n}\n.navbar-default{\n  background-color: white;\n}\n.title-container{\n  font-family: SlimTony;\n  color: rgb(248, 211, 53);\n}\n.search-container{\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  background-color: white;\n}\n.btn-lg{\n  margin-bottom: 10px;\n  background-color: rgb(248, 211, 53);\n  color: white;\n  width: 33%;\n}\n.navbar-right{\n  margin-right: 0px;\n}\n.btn-sm{\n  margin-top: 20px;\n  background-color: rgb(248, 211, 53);\n  color: white;\n}\n.btn-add{\n  width: 60px;\n  margin-left: 10px;\n  background-color: rgb(248, 211, 53);\n  color: white;\n}\ninput[type=text], select {\n    width: 100%;\n    padding: 10px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 16px;\n}\ninput[type=password], select {\n    width: 100%;\n    padding: 10px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 16px;\n}\n.img-profile{\n  width: 50px;\n  margin-right: 5px;\n  float: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beer-search/beer-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <h2 class=\"title-container\">Friendly Beer Finder</h2>\n\n    </div>\n    <div class=\"nav navbar-nav navbar-right\">\n      <button class=\"btn btn-sm\" (click)=\"logout()\">Log Out</button>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n  <app-user></app-user>\n</div>\n\n<div class=\"container search-container col-lg-5 col-md-5 col-sm-5 col-xs-5\">\n\n<form (ngSubmit)=\"onSubmit(myForm.value)\" #myForm=\"ngForm\">\n  <h1>Find New Beers:</h1>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" #myName=\"ngModel\">\n\n  <button class=\"btn btn-lg\" type=\"submit\"> Search</button>\n\n  <div *ngIf=\"beer\" class=\"beer-information\">\n    <img class=\"img-profile\" src=\"{{beer.data[0].labels.large}}\" />\n    <h1>{{ beer.data[0].name }} <button class=\"btn btn-add\" (click)=\"addBeer(beer.id)\">Add to your beers</button> </h1>\n    <p>{{ beer.data[0].style.description }}</p>\n  </div>\n</form>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/beer-search/beer-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beer_service__ = __webpack_require__("../../../../../src/app/beer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeerSearchComponent = (function () {
    function BeerSearchComponent(BeerService, session, router) {
        this.BeerService = BeerService;
        this.session = session;
        this.router = router;
    }
    BeerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
    };
    BeerSearchComponent.prototype.onSubmit = function (myForm) {
        var _this = this;
        this.BeerService.getBeer(myForm.name)
            .subscribe(function (beer) {
            _this.beer = beer;
            console.log(beer);
        });
    };
    BeerSearchComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function () { return _this.successCb(null); }, function (err) { return _this.errorCb(err); });
        this.router.navigate(['']);
    };
    BeerSearchComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    BeerSearchComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
    };
    BeerSearchComponent.prototype.addBeer = function (id) {
        this.session.addBeer(id)
            .subscribe();
    };
    return BeerSearchComponent;
}());
BeerSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-beer-search',
        template: __webpack_require__("../../../../../src/app/beer-search/beer-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/beer-search/beer-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__beer_service__["a" /* BeerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__beer_service__["a" /* BeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__beer_service__["a" /* BeerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BeerSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=beer-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/beer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerService = (function () {
    function BeerService(http) {
        this.http = http;
        this.BASE_URL = 'http://api.brewerydb.com/v2/beers';
    }
    BeerService.prototype.getBeer = function (name) {
        return this.http.get(this.BASE_URL + "/?name=" + name + "&key=31d91559b00b468e17fd134af7f3097a")
            .map(function (res) { return res.json(); });
    };
    return BeerService;
}());
BeerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BeerService);

var _a;
//# sourceMappingURL=beer.service.js.map

/***/ }),

/***/ "../../../../../src/app/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000';
    }
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SessionService.prototype.signup = function (user) {
        return this.http.post(this.BASE_URL + "/signup", user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (user) {
        return this.http.post(this.BASE_URL + "/login", user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        return this.http.post(this.BASE_URL + "/logout", {})
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get(this.BASE_URL + "/loggedin")
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.addBeer = function (id) {
        return this.http.post(this.BASE_URL + "/addBeer", id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup-login/signup-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n    font-family: 'SlimTony';\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/SlimTony.otf") + ");\n    font-weight: normal;\n    font-style: normal;\n}\n\n.left-panel{\n  margin-top: 50px;\n}\n.title-container{\n  padding-left: 100px;\n  font-family: SlimTony;\n  color: rgb(248, 211, 53);\n}\n.title-container > h1{\n  font-size: 45px;\n}\n.image-container{\n  text-align: center;\n}\n.right-panel{\n  margin-top: 130px;\n}\n.right-panel-login{\n  margin-top: 130px;\n}\n.lower{\n  margin-top: 200px;\n}\n#slogan{\n  margin: 5px 0px 5px 0px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid lightgrey;\n}\n.btn-lg{\n  margin-bottom: 10px;\n  background-color: rgb(248, 211, 53);\n  color: white;\n  width: 100%;\n}\n.btn-login{\n  background-color: transparent;\n  border: none;\n  color: rgb(248, 211, 53);\n}\ninput[type=text], select {\n    width: 100%;\n    padding: 10px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 16px;\n}\ninput[type=password], select {\n    width: 100%;\n    padding: 10px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup-login/signup-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full\" ng-view>\n\n<div class=\"container left-panel col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n  <div class=\"title-container\">\n    <h1>Friendly Beer Finder</h1>\n  </div>\n\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\">\n\n    <div class=\"item active\">\n      <img style=\"padding: 10px 0px 0px 60px\" src=\"../assets/images/beer-finder-1.png\" width=\"650px\" height=\"500px\">\n    </div>\n\n    <div class=\"item\">\n      <img style=\"padding: 10px 0px 0px 60px\" src=\"../assets/images/beer-finder-2.png\" width=\"650px\" height=\"500px\">\n    </div>\n\n    <div class=\"item\">\n      <img style=\"padding: 10px 0px 0px 60px\" src=\"../assets/images/beer-finder-3.png\" width=\"650px\" height=\"500px\">\n    </div>\n\n\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!loginReady\" class=\"container right-panel col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n\n  <h2 id=\"slogan\" style=\"text-align:center\">Join a social platform for craft beer aficionados.</h2>\n\n  <div class=\"signup-form\">\n    <form>\n      <input placeholder=\"Name\" type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\"/>\n      <br>\n      <input placeholder=\"Last Name\" type=\"text\" [(ngModel)]=\"formInfo.lastName\" name=\"lastName\"/>\n      <br>\n      <input placeholder=\"Username\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n      <br>\n      <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n      <br>\n      <button class=\"btn btn-lg\"(click)=\"signup()\"> Signup </button>\n    </form>\n    <h3 style=\"text-align:center\">Already a member? <button class=\"btn btn-login\" (click)=\"switchLoginReady()\">Login</button></h3>\n  </div>\n\n  </div>\n\n  <div *ngIf=\"loginReady\" class=\"container right-panel-login col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n\n  <h2 id=\"slogan\" style=\"text-align:center\">Join a social platform for craft beer aficionados.</h2>\n\n  <div *ngIf=\"loginReady\" class=\"login-form\">\n    <form>\n      <input placeholder=\"Username\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"loginUsername\"/>\n      <br>\n      <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"loginPassword\"/>\n      <br>\n      <button class=\"btn btn-lg\"(click)=\"login()\"> Login </button>\n    </form>\n    <h3 style=\"text-align:center\">Not a member? <button class=\"btn btn-login\" (click)=\"switchLoginReady()\">Sign Up</button></h3>\n  </div>\n\n</div>\n\n<div style=\"margin: 20px\"class=\"container col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n  <p style=\"float: right; padding-right: 50px\">Friendly Beer Finder™</p>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup-login/signup-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupLoginComponent = (function () {
    function SignupLoginComponent(session, router) {
        this.session = session;
        this.router = router;
        this.loginReady = false;
        this.lower = false;
        this.formInfo = {
            name: '',
            lastName: '',
            username: '',
            password: ''
        };
    }
    SignupLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
    };
    SignupLoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    SignupLoginComponent.prototype.signup = function () {
        var _this = this;
        console.log(this.formInfo);
        this.session.signup(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    SignupLoginComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function () { return _this.successCb(null); }, function (err) { return _this.errorCb(err); });
        this.router.navigate(['']);
    };
    SignupLoginComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    SignupLoginComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
        this.router.navigate(['search']);
    };
    SignupLoginComponent.prototype.switchLoginReady = function () {
        this.loginReady = !this.loginReady;
    };
    return SignupLoginComponent;
}());
SignupLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-signup-login',
        template: __webpack_require__("../../../../../src/app/signup-login/signup-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup-login/signup-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupLoginComponent);

var _a, _b;
//# sourceMappingURL=signup-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-profile{\n  width: 35px;\n  margin-right: 5px;\n  float: left;\n}\n.user-name{\n  padding: 5px 0px;\n}\n.my-container{\n  margin-top: 20px;\n  height: 200px;\n\n}\n.my-container h3{\n  margin: 5px 0px 5px 7px;\n  text-align: justify;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <div class=\"user-information\">\n      <img class=\"img-profile\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" />\n    <h3 class=\"user-name\">John Appleseed</h3>\n  </div>\n</div>\n\n<div *ngIf=\"user\">\n  <div class=\"user-information\">\n      <img class=\"img-circle\" src=\"{{user.profilePic}}\" />\n    <h3 class=\"user-name\">{{ user.name }} {{ user.lastName }}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
    };
    UserComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    UserComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/SlimTony.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SlimTony.4c46fa6ca2b9a89ebaee.otf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map