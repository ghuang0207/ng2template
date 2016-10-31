import { Injectable } from '@angular/core';
import { RequestOptions, Request, Response, RequestMethod, Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable()
export class AppServices {

    //Initialize the logged in user
    constructor(private http: Http) {
    }

    // get service
    searchEmployee(search: string, next: string): Observable<JSON> {

        let url = 'wsServices/wSrvTools.asmx/SearchEmployee';

        let firstHeaders = new Headers();
        firstHeaders.append('Content-Type', 'application/json');

        let params = new URLSearchParams();
        params.append('search', "'" + search + "'");
        params.append('next', "'" + next + "'"); // if next is string we have to add "'", if next is a number then we don't need "'". 
        let options = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            search: params,
            headers: firstHeaders
        });

        return this.http.request(new Request(options))
            .map((res: Response) => JSON.parse(res.json().d.data))
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    };

    // post service
    addEmployee(form: JSON): Observable<JSON> {

        let url = 'wsServices/wSrvTools.asmx/AddEmployee';

        let firstHeaders = new Headers();
        firstHeaders.append('Content-Type', 'application/json');


        let options = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            body: JSON.stringify({ "form":  form  }),
            headers: firstHeaders
        });

        return this.http.request(new Request(options))
            .map((res: Response) => JSON.parse(res.json().d.data))
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    };

}



