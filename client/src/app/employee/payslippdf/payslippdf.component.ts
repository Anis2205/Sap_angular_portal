import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../employee.service';

@Component({
  selector: 'app-payslippdf',
  templateUrl: './payslippdf.component.html',
  styleUrls: ['./payslippdf.component.css']
})
export class PayslippdfComponent implements OnInit {


  constructor(private eservice: Employeeservice) { }
  data :any
  seqno : any
  result :any
  ngOnInit(): void {
  }
  onSubmit(){
    // console.log(this.seqno)
    // const body = {
    //   id: this.eservice.id,
    //   callbapi:"PAYSLIPPDF",
    //   seqno: this.seqno
    // };
    // this.eservice.OnEmployeedata(body).subscribe((data) => {
    //   console.log(data);
    //   this.data= JSON.parse(JSON.stringify(data))
    // });
    const body = {
      id: this.eservice.id,
      password: '',
      callbapi:"PAYSLIPPDF",
      seqno : this.seqno
    }
    this.eservice.OnEmployeedatasoap(body).subscribe((data)=>{
      console.log(data)
      this.result = data
      this.data = this.result['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EMP_PORTAL_DATA.Response']
    })
  }

  onDownloadpdf(){
     let base64 = this.data.BASE64._text
     this.downloadpdf(base64,"Payslip")
  }
  downloadpdf(base64: any, filename: string) {
    const source = `data:application/pdf;base64,${base64}`;
    const link = document.createElement("a")
    link.href = source
    link.download = `${filename}.pdf`
    link.click()
  }

}
