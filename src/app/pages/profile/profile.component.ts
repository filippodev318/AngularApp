import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../_service/auth-service';

export interface UserProfile{
  nome : string;
  cognome : string;
  email : string;
  username : string;
  citta : string;
  telefono : string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {

  user : UserProfile = {
    'nome' : 'Test',
    'cognome' : 'Test1',
    'email' : 'Test2',
    'username' : 'Test3',
    'citta' : 'Test4',
    'telefono' : 'Test5'
  }

  constructor(private Auth: AuthService,private http:HttpClient) { }

  ngOnInit(): void {
    let url = "http://127.0.0.1:5000/profile"

    let headers = {
        'Cache-Control': 'no-cache',
        'Cache-Content-Type': 'application/json',
        'authentication_token': this.Auth.getAuthenticationToken()
      }
      
    console.log(headers)
    this.http.get(url,{headers:headers}).toPromise()
    .then((data: any) => {
      this.user=data
      console.log(data)
      console.log(this.user)
      console.log(JSON.stringify(this.user))
    })
  }

}
