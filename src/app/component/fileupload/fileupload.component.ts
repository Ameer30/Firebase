import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileMetaData } from 'src/app/model/file-meta-data';
import { FileService } from 'src/app/shared/file.service';
import { finalize } from 'rxjs/operators';
import { empty } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  selectedFiles !: FileList;
  currentFileUpload !: FileMetaData;
  percentage: number = 0;

  listOfFiles : FileMetaData[] = [];
  
  
  // handleVisibilityChange: any;
  

  constructor(private fileService: FileService, private fireStorage: AngularFireStorage, private dataService : DataService) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  preview = false;
  file: File | null = null;
fileUrl: string | null = null;


  selectFile(event: any) {
    this.preview=true;
    // var file = document.querySelector("#fUpload");
    // if ( /\.(mp4)$/i.test(file.files[0].name) === false ) { alert("not an video!"); }
    
    this.selectedFiles = event.target.files;
    if (this.file ?.type === 'video/mp4') {
      alert ('The file is an MP4 file');
    } else {
      alert('The file is not an MP4 file')
    }
this.file = event.target.files[0];

if (this.file) {
  const reader = new FileReader();
  reader.onload = (e: any) => {
    this.fileUrl = e.target.result;
  };
  reader.readAsDataURL(this.file);
}
}


   uploadFile() {
    this.preview = false;
     this.currentFileUpload =  new FileMetaData(this.selectedFiles[0]);
     const path = 'Uploads/'+this.currentFileUpload.file.name;

     const storageRef = this.fireStorage.ref(path);
     const uploadTask = storageRef.put(this.selectedFiles[0]);
    
     uploadTask.snapshotChanges().pipe(finalize( () => {
        storageRef.getDownloadURL().subscribe(downloadLink => {
          this.currentFileUpload.id = '';
          this.currentFileUpload.url = downloadLink;
          this.currentFileUpload.size = this.currentFileUpload.file.size;
          this.currentFileUpload.name = this.currentFileUpload.file.name;
          this.fileService.saveMetaDataOfFile(this.currentFileUpload);

        })
        this.ngOnInit();
     })
     ).subscribe( (res : any) => {
        this.percentage = (res.bytesTransferred * 100 / res.totalBytes);

        
     }, err => {
        console.log('Error occured');
     });
     
    }
 

  getAllFiles() {
    this.fileService.getAllFiles().subscribe( res => {
        this.listOfFiles = res.map((e : any) => {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            //console.log(data);
            return data;
        });
    }, err => {
        console.log('Error occured while fetching file meta data');
    })
  }

  deleteFile(file : FileMetaData) {

    if(window.confirm('Are you sure you want to delete '+file.name   + '?')) {
      this.fileService.deleteFile(file);
      this.ngOnInit();
   }
    
  }
 

}