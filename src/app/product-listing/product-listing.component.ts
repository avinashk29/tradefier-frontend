import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
products;
token;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private authService:AuthService) { }
product;
  ngOnInit() {
 this.authService.getProduct().subscribe(products=>{
   this.products = products;
   console.log(products);
  
 },
 err=>{
   console.log(err)
 },
 
)

this.token =  this.storage.get('token');
console.log(this.token)

  }
 


}

