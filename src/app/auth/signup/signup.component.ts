import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private authService:AuthService,private router:Router) { }
Email;
Password;
Mobile;
Address;
UserName;
  ngOnInit() {
  }
onSubmit(){
  let formdata = {
    Email:this.Email,
    Password:this.Password,
    Mobile:this.Mobile,
    UserName:this.UserName,
    Address:this.Address
  }
  this.authService.signup(formdata).subscribe(
    
    res =>{console.log(res);
      this.authService.token = res.headers.get('x-auth');
      this.storage.set('token',this.authService.token);
      this.storage.set('UserName',JSON.parse(res["_body"]).UserName);
     this.authService.uname = JSON.parse(res["_body"]).UserName;
    this.router.navigate([''])
     
    },
    err=>{
      console.log(err)
    }
)
  this.router.navigate(['']);
}
}
