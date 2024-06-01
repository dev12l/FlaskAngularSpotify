import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface IResponse {
  message: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get<IResponse>('http://127.0.0.1:5000/hello');
  }
}
