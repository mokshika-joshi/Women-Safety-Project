import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
    private http: HttpClient
    ) { 

  }

  ngOnInit(): void {

  }

  public loginformgroup= new FormGroup({'email': new FormControl(""),
  'password': new FormControl(""),
})

  async OnClick(){
    const url = 'http://localhost:5000/AddUser';
    let data = this.loginformgroup.value
    const results = await this.http.post(url,data).toPromise();


    this.router.navigate(["home"]);
  }
}
