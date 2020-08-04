import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  regForm = new FormGroup({
    username:new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    email:new FormControl("", [
      Validators.required
    ]),
    password:new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    nome:new FormControl("", [
      Validators.required
    ]),
    cognome:new FormControl("", [
      Validators.required
    ]),
    citta:new FormControl("", [
      Validators.required
    ]),
    telefono:new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9 ]{10}")
    ])
  })

  email:String;
  password:String; 

  constructor(private snackBar:MatSnackBar, private http:HttpClient){

  }
  

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.regForm.get('email').hasError('required')) 
      return 'Il campo email va compilato';
    }

  register(regForm) {

    let url = "http://127.0.0.1:5000/register"
    //let url = "http://httpbin.org/post"
    if(regForm.valid){
    this.snackBar.open('Registrazione in corso.... !!','',{duration:10000})
    this.http.post(url,regForm.value).toPromise().then((data: any) => {
      console.log(data)
      console.log(data)
      console.log(data["response"])
      console.log(data["response"]["user"]["authentication_token"])
      console.log(data["response"]["user"]["id"])
      this.snackBar.open('Registrazione avvenuta con successo !!','',{duration:10000})
      regForm.reset()
    })
    
  }

  
   
  }
  
  login() {
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }

}
