import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private httpClient: HttpClient) { }

  getValues(): Observable<string> {
    return this.httpClient.get<string>("http://localhost:59201/api/values");
  }

  postFile(fileToUpload: File): Observable<HttpEvent<Object>> {
    const endpoint = '/api/values';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, {
        reportProgress: true,
        observe: 'events'
      })
  }
}
