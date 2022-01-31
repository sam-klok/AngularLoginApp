import { Component, OnInit } from '@angular/core';
import { AppUser } from '../shared/app-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appUser: AppUser = new AppUser();
  //userName: string = "";
  //password: string = "";

  login(): void{
    console.log(this.appUser.userName + ' ' + this.appUser.password);
  }

}
