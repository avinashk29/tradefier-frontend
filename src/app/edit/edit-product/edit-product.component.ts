import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from '../../services/auth.service';
import {Router,RouterModule, ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private authService:AuthService,public router:Router,public route:ActivatedRoute) { }
  id;
  products;
  product;
  ProductName;
CompanyName;
IndustryName;
image_link;
description;
  
  ngOnInit() {
    this.id= this.route.snapshot.params['_id'];
    console.log(this.id);
    this.authService.getProduct().subscribe(products=>{
      for(var i = 0 ;i<products.length;i++){
        if(products[i]._id === this.id){
          this.product = products[i];
        }
      }
      console.log(this.product);
     
    },
    err=>{
      console.log(err)
    },
    
   )
  }
  onSubmit(){
     this.authService.updateProduct(this.product).subscribe(product=>{
      for(let i=0;i<this.authService.product.length;i++){
        if(this.authService.product[i]._id == this.product.id){
          this.authService.product.splice(i,1);
        }
      }
      this.products.unshift(product);
     })
     this.router.navigate(['/product_listing']); 
  } 

}
