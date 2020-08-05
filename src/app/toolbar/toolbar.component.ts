import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth-service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn$: boolean;

  constructor(private Auth:AuthService) { 
    this.Auth.onLoggedInStatus.subscribe({
      next: (event:boolean) => {
          //console.log('Received message',event);
          this.isLoggedIn$=event;
      }
    })

  }

  ngOnInit() { }

  /*onLogout() {
    this.Auth.logout();
  }*/

}
