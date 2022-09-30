import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customerservice } from '../customer.service';
import { CREDITDEBITINTERFACE} from './creditdebitmemo.model';

@Component({
  selector: 'app-creditdebitmemo',
  templateUrl: './creditdebitmemo.component.html',
  styleUrls: ['./creditdebitmemo.component.css']
})
export class CreditdebitmemoComponent implements OnInit {

  constructor(private cservice: Customerservice,location: PlatformLocation) {
    location.onPopState(() => {
      this.cservice.parentshow.emit()
  });
  }

  listarray: any;
  content =false
  length = 0;
  creditlistarray: CREDITDEBITINTERFACE[] = [];
  debitlistarray: CREDITDEBITINTERFACE[] = [];
  dataSource: CREDITDEBITINTERFACE[] = []
  dataSource1 : CREDITDEBITINTERFACE[] = []
  credit = true
  debit = false

  ngOnInit(): void {
    // const body = {
    //   id: this.cservice.id,
    // };
    // this.cservice.Oncreditdetail().subscribe((data) => {
    //   console.log(data)
    //   this.listarray = data;
    //   this.length = this.listarray['CREDITDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     let value = this.listarray['CREDITDATA']['item'][i];
    //     this.creditlistarray.push(value);
    //     value = this.listarray['DEBITDATA']['item'][i];
    //     this.debitlistarray.push(value);
    //   }
    //   console.log(this.creditlistarray);
    //   this.dataSource = this.creditlistarray
    //   this.dataSource1 =this.debitlistarray
    //   this.content =true
    // });
  const body = {
      id: this.cservice.id,
      bapitocall:"CREDITDEBITMEMO",
      password: '',
      salesorg:'',
      docid:''
    };
    this.cservice.Oncustomerdata(body).subscribe((data) => {
      console.log(data)
      this.listarray = data;
      this.length = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['CREDITDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['CREDITDATA']['item'][i];
        if(value.KUNNR._text != undefined ){
          this.creditlistarray.push(value);
        }

      }
      this.length = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['DEBITDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['DEBITDATA']['item'][i];
        if(value.KUNNR._text != undefined ){
          this.debitlistarray.push(value);
        }
      }
       this.dataSource = this.creditlistarray
      this.dataSource1 =this.debitlistarray
      this.content =true
    });

  }

  displayedColumns : string[] = ['KUNNR', 'WERKS', 'MENGE', 'MEINS','BELNR','GJAHR','BUZEI','KOART'];

  Oncredit()
  {
    this.credit = !this.credit
    this.debit = !this.debit
  }
  Ondebit()
  {
    this.credit = !this.credit
    this.debit = !this.debit
  }

}
