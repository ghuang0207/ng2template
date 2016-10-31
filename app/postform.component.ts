import { Component } from '@angular/core';
import { AppServices } from './app.service';
import { AppComponent } from './app.component';

@Component({
    selector: 'postform',
    templateUrl: './forms/my-form.html'
})
export class PostFormComponent {
    newEmployee: any;
    updEmployee: JSON;
    hasData: boolean = false;

    loginUserFullName: string;

    constructor(private appServices: AppServices, private app: AppComponent) {
        this.loginUserFullName = app.loginUserFullName;

        this.newEmployee = {};
        this.newEmployee.FullName = "Kim Cassidy";
        this.newEmployee.TKID = "0100";
        this.newEmployee.Saved = false;
    }

    addEmployee() {
        
    
        this.appServices.addEmployee(this.newEmployee)
            .subscribe(
            result => { this.updEmployee = result; this.hasData = true; },
            err => { console.log(err); });
    }

}
