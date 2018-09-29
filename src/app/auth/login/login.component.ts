import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../../services/auth.service';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http) { }
  Email;
  Password;
onSubmit(){
  
  let formdata = {
    Email:this.Email,
    Password:this.Password
  }
  this.http.post('http://localhost:3000/auth/login',formdata).subscribe(res=>{
    console.log(res);
    
  },
  err =>{
    console.log(err)
  }
)
}
  ngOnInit() {
  }

}
