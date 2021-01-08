import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-web-site',
  templateUrl: './web-site.component.html',
  styleUrls: ['./web-site.component.css']
})
export class WebSiteComponent implements OnInit {
  data: any;
  geted: any;
  err: any
  href: any;
  constructor(public a_vate:  ActivatedRoute, public http: HttpClient,private router: Router) {
 
  }
  getData() {
    setTimeout( () => {
      const url = 'https://d43a5ba43d01.ngrok.io/'
      // const url = 'http://localhost:3000/'
      this.http.get( url + 'sita?token=' + this.data ).subscribe( (res: any): void => {
       this.geted =res;
      }, error => {
        this.err = error.error.message;
      });
    },0)
  }

  ngOnInit(): void {
    this.getData()
    this.a_vate.queryParams.subscribe(param => {

      this.data = param["token"]
     })
     this.href = window.location.href
  }

}
