import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
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
 
 constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http:Http,private router:Router,private authService:AuthService) { }
  Email;
  Password;
  token;
onSubmit(){
  
  let formdata = {
    Email:this.Email,
    Password:this.Password
  }
  this.http.post('http://localhost:3000/auth/login',formdata).subscribe((res)=>{
    this.authService.token = res.headers.get('x-auth');
        this.storage.set('token',this.authService.token)

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
