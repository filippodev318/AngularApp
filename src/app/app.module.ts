import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { AuthService } from './_service/auth-service';
import { UploadService } from './_service/upload/upload.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDcglH7K_WV9fF3a3pJqHrlndte8Nfspeg",
  authDomain: "atns-a5a13.firebaseapp.com",
  databaseURL: "https://atns-a5a13.firebaseio.com",
  projectId: "atns-a5a13",
  storageBucket: "atns-a5a13.appspot.com",
  messagingSenderId: "919697256418",
  appId: "1:919697256418:web:c440f0d1e53534840193bb",
  measurementId: "G-YNVWLH0GP7"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(firebaseConfig), // aggiungi questa riga 
    AngularFireStorageModule
  ],
  providers: [AuthService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
