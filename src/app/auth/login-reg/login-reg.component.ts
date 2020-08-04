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
    regusername:new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    regemail:new FormControl("", [
      Validators.required
    ]),
    regpassword:new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    regnome:new FormControl("", [
      Validators.required
    ]),
    regcognome:new FormControl("", [
      Validators.required
    ]),
    regcitta:new FormControl("", [
      Validators.required
    ]),
    regtelefono:new FormControl("", [
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
    if (this.regForm.get('regemail').hasError('required')) 
      return 'Il campo email va compilato';
    }

  register(regForm) {

<<<<<<< HEAD
    //let url = "http://127.0.0.1:5000/register"
    let url = "http://httpbin.org/post"
    if(regForm.valid){
    this.http.post(url,regForm.value).toPromise().then((data: any) => {
=======
    let url = "http://127.0.0.1:5000/register"
    //let url = "http://httpbin.org/post"
    this.http.post(url,{
      email:this.regemail,
      username:this.regusername,
      password:this.regpassword,
      nome:this.regnome,
      cognome:this.regcognome,
      citta:this.regcitta,
      telefono:this.regtelefono

    }).toPromise().then((data: any) => {
>>>>>>> e3cc5eec9f21e7e079b5a73fb34b105ba28427ae
      console.log(data)
      console.log(JSON.stringify(data))
    })
    this.snackBar.open('Registrazione avvenuta con successo !!','',{duration:1000})
  }

  regForm.reset()
   
  }
  
  login() {
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }

}
