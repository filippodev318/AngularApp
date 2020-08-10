import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../_service/auth-service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { UploadService } from 'src/app/_service/upload/upload.service';
import { Upload } from 'src/app/_service/upload/upload';

export interface UserProfile{
  url_image : string;
  nome : string;
  cognome : string;
  email : string;
  username : string;
  citta : string;
  telefono : string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {

  user : UserProfile;

  pathPhoto: string;

  selectedFiles: FileList;
  currentUpload: Upload;
  percentuale;
  caricamento;
  constructor(private Auth: AuthService, private http:HttpClient, private uploadService: UploadService) { 
    console.log('id:'+this.Auth.getId().toString())
    this.uploadService.percentuale.subscribe({
      next: (event:string) => {
          console.log('Received message jhygvfcdxsza',event);
          this.percentuale=+event;
      }
    })
  }

  ngOnInit(): void {
    let url = "http://127.0.0.1:5000/profile"

    let headers = {
        'Cache-Control': 'no-cache',
        'Cache-Content-Type': 'application/json',
        'authentication_token': this.Auth.getAuthenticationToken()
      }
      
    console.log(headers)
    this.http.get(url,{headers:headers}).toPromise()
    .then((data: any) => {
      this.user=data;
      console.log(data);
      console.log(this.user);
      console.log(JSON.stringify(this.user));
    })
  }

  detectFiles(event){
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    this.caricamento=true;
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file, this.Auth.getId().toString());
    this.uploadService.pushUpload(this.currentUpload);
  }

}
