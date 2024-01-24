import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

import { EdituserComponent } from './edituser/edituser.component';
import { ViewallimagesComponent } from './admin-components/viewallimages/viewallimages.component';
import { WelcomeComponent } from './admin-components/welcome/welcome.component';
import { ViewallusersComponent } from './admin-components/viewallusers/viewallusers.component';
import { AdminedituserComponent } from './admin-components/adminedituser/adminedituser.component';
import { AdmineditimageComponent } from './admin-components/admineditimage/admineditimage.component';
import { MemesofactorsComponent } from './memesofactor/memesofactors/memesofactors.component';




@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    RegisteruserComponent,
    
    EdituserComponent,
         ViewallimagesComponent,
         WelcomeComponent,
         ViewallusersComponent,
         AdminedituserComponent,
         AdmineditimageComponent,
         MemesofactorsComponent,
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
