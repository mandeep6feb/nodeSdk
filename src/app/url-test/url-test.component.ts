import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
export class DataD {
  email: any;
  password: any;
}
@Component({
  selector: 'app-url-test',
  templateUrl: './url-test.component.html',
  styleUrls: ['./url-test.component.css']
})
export class UrlTestComponent implements OnInit {
  url: any;
  errorMessage: any;
  dataD: any;
  corsHeaders: any;
  constructor(public http: HttpClient, public route: Router, public toast: ToastrService) { 
    this.dataD = new DataD();
  }

  signIn() {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'https://52.66.240.78:3000/'
    });
    this.http.post(this.url + 'login', this.dataD).subscribe( (res: any ) => {
        // window.open("https://www.google.com", "_blank");
        // console.log(res);
        this.toast.success('User Authenticate!' ,  'Success' , 
        {
          disableTimeOut: false,
          timeOut: 1000,
          progressBar: true, 
          positionClass: 'toast-top-right',
          tapToDismiss: false,
          onActivateTick: true, 
          // messageClass: 'toast-message',
          closeButton: true,
          // extendedTimeOut: 3500,
          easing: 'ease-in',
          enableHtml: true,
        })
        setTimeout( () => {
          this.route.navigateByUrl('sita?token=' +  res.token)
          // window.open('http://localhost:4200/sita?token=' + res.token ,"_blank")
        }, 2000)
          // 
        // this.route.navigateByUrl('https://www.soolegan.com/sita=' + res.token);
    }, err => {
      this.errorMessage = err.error.message;

      this.toast.error(this.errorMessage ,  'Error' , 
      {
        timeOut: 2000,
        progressBar: true, 
        positionClass: 'toast-top-right',
        tapToDismiss: false,
        onActivateTick: true, 
        messageClass: 'toast-message',
        closeButton: true,
        // extendedTimeOut: 3500,
        easing: 'ease-in',
        enableHtml: true,
        
      })
      
      // console.log(this.errorMessage);
    })
  }
 
  //https://www.soolegal.com/vendor/sita=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlbW8uY29tIiwiaWF0IjoxNjA5MzI2NjU4LCJleHAiOjE2MDk0MTMwNTh9.7cONT-DVyA7zhEKmd_cKymTXkKrFpgpECUHJihdakyc
  ngOnInit(): void {
    this.url = 'http://52.66.240.78:3000/';
  }

}
