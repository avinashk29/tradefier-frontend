import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
token;
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
}
