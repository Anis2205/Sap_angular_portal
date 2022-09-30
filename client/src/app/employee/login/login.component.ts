import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employeeservice } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private eservice: Employeeservice, private route: Router) {}

  id = '';
  password = '';



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
    //   callbapi:"LOGIN"
    // };
    // this.eservice.id = this.id
    // this.eservice.OnEmployeedata(body).subscribe((data) => {
    //   console.log(data);
    //   this.data=data
    //   if(data == null){
    //     this.message = "***Internal server error"
    //   }
    //   if (this.data['STATUS'] == 'TRUE') {
    //     this.eservice.accesstoken = true
    //     this.route.navigate(['employeedashboard']);
    //   }
    //   if (this.data['STATUS'] == 'FALSE'){
    //     this.message = "***Invalid User"
    //   }
    // });

    this.eservice.id = this.id
    const body = {
      id: this.id,
      password: this.password,
      callbapi:"LOGIN",
      seqno : '0001'
    }
    this.eservice.OnEmployeedatasoap(body).subscribe((data)=>{
       console.log(data)
       this.result  = data
       this.data = this.result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PORTAL_DATA.Response']['STATUS']['_text']
       if(this.data == null){
        this.message = "***Internal server error"
      }
      if (this.data == 'TRUE') {
        this.eservice.accesstoken = true
        this.route.navigate(['employeedashboard']);
      }
      if (this.data == 'FALSE'){
        this.message = "***Invalid User"
      }
    })


    this.loginform.reset();
  }
}
