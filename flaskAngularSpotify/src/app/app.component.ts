import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';



export interface IResponse {
  message: string,
  title: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private _apiservice:ApiService) { }
  title:string = 'flaskAngularSpotify';
  newdata?:IResponse;
  display?:string;

  ngOnInit() {
	this.getData();
  this.display = this.newdata?.message;
  }

  getData() {
	this._apiservice.getData().subscribe(result => {
    this.newdata = result;
    console.log(result.message);
  });
  }
}