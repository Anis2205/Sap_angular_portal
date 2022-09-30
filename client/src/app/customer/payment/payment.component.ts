import { PlatformLocation } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Customerservice } from '../customer.service';
import { PaymentInterface } from './payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private cservice: Customerservice,location: PlatformLocation) {
    location.onPopState(() => {
      this.cservice.parentshow.emit()
  });
  }
  listarray: any;
  length = 0;
  content=false
  paymentlistarray: PaymentInterface[] = [];
  dataSource:PaymentInterface[] = []
  detailshow = false
  filterarray: PaymentInterface[] = [];

  ngOnInit(): void {
    // const body = {
    //   id: this.cservice.id,
    // };
    // this.cservice.Onpaymentlist().subscribe((data) => {
    //   console.log(data)
    //   this.listarray = data;
    //   this.length = this.listarray['OPDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.listarray['OPDATA']['item'][i];
    //     this.paymentlistarray.push(value);
    //     const billingdate = this.paymentlistarray[i]['BLINE_DATE']
    //     const now = new Date();
    //     const billingdate1 = new Date(billingdate);
    //     var total_seconds = Math.abs(now.valueOf() - billingdate1.valueOf() ) / 1000;
    //     var days_difference = Math.floor (total_seconds / (60 * 60 * 24));
    //     this.paymentlistarray[i]['Aging'] = days_difference + " days"
    //   }
    //   console.log(this.paymentlistarray);
    //   this.dataSource = this.paymentlistarray
    //   this.content =true
    // });

    const body = {
      id: this.cservice.id,
      bapitocall:"PAYMENT",
      password: '',
      salesorg:'',
      docid:''
    };
    this.cservice.Oncustomerdata(body).subscribe((data) => {
      console.log(data)
      this.listarray = data;
      this.length = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['OPDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['OPDATA']['item'][i];
        this.paymentlistarray.push(value);
        const billingdate = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['OPDATA']['item'][i]['BLINE_DATE']['_text']
            const now = new Date();
            const billingdate1 = new Date(billingdate);
            var total_seconds = Math.abs(now.valueOf() - billingdate1.valueOf() ) / 1000;
            var days_difference = Math.floor (total_seconds / (60 * 60 * 24));
            this.paymentlistarray[i]['Aging'] = days_difference + " days"

      }
      console.log(this.paymentlistarray);
      this.dataSource = this.paymentlistarray
      this.content =true
    });
  }


  applyFilter(filterValue: any) {
    this.filterarray.splice(0);
    if (filterValue.value.length != '') {
      for (let i = 0; i < this.paymentlistarray.length; i++) {
        const value = this.paymentlistarray[i];
        if (value.DOC_NO['_text'] == filterValue.value) {
          this.filterarray.push(value);
        }
      }
      this.dataSource = this.filterarray;
    } else {
      this.dataSource = this.paymentlistarray;
    }
  }

  displayedColumns : string[] = ['DOC_NO', 'CLEAR_DATE', 'ALLOC_NMBR', 'FISC_YEAR','CUSTOMER','ITEM_NUM','PSTNG_DATE','DOC_DATE','LC_AMOUNT','Aging'];

}


