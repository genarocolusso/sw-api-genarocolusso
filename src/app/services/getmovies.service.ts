import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from "@angular/http";
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable()
export class getmoviesService {

    constructor(private http: Http) { }

    getMovie(): Observable<any[]> {


        return this.http
            .get(apiUrl + '/films/')
            .pipe(map((response: Response) => {
                // let data = (response.json().results.filter(data => data.director === "George Lucas"))
                let data = (response.json().results)
                 
                return data;
            })
            )
    }

 

}