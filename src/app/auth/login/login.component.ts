import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { FlashMessagesService } from 'angular2-flash-messages';
// import {AuthService} from '../../services/auth.service';
import { Http ,Headers, ResponseOptions, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http:Http,private router:Router,private authService:AuthService,private flashMessage: FlashMessagesService) { }
  Email;
  Password;
  token;
  UserName;
  user;
onSubmit(){
  
  let formdata = {
    Email:this.Email,
    Password:this.Password
  }
  this.http.post('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/auth/login',formdata).subscribe((res)=>{
      this.user = res;
     console.log(JSON.parse(res["_body"]).UserName); 
     
  
    this.authService.token = res.headers.get('x-auth');
        this.storage.set('token',this.authService.token);
        this.storage.set('UserName',JSON.parse(res["_body"]).UserName);
        // this.storage.set('UserName',res.us)
       this.authService.uname = JSON.parse(res["_body"]).UserName;
        this.router.navigate(['']);
 
  },
  err =>{
    console.log(err)
  }
)
}

  ngOnInit() {
  
   
  }
  // showFlash() {
  //   // 1st parameter is a flash message text
  //   // 2nd parameter is optional. You can pass object with options.
  //   this.flashMessage.show('Welcome To TheRichPost.com', { cssClass: 'alert-success', timeout: 2000 });
  //   console.log("test")

  // }
}
