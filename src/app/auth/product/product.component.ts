import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private authService:AuthService) { }
ProductName;
CompanyName;
IndustryName;
image_link;
description;
  ngOnInit() {
  }
 onSubmit(){
   let product ={
     name:this.ProductName,
     company:this.CompanyName,
     industry: this.IndustryName,
     image:this.image_link,
     description:this.description
   }

 this.authService.addProduct(product).subscribe(product=>{
   console.log(product);
   this.authService.product = product;
 },
 err=>{
   console.log(err)
 })
 }
}
