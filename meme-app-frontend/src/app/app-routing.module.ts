import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmineditimageComponent } from './admin-components/admineditimage/admineditimage.component';
import { AdminedituserComponent } from './admin-components/adminedituser/adminedituser.component';
import { ViewallimagesComponent } from './admin-components/viewallimages/viewallimages.component';
import { ViewallusersComponent } from './admin-components/viewallusers/viewallusers.component';
import { WelcomeComponent } from './admin-components/welcome/welcome.component';
import { AppComponent } from './app.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [{
  path:'navbar',
  component:NavbarComponent
},
  {
  path:"imageUpload",
  component:ImageUploadComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisteruserComponent
},
{
  path:'profile',
  component:UserprofileComponent
},
{
  path:'edit',
  component:EdituserComponent
},
{
  path:'viewImageAdmin',
  component:ViewallimagesComponent
},
{
  path:'adminWelcome',
  component:WelcomeComponent
},
{
  path:'viewAllUsers',
  component:ViewallusersComponent
},
{
  path:'adminEditUser',
  component:AdminedituserComponent
},
{
  path:'adminViewAllImages',
  component:ViewallimagesComponent
},
{
  path:'adminEditImage',
  component:AdmineditimageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
