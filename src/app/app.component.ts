import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sdkClient';
  constructor(public localtion: Location) {

  }
  back() {
    this.localtion.back();
  }
 
}


