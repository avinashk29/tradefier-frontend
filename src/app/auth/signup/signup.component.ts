import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Http ,Headers } from '@angular/http';
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService, public router:Router) { }
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
    
    res =>{
      let header = new Headers();

     console.log(res);
    },
    err=>{
      console.log(err)
    }
)
  this.router.navigate(['']);
}
}
