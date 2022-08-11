import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  loginVisible: boolean;
  logoutVisible:boolean;
  registerVisible:boolean;
  profileVisible:boolean;
  constructor() { this.loginVisible = false,
  this.logoutVisible = false,
  this.registerVisible = false,
  this.profileVisible = false }
 
  hideLogin(){this.loginVisible =false}
  showLogin(){this.loginVisible = true}
  toggleLogin(){this.loginVisible = !this.loginVisible}

  hideLogout(){this.logoutVisible =false}
  showLogout(){this.logoutVisible = true}
  toggleLogout(){this.logoutVisible = !this.logoutVisible}

  hideRegister(){this.registerVisible =false}
  showRegister(){this.registerVisible = true}
  toggleRegister(){this.registerVisible = !this.registerVisible}

  hideProfile(){this.profileVisible =false}
  showProfile(){this.profileVisible = true}
  toggleProfile(){this.profileVisible = !this.profileVisible}
}
