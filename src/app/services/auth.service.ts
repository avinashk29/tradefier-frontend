import { Injectable, Inject } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Injectable()
export class AuthService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http:Http) { }
 
  token;
product;
post;
uname;
company;
company_id;
company_name;

login(formdata){
      
  return this.http.post('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/auth/login',formdata)
  .map(res=>res.json())

}

signup(formdata){
  return this.http.post('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/auth/signup',formdata)
  

}

addProduct(product){
  let headers=new Headers();
  headers.append('x-auth',this.token);
  console.log(this.token);
  return this.http.post('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/product',product,{headers:headers})
  .map(res=>res.json())
}

getProduct(){
  let headers=new Headers();
  headers.append('x-auth',this.token);
  console.log(this.token);
  return this.http.get('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/product',{headers:headers})
  .map(res=>res.json())
}

addPost(post){
  let headers=new Headers();
  headers.append('x-auth',this.token);
  return this.http.post('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/post',post,{headers:headers})
  .map(res=>res.json())
}

getPost(){
  let headers=new Headers();
  headers.append('x-auth',this.token);
  console.log(this.token);
  return this.http.get('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/post',{headers:headers})
  .map(res=>res.json())
} 
deleteProduct(_id){
  return this.http.delete('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/product/' +_id,)
  .map(res=>res.json())
}
updateProduct(product){
  return this.http.put('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/product/' +product._id,product)
  .map(res=>res.json())
 
}
addCompany(company){
  let headers=new Headers();
  headers.append('x-auth',this.token);
  return this.http.post('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/company/',company,{headers:headers})
  .map(res=>res.json())
}
getCompany(){
  let headers=new Headers();
  headers.append('x-auth',this.token);
  return this.http.post('http://ec2-52-66-239-193.ap-south-1.compute.amazonaws.com/company/',{headers:headers})
  .map(res=>res.json())
}
}


