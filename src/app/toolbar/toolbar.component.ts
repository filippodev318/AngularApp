import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth-service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn$: boolean;

  constructor(private Auth:AuthService) { }

  ngOnInit(){
    this.isLoggedIn$ = this.Auth.isLoggedIn;
  }

  /*onLogout() {
    this.Auth.logout();
  }*/

}
