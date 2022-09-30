import { Component, OnInit } from '@angular/core';
import { Vendorservice } from '../vendor.service';
import { INVOICELISTMODEL } from './vinvoicelist.model';

@Component({
  selector: 'app-vinvoicelist',
  templateUrl: './vinvoicelist.component.html',
  styleUrls: ['./vinvoicelist.component.css'],
})
export class VinvoicelistComponent implements OnInit {
  detailshow = false
  mydata: any;
  length = 0;
  content = false;
  invoicelistarray: INVOICELISTMODEL[] = [];
  dataSource: INVOICELISTMODEL[] = [];
  constructor(private vservice: Vendorservice) {}

  ngOnInit(): void {
    // this.vservice.Oninvoicelist().subscribe((data) => {
    //   console.log(data);
    //   this.mydata = data;
    //   this.length = this.mydata['INVOICE']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.mydata['INVOICE']['item'][i];
    //     this.invoicelistarray.push(value);
    //   }
    //   console.log(this.invoicelistarray);
    //   this.dataSource = this.invoicelistarray;
    // });
    const body = {
      id : this.vservice.id,
      password : '',
      no : '',
      callbapi : 'INVOICELIST',
      code : ''
    }
    this.vservice.Onvendordatasoap(body).subscribe((data)=>{
      console.log(data)
      this.mydata = data
      this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['INVOICE']['item']['length'];
      for (let i = 0; i < this.length; i++) {
          const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['INVOICE']['item'][i];
          if(value['INV_DOC_NO']._text != undefined){
            this.invoicelistarray.push(value)
          }
        }
        this.dataSource=this.invoicelistarray
      })
}
  displayedColumns: string[] = [
    'INV_DOC_NO',
    'FISC_YEAR',
    'PSTNG_DATE',
    'DOC_DATE',
    'ENTRY_DATE',
    'GROSS_AMNT',
    'ENTRY_TIME',
  ];
  Ondetail(rowdata:any){
    console.log("Details of ID : "+rowdata['INV_DOC_NO']._text)
    this.vservice.detailid = rowdata['INV_DOC_NO']._text
    this.vservice.invoicedetailevent.emit();
    this.detailshow = true
  }
}
