import { Component, OnInit } from '@angular/core';
import { Vendorservice } from '../vendor.service';
import { Creditmodel } from './credit.model';
import { Debitmodel } from './debit.model';

@Component({
  selector: 'app-creditmemo',
  templateUrl: './creditmemo.component.html',
  styleUrls: ['./creditmemo.component.css']
})
export class CreditmemoComponent implements OnInit {

  mydata: any;
  length = 0;
  content = false;
  credarray: Creditmodel[] = [];
  dataSource: Creditmodel[] = [];
  debarray: Debitmodel[]=[]
  dataSource1: Debitmodel[]=[]
  credit = true
  debit = false
  constructor(private vservice: Vendorservice) {}

  ngOnInit(): void {
    // this.vservice.Oncreditdetail().subscribe((data) => {
    //   console.log(data);
    //   this.mydata = data;
    //   this.length = this.mydata['CREDDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.mydata['CREDDATA']['item'][i];
    //     if(value['MANDT'] != ''){
    //       this.credarray.push(value);
    //     }
    //   }
    //   this.length = this.mydata['DEBDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.mydata['DEBDATA']['item'][i];
    //     if(value['MANDT'] != ''){
    //       this.debarray.push(value);
    //     }
    //   }
    //   this.dataSource = this.credarray;
    //   this.dataSource1 = this.debarray;
    // });
    const body = {
      id : this.vservice.id,
      password : '',
      no : '',
      callbapi : 'CREDITDEBITMEMO',
      code : ''
    }
    this.vservice.Onvendordatasoap(body).subscribe((data)=>{
      console.log(data)
      this.mydata = data
      this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['CREDDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
          const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['CREDDATA']['item'][i];
          if(value['BELNR']._text != undefined){
            this.credarray.push(value)
          }

        }
        this.dataSource = this.credarray;
        this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['DEBDATA']['item']['length'];
        for (let i = 0; i < this.length; i++) {
          const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['DEBDATA']['item'][i];
          if(value['BELNR']._text != undefined){
            this.debarray.push(value)
          }
        }
        this.dataSource1 = this.debarray;
    })


  }


  displayedColumns: string[] = [
    'MANDT',
    'BUKRS',
    'BELNR',
    'GJAHR',
    'BUZEI',
    'BUZID',
    'BSCHL',
    'KOART',
    'WRBTR',
    'ZUONR',
    'VORGN',
    'HKONT'
  ];
  displayedColumns1: string[] = [
    'MANDT',
    'BUKRS',
    'BELNR',
    'GJAHR',
    'BUZEI',
    'BUZID',
    'BSCHL',
    'WRBTR',
    'PSWBT',
    'PSWSL',
    'HKONT',
    'EBELN',
    'MENGE',
    'WERKS'

  ];

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


