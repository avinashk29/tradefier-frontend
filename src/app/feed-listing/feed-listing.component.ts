import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-feed-listing',
  templateUrl: './feed-listing.component.html',
  styleUrls: ['./feed-listing.component.css']
})
export class FeedListingComponent implements OnInit {
posts;
post;
  constructor(private authService: AuthService, @Inject(LOCAL_STORAGE) private storage: WebStorageService,) { }

  ngOnInit() {
    this.authService.getPost().subscribe(posts=>{
        this.posts=posts; 
        console.log(posts)
    },
   err=>{
      console.log(err);
   
    })
    this.authService.token =  this.storage.get('token');
  }

}
