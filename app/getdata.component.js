"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var app_component_1 = require('./app.component');
// Declare External Javascript library objects here to use in component.
var GetDataComponent = (function () {
    function GetDataComponent(appServices, app) {
        this.appServices = appServices;
        this.app = app;
        this.searchText = '';
        this.loginUserFullName = app.loginUserFullName;
    }
    GetDataComponent.prototype.searchDB = function () {
        var _this = this;
        console.log("search click:" + this.searchText);
        this.appServices.searchEmployee(this.searchText, this.app.loginUserTkid)
            .subscribe(function (result) { return _this.employees = result; }, function (err) { console.log(err); });
    };
    GetDataComponent = __decorate([
        core_1.Component({
            selector: 'getdata',
            templateUrl: './forms/my-app.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppServices, app_component_1.AppComponent])
    ], GetDataComponent);
    return GetDataComponent;
}());
exports.GetDataComponent = GetDataComponent;
//# sourceMappingURL=getdata.component.js.map