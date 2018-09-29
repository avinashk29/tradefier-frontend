import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Http ,Headers } from '@angular/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }
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
  

}
}
