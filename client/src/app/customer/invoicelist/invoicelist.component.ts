import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customerservice } from '../customer.service';
import { INVOICEINTERFACE } from './invoicelist.model';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css'],
})
export class InvoicelistComponent implements OnInit {
  constructor(private cservice: Customerservice,location: PlatformLocation) {
    location.onPopState(() => {
      this.cservice.parentshow.emit()
  });
  }
  listarray: any;
  length = 0;
  content=false
  invoicelistarray:INVOICEINTERFACE[] = [];
  filterarray:INVOICEINTERFACE[] = [];
  dataSource:INVOICEINTERFACE[] = []
  detailshow = false
  ngOnInit(): void {
    // const body = {
    //   id: this.cservice.id,
    // };
    // this.cservice.Oninvoicelist().subscribe((data) => {
    //   console.log(data)
    //   this.listarray = data;
    //   this.length = this.listarray['INVOICELST']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.listarray['INVOICELST']['item'][i];
    //     this.invoicelistarray.push(value);
    //   }
    //   console.log(this.invoicelistarray);
    //   this.dataSource = this.invoicelistarray
    //   this.content =true
    // });
    const body = {
      id: this.cservice.id,
      bapitocall:"INVOICELIST",
      password: '',
      salesorg:'',
      docid:''
    };
    this.cservice.Oncustomerdata(body).subscribe((data) => {
      console.log(data)
      this.listarray = data;
      this.length = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['INVOICELIST']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['INVOICELIST']['item'][i];
        this.invoicelistarray.push(value);
      }
      console.log(this.invoicelistarray);
      this.dataSource = this.invoicelistarray
      this.content =true
    });
  }

  applyFilter(filterValue: any) {
    this.filterarray.splice(0);
    if (filterValue.value.length != '') {
      for (let i = 0; i < this.invoicelistarray.length; i++) {
        const value = this.invoicelistarray[i];
        if (value.VBELN['_text'] == filterValue.value) {
          this.filterarray.push(value);
        }
      }
      this.dataSource = this.filterarray;
    } else {
      this.dataSource = this.invoicelistarray;
    }
  }

  displayedColumns : string[] = ['VBELN', 'FKART', 'FKTYP', 'VBTYP','VTWEG','WAERK','STWAE'];

  Ondetail(rowdata:any){
    console.log("Details of ID : "+rowdata['VBELN']._text)
    this.cservice.detailid = rowdata['VBELN']._text
    this.cservice.invoicedetailevent.emit();
    this.detailshow = true
  }
}
