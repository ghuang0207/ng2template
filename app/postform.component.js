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
var PostFormComponent = (function () {
    function PostFormComponent(appServices, app) {
        this.appServices = appServices;
        this.app = app;
        this.hasData = false;
        this.loginUserFullName = app.loginUserFullName;
        this.newEmployee = {};
        this.newEmployee.FullName = "Kim Cassidy";
        this.newEmployee.TKID = "0100";
        this.newEmployee.Saved = false;
    }
    PostFormComponent.prototype.addEmployee = function () {
        var _this = this;
        this.appServices.addEmployee(this.newEmployee)
            .subscribe(function (result) { _this.updEmployee = result; _this.hasData = true; }, function (err) { console.log(err); });
    };
    PostFormComponent = __decorate([
        core_1.Component({
            selector: 'postform',
            templateUrl: './forms/my-form.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppServices, app_component_1.AppComponent])
    ], PostFormComponent);
    return PostFormComponent;
}());
exports.PostFormComponent = PostFormComponent;
//# sourceMappingURL=postform.component.js.map