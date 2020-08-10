import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../_service/auth-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm = new FormGroup({
    nuovaPassword:new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    confermaPassword:new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

  changePassword(){

  }

  pwdErrorMessage(){
    if (this.resetForm.get('nuovaPassword').hasError('required')) 
      return 'Il campo va compilato';
    if (this.resetForm.get('nuovaPassword').hasError('minlength')) 
    return " La password deve essere almeno di 6 caratteri";
  }

  confPwdErrorMessage(){
    if (this.resetForm.get('confermaPassword').hasError('required')) 
      return 'Il campo va compilato';
    if (this.resetForm.get('confermaPassword').hasError('minlength')) 
    return " La password deve essere almeno di 6 caratteri";
  }
  

}
