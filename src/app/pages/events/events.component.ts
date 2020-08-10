import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { equal } from 'assert';
import {AuthService} from '../../_service/auth-service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  id_user= -1;
  isLoggedIn$: boolean;

  constructor(private Auth: AuthService, private http:HttpClient, private snackBar:MatSnackBar) { 
    this.Auth.onLoggedInStatus.subscribe({
      next: (event:boolean) => {
          console.log('Received message',event);
          this.isLoggedIn$=event;
      }
    })
    this.isLoggedIn$= this.Auth.getisLoggedIn();
    if (this.isLoggedIn$) {
      this.id_user= this.Auth.getId();
    }
    
  }
  possoPremere: boolean =true;
  join(id: String) : void {
      if(this.isLoggedIn$) {
        if(this.possoPremere){
          this.possoPremere=false;
          this.cards.forEach(card => {
            if (card.id == id) {
              if (card.button_text==='Non Partecipare')
              {
                var url="http://127.0.0.1:5000/dispartecipa/";
                card.button_text= 'Partecipa';
                let index=card.id_partecipanti.indexOf(this.id_user);
                if (index !== -1) {
                  card.id_partecipanti.splice(index, 1);
                }
              }
              else
              {
                var url="http://127.0.0.1:5000/partecipa/";
                card.button_text= 'Non Partecipare';
                card.id_partecipanti.push(this.id_user);
              }
              let headers = {
                'Cache-Control': 'no-cache',
                'Cache-Content-Type': 'application/json',
                'authentication_token': this.Auth.getAuthenticationToken()
              }
              this.http.get(url+id,{headers:headers}).toPromise().then((data: any) => {
                console.log(this.cards);
                this.possoPremere=true;
              });
            }
          });
        }
      }
      else
      {
        this.snackBar.open('Non sei loggato, non puoi partecipare agli eventi!','',{duration:3000});
      }
  }


  ngOnInit(): void {
    let url = "http://127.0.0.1:5000/events"
    this.http.get(url,{}).toPromise()
    .then((data: any) => {
      this.cards=data;
      this.cards.forEach(card => {
        if(this.isLoggedIn$) {
          if (card.id_partecipanti.some(e => e === this.id_user)){
            card.button_text='Non Partecipare'
          }
          else{
            card.button_text='Partecipa'
          }
        }
        else
        {
          card.button_text='Loggati per partecipare'
        }
      });
      console.log(this.cards);
    })
  }
}
