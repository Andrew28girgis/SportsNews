import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private _http: HttpClient) {
   }

   getNews(code): Observable<any> {
    return this._http.get('https://newsapi.org/v2/top-headlines?country=' + code + '&category=sports&apiKey=9d3188e4ba9e449f94c14f6417c3b464');
   }




}
