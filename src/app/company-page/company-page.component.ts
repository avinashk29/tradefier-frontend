import { Component, OnInit ,Inject } from '@angular/core';
import {AuthService } from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router,RouterModule, ActivatedRoute ,Params} from '@angular/router'


@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {

  constructor(private authService:AuthService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,public router:Router,public route:ActivatedRoute) { }
  com;
  companies;
 

  ngOnInit() {
    this.authService.getCompany().subscribe(companies=>{
        this.companies=companies.stageOne; 
    }, 
   err=>{
      console.log(err);
   
    })
    this.authService.token =  this.storage.get('token');
   

    console.log(this.companies.stageOne.companyName);
  }

}

  


