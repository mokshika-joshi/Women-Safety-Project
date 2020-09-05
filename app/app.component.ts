import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { consoleTestResultHandler } from 'tslint/lib/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'newApp';
  public list: any=[];

constructor(private http: HttpClient) {}

public ngOnInit() {
  console.log('ON.INIT.');
  this.makeAjaxCall();
}

async makeAjaxCall() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const results = await this.http.get(url).toPromise();
  this.list = results;
}

async makePostApiCall() {
  const userJson = {
    username: '',
    email: '',
    password: ''
  };

  const url = 'http://localhost:3000/adduser';
  const output = await this.http.post(url, userJson).toPromise();
  console.log(output);
  }
}