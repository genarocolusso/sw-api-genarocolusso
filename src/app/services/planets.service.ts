import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';


// Idk if I will use it.
@Injectable()
export class planetService {

    constructor(private http: Http) { }

    getPlanetName(api): Observable<string> {


        return this.http
            .get(api)
            .pipe(map((response: Response) => {
                let data = (response.json().name)
                return data;
            })
            )
    }


}