import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customerservice } from '../customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css'],
})
export class CloginComponent {
  constructor(private cservice: Customerservice, private route: Router) {}

  id = '';
  password = '';



  loginform!: FormGroup;

  message = '';
  data :any
  result : any

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
    const body = {
      id: this.id,
      password: this.password,
      salesorg:'',
      bapitocall:"LOGIN",
      docid:''
    };
    this.cservice.id = this.id
    // this.cservice.OnLogin(body).subscribe((data) => {
    //   console.log(data);
    //   this.data=data
    //   if (this.data['RESULT'] == 'TRUE') {
    //     this.cservice.accesstoken = true
    //     this.route.navigate(['customer']);
    //   }
    //   if (this.data['RESULT'] == 'FALSE'){
    //     this.message = "***Invalid User"
    //   }
    //   if(data == null){
    //     this.message = "***Internal server error"
    //   }
    // });

    this.cservice.Oncustomerdata(body).subscribe((data)=>{
      console.log(data)
      this.result = data
      this.data = this.result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['RESULT']['_text']
      if(this.data == null){
        this.message = "***Internal server error"
      }
      if (this.data == 'TRUE') {
        this.cservice.accesstoken = true
        this.route.navigate(['customer']);
      }
      if (this.data == 'FALSE'){
        this.message = "***Invalid User"
      }

    })
    this.loginform.reset();
  }

}
