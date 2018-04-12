webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n\t<flash-messages></flash-messages>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shops_shops_component__ = __webpack_require__("./src/app/components/shops/shops.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_flies_flies_component__ = __webpack_require__("./src/app/components/flies/flies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_knots_knots_component__ = __webpack_require__("./src/app/components/knots/knots.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'shops',
        component: __WEBPACK_IMPORTED_MODULE_16__components_shops_shops_component__["a" /* ShopsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'flies',
        component: __WEBPACK_IMPORTED_MODULE_18__components_flies_flies_component__["a" /* FliesComponent */]
    },
    {
        path: 'knots',
        component: __WEBPACK_IMPORTED_MODULE_19__components_knots_knots_component__["a" /* KnotsComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_shops_shops_component__["a" /* ShopsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_flies_flies_component__["a" /* FliesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_knots_knots_component__["a" /* KnotsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyA0NXbFJAdU2ZXdu3wTATEORvjUbgFO9OU'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/flies/flies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/flies/flies.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\r\n\t<ul class=\"list-group\">\r\n\t\t<li class=\"list-group-item\">Title: {{fly.title}}</li>\r\n\t\t<li class=\"list-group-item\">Type: {{fly.type}}</li>\r\n\t</ul>\r\n</div> -->\r\n\r\n<div class=\"container\">\r\n\t<h1>Fly List</h1>\r\n\t<table>\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Title</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let fly of flies\">\r\n\t\t\t\t<td>{{ fly.title }}</td>\r\n\t\t\t\t<td>{{ fly.type }}</td>\r\n\t\t\t\t<td>Show Detail</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/flies/flies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FliesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FliesComponent = /** @class */ (function () {
    function FliesComponent(http) {
        this.http = http;
    }
    FliesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/flies').subscribe(function (data) {
            _this.flies = data;
        });
    };
    FliesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flies',
            template: __webpack_require__("./src/app/components/flies/flies.component.html"),
            styles: [__webpack_require__("./src/app/components/flies/flies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FliesComponent);
    return FliesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Padding below the footer and lighter body text */\r\n\r\n\r\nbody {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n    color: #5a5a5a;\r\n}\r\n\r\n\r\n.navbar-brand {\r\n    max-height: 40px;\r\n    overflow: visible;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n\r\n/* CUSTOMIZE THE CAROUSEL\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Carousel base class */\r\n\r\n\r\n.carousel {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n\r\n/* Since positioning the image, we need to help out the caption */\r\n\r\n\r\n.carousel-caption {\r\n    bottom: 3rem;\r\n    z-index: 10;\r\n}\r\n\r\n\r\n/* Declare heights because of positioning of img element */\r\n\r\n\r\n.carousel-item {\r\n    height: 32rem;\r\n    background-color: #777;\r\n}\r\n\r\n\r\n.carousel-item>img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height: 32rem;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#map {\r\n    height: 500px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/* MARKETING CONTENT\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Center align the text within the three columns below the carousel */\r\n\r\n\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.marketing h2 {\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n.marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n}\r\n\r\n\r\n/* Featurettes\r\n------------------------- */\r\n\r\n\r\n.featurette-divider {\r\n    margin: 5rem 0;\r\n    /* Space out the Bootstrap <hr> more */\r\n}\r\n\r\n\r\n/* Thin out the marketing headings */\r\n\r\n\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n}\r\n\r\n\r\n.featurette-image {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n\r\n/* RESPONSIVE CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n@media (min-width: 40em) {\r\n    /* Bump up size of carousel content */\r\n    .carousel-caption p {\r\n        margin-bottom: 1.25rem;\r\n        font-size: 1.25rem;\r\n        line-height: 1.4;\r\n    }\r\n\r\n    .featurette-heading {\r\n        font-size: 50px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n        margin-top: 7rem;\r\n    }\r\n}\r\n\r\n\r\n#description {\r\n    color: red;\r\n}\r\n\r\n\r\n.nav-link:focus {\r\n    outline: none;\r\n}\r\n\r\n\r\ntable {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n\r\ntd, th {\r\n    border: 1px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n    text-align: center;\r\n}\r\n\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n}\r\n\r\n\r\n.quote {\r\n    text-align: justify-all;\r\n}\r\n\r\n\r\n.author {\r\n    text-align: right;\r\n}\r\n\r\n\r\n.knotTable td {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n#myCarousel {\r\n    margin-top: 12px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n            <img class=\"first-slide\" src=\"assets/river.jpg\" alt=\"Fly Fisherman\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption text-left\">\r\n                    <h2 class=\"quote\">“Many men go fishing all of their lives without knowing that it is not fish they are after.”</h2>\r\n                    <h5 class=\"author\">-Henry David Thoreau</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img class=\"second-slide\" src=\"assets/boat.jpeg\" alt=\"Boat Fisherman\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption text-left\">\r\n                    <h2 class=\"quote\">“I worry about kids today not having time to build a tree house or ride a bike or go fishing. I worry that life is getting faster and faster.”</h2>\r\n                    <h5 class=\"author\">-John Lasseter</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img class=\"third-slide\" src=\"assets/pristine.jpg\" alt=\"Fly Rod and Reel\">\r\n            <div class=\"container\">\r\n                <div class=\"carousel-caption text-left\">\r\n                    <h2 class=\"quote\">“I only make movies to finance my fishing.”</h2>\r\n                    <h5 class=\"author\">-Lee Marvin</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>\r\n<hr class=\"featurette-divider\" id=\"learn\">\r\n<div class=\"container marketing\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <img class=\"rounded bordered\" src=\"assets/knot.jpeg\" alt=\"Knotted Rope\" width=\"200\" height=\"200\">\r\n            <h2>Knots</h2>\r\n            <p>There are many different knots you need to know when fly fishing. Get started learning the essential knots right here.</p>\r\n            <p><a class=\"btn btn-secondary\" routerLink=\"knots\" role=\"button\">Learn Knots &raquo;</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <img class=\"rounded\" src=\"assets/salmonFly.jpg\" alt=\"Salmon Fly\" width=\"200\" height=\"200\">\r\n            <h2>Flies</h2>\r\n            <p>Not exactly the entymology expert? Well, neither are we. That's why we've created this database. Get to know your flies before you hit the water.</p>\r\n            <p><a class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#flyModal\" href=\"#flies\" role=\"button\">View Flies &raquo;</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <img class=\"rounded\" src=\"assets/gear.jpg\" alt=\"Fly Rod and Reel\" width=\"200\" height=\"200\">\r\n            <h2>Gear</h2>\r\n            <p>Unsure about what gear you need?  Find a local fly shop and go talk to them.  From flies and waders to nippers and tippet, they offer gear and advice.</p>\r\n            <p><a class=\"btn btn-secondary\" routerLink=\"shops\" role=\"button\">Find Shops &raquo;</a></p>\r\n        </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\" id=\"tutorials\">\r\n    <div class=\"row featurette\">\r\n        <div class=\"col-md-7\">\r\n            <h2 class=\"featurette-heading\">CASTING <span class=\"text-muted\">- Put your flies where they belong.</span></h2>\r\n            <p class=\"lead\">Whether you're a beginner or an advanced fisherman, the cast types you use are among the most critical things you should consider. Don't limit yourself with bad habits. Follow this guide to learn more about casting.</p>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <img class=\"featurette-image img-fluid mx-auto\" src=\"assets/casting.jpg\" alt=\"Generic placeholder image1\">\r\n        </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\">\r\n    <div class=\"row featurette\">\r\n        <div class=\"col-md-7 order-md-2\">\r\n            <h2 class=\"featurette-heading\">HANDLING <span class=\"text-muted\">- Caring for the fish you catch.</span></h2>\r\n            <p class=\"lead\">Once hooking a fish, the most important thing on your mind should be how you'll handle it from there. This is especially true when dealing with trout species. Learn the proper ways to handle a fish so that it can live another day.</p>\r\n        </div>\r\n        <div class=\"col-md-5 order-md-1\">\r\n            <img class=\"featurette-image img-fluid mx-auto\" src=\"assets/net.jpg\" alt=\"Generic placeholder image\">\r\n        </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\">\r\n    <div class=\"row featurette\">\r\n        <div class=\"col-md-7\">\r\n            <h2 class=\"featurette-heading\">FLY-TYING <span class=\"text-muted\">- Wrapping your own threads.</span></h2>\r\n            <p class=\"lead\">Bugs can get expensive. One of the best ways to cut down on the cost is to tie them yourself. Get your tying station up and running with this tutorial.</p>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <img class=\"featurette-image img-fluid mx-auto\" src=\"assets/tying.jpg\" alt=\"Generic placeholder image\">\r\n        </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\" id=\"mapJump\">\r\n</div>\r\n\r\n<!-- MODALS -->\r\n<!-- About Page Modal -->\r\n<div class=\"modal fade\" id=\"aboutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"aboutModalTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"aboutModalTitle\">About Tippet</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body text-justify\">\r\n                This web application was designed to improve the fly fishing experience for everyone. Anything from knot tying to fish handling can be found here. No matter what your experience level is, you'll find something here that will help you continue learning. Are you a beginner that needs help getting started? We're here to help! Just head over to the <a href=\"#gear\">Gear</a> and <a href=\"#casting\">Casting</a> sections to start learning the basics. As an advanced user you can still find helpful content in this app, such as <a href=\"#tying\">Fly Tying</a>. No matter how much you read, though, nothing will beat quality time on the water. Head over to the <a href=\"#outfitters\">Outfitters</a> section to find great local fly shops that can set you up for success on your local waters. When you make it to your favorite spot, remember that Tippet is still there for you. This app has been designed so that you can view it on your mobile device while you're on the move.\r\n            </div>\r\n            <div class=\"modal-body text-justify\" id=\"description\">\r\n                <i>[ADDITIONAL DETAILS - REMOVE AT LAUNCH]</i>\r\n                <br>\r\n                <br> The goal for this project was to get a head start on my senior project next semester. I wanted to create a fully responsive mobile-first web app that involves fly fishing, one of my personal hobbies. I will most likely use a MEAN stack to implement this. I wanted to focus on the frontend work for the NM231 final project. Some of the aesthetic work I've learned in this class puts me a step ahead. I've briefly experimented with W3.CSS previously, but this time I wanted to learn some Bootstrap. It has taken a considerable amount of time to find and read documentation on the new Bootstrap 4, but this will pay off for me soon. I tried experimenting with Mapbox and Leaflet with this project. After many test runs, I decided Google Maps would be more compatible when designing the backend later. After getting my API key from Google, it was just a matter of writing some Javascript to implement it. I plan to have a database later as well. It will store things like fly patterns, locations, and user's login information.\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Knots Modal -->\r\n<!-- <div class=\"modal fade\" id=\"knotsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"knotsModalTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"knotsModalTitle\">Fly Fishing Knots</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body text-justify\">\r\n                <table class=\"knotTable\">\r\n                    <tr href=\"https://www.youtube.com/watch?v=vyoayxB6D7M&list=PL8CF2BE0D8FCA450C&index=1&t=0s\">\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Albright Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Arbor Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Bimini Twist</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Blood Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Clinch Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Davy Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Double Surgeon's Loop</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Doubled Fly Line Loop</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Duncan’s Loop</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Harvey Dry Fly Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Haywire Twist</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Homer Rhode Loop</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Huffnagle Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Improved Blood Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Improved Clinch Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Improved Homer Rhode Loop (Chermanski Knot)</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">J-Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Kreh Loop</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Loop-Loop Connection</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Nail Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Nailless Nail Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Non-Slip Mono Loop</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Orvis Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Palomar Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Perfection Loop</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Riffle Hitch Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Seaguar Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Slim Beauty Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Speed Nail Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Spider Hitch Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Strike Indicator Double Uni Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Strike Indicator Loop Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Surgeon's Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Surgeon's End Loop</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Tenkara Level Line Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Tenkara Traditional Line Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Turle Knot</td>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Uni Knot</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\">Uni to Uni Knot</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- Flies Modal -->\r\n<div class=\"modal fade\" id=\"flyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"flyModalTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"text-dark modal-title\" id=\"flyModalTitle\">Select a Fly Type</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span class=\"closeX\" aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"btn-toolbar mb-1\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                    <div class=\"btn-group mr-2 mx-auto\" role=\"group\" aria-label=\"First group\">\r\n                        <button data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\" type=\"button\" class=\"btn btn-warning\">Dry Flies</button>\r\n                        <button data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\" type=\"button\" class=\"btn btn-warning\">Wet Flies</button>\r\n                        <button data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\" type=\"button\" class=\"btn btn-warning\">Nymphs</button>\r\n                        <button data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\" type=\"button\" class=\"btn btn-warning\">Midges</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                    <div class=\"btn-group mr-2 mx-auto\" role=\"group\" aria-label=\"First group\">\r\n                        <button data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\" type=\"button\" class=\"btn btn-warning\">Terrestrials</button>\r\n                        <button data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\" type=\"button\" class=\"btn btn-warning\">Streamers</button>\r\n                        <button data-backdrop=\"false\" data-dismiss=\"modal\" routerLink=\"\" type=\"button\" class=\"btn btn-warning\">Other</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<footer class=\"container\">\r\n    <p class=\"float-right\"><a href=\"#myCarousel\">Back to top</a></p>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/knots/knots.component.css":
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    white-space:normal !important;\r\n    word-wrap: break-word; \r\n}"

/***/ }),

/***/ "./src/app/components/knots/knots.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3 col text-center mx-auto\">\r\n  <h2 class=\"page-header\">Learn Fly Fishing Knots</h2>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n\t<div class=\"row justify-content-center\">\r\n<!-- Knot Buttons -->\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/vyoayxB6D7M?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Albright Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/Ucm3cyAVtdU?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Arbor Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/EcgdASLy6lo?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Bimini Twist</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/L4_3RQZjePs?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Blood Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/-cJm6TKmtu0?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Clinch Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/ypYRbGUR3YY?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Davy Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/MB5AWOuJv-s?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Double Davy Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/lMJmR5eGD2M?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Double Surgeon's Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube.com/embed/zIiGQgLPQbk?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Dropper Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/T88i1HxPhaw?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Duncan’s Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/jrakZdA2Rug?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Harvey Dry Fly Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/cEKjXXtmjHM?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Haywire Twist</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/47miDV1Z9V0?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Homer Rhode Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/HTx7fpgcScc?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Huffnagle Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/EsdfZ66fE08?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Improved Blood Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/laNu2Fz_YTc?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Improved Clinch Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/nasG2Wy8wD8?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">J-Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/JFB2nuiin00?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Kreh Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/L3YBTzr5iDI?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Loop-Loop Connection</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/YE2IcxOErj8?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Nail Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/B-wiXw9jto4?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Nailless Nail Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/pbCyD6JrieI?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Non-Slip Mono Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/gGTCtF-SKUE?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Orvis Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/9qyFlP3NwLE?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Palomar Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/_xR0eLPAe8c?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Perfection Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/XsnwD2t5cus?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Riffle Hitch Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/2iJ9cMoCsm8?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Seaguar Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/0qjAb2PGG8U?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Slim Beauty Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/B-wiXw9jto4?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Speed Nail Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/lNQ1l9KPTQA?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Spider Hitch Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/T1VLmcoOTRc?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Strike Indicator Double Uni Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/OsrrPEmn0Nc?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Strike Indicator Loop Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/VKnINpBY2gY?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Surgeon's Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/4rEQjfwj23s?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Surgeon's End Loop</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/eemGKr-GYrE?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Tenkara Level Line Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/U89RmKpJNMg?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Tenkara Traditional Line Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/lFUw4zhC4hQ?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Turle Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/T88i1HxPhaw?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Uni Knot</button>\r\n\r\n<button class=\"col-4 m-1 btn btn-sm btn-warning video\" data-video=\"https://www.youtube-nocookie.com/embed/JA66TPi9gT4?rel=0\" data-toggle=\"modal\" data-target=\"#videoModal\">Uni to Uni Knot</button>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n<!-- Video Modal -->\r\n<div class=\"modal fade\" id=\"videoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n\t\t\t\t<iframe width=\"100%\" height=\"350\" src=\"\" frameborder=\"0\" allowfullscreen></iframe>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/knots/knots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KnotsComponent = /** @class */ (function () {
    function KnotsComponent() {
    }
    KnotsComponent.prototype.ngOnInit = function () {
    };
    KnotsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-knots',
            template: __webpack_require__("./src/app/components/knots/knots.component.html"),
            styles: [__webpack_require__("./src/app/components/knots/knots.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KnotsComponent);
    return KnotsComponent;
}());

__WEBPACK_IMPORTED_MODULE_1_jquery__(function () {
    __WEBPACK_IMPORTED_MODULE_1_jquery__(".video").click(function () {
        var theModal = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).data("target"), videoSRC = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).attr("data-video"), videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";
        __WEBPACK_IMPORTED_MODULE_1_jquery__(theModal + ' iframe').attr('src', videoSRCauto);
        __WEBPACK_IMPORTED_MODULE_1_jquery__(theModal + ' button.close').click(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3 col text-center mx-auto\">\r\n  <h2 class=\"page-header\">Account Sign In</h2>\r\n</div>\r\n\r\n<form (submit)=\"onLoginSubmit()\">\r\n  \r\n\t\t<div class=\"form-group\">\r\n    \t<label for=\"inputUsername\">Username</label>\r\n    \t<input type=\"text\" class=\"form-control\" id=\"inputUsername\" [(ngModel)]=\"username\" name=\"username\" placeholder=\" Type Your Username\">\r\n  \t</div>\r\n\r\n  \t<div class=\"form-group\">\r\n    \t<label for=\"inputPassword\">Password</label>\r\n    \t<input type=\"password\" class=\"form-control\" id=\"inputPassword\" [(ngModel)]=\"password\" name=\"password\" placeholder=\" Type Your Password\">\r\n  \t</div>\r\n\r\n  \t<button type=\"submit\" class=\"btn btn-primary\">LOGIN</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Login successful.', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"\"><img src=\"assets/logo.png\" height=\"40\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\" routerLinkActive=\"active-link\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"login\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"profile\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"register\">Register</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item active\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"shops\">Outfitters</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline mt-2 mt-md-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search...\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n<!-- data-toggle=\"collapse\" data-target=\"navbar-collapse.in\" -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are now logged out.', {
            cssClass: 'alert-success',
            timeout: 5000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"mt-3 col text-center mx-auto\">\r\n\t<h2 class=\"page-header\">Hello {{user.name}}</h2>\r\n\t<ul class=\"list-group mt-5\">\r\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\r\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\r\n\t</ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3 col text-center mx-auto\">\r\n  <h2 class=\"page-header\"> User Registration</h2>\r\n</div>\r\n\r\n<form (submit)=\"onRegisterSubmit()\">\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"inputName\">Name</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"inputName\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Type Your Name\"> \r\n\t</div>\r\n\r\n\t<div class=\"form-group\">\r\n    \t<label for=\"inputUsername\">Username</label>\r\n    \t<input type=\"text\" class=\"form-control\" id=\"inputUsername\" [(ngModel)]=\"username\" name=\"username\" placeholder=\" Type Your Username\">\r\n  \t</div>\r\n\r\n\t<div class=\"form-group\">\r\n  \t\t<label for=\"inputEmail\">Email address</label>\r\n  \t\t<input type=\"text\" class=\"form-control\" id=\"inputEmail\" aria-describedby=\"emailHelp\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Type Your Email\">\r\n    \t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n  \t</div>\r\n\r\n  \t<div class=\"form-group\">\r\n    \t<label for=\"inputPassword\">Password</label>\r\n    \t<input type=\"password\" class=\"form-control\" id=\"inputPassword\" [(ngModel)]=\"password\" name=\"password\" placeholder=\" Type Your Password\">\r\n  \t</div>\r\n\r\n  \t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 4000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email address.', { cssClass: 'alert-danger', timeout: 4000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered.  Please log in.', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong.  Please try again.', { cssClass: 'alert-danger', timeout: 4000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/shops/shops.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n\theight: 450px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shops/shops.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"mt-3 col text-center mx-auto\">\r\n<h2 class=\"page-header\">Fly Shops Near You</h2>\r\n</div>\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"selectedLocation($event)\">\r\n<agm-marker *ngIf=\"pinPlaced\" [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map> -->\r\n\r\n<!-- img-fluid -->\r\n<div *ngIf=\"user\" class=\"container\">\r\n\r\n\t<div class=\"mt-20 col text-center mx-auto\">\r\n\t\t<h2 class=\"page-header\">Hello {{user.name}}.</h2>\r\n\t\t<h3>Use this map to find fly shops near you.</h3>\t\r\n\t</div>\r\n\r\n\t<div *ngIf=\"lat && lng\" class=\"mt-3\">\r\n\t\t<agm-map \r\n\t\t\t[latitude]=\"lat\" \r\n\t\t\t[longitude]=\"lng\"\r\n\t\t\t[zoom]=\"14\">\r\n\t\t\t\r\n\t\t\t<agm-marker \r\n\t\t\t[latitude]=\"lat\" \r\n\t\t\t[longitude]=\"lng\">\r\n\t\t\t\t\r\n\t\t\t\t<agm-info-window>\r\n\t\t\t\t\t<strong>You Are Here</strong>\r\n\t\t\t\t</agm-info-window>\r\n\r\n\t\t\t</agm-marker>\r\n\r\n\t\t\t<agm-marker \r\n\t\t\t*ngFor=\"let p of pins\"\r\n\t\t\t[latitude]=\"p.lat\" \r\n\t\t\t[longitude]=\"p.lng\">\r\n\t\t\t\t\r\n\t\t\t\t<agm-info-window>\r\n\t\t\t\t\t<strong>{{p.name}}</strong><br>\r\n\t\t\t\t\t<span>{{p.street}}<br>{{p.czs}}</span>\r\n\t\t\t\t</agm-info-window>\r\n\t\t\t\t\r\n\t\t\t</agm-marker>\r\n\r\n\t\t</agm-map>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/shops/shops.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopsComponent = /** @class */ (function () {
    function ShopsComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pins = [
            {
                name: 'Curtis Wright Outfitters & Fly Fishing Guides',
                lat: 35.566113,
                lng: -82.540867,
                street: '5 All Souls Crescent',
                czs: 'Asheville, NC 28803'
            },
            {
                name: 'Hunter Banks Fly Fishing - Asheville',
                lat: 35.597075,
                lng: -82.559710,
                street: '29 Montford Ave',
                czs: 'Asheville, NC 28801'
            },
            {
                name: 'Curtis Wright Outfitters & Fly Fishing Guides',
                lat: 35.697227,
                lng: -82.560670,
                street: '24 N Main St',
                czs: 'Weaverville, NC 28787'
            },
            {
                name: 'One Fly Outfitters',
                lat: 35.616641,
                lng: -82.320943,
                street: '112 Cherry St',
                czs: 'Black Mountain, NC 28711'
            },
            {
                name: 'Orvis',
                lat: 35.485360,
                lng: -82.554410,
                street: '29 Schenck Pkwy #150',
                czs: 'Asheville, NC 28803'
            },
            {
                name: 'Brown Trout Fly Fishing LLC',
                lat: 35.485216,
                lng: -82.554342,
                street: '28 Schenck Pkwy #150',
                czs: 'Asheville, NC 28803'
            },
            {
                name: 'Hunter Banks Fly Fishing - Waynesville',
                lat: 35.490304,
                lng: -82.987560,
                street: '3889, 44 N Main St',
                czs: 'Waynesville, NC 28786'
            },
            {
                name: 'Davidson River Outfitters',
                lat: 35.273898,
                lng: -82.705076,
                street: '49 Pisgah Hwy #6',
                czs: 'Pisgah Forest, NC 28768'
            },
            {
                name: 'Southern Drifters Outfitters',
                lat: 35.917702,
                lng: -82.299390,
                street: '101 Town Square',
                czs: 'Burnsville, NC 28714'
            },
            {
                name: 'Tuckaseegee Fly Shop',
                lat: 35.373695,
                lng: -82.222569,
                street: '534 W Main St',
                czs: 'Sylva, NC 28779'
            },
            {
                name: 'Highland Outfitters',
                lat: 36.070849,
                lng: -81.871577,
                street: '4210 Mitchell Ave #1',
                czs: 'Linville, NC 28646'
            },
            {
                name: 'Hookers Fly Shop',
                lat: 35.373795,
                lng: -83.222812,
                street: '546 W Main St',
                czs: 'Sylva, NC 28779'
            },
            {
                name: 'Tuckaseegee Fly Shop',
                lat: 35.430864,
                lng: -83.447172,
                street: '3 Depot St',
                czs: 'Bryson City, NC 28713'
            },
            {
                name: 'Casters Fly Shop',
                lat: 35.763500,
                lng: -81.334150,
                street: '2427 N Center St',
                czs: 'Hickory, NC 28601'
            },
            {
                name: 'Foscoe Fishing Company & Outfitters',
                lat: 36.158438,
                lng: -81.769415,
                street: '8857 NC-105',
                czs: 'Boone, NC 28607'
            },
            {
                name: 'Appalachian Angler Fly Shop',
                lat: 36.182085,
                lng: -81.747424,
                street: '174 Old Shulls Mill Rd',
                czs: 'Boone, NC 28607'
            },
            {
                name: 'Watauga River Fly Shop',
                lat: 36.195083,
                lng: -81.744858,
                street: '5712 NC Highway 105 South',
                czs: 'Vilas, NC 28692'
            },
            {
                name: 'Due South Outfitters',
                lat: 36.204993,
                lng: -81.696859,
                street: '2575 NC-105 Suite 60',
                czs: 'Boone, NC 28607'
            },
            {
                name: 'Madison River Fly Fishing Outfitters',
                lat: 35.487777,
                lng: -80.874737,
                street: '20910 Torrence Chapel Rd',
                czs: 'Cornelius, NC 28031'
            }
        ];
    }
    ShopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.getUserLocation();
    };
    ShopsComponent.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    ShopsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shops',
            template: __webpack_require__("./src/app/components/shops/shops.component.html"),
            styles: [__webpack_require__("./src/app/components/shops/shops.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ShopsComponent);
    return ShopsComponent;
}());

// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-shops',
//   templateUrl: './shops.component.html',
//   styleUrls: ['./shops.component.css']
// })
// export class ShopsComponent implements OnInit {
// 	lat: number;
// 	lng: number;
//   constructor() { }
//   ngOnInit() {
//   	this.getUserLocation()
//   }
//   private getUserLocation() {
//   	if (navigator.geolocation) {
//   		navigator.geolocation.getCurrentPosition(position => {
//   			this.lat = position.coords.latitude;
//   			this.lng = position.coords.longitude;
//   		});
//   	}
//   }
// }
///////////////////////////////////////////////////////////////////
// selectedLocation(event) {
//   this.lat = event.coords.lat;
//   this.lng = event.coords.lng;
//   this.pinPlaced = 1;
// } 


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    //Ensure email address is valid with regular expression
    ValidateService.prototype.validateEmail = function (email) {
        var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.password == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map