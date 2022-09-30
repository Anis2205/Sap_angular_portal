import { Component, OnInit } from '@angular/core';
import { Vendorservice } from '../vendor.service';
import { Purchasemodel } from './vpurchase.model';
import { Purchaseitemmodel} from './vpurchaseitem.model';

@Component({
  selector: 'app-vpurchase',
  templateUrl: './vpurchase.component.html',
  styleUrls: ['./vpurchase.component.css']
})
export class VpurchaseComponent implements OnInit {

  detailshow = false
  mydata: any;
  length = 0;
  content = false;
  listarray: Purchaseitemmodel[] = [];
  dataSource: Purchaseitemmodel[] = [];
  detailarray: Purchasemodel[]=[]
  dataSource1: Purchasemodel[]=[]
  constructor(private vservice: Vendorservice) {}

  ngOnInit(): void {
    // this.vservice.Onpurchase().subscribe((data) => {
    //   console.log(data);
    //   this.mydata = data;
    //   this.length = this.mydata['HEADERDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.mydata['HEADERDATA']['item'][i];
    //     if(value['PO_NUMBER'] != ""){
    //       this.listarray.push(value);
    //     }
    //   }
    //   this.dataSource = this.listarray;
    // });

    const body = {
      id : this.vservice.id,
      password : '',
      no : '',
      callbapi : 'PURCHASE',
      code : ''
    }
    this.vservice.Onvendordatasoap(body).subscribe((data)=>{
      console.log(data)
      this.mydata = data
      this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['HEADERDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
          const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['HEADERDATA']['item'][i];
          if(value['PO_NUMBER']._text != undefined){
            this.listarray.push(value)
          }
        }
        this.dataSource = this.listarray;
    })

  }
  displayedColumns: string[] = [
    'PO_NUMBER',
    'DOC_CAT',
    'DOC_TYPE',
    'CREATED_ON',
    'CREATED_BY',
    'ITEM_INTVL',
    'LAST_ITEM',
    'VENDOR',
    'PMNTTRMS',
    'PURCH_ORG',
    'EXCH_RATE_CM'
  ];
  displayedColumns1: string[] = [
    'PO_NUMBER',
    'PO_ITEM',
    'CHANGED_ON',
    'SHORT_TEXT',
    'PUR_MAT',
    'QUANTITY',
    'NET_PRICE',
    'NET_VALUE',
    'PRICE_DATE',
    'EFF_VALUE',
    'WEIGHTUNIT'
  ];


  ondetail(row:any){
    console.log(row['PO_NUMBER']._text)
    const matdoc = row['PO_NUMBER']._text
    this.detailshow = true
    this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['ITEMDATA']['item']['length']
    for (let i = 0; i < this.length; i++) {
      const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['ITEMDATA']['item'][i];
      if(value['PO_NUMBER']._text == matdoc){
        this.detailarray.push(value)
      }
    }
    this.dataSource1 = this.detailarray
    console.log(this.detailarray)
  }

  onBack(){
    this.detailshow = !this.detailshow
    this.detailarray.splice(0)
  }
}
