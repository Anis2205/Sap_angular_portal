import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendorservice } from '../vendor.service';

@Component({
  selector: 'app-vlogin',
  templateUrl: './vlogin.component.html',
  styleUrls: ['./vlogin.component.css']
})
export class VloginComponent implements OnInit {

  constructor(private vservice: Vendorservice, private route: Router) {}

  id = '';
  password = '';
  mydata:any


  loginform!: FormGroup;

  message = '';
  data :any
  result:any

  ngOnInit(): void {
    this.loginform = new FormGroup({
      id: new FormControl(null, [Validators.required,Validators.minLength(1)]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onsubmit() {
    // const body = {
    //   id: this.id,
    //   password: this.password,
    // };
    // this.vservice.OnLogin(body).subscribe((data) => {
    //   console.log(data);
    //   this.data=data
    //   if(this.data == null){
    //     this.message = "***Internal server error"
    //   }
    //   if (this.data['RESULT'] == 'TRUE') {
    //     this.vservice.accesstoken = true
    //     this.route.navigate(['vendor']);
    //   }
    //   if (this.data['RESULT'] == 'FALSE'){
    //     this.message = "***Invalid User"
    //   }
    // });
    if(this.id == '10')
    {
      this.id = 'MOHANRAJ'
    }
    const body = {
      id : this.id,
      password : this.password,
      no : '',
      callbapi : 'LOGIN',
      code : ''
    }
    this.vservice.id = this.id
    this.vservice.Onvendordatasoap(body).subscribe((data)=>{
      console.log(data)
      this.result = data
      this.data = this.result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['RESULT']['_text']
      if(this.data == null){
        this.message = "***Internal server error"
      }
      if (this.data == 'TRUE') {
        const body1 = {
          id : this.vservice.id,
          password : '',
          no : '',
          callbapi : 'PROFILE',
          code : ''
        }
        this.vservice.Onvendordatasoap(body1).subscribe((data)=>{
          console.log(data)
          this.mydata = data
          this.vservice.profile = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['PROFDATA'];
          this.vservice.bankdata = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['BANKDATA']['item'];
          })
        this.vservice.accesstoken = true
        this.route.navigate(['/vendor']);
      }
      if (this.data == 'FALSE'){
        this.message = "***Invalid User"
      }

    })
    this.loginform.reset();
  }
}

