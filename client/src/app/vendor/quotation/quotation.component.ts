import { Component, OnInit } from '@angular/core';
import { Vendorservice } from '../vendor.service';
import { QUOTATIONMODEL } from './quotation.model';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  mydata: any;
  length = 0;
  content = false;
  quotationlistarray: QUOTATIONMODEL[] = [];
  dataSource: QUOTATIONMODEL[] = [];
  constructor(private vservice: Vendorservice) {}

  ngOnInit(): void {
    // this.vservice.Onquotation().subscribe((data) => {
    //   console.log(data);
    //   this.mydata = data;
    //   this.length = this.mydata['EKPODATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.mydata['EKPODATA']['item'][i];
    //     if(value['EBELN'] == ''){
    //       value['EBELN'] = "Not Known"
    //     }
    //     if(value['MATNR'] == ''){
    //       value['MATNR'] = "Not Known"
    //     }
    //     if(value['BUKRS'] == ''){
    //       value['BUKRS'] = "Not Known"
    //     }
    //     if(value['INFNR'] == ''){
    //       value['INFNR'] = "Not Known"
    //     }
    //     if(value['WERKS'] == ''){
    //       value['WERKS'] = "Not Known"
    //     }
    //     this.quotationlistarray.push(value);
    //   }
    //   console.log(this.quotationlistarray);
    //   this.dataSource = this.quotationlistarray;
    // });

    const body = {
      id : this.vservice.id,
      password : '',
      no : '',
      callbapi : 'QUOTATION',
      code : ''
    }
    this.vservice.Onvendordatasoap(body).subscribe((data)=>{
      console.log(data)
      this.mydata = data
      this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['EKPODATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
          const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['EKPODATA']['item'][i];
          if(value['EBELN']._text != undefined){
            this.quotationlistarray.push(value)
          }
        }
        this.dataSource = this.quotationlistarray;
    })

  }
  displayedColumns: string[] = [
    'EBELN',
    'EBELP',
    'MATNR',
    'BUKRS',
    'WERKS',
    'INFNR',
    'NETPR',
  ];
}

