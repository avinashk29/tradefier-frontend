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
  company;
  companies;
  id;
  ngOnInit() {
   
    this.id= this.route.snapshot.params['_id'];
    this.authService.getCompany(this.id).subscribe(companies=>{
      this.company=companies;
    
      
    },
    err=>{
      console.log(err);
      console.log(this.id);
    }
  )
  }
  

}
