import { Component, OnInit } from '@angular/core';
import {MouseEvent} from '@agm/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})

export class CreateeventComponent implements OnInit {

  lat: number = 51.673858;
  lng: number = 7.815982;

  evento: any = {};

  eventForm = new FormGroup({
    nome:new FormControl("", [
      Validators.required
    ]),
    password:new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  })


  constructor() { }

  ngOnInit(): void {

  }

  mapClicked($event: MouseEvent) {
    console.log('mapClicked', $event);
    this.evento.latitudine = $event.coords.lat;
    this.evento.longitudine = $event.coords.lng;
    this.evento.draggable = true;
    console.log(this.evento);
  }

  markerDragEnd( $event: MouseEvent) {
    console.log('dragEnd', $event);
    this.evento.latitudine = $event.coords.lat;
    this.evento.longitudine = $event.coords.lng;
    this.evento.draggable = true;
    console.log(this.evento);
  }

  click():void{
    console.log('ciao')
    console.log(this.eventForm)
  }



}
