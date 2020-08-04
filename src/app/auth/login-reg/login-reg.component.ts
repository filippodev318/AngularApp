import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {


  email:String;
  rusername:String;
  password:String;
  remail:String;
  rpassword:String;
  rnome:String;
  rcognome:String;
  rcitta:String;
  rtelefono:String;

  constructor(private snackBar:MatSnackBar, private http:HttpClient){

  }
  
  register() {

    let url = "http://127.0.0.1:5000/register"
    this.http.post(url,{
      email:this.remail,
      username:this.rusername,
      password:this.rpassword,
      nome:this.rnome,
      cognome:this.rcognome,
      citta:this.rcitta,
      telefono:this.rtelefono

    }).toPromise().then((data: any) => {
      console.log(data)
      console.log(JSON.stringify(data))
    })

  }
  
  login() {
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }

  ngOnInit(): void {
  }

}
