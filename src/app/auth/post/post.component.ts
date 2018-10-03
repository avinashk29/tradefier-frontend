import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
constructor(private authService:AuthService,public router:Router) { }
 image;
 content;


  ngOnInit() {
  }

  onSubmit(){
    let post ={
      Image:this.image,
      Content:this.content
    }
    
    this.authService.addPost(post).subscribe((post)=>{
      console.log(post);
      this.authService.post = post;
    
  },
  (err)=>{
    console.log(err)
  })
 this.router.navigate(['/feed_listing']);
  } 
}

