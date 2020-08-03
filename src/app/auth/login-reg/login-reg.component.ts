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
  password:String;
  remail:String;
  rpassword:String;
  rcpassword:String;
  rnome:String;
  rcognome:String;
  rcitta:String;

  constructor(private snackBar:MatSnackBar, private http:HttpClient){

  }
  register() {

    let url = "https://jsonplaceholder.typicode.com/posts"
    this.http.post(url,{
      remail:this.remail,
      rpassword:this.rpassword,
      rcpassword:this.rcpassword,
      rnome:this.rnome,
      rcognome:this.rcognome,
      rcitta:this.rcitta

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
