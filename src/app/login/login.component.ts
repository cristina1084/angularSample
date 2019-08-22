import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  view:Boolean=false;
  constructor() { }

  ngOnInit() {
  }

  signUp(){
    this.view = !this.view; 
  }
}
