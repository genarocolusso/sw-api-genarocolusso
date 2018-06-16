import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from "@angular/http";
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';

 
 
@Injectable()
export class characterService {

    constructor(private http: Http) { }

    getCharacter(apicharacter): Observable<any[]> {


        return this.http
            .get(apicharacter)
            .pipe(map((response: Response) => {
             
                let data = (response.json())
                console.log(data)
                return data;
            })
            )
    }


}