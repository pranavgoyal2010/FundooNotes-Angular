import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string = 'https://localhost:7151/api/'
  constructor(public httpClient: HttpClient) { }

  loginUser(endpoint: string, data: Object): Observable<any> {
    return this.httpClient.post<any>(this.BaseUrl + endpoint, data);
  }

  registerUser(endpoint: string, data: Object): Observable<any> {
    return this.httpClient.post<any>(this.BaseUrl + endpoint, data);
  }
}
