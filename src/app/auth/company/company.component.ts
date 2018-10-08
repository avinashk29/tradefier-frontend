import { Component, OnInit ,Inject } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private authService:AuthService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  Category;
  CompanyName;
  Location_company;
  Website;
  id;

  ngOnInit() {
    this.storage.set('id',this.authService.company_id)
  }
onSubmit(){
  let company={
    category:this.Category,
    companyName:this.CompanyName,
    location:this.Location_company,
    website:this.Website
    }
this.authService.addCompany(company).subscribe((company)=>{
  console.log(company);
  console.log(company._id);
  this.authService.company = company;
  this.authService.company_id = company._id;
  this.storage.set('company_id' ,this.authService.company_id);
  this.storage.set('company_name' ,this.CompanyName);
  
},
(err)=>{
  console.log(err);
}
)
var mycompany = this.CompanyName.split(" " , 1);
console.log(mycompany)
this.router.navigate(['/company_page'])
this.id=this.authService.company_id;
}

}
