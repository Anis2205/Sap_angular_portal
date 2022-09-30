import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../employee.service';
import { PAYSLIPMODEL } from '../employeepayslip.model';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  constructor(private eservice: Employeeservice) { }
  data :any
  mydata : PAYSLIPMODEL[]=[]
  dataSource : PAYSLIPMODEL[]=[]
  ngOnInit(): void {
    // const body = {
    //   id: this.eservice.id,
    //   callbapi:"PAYSLIP",
    //   seqno:"0001"
    // };
    // this.eservice.OnEmployeedata(body).subscribe((data) => {
    //   console.log(data);
    //   this.data=data
    //   this.mydata = this.data['IT_PAYSLIP']['item']
    //   this.dataSource = this.mydata
    // });
    const body = {
      id: this.eservice.id,
      password: '',
      callbapi:'PAYSLIP',
      seqno : '0001'
    }
    this.eservice.OnEmployeedatasoap(body).subscribe((data)=>{
      console.log(data)
      this.data=data
      this.mydata =  this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PORTAL_DATA.Response']['IT_PAYSLIP']['item']
      this.dataSource = this.mydata
    })
  }

  displayedColumns : string[] = ['SEQUENCENUMBER', 'FPPERIOD', 'FPBEGIN', 'FPEND','BONUSDATE','PAYTYPE_TEXT','PAYDATE'];

  Ondetail(row:any){

  }
}
