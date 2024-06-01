import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService() {
constructor(private _http: HttpClient) { }

public getdata(): void {
  return this._http.get('http://127.0.0.1:5000/');
}
}