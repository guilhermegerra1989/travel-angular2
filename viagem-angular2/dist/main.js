(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_travel_travel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/travel/travel.component */ "./src/app/components/travel/travel.component.ts");
/* harmony import */ var _components_travel_detail_travel_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/travel-detail/travel-detail.component */ "./src/app/components/travel-detail/travel-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'travel', component: _components_travel_travel_component__WEBPACK_IMPORTED_MODULE_4__["TravelComponent"] },
    { path: 'detail/:id', component: _components_travel_detail_travel_detail_component__WEBPACK_IMPORTED_MODULE_5__["TravelDetailComponent"] },
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ././components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_travel_travel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/travel/travel.component */ "./src/app/components/travel/travel.component.ts");
/* harmony import */ var _components_travel_detail_travel_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/travel-detail/travel-detail.component */ "./src/app/components/travel-detail/travel-detail.component.ts");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_datetime_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-datetime-picker */ "./node_modules/ng2-datetime-picker/dist/index.js");
/* harmony import */ var ng2_datetime_picker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_datetime_picker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__["NgDatepickerModule"],
                ng2_datetime_picker__WEBPACK_IMPORTED_MODULE_10__["Ng2DatetimePickerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_travel_travel_component__WEBPACK_IMPORTED_MODULE_7__["TravelComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _components_travel_detail_travel_detail_component__WEBPACK_IMPORTED_MODULE_8__["TravelDetailComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"]
            ],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.active {\n  color: #039be5;\n}\n"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header col-md-8\">\n          <h1><span routerLink=\"/dashboard\">Airline company</span> <small><b> Travel control</b></small></h1>\n        </div>\n          <div class=\"navbar-header navbar-right col-md-1\">\n            <h1><i class=\"glyphicon glyphicon-user center\" routerLink=\"/user\"> Users</i></h1>\n          </div>\n          <div class=\"navbar-header navbar-right col-md-1\">\n              <h1><i class=\"glyphicon glyphicon-list-alt center\" routerLink=\"/travel\"> Travels</i></h1>\n          </div>\n      </div>\n  </nav>\n\n<router-outlet></router-outlet>\n<!--<app-messages></app-messages>-->\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Travel Control';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Travel control</h3>\n\n<div class=\"col-md-12\">\n  <div class=\"grid grid-pad\">\n    <a *ngFor=\"let travel of travels\" class=\"col-1-4\"\n        routerLink=\"/detail/{{travel.id}}\">\n      <div class=\"module travel\">\n        <h4>{{travel.destination}}</h4>\n      </div>\n    </a>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(travelService) {
        this.travelService = travelService;
        this.travels = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTravels();
    };
    DashboardComponent.prototype.getTravels = function () {
        var _this = this;
        this.travelService.getTravels()
            .subscribe(function (travels) { return _this.travels = travels.slice(0, 20); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/messages/messages.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor=\"let message of messageService.messages\"> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/travel-detail/travel-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/travel-detail/travel-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/travel-detail/travel-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/travel-detail/travel-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"travel\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"container-fluid\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        \n                    </div>\n                  </div>\n              </div>\n\n              <div class=\"container-fluid\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                              <h3 class=\"panel-title\"><b>{{ travel.destination | uppercase }} </b> Details</h3>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n\n                                    <div class=\"form-group col-md-3\">\n                                        <label for=\"id\">ID</label>\n                                        <input type=\"text\" disabled class=\"form-control\" id=\"id\" placeholder=\"ID\" value=\"{{ travel.id }}\">\n                                    </div>\n\n                                    <div class=\"form-group col-md-3\">\n                                        <label for=\"origin\">ORIGIN</label>\n                                        <input type=\"text\"  [(ngModel)]=\"travel.origin\" pattern=\"[a-zA-Z ]*\" value=\"{{ travel.origin }}\" class=\"form-control\" id=\"origin\" placeholder=\"ORIGIN\" >\n                                    </div>\n\n                                    <div class=\"form-group col-md-3\">\n                                        <label for=\"destination\">DESTINATION</label>\n                                        <input type=\"text\" [(ngModel)]=\"travel.destination\" pattern=\"[a-zA-Z ]*\" class=\"form-control\" id=\"destination\" placeholder=\"DESTINATION\" value=\"{{ travel.destination }}\">\n                                    </div>\n\n                                    <div class=\"form-group col-md-3\">\n                                            <label for=\"origin\">DATETIME</label>\n                                            <input [(ngModel)]=\"travel.date\" class=\"form-control\" ng2-datetime-picker date-format=\"DD/MM/YYYY HH:mm\" parse-format=\"YYYY-MM-DD HH:mm:ss\" />\n                                    </div>\n\n                                    <div class=\"form-group col-md-3\">\n                                        <label for=\"aircraft\">AIRCRAFT</label>\n                                        <select  [(ngModel)]=\"travel.aircraft\" class=\"form-control\" id=\"aircraft\" placeholder=\"AIRCRAFT\">\n                                          <option *ngFor=\"let aircraft of aircrafts\" > {{aircraft.name}}</option>\n                                        </select>\n                                    </div>\n\n                                    <div class=\"form-group col-md-3\">\n                                        <label for=\"user\">USER</label>\n                                        <select  [(ngModel)]=\"travel.userName\" class=\"form-control\" id=\"userName\" placeholder=\"USERNAME\">\n                                            <option *ngFor=\"let user of users\" > {{user.name}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        \n                            <div class=\"row\">\n                                    <div class=\"form-group col-md-3\">\n                                        <button class=\"form-control  pull-right btn btn-default\" routerLink=\"/dashboard\">Cancel</button>\n                                    </div>    \n                                    <div class=\"form-group col-md-3\">\n                                        <button class=\"form-control btn btn-primary\" (click)=\"goBack()\">Save</button>\n                                    </div> \n                            </div>\n                                \n                        \n                        \n                    </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n    </div>    \n</div>\n\n<script type=\"javascript\">\n        $(function () {                \n        $('#datetimepicker2').datetimepicker();\n        });\n</script>\n"

/***/ }),

/***/ "./src/app/components/travel-detail/travel-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/travel-detail/travel-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: TravelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailComponent", function() { return TravelDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _entities_travel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/travel */ "./src/app/entities/travel.ts");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/en */ "./node_modules/date-fns/locale/en/index.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TravelDetailComponent = /** @class */ (function () {
    function TravelDetailComponent(route, travelService, location) {
        this.route = route;
        this.travelService = travelService;
        this.location = location;
        this.options = {
            displayFormat: 'DD-MM-YYYY HH:mm:ss',
            barTitleFormat: 'DD-MM-YYYY',
            dayNamesFormat: 'dd',
            firstCalendarDay: 0,
            locale: date_fns_locale_en__WEBPACK_IMPORTED_MODULE_5__,
            barTitleIfEmpty: 'Click to select a date',
            placeholder: 'Click to select a date',
            addClass: 'form-control',
            addStyle: {},
            fieldId: 'my-date-picker',
            useEmptyBarTitle: false,
        };
    }
    TravelDetailComponent.prototype.ngOnInit = function () {
        this.getTravel();
        this.getAircrafts();
        this.getUsers();
    };
    TravelDetailComponent.prototype.getTravel = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.travelService.getTravel(id)
            .subscribe(function (travel) { return _this.travel = travel; });
    };
    TravelDetailComponent.prototype.getAircrafts = function () {
        var _this = this;
        this.travelService.getAircrafts()
            .subscribe(function (aircrafts) { return _this.aircrafts = aircrafts; });
    };
    TravelDetailComponent.prototype.getUsers = function () {
        var _this = this;
        this.travelService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    TravelDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_travel__WEBPACK_IMPORTED_MODULE_3__["Travel"])
    ], TravelDetailComponent.prototype, "travel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TravelDetailComponent.prototype, "aircrafts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TravelDetailComponent.prototype, "users", void 0);
    TravelDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-detail',
            template: __webpack_require__(/*! ./travel-detail.component.html */ "./src/app/components/travel-detail/travel-detail.component.html"),
            styles: [__webpack_require__(/*! ./travel-detail.component.css */ "./src/app/components/travel-detail/travel-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_travel_service__WEBPACK_IMPORTED_MODULE_4__["TravelService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TravelDetailComponent);
    return TravelDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/travel/travel.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/travel/travel.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    height: 400px;\r\n  }"

/***/ }),

/***/ "./src/app/components/travel/travel.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/travel/travel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group col-md-2 pull-right\">\n                <h4><a data-toggle=\"modal\" data-target=\"#modal-travel\"><i class=\"pull-right glyphicon glyphicon-plus\">Add</i></a></h4>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-condensed table-bordered table-hover col-md-12\">\n                <thead>\n                    <tr class=\"info\">\n                        <th>ID</th>\n                        <th>Origin</th>\n                        <th>Destination</th>\n                        <th>Aircraft</th>\n                        <th>Date</th>\n                        <th>UserName</th>\n                        <th>Edit</th>\n                        <th>Remove</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let travel of travels\">\n                        <td>{{travel.id}}</td>\n                        <td>{{travel.origin}}</td>\n                        <td>{{travel.destination}}</td>\n                        <td>{{travel.aircraft}}</td>\n                        <td>{{travel.date | date : \"medium\" }}</td>\n                        <td>{{travel.userName}}</td>\n                        <td><i routerLink=\"/detail/{{travel.id}}\" class=\"glyphicon glyphicon-edit\"></i></td>\n                        <td><i (click)=\"goRemove(travel.id)\" class=\"glyphicon glyphicon-trash\"></i></td>\n                    </tr>\n                </tbody>\n            </table>\n          </div>\n      </div>\n    </div>\n</div>\n\n      \n<!-- Modal -->\n<div class=\"modal fade\" id=\"modal-travel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\">New Travel</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <div class=\"form-group col-md-12\">\n                            <label for=\"origin\">ORIGIN</label>\n                            <input type=\"text\" [(ngModel)]=\"travel.origin\" value=\"{{ travel.origin }}\" class=\"form-control\" id=\"origin\" placeholder=\"ORIGIN\">\n                    </div>\n                    <div class=\"form-group col-md-12\">\n                            <label for=\"destination\">DESTINATION</label>\n                            <input type=\"text\" [(ngModel)]=\"travel.destination\" value=\"{{ travel.destination }}\" class=\"form-control\" id=\"destination\" placeholder=\"DESTINATION\" value=\"\">\n                    </div>\n                    <div class=\"form-group col-md-12\">\n                            <label for=\"date\">DATETIME</label>\n                            <input class=\"form-control\" [(ngModel)]=\"travel.date\" value=\"{{ travel.date }}\" ng2-datetime-picker date-format=\"DD/MM/YYYY HH:mm\" parse-format=\"YYYY-MM-DD HH:mm:ss\" />\n                    </div>\n\n                    <div class=\"form-group col-md-12\">\n                        <label for=\"aircraft\">AIRCRAFT</label>\n                        <select  class=\"form-control\" [(ngModel)]=\"travel.aircraft\" value=\"{{ travel.aircraft }}\" id=\"aircraft\" placeholder=\"AIRCRAFT\">\n                          <option *ngFor=\"let aircraft of aircrafts\" > {{aircraft.name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group col-md-12\">\n                        <label for=\"user\">USER</label>\n                        <select   class=\"form-control\" [(ngModel)]=\"travel.userName\" value=\"{{ travel.userName }}\" id=\"userName\" placeholder=\"USERNAME\">\n                            <option *ngFor=\"let user of users\" > {{user.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"goAdd(travel)\">Add</button>\n            </div>\n          </div>\n    </div>\n</div>\n\n\n<script type=\"javascript\">\n    $('#modal-travel').on('shown.bs.modal', function () {\n        $('#myInput').focus()\n    })\n</script>"

/***/ }),

/***/ "./src/app/components/travel/travel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/travel/travel.component.ts ***!
  \*******************************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_travel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/travel */ "./src/app/entities/travel.ts");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TravelComponent = /** @class */ (function () {
    function TravelComponent(travelService) {
        this.travelService = travelService;
    }
    TravelComponent.prototype.ngOnInit = function () {
        this.getTravels();
        this.getAircrafts();
        this.getUsers();
        this.travel = new _entities_travel__WEBPACK_IMPORTED_MODULE_1__["Travel"]();
    };
    TravelComponent.prototype.getTravels = function () {
        var _this = this;
        this.travelService.getTravels()
            .subscribe(function (travels) { return _this.travels = travels; });
    };
    TravelComponent.prototype.getAircrafts = function () {
        var _this = this;
        this.travelService.getAircrafts()
            .subscribe(function (aircrafts) { return _this.aircrafts = aircrafts; });
    };
    TravelComponent.prototype.getUsers = function () {
        var _this = this;
        this.travelService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    TravelComponent.prototype.goAdd = function (obj) {
        var travel = new _entities_travel__WEBPACK_IMPORTED_MODULE_1__["Travel"];
        travel.id = this.travels.length + 1;
        travel.userName = obj.userName;
        travel.date = obj.date;
        travel.origin = obj.origin;
        travel.destination = obj.destination;
        travel.aircraft = obj.aircraft;
        this.travels.push(travel);
    };
    TravelComponent.prototype.goRemove = function (id) {
        this.travels.splice(this.travels.indexOf(this.travels.find(function (x) { return x.id == id; })), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TravelComponent.prototype, "aircrafts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TravelComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_travel__WEBPACK_IMPORTED_MODULE_1__["Travel"])
    ], TravelComponent.prototype, "travel", void 0);
    TravelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel',
            template: __webpack_require__(/*! ./travel.component.html */ "./src/app/components/travel/travel.component.html"),
            styles: [__webpack_require__(/*! ./travel.component.css */ "./src/app/components/travel/travel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_travel_service__WEBPACK_IMPORTED_MODULE_2__["TravelService"]])
    ], TravelComponent);
    return TravelComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-condensed table-bordered table-hover col-md-12\">\n                <thead>\n                    <tr class=\"info\">\n                        <th>ID</th>\n                        <th>Name</th>\n                        <th>Phone</th>\n                        <th>Address</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users\">\n                        <td>{{user.id}}</td>\n                        <td>{{user.name}}</td>\n                        <td>{{user.tel}}</td>\n                        <td>{{user.end}}</td>\n                    </tr>\n                </tbody>\n            </table>\n          </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users.slice(0, 20); });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/entities/travel.ts":
/*!************************************!*\
  !*** ./src/app/entities/travel.ts ***!
  \************************************/
/*! exports provided: Travel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel", function() { return Travel; });
var Travel = /** @class */ (function () {
    function Travel() {
    }
    return Travel;
}());



/***/ }),

/***/ "./src/app/mocks/mock-aircrafts.ts":
/*!*****************************************!*\
  !*** ./src/app/mocks/mock-aircrafts.ts ***!
  \*****************************************/
/*! exports provided: AIRCRAFTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIRCRAFTS", function() { return AIRCRAFTS; });
var AIRCRAFTS = [
    { id: 1, name: 'AirBus 777' },
    { id: 2, name: 'Embraer 175' }
];


/***/ }),

/***/ "./src/app/mocks/mock-travels.ts":
/*!***************************************!*\
  !*** ./src/app/mocks/mock-travels.ts ***!
  \***************************************/
/*! exports provided: TRAVELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAVELS", function() { return TRAVELS; });
var TRAVELS = [
    { id: 1, origin: 'São Paulo', destination: 'Fortaleza', aircraft: 'AirBus 777', userName: 'gulemes', date: '2018-04-21T18:25:43-05:00' },
    { id: 2, origin: 'São Paulo', destination: 'Belo Horizonte', aircraft: 'Embraer 175', userName: 'testeUser', date: '2018-04-21T18:25:43-05:00' }
];


/***/ }),

/***/ "./src/app/mocks/mock-users.ts":
/*!*************************************!*\
  !*** ./src/app/mocks/mock-users.ts ***!
  \*************************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var USERS = [
    { id: 1, name: 'gulemes', tel: '999999999', end: 'rua 1' },
    { id: 2, name: 'testeUser', tel: '88888888', end: 'rua 2' }
];


/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/travel.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/travel.service.ts ***!
  \********************************************/
/*! exports provided: TravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelService", function() { return TravelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_travels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/mock-travels */ "./src/app/mocks/mock-travels.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _mocks_mock_aircrafts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../mocks/mock-aircrafts */ "./src/app/mocks/mock-aircrafts.ts");
/* harmony import */ var _mocks_mock_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../mocks/mock-users */ "./src/app/mocks/mock-users.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TravelService = /** @class */ (function () {
    function TravelService(messageService) {
        this.messageService = messageService;
    }
    TravelService.prototype.getTravels = function () {
        this.messageService.add('TravelService: fetched travels');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_travels__WEBPACK_IMPORTED_MODULE_2__["TRAVELS"]);
    };
    TravelService.prototype.getTravel = function (id) {
        this.messageService.add("TravelService: fetched travel id=" + id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_travels__WEBPACK_IMPORTED_MODULE_2__["TRAVELS"].find(function (Travel) { return Travel.id === id; }));
    };
    TravelService.prototype.getAircrafts = function () {
        this.messageService.add('TravelService: fetched aircrafts');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_aircrafts__WEBPACK_IMPORTED_MODULE_4__["AIRCRAFTS"]);
    };
    TravelService.prototype.getUsers = function () {
        this.messageService.add('TravelService: fetched users');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_users__WEBPACK_IMPORTED_MODULE_5__["USERS"]);
    };
    TravelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], TravelService);
    return TravelService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mocks_mock_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/mock-users */ "./src/app/mocks/mock-users.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(messageService) {
        this.messageService = messageService;
    }
    UserService.prototype.getUsers = function () {
        this.messageService.add('TravelService: fetched users');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mocks_mock_users__WEBPACK_IMPORTED_MODULE_1__["USERS"]);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Pessoal\Projeto\viagem-angular2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map