import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit} from '@angular/core';

import { AgmCoreModule, MouseEvent} from '@agm/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-aroundme',
  templateUrl: './aroundme.component.html',
  styleUrls: [ './aroundme.component.css' ]
})
export class AroundmeComponent implements OnInit  {

  // initial center position for the map
  lat: number = 40.514680;
  lng: number = 14.163612;
  cards=[]

  constructor(private http:HttpClient) { }

  ngOnInit():void{
    let url = "http://127.0.0.1:5000/events"
    this.http.get(url,{
    }).toPromise().then((data: any) => {
      this.cards=data
      console.log(this.cards)
    })
  }

}

