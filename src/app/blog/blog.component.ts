import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog;
  public mainComment
  public subComment
  public show_dialog = false;
  public show_dialog1 = false;
  
  public commentArray = [];

  constructor() {
    console.log('Blog component constructor is called');
   }

  ngOnInit() {
    console.log('Blog component Oninit called');
    console.log(localStorage.getItem('blogPost'))
    this.blog = localStorage.getItem('blogPost')
    this.blog = JSON.parse(this.blog)
    return this.blog
  }

  public showCommentBox(){
    this.show_dialog = true;
    
  }
  public comment1(){
    this.show_dialog1 = true;
    this.commentArray.push(this.mainComment)
    this.show_dialog = false
    this.mainComment = " "
    console.log(this.commentArray)
  }

}
