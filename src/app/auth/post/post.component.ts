import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  constructor(private authService:AuthService) { }
 image_link;
description;


  ngOnInit() {
  }

  onSubmit(){
    let post ={
      image:this.image_link,
      description:this.description
    }
 
  this.authService.addPost(post).subscribe(post=>{
    console.log(post);
    this.authService.post = post;
  },
  err=>{
    console.log(err)
  })
  }
 }
