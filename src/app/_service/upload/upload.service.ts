import { Injectable } from "@angular/core"
import { Upload } from './upload';
import * as firebase from 'firebase';
import { AuthService } from '../auth-service';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UploadService {

    private basePath: string = '/upload';
    private uploadTask: firebase.storage.UploadTask;

    constructor(private Auth: AuthService, private http: HttpClient) {  }


    pushUpload(upload: Upload){
        var that=this;
        let headers = {
            'Cache-Control': 'no-cache',
            'Cache-Content-Type': 'application/json',
            'authentication_token': this.Auth.getAuthenticationToken()
          }
        let storageRef = firebase.storage().ref();
        this.uploadTask = storageRef.child(this.basePath+'/'+upload.path).put(upload.file);

        this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                upload.progress= (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
                console.log("upload.progress: ",upload.progress)
            },
            (error) => {
                console.log("error")
            },
            () => {
                this.uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    upload.name=upload.file.name;
                    upload.url=downloadURL;
                    console.log("url: ",downloadURL,"name: ",upload.name);
                    console.log('File available at', downloadURL);
                    that.http.put('http://localhost:5000/profile',{url_image:downloadURL},{headers:headers}
                        ).toPromise()
                        .then((data: any) => {
                        console.log(data);
                        console.log(JSON.stringify(data));
                        })
                  });

            })
    }
}