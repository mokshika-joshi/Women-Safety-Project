import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new Register();
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.register);
  }

}
