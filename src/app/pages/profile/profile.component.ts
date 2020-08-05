import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../_service/auth-service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface UserProfile{
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

  user : UserProfile = {
    'nome' : 'Test',
    'cognome' : 'Test1',
    'email' : 'Test2',
    'username' : 'Test3',
    'citta' : 'Test4',
    'telefono' : 'Test5'
  }

  @Input() file: File;

  private storage: AngularFireStorage;
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private Auth: AuthService,private http:HttpClient) { }

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
      this.user=data
      console.log(data)
      console.log(this.user)
      console.log(JSON.stringify(this.user))
    })
  }

  startUpload() {

    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        //this.db.collection('files').add( { downloadURL: this.downloadURL, path });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
