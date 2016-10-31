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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
var AppServices = (function () {
    //Initialize the logged in user
    function AppServices(http) {
        this.http = http;
    }
    // get service
    AppServices.prototype.searchEmployee = function (search, next) {
        var url = 'wsServices/wSrvTools.asmx/SearchEmployee';
        var firstHeaders = new http_1.Headers();
        firstHeaders.append('Content-Type', 'application/json');
        var params = new http_1.URLSearchParams();
        params.append('search', "'" + search + "'");
        params.append('next', "'" + next + "'"); // if next is string we have to add "'", if next is a number then we don't need "'". 
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            url: url,
            search: params,
            headers: firstHeaders
        });
        return this.http.request(new http_1.Request(options))
            .map(function (res) { return JSON.parse(res.json().d.data); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ;
    // post service
    AppServices.prototype.addEmployee = function (form) {
        var url = 'wsServices/wSrvTools.asmx/AddEmployee';
        var firstHeaders = new http_1.Headers();
        firstHeaders.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            url: url,
            body: JSON.stringify({ "form": form }),
            headers: firstHeaders
        });
        return this.http.request(new http_1.Request(options))
            .map(function (res) { return JSON.parse(res.json().d.data); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ;
    AppServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppServices);
    return AppServices;
}());
exports.AppServices = AppServices;
//# sourceMappingURL=app.service.js.map