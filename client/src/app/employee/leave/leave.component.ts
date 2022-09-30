import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../employee.service';
import { LEAVEMODEL } from '../employeeleave.model';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor(private eservice: Employeeservice) { }
  data :any
  mydata : LEAVEMODEL[]=[]
  dataSource : LEAVEMODEL[]=[]

  ngOnInit(): void {
    // const body = {
    //   id: this.eservice.id,
    //   callbapi:"LEAVEDATA",

    // };
    // this.eservice.OnEmployeedata(body).subscribe((data) => {
    //   console.log(data);
    //   this.data=data
    //   this.mydata = this.data['LEAVEDATA']['item']
    //   this.dataSource = this.mydata
    // });
    const body = {
      id: this.eservice.id,
      password: '',
      callbapi:"LEAVEDATA",
      seqno : '0001'
    }
    this.eservice.OnEmployeedatasoap(body).subscribe((data)=>{
       console.log(data) 
      this.data=data
      this.mydata = this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PORTAL_DATA.Response']['LEAVEDATA']['item']
      this.dataSource = this.mydata
    })
  }

  displayedColumns : string[] = ['EMPLOYEENO', 'SUBTYPE', 'VALIDEND', 'VALIDBEGIN','ABSENCETYPE','RECORDNR','ABSENCEDAYS','ABSENCEHOURS'];

  Ondetail(row:any){

  }
}
