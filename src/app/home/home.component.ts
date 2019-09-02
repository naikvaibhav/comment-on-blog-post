import { Component, OnInit } from '@angular/core';

import { BlogserviceService } from '../blogservice.service'

//importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { isArray } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public blogTitle:any;
  public blogDescription;
  public blogBodyHtml;
  public blogCategory;
  public formArray = [] 
  


  constructor() { 
    console.log('Home component constructor called');
  }

  ngOnInit() {
    console.log('Home component oninit called');
  }


 public createBlog(){
  console.log('component blog title is:', this.blogTitle)
  console.log('component blog description is', this.blogDescription)
  console.log('component blog body is',this.blogBodyHtml)
  let blog ={
    'title' : this.blogTitle,
    'description': this.blogDescription,
    'body': this.blogBodyHtml
  }
  this.formArray.push(blog)
 
  localStorage.setItem('blogPost',JSON.stringify(this.formArray))

  console.log(localStorage.getItem('blogPost'))
  //console.log(this.formArray)
 }

 public new(){
  return console.log('hello')
 }
}

