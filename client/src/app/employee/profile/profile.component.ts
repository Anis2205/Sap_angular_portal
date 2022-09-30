import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../employee.service';
import { EPROFILEMODEL } from '../employeeprofile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private eservice: Employeeservice) { }
  data :any
  mydata : EPROFILEMODEL | undefined

  ngOnInit(): void {
    const body = {
      id: this.eservice.id,
      callbapi:"PROFILE",
      seqno:"0001"
    };
    this.eservice.OnEmployeedatasoap(body).subscribe((data) => {
      console.log(data);
      this.data=data
      this.mydata = this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PORTAL_DATA.Response']['PERSONAL_DATA']
    });
  }
}
