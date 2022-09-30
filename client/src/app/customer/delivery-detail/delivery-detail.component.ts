import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customerservice } from '../customer.service';
import { INQUIRYLISTINTERFACE } from '../inquirylist/inquirylist.model';
import { DELIVERYDETAILINTERFACE } from './deliverydetail.model';


@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.css']
})
export class DeliveryDetailComponent implements OnInit {
  ngOnInit(): void {

  }
  id:any
  data : any
  deliverydetailsdata : DELIVERYDETAILINTERFACE | undefined

  constructor(public cservice:Customerservice,public dialogRef: MatDialogRef<DeliveryDetailComponent>) {
      // this.id = this.cservice.detailid
      // this.cservice.Oninquirydetail().subscribe(
      //   (data)=>{
      //   this.data=data
      //   this.inquirydetailsdata=this.data['INQUIRYDETAILS']['item']
      //   console.log(typeof(this.inquirydetailsdata))
      //   }
      // )
      const body = {
        id: '',
        bapitocall:"DELIVERYDETAIL",
        password: '',
        salesorg:'',
        docid:this.cservice.detailid
      };
      this.cservice.Oncustomerdata(body).subscribe((data) => {
        console.log(data)
        this.data=data
        this.deliverydetailsdata=this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['DELIVERYDETAIL']['item'][1];
      });


  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
