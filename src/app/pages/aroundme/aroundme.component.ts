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
  lat: number = 51.673858;
  lng: number = 7.815982;
  title = 'My first AGM project';
  id_user=28
  cards=[]

  constructor(private http:HttpClient) { 

  }


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  

  
  markerDragEnd( $event: MouseEvent) {
    console.log('dragEnd', $event);
  }

  ngOnInit():void{
    let url = "http://127.0.0.1:5000/events"
    this.http.get(url,{
    }).toPromise().then((data: any) => {
      this.cards=data
      this.cards.forEach(card => {
        console.log(card.name,card.latitudine,card.longitudine)
        if (card.id_partecipanti.some(e => e === this.id_user)){
          card.button_text='Non Partecipare'
        }
        else{
          card.button_text='Partecipa'
        }
      });
      console.log(this.cards)
      console.log(JSON.stringify(this.cards))
    })
  }

}

