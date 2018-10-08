import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private authService:AuthService) { }
token;
username;
showdropdown:boolean=false;

user_signed_in:boolean;
  ngOnInit() {
     console.log (this.authService.token);
     if(this.authService.token){
          this.user_signed_in = true;
     }
     else{
      this.user_signed_in = false;
     }
     
     this.authService.uname =  this.storage.get('UserName');
     this.authService.company_name = this.storage.get('company_name');
     console.log(this.authService.company_name);
    this.username =  this.authService.uname;
     console.log()
     this.authService.uname;
   }
   Dropdown(){
     this.showdropdown=!this.showdropdown;
   }


   
     
  
  }


