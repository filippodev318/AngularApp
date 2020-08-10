import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { equal } from 'assert';
import {AuthService} from '../../_service/auth-service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  cards = [
  ];
  carta = {
    name : "Evento",
    sport : "Calcio",
    numbersplayer : "1/4",
    price : "10",
    date : "22/05/2020"
  }

  button_text='Partecipa';
  id_user=28
  
  constructor(private Auth: AuthService,private http:HttpClient) { 

  }

  click(id : String) : void{
    this.cards.forEach(card => {
      console.log(card)
      if (card.id == id){
        if (card.button_text==='Non Partecipare')
        {
          var url="http://127.0.0.1:5000/dispartecipa/"
          card.button_text='Partecipa'
          let index=card.id_partecipanti.indexOf(this.id_user)
          if (index !== -1) {
            card.id_partecipanti.splice(index, 1);
          }
        }
        else
        {
          var url="http://127.0.0.1:5000/partecipa/"
          card.button_text='Non Partecipare'
          card.id_partecipanti.push(this.id_user)
        }
        
        this.http.get(url+id,{
        }).toPromise().then((data: any) => {
          console.log(this.cards)
          console.log(JSON.stringify(this.cards))
        });
      }
    });
  }


  ngOnInit(): void {
    let url = "http://127.0.0.1:5000/events"
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    //headers.append('authentication', '${this.Auth.getAuthenticationToken()}');
    //console.log(headers)
    let headers = {
        'Cache-Control': 'no-cache',
        'Cache-Content-Type': 'application/json',
        'authentication_token': this.Auth.getAuthenticationToken()
      }
      
    console.log(headers)
    this.http.get(url,{headers:headers }).toPromise()
    .then((data: any) => {
      this.cards=data
      console.log(data)
      this.cards.forEach(card => {
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
