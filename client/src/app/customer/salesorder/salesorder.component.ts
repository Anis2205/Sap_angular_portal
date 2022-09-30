import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customerservice } from '../customer.service';
import { SALESORDERINTERFACE } from './salesorder.model';

@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.css']
})
export class SalesorderComponent implements OnInit {
  constructor(private cservice: Customerservice,location: PlatformLocation) {
    location.onPopState(() => {
      this.cservice.parentshow.emit();
  });
  }
  listarray: any;
  length = 0;
  salesorderarray: SALESORDERINTERFACE[] = [];
  filterarray:SALESORDERINTERFACE[] = [];
  dataSource: SALESORDERINTERFACE[] = []
  ngOnInit(): void {
    // const body = {
    //   id: this.cservice.id,
    // };
    // this.cservice.Onsalesorder().subscribe((data) => {
    //   this.listarray = data;
    //   console.log(data)
    //   this.length = this.listarray['SORDERDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.listarray['SORDERDATA']['item'][i];
    //     this.salesorderarray.push(value);
    //   }
    //   console.log(this.salesorderarray);
    //   this.dataSource = this.salesorderarray

    // });

    const body = {
      id: this.cservice.id,
      bapitocall:"SALESORDER",
      password: '',
      salesorg:'0001',
      docid:''
    };
    this.cservice.Oncustomerdata(body).subscribe((data) => {
      console.log(data)
      this.listarray = data;
      this.length = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['SORDERDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['SORDERDATA']['item'][i];
        if(value.SD_DOC._text != undefined ){
          this.salesorderarray.push(value);
        }

      }
      console.log(this.salesorderarray);
      this.dataSource = this.salesorderarray
    });

  }


  applyFilter(filterValue: any) {
    this.filterarray.splice(0);
    if (filterValue.value.length != '') {
      for (let i = 0; i < this.salesorderarray.length; i++) {
        const value = this.salesorderarray[i];
        if (value.SD_DOC['_text'] == filterValue.value) {
          this.filterarray.push(value);
        }
      }
      this.dataSource = this.filterarray;
    } else {
      this.dataSource = this.salesorderarray;
    }
  }

  displayedColumns : string[] = ['SD_DOC', 'ITM_NUMBER', 'MATERIAL', 'DOC_TYPE','DOC_DATE','REQ_QTY','REQ_DATE','PURCH_NO','VALID_FROM','SOLD_TO'];

}
