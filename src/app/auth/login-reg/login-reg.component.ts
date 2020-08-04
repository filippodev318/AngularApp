import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../_service/auth-service'

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  logForm = new FormGroup({
    email:new FormControl("", [
      Validators.required
    ]),
    password:new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  })

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

  constructor(private Auth: AuthService, private snackBar:MatSnackBar, private http:HttpClient){
  }
  

  ngOnInit(): void {
  }

  nameErrorMessage() {
    if (this.regForm.get('nome').hasError('required')) 
      return 'Il campo nome va compilato';
  }

  cognomeErrorMessage(){
    if (this.regForm.get('cognome').hasError('required')) 
      return 'Il campo cognome va compilato';
  }

  usernameErrorMessage(){
    if (this.regForm.get('username').hasError('required')) 
      return 'Il campo username va compilato';
    if (this.regForm.get('username').hasError('minlength')) 
      return " L'username deve essere almeno di 5 caratteri";
  }
  
  pwdErrorMessage(){
    if (this.logForm.get('password').hasError('required'))
      return 'Inserisci la password' 
    if (this.regForm.get('password').hasError('required')) 
      return " Il campo password va compilato ";    
    if (this.regForm.get('password').hasError('minlength')) 
      return " La password deve essere almeno di 6 caratteri";
  }
   
  emailErrorMessage(){
    if (this.logForm.get('email').hasError('required'))
      return " Inserisci l'email " 
    if (this.regForm.get('email').hasError('required')) 
      return 'Il campo email va compilato';
  }

  phoneErrorMessage(){
    if (this.regForm.get('telefono').hasError('pattern')) 
      return 'Numero di telefono non valido';  
  }


  register(regForm) {

    let url = "http://127.0.0.1:5000/register"
    //let url = "http://httpbin.org/post"
    if(regForm.valid){
    this.snackBar.open('Registrazione in corso.... !!','',{duration:1500})
    this.http.post(url,regForm.value).toPromise().then((data: any) => {
      console.log(data)
      console.log(data)
      console.log(data["response"])
      console.log(data["response"]["user"]["authentication_token"])
      console.log(data["response"]["user"]["id"])
      this.snackBar.open('Registrazione avvenuta con successo !!','',{duration:2000})
      regForm.reset()
    })
    
  }
   
  }
  
  login(logForm) {
    let url = "http://127.0.0.1:5000/login"
    //let url = "http://httpbin.org/post"

    if(logForm.valid){
      
      this.Auth.login(logForm.get('email'),logForm.get('password')).subscribe(data => {
        
          console.log(data)
          //this.router.navigate(['admin'])
          this.Auth.setLoggedIn(true)
        
      })
      //this.http.post(url,logForm.value).toPromise().then((data:any) =>{
        //console.log(data)
      //})
    }

  }

}
