import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customerservice } from '../customer.service';
import { INQUIRYLISTINTERFACE } from '../inquirylist/inquirylist.model';
import { Inquirydetailinterface } from './inquirydetail.model';

@Component({
  selector: 'app-inquirydetail',
  templateUrl: './inquirydetail.component.html',
  styleUrls: ['./inquirydetail.component.css']
})
export class InquirydetailComponent implements OnInit {

  id:any
  data : any
  inquirydetailsdata : Inquirydetailinterface  | undefined
  ngOnInit(): void {
  }

  constructor(public cservice:Customerservice,public dialogRef: MatDialogRef<InquirydetailComponent>) {
      // this.id = this.cservice.detailid
      // this.cservice.Oninquirydetail().subscribe(
      //   (data)=>{
      //     console.log(data)
      //   this.data=data
      //   this.inquirydetailsdata=this.data['INQUIRYDETAILS']['item']
      //   console.log(this.inquirydetailsdata)
      //   }
      // )
      const body = {
        id: '',
        bapitocall:"INQUIRYDETAIL",
        password: '',
        salesorg:'',
        docid:this.cservice.detailid
      };
      this.cservice.Oncustomerdata(body).subscribe((data) => {
        console.log(data)
        this.data=data
        this.inquirydetailsdata=this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['INQUIRYDETAILS']['item'];
      });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
