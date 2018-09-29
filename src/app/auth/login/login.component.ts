import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../../services/auth.service';
import { Http ,Headers, ResponseOptions } from '@angular/http';
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

  constructor(private http:Http,private router:Router,private authService:AuthService) { }
  Email;
  Password;
onSubmit(){
  
  let formdata = {
    Email:this.Email,
    Password:this.Password
  }
  this.http.post('http://localhost:3000/auth/login',formdata).subscribe((res)=>{
    this.authService.token = res.headers.get('x-auth');
        

    this.router.navigate(['']);
  },
  err =>{
    console.log(err)
  }
)
}
  ngOnInit() {
  }

}
