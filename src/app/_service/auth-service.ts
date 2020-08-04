import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

interface myData {
    success: boolean,
    message: string
  }

@Injectable()
export class AuthService {

  private loggedInStatus = false;
  private authenticationToken = '';
  private id = -1;
  

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  setAuthenticationToken(value:string):void{
    this.authenticationToken=value;
  }

  getAuthenticationToken():string{
    return this.authenticationToken;
  }

  setId(value:number):void{
    this.id=value;
  }

  getId():number{
    return this.id;
  }

  login(email, password) {
    //console.log(email, password );
    return this.http.post('http://127.0.0.1:5000/login', {email, password});
  }

}