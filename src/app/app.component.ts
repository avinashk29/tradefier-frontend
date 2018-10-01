import { Component,OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private authService:AuthService) { }
  ngOnInit() {
    this.authService.token =  this.storage.get('token');
  }

}
