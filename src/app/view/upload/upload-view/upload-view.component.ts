import { UploadServiceService } from './../upload-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-view',
  templateUrl: './upload-view.component.html',
  styleUrls: ['./upload-view.component.sass']
})
export class UploadViewComponent implements OnInit {

  progress: string;
  success: string;
  public values: string;
  fileToUpload: File = null;

  constructor(private uploadService: UploadServiceService) { }

  ngOnInit() {
    this.uploadService.getValues().subscribe(data => {
      this.values=data;
    });
  }

  handleFileInput(files: FileList) {
    this.success = "";
    this.progress= "";
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.uploadService.postFile(this.fileToUpload).subscribe(resp => {
      if (resp.type === HttpEventType.Response) {
        this.success = "successed";
        console.log('Upload complete');
      }
      if (resp.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * resp.loaded / resp.total);
        console.log('Progress ' + percentDone + '%');
        this.progress = 'Progress ' + percentDone + ' %';
      }
    })
  }

}
