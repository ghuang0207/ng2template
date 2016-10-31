import { Component } from '@angular/core';
import { AppServices } from './app.service';
import { AppComponent } from './app.component';
// Declare External Javascript library objects here to use in component.

@Component({
    selector: 'getdata',
    templateUrl: './forms/my-app.html'
})
export class GetDataComponent {

    employees: JSON;
    searchText: string = '';
    loginUserFullName: string;

    constructor(private appServices: AppServices, private app: AppComponent) {
        this.loginUserFullName = app.loginUserFullName;
    }


    searchDB() {
        console.log("search click:" + this.searchText);
        this.appServices.searchEmployee(this.searchText, this.app.loginUserTkid)
            .subscribe(result => this.employees = result,
            err => { console.log(err); });
    }
}
