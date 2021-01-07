import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-site',
  templateUrl: './web-site.component.html',
  styleUrls: ['./web-site.component.css']
})
export class WebSiteComponent implements OnInit {
  data: any;
  geted: any;
  err: any
  constructor(public a_vate:  ActivatedRoute, public http: HttpClient) {
 
  }
  getData() {
    setTimeout( () => {
      const url = 'http://52.66.240.78:3000/'
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
      // console.log(this.data)
     })
  }

}
