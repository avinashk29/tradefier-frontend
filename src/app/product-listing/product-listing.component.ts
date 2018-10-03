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
bookmark:boolean=false;
book:boolean=true;
  ngOnInit() {
 this.authService.getProduct().subscribe(products=>{
   this.products = products;
   console.log(products);
  
 },
 err=>{
   console.log(err)
 }, 
 
)

this.authService.token =  this.storage.get('token');



  }
bookmark_set(product) {
  if(!product.bookmark){
    product.bookmark =true;
  }
  else{
  product.bookmark=!product.bookmark;
  }

} 
onDeleteClick(_id){
  if(confirm("Are you Sure u want to delete the product..?")){
    this.authService.deleteProduct(this.authService.product._id).subscribe(res =>{
      for(let i=0;i<this.authService.product.length;i++){
        if(this.authService.product[i]._id == _id){
          this.authService.product.splice(i,1);
        }
      }
    });
  }
  console.log(_id)
}


}

