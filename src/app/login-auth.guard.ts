import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import {Router} from '@angular/router';
@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(public router:Router, private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.token){
        
        return true;
      }else{
        this.router.navigate(['']);
        return false;
      }
   
  }
}
