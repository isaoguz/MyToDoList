import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  mainUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  get(query, queryParams) {
    var paramString = '?';

    Object.keys(queryParams).forEach((element, index) => {
      if (index < Object.keys(queryParams).length - 1) {
        paramString += element + '=' + queryParams[element] + '%26';
      }

      if (index === Object.keys(queryParams).length - 1) {
        paramString += element + '=' + queryParams[element];
      }
    });

    return this.http.get(this.mainUrl + query + paramString);
    // return this.http.get(this.mainUrl + query, {

    // })
  }

  post(query, queryParams, body) {
    var paramString = '?';

    Object.keys(queryParams).forEach((element, index) => {
      if (index < Object.keys(queryParams).length - 1) {
        paramString += element + '=' + queryParams[element] + '%26';
      }

      if (index === Object.keys(queryParams).length - 1) {
        paramString += element + '=' + queryParams[element];
      }
    });

    return this.http.post(this.mainUrl + query + paramString, body);
  }
}
