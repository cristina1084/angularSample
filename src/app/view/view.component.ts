import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  name: String;
  age: Number;
  email: String;
  address;
  hobbies : String[]
  constructor() { 
    this.name ="Cristina";
    this.age = 22;
    this.email = "cris@gmail.com";
    this.address = {
      houseNo : "ABC",
      street : "abc",
      dist : "ekm"
    };
    this.hobbies = ["reading", "listening to music"];
  }

  ngOnInit() {
  }

}
