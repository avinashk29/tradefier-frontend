import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private authService:AuthService,public router:Router) { }
ProductName;
CompanyName;
IndustryName;
image;
description;
isEdit:boolean=true;
  ngOnInit() {
  }
  onFileSelected(event){
    this.image= <File>event.target.files[0];
     }
 onSubmit(){
   
  const formData:FormData = new FormData();
   
   formData.append('name',this.ProductName);
   formData.append('company',this.CompanyName);
   formData.append('industry',this.IndustryName);
   formData.append('Image',this.image);
   formData.append('description',this.description);

 this.authService.addProduct(formData).subscribe(product=>{
   console.log(product);
   this.authService.product = product;
 },
 err=>{
   console.log(err)
 })
 this.router.navigate(['/product_listing']);
 }

}
