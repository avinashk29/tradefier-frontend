import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  constructor(private http:Http) { }

  login(formdata){
    
    return this.http.get('http://localhost:3000/auth/login',formdata)
           .map(res=>res.json())

  }
}
