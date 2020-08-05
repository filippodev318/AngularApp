import { Component, OnInit } from '@angular/core';
import {MouseEvent} from '@agm/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {formatDate} from '@angular/common';
/*
export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'numeric', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'dd-MM-yyyy',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}
*/
@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']/*,
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
]*/
})

export class CreateeventComponent implements OnInit {

  lat: number = 51.673858;
  lng: number = 7.815982;

  evento: any = {};

  eventForm = new FormGroup({
    nome:new FormControl("", [
      Validators.required
    ]),
    sport:new FormControl("", [
      Validators.required
    ]),
    prezzo:new FormControl("", [
      Validators.required
    ]),
    numerodipartecipanti:new FormControl("", [
      Validators.required
    ]),
    data:new FormControl("", [
      Validators.required
    ])    
  })


  constructor() { }

  ngOnInit(): void {
    this.evento.visible = false;
  }

  mapClicked($event: MouseEvent) {
    console.log('mapClicked', $event);
    this.evento.latitudine = $event.coords.lat;
    this.evento.longitudine = $event.coords.lng;
    this.evento.draggable = true;
    this.evento.visible = true;
    console.log(this.evento);
  }

  markerDragEnd( $event: MouseEvent) {
    console.log('dragEnd', $event);
    this.evento.latitudine = $event.coords.lat;
    this.evento.longitudine = $event.coords.lng;
    this.evento.draggable = true;
    this.evento.visible = true;
    console.log(this.evento);
  }

  click():void{
    console.log('ciao')
    console.log(this.eventForm)
  }

  nolocation():void{
    this.evento.visible = false;
  }
  
}
