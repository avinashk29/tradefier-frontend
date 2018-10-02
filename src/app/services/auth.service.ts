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

  login(formdata){
      
    return this.http.post('http://localhost:3000/auth/login',formdata)
    .map(res=>res.json())

  }

  signup(formdata){
    return this.http.post('http://localhost:3000/auth/signup',formdata)
    .map(res=>res.json())

  }

  addProduct(product){
    let headers=new Headers();
    headers.append('x-auth',this.token);
    console.log(this.token);
    return this.http.post('http://localhost:3000/products/publish',product,{headers:headers})
    .map(res=>res.json())
  }

  getProduct(){
    let headers=new Headers();
    headers.append('x-auth',this.token);
    console.log(this.token);
    return this.http.get('http://localhost:3000/products',{headers:headers})
    .map(res=>res.json())
  }

  addPost(post){
    let headers=new Headers();
    headers.append('x-auth',this.token);
    console.log(this.token);
    return this.http.post('http://localhost:3000/post',post,{headers:headers})
    .map(res=>res.json())
  }

  getPost(){
    let headers=new Headers();
    headers.append('x-auth',this.token);
    console.log(this.token);
    return this.http.get('http://localhost:3000/post',{headers:headers})
    .map(res=>res.json())
  } 
  deleteProduct(_id){
    return this.http.delete('http://localhost:3000/products/' +_id,)
    .map(res=>res.json())
  }
  updateProduct(product){
    return this.http.put('http://localhost:3000/products/' +product._id,product)
    .map(res=>res.json())
   
  }
}


