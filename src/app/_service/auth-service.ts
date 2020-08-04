import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
    success: boolean,
    message: string
  }

@Injectable()
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(email, password) {
    // post these details to API server return user info if correct
    return this.http.post('http://127.0.0.1:5000/login', {
      email,
      password
    })
  }

  login(email,password){
      let url = 'http://127.0.0.1:5000/login'
       return this.http.post(url,{email,password})
  }

}