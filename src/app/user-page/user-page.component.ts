import { Component, OnInit,Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private authService:AuthService,private router:Router) { }
  uname;
  addcomapnay:boolean=true;
  ngOnInit() {
    // this.authService.user= this.uname;
    if(this.authService.company_id != null){
      this.addcomapnay=false;
    }

  }
  onLogout(){
  
    this.storage.remove('token');
    
    }

}
