import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//router module used for setting up the application level logic
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule,MatSelectModule,MatInputModule,MatButton} from '@angular/material'
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

//importing FormsModule package
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    //routerModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      { path:'home', component:HomeComponent},
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'blog', component:BlogComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
