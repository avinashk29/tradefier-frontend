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

  onFileSelected(event){
    this.image= <File>event.target.files[0];
     }
  onSubmit(){
    const formData: FormData = new FormData();
    console.log(this.image);
    formData.append("Image",this.image);
    formData.append("Content",this.content)
    
    this.authService.addPost(formData).subscribe((post)=>{
      console.log(post);
      this.authService.post = post;
    
  },
  (err)=>{
    console.log(err)
  })
 this.router.navigate(['/feed_listing']);
  } 
}

