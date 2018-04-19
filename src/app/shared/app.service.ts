import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  readonly ACCESS_TOKEN = environment.ACCESS_TOKEN;
  readonly API_URL = 'https://sandbox.tradier.com/v1/markets/lookup?q=';

  search(terms: Observable<string>) {
    console.log(terms);
    return terms
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.getNames(term));
  }

  getNames(nameFilter: string) {
    return this.http.get(this.API_URL + nameFilter, {
      headers: this.authorization
    });
  }

  getComments() {
    const nameFilter = 'aa'
    return this.http.get(this.API_URL + nameFilter, {
      headers: this.authorization
    });
  }

  get authorization() {
    return {
      authorization: 'Bearer ' + this.ACCESS_TOKEN
    };
  }
}
