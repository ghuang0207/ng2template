import { Component  } from '@angular/core';
//import { AppServices } from './app.service';

// Declare External Javascript library objects here to use in component.
// Declare JQuery
declare var $: any;

// This component houses all init data e.g. LoginUser info.
@Component({
    selector: 'init-app',
    template: '<getdata></getdata><br /><br /><postform></postform>' // this is like a main page
})
export class AppComponent {

    loginUserFullName: string;
    loginUserTkid: string;

    constructor() {
        this.loginUserFullName = $('#hUserFullName').val();
        this.loginUserTkid = $('#hUserTKID').val();
    }
}
