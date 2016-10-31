import { Component } from '@angular/core';
import { AppServices } from './app.service';
// Declare External Javascript library objects here to use in component.
// Declare JQuery
declare var $: any;

@Component({
    selector: 'my-form',
    templateUrl: './forms/my-form.html'
})
export class AppComponent {

    loginUserFullName: string;
    loginUserTkid: string;
    employees: JSON;
    searchText: string = '';

    constructor(private appServices: AppServices) { }

    ngOnInit() {
        this.loginUserFullName = $('#hUserFullName').val();
        this.loginUserTkid = $('#hUserTKID').val();

        /*this.appServices.searchEmployee(this.searchText, '12')
            .subscribe(result => this.employees = result,
            err => { console.log(err); });*/
    }

    searchDB() {
        console.log("search click:" + this.searchText);
        this.appServices.searchEmployee(this.searchText, this.loginUserTkid)
            .subscribe(result => this.employees = result,
            err => { console.log(err); });
    }
}