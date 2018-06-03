import { Component } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // form: FormGroup;
  loading = false;
  title = 'app';
  profileImage: object = [];
  response: any;
  selectedFile: File;

  constructor(private authService: AuthService){  }
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    password: new FormControl(''),
    profilepic: new FormControl('')
  });

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
    // console.log(this.form);
    // let reader = new FileReader();
    // if(event.target.files && event.target.files.length > 0) {
    //
    //   reader.readAsDataURL(this.file);
    //   reader.onload = () => {
    //     console.log(this.file);
    //     this.profileImage['filename'] = this.file.name;
    //     this.profileImage['filetype'] = this.file.type;
    //     // this.profileImage['value'] = reader.result.split(',')[1];
    //
    //     // this.form.get('profilepic').setValue({
    //     //   filename: file.name,
    //     //   filetype: file.type,
    //     //   value: reader.result.split(',')[1]
    //     // })
    //   };
    // }
  }
  // console.log(this.profileImage);
  saveCustomer() {
    const formModel = this.form.value;
    // formModel.profileImage = this.profileImage;
    formModel.profileImage = this.selectedFile;

    const uploadData = new FormData();
    uploadData.append('name', formModel.name);
    uploadData.append('email', formModel.email);
    uploadData.append('contact', formModel.contact);
    uploadData.append('password', formModel.password);
    uploadData.append('profileImage', this.selectedFile, this.selectedFile.name);

    this.authService.registerCustomer(uploadData).subscribe(result => this.response = result);

  }

}
