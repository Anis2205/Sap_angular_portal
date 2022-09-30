import { Component, OnInit } from '@angular/core';
import { Vendorservice } from '../vendor.service';
import { Paymentmodel } from './vpayment.model';

@Component({
  selector: 'app-vpayment',
  templateUrl: './vpayment.component.html',
  styleUrls: ['./vpayment.component.css'],
})
export class VpaymentComponent implements OnInit {
  mydata: any;
  length = 0;
  length1 = 0;
  content = false;
  listarray: Paymentmodel[] = [];
  dataSource: Paymentmodel[] = [];
  constructor(private vservice: Vendorservice) {}

  ngOnInit(): void {
    // this.vservice.Onpayment().subscribe((data) => {
    //   console.log(data);
    //   this.mydata = data;
    //   this.length = this.mydata['DATACLOSE']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.mydata['DATACLOSE']['item'][i];
    //     this.listarray.push(value);
    //     const billingdate = this.listarray[i]['BLINE_DATE']
    //     const now = new Date();
    //     const billingdate1 = new Date(billingdate);
    //     var total_seconds = Math.abs(now.valueOf() - billingdate1.valueOf() ) / 1000;
    //     var days_difference = Math.floor (total_seconds / (60 * 60 * 24));
    //     this.listarray[i]['AGING'] = days_difference + " days"
    //     this.listarray[i]['STATUS'] = "CLOSED"
    //   }
    //   console.log(this.length)
    //   let count  = this.length
    //   this.length1 = this.mydata['DATAOPEN']['item']['length'];
    //   for (let i = 0; i < this.length1; i++) {
    //     const value = this.mydata['DATAOPEN']['item'][i];
    //     this.listarray.push(value);
    //     const billingdate = this.listarray[i]['BLINE_DATE']
    //     const now = new Date();
    //     const billingdate1 = new Date(billingdate);
    //     var total_seconds = Math.abs(now.valueOf() - billingdate1.valueOf() ) / 1000;
    //     var days_difference = Math.floor (total_seconds / (60 * 60 * 24));
    //     this.listarray[count]['AGING'] = days_difference + " days"
    //     this.listarray[count]['STATUS'] = "OPEN"
    //     count++
    //   }
    //   console.log(this.listarray);
    //   this.dataSource = this.listarray;
    // });
    const body = {
      id: this.vservice.id,
      password: '',
      no: '',
      callbapi: 'PAYMENT',
      code: '0001',
    };
    this.vservice.Onvendordatasoap(body).subscribe((data) => {
      console.log(data);
      this.mydata = data;
      this.length =
        this.mydata['SOAP:Envelope']['SOAP:Body'][
          'ns0:ZFM_VEN_PORTAL_DATA.Response'
        ]['DATAOPEN']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value =
          this.mydata['SOAP:Envelope']['SOAP:Body'][
            'ns0:ZFM_VEN_PORTAL_DATA.Response'
          ]['DATAOPEN']['item'][i];
        this.listarray.push(value);
        const billingdate =
          this.mydata['SOAP:Envelope']['SOAP:Body'][
            'ns0:ZFM_VEN_PORTAL_DATA.Response'
          ]['DATAOPEN']['item'][i]['BLINE_DATE']['_text'];
        const now = new Date();
        const billingdate1 = new Date(billingdate);
        var total_seconds =
          Math.abs(now.valueOf() - billingdate1.valueOf()) / 1000;
        var days_difference = Math.floor(total_seconds / (60 * 60 * 24));
        this.listarray[i]['AGING'] = days_difference + ' days';
        this.listarray[i]['STATUS'] = 'OPEN';
      }
      let count = this.length;
      this.length1 = this.mydata['SOAP:Envelope']['SOAP:Body'][
        'ns0:ZFM_VEN_PORTAL_DATA.Response'
      ]['DATACLOSE']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value =
          this.mydata['SOAP:Envelope']['SOAP:Body'][
            'ns0:ZFM_VEN_PORTAL_DATA.Response'
          ]['DATACLOSE']['item'][i];
        this.listarray.push(value);
        const billingdate =
          this.mydata['SOAP:Envelope']['SOAP:Body'][
            'ns0:ZFM_VEN_PORTAL_DATA.Response'
          ]['DATACLOSE']['item'][i]['BLINE_DATE']['_text'];
        const now = new Date();
        const billingdate1 = new Date(billingdate);
        var total_seconds =
          Math.abs(now.valueOf() - billingdate1.valueOf()) / 1000;
        var days_difference = Math.floor(total_seconds / (60 * 60 * 24));
        this.listarray[count]['AGING'] = days_difference + ' days';
        this.listarray[count]['STATUS'] = 'CLOSED';
        count++
      }
      console.log(this.listarray);
      this.dataSource = this.listarray;
    });
  }
  displayedColumns: string[] = [
    'COMP_CODE',
    'VENDOR',
    'FISC_YEAR',
    'DOC_NO',
    'ITEM_NUM',
    'ENTRY_DATE',
    'CURRENCY',
    'POST_KEY',
    'LC_AMOUNT',
    'AMT_DOCCUR',
    'BLINE_DATE',
    'AGING',
    'STATUS',
  ];
}
