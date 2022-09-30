import { Component, OnInit } from '@angular/core';
import { Vendorservice } from '../vendor.service';
import { Goodsmodel } from './vgoods.model';
import { Goodsdetailmodel } from './vgoodsdetail.model';

@Component({
  selector: 'app-vgoods',
  templateUrl: './vgoods.component.html',
  styleUrls: ['./vgoods.component.css']
})
export class VgoodsComponent implements OnInit {
  detailshow = false
  mydata: any;
  length = 0;
  content = false;
  listarray: Goodsmodel[] = [];
  dataSource: Goodsmodel[] = [];
  detailarray: Goodsdetailmodel[]=[]
  dataSource1: Goodsdetailmodel[]=[]
  data:any
  constructor(private vservice: Vendorservice) {}

  ngOnInit(): void {
    // this.vservice.Ongoods().subscribe((data) => {
      // console.log(data);
      // this.mydata = data;
      // this.length = this.mydata['GOODSHEAD']['item']['length'];
      // for (let i = 0; i < this.length; i++) {
      //   const value = this.mydata['GOODSHEAD']['item'][i];
      //   if(value['MAT_DOC'] == ''){
      //     value['MAT_DOC'] = "Not Known"
      //   }
      //   if(value['DOC_YEAR'] == ''){
      //     value['DOC_YEAR'] = "Not Known"
      //   }
      //   if(value['TR_EV_TYPE'] == ''){
      //     value['TR_EV_TYPE'] = "Not Known"
      //   }
      //   if(value['DOC_DATE'] == ''){
      //     value['DOC_DATE'] = "Not Known"
      //   }
      //   if(value['PSTNG_DATE'] == ''){
      //     value['PSTNG_DATE'] = "Not Known"
      //   }
      //   if(value['USERNAME'] == ''){
      //     value['USERNAME'] = "Not Known"
      //   }
      //   if(value['ENTRY_TIME'] == ''){
      //     value['ENTRY_TIME'] = "Not Known"
      //   }
      //   if(value['ENTRY_DATE'] == ''){
      //     value['ENTRY_DATE'] = "Not Known"
      //   }
      //   this.listarray.push(value);
      // }
      const body = {
        id : this.vservice.id,
        password : '',
        no : '',
        callbapi : 'GOODS',
        code : ''
      }
      this.vservice.Onvendordatasoap(body).subscribe((data)=>{
        console.log(data)
        this.mydata = data
        this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['GOODSHEAD']['item']['length'];
        for (let i = 0; i < this.length; i++) {
            const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['GOODSHEAD']['item'][i];
            if(value['DOC_YEAR']._text == undefined){
              value['DOC_YEAR']._text = "Not Known"
            }
            if(value['TR_EV_TYPE']._text == undefined){
              value['TR_EV_TYPE']._text = "Not Known"
            }
            if(value['DOC_DATE']._text == undefined){
              value['DOC_DATE']._text = "Not Known"
            }
            if(value['PSTNG_DATE']._text == undefined){
              value['PSTNG_DATE']._text = "Not Known"
            }
            if(value['USERNAME']._text == undefined){
              value['USERNAME']._text = "Not Known"
            }
            if(value['ENTRY_TIME']._text == undefined){
              value['ENTRY_TIME']._text = "Not Known"
            }
            if(value['ENTRY_DATE']._text == undefined){
              value['ENTRY_DATE']._text = "Not Known"
            }
            if(value['MAT_DOC']._text != undefined){
              this.listarray.push(value);
            }
          }
          console.log(this.listarray);
          this.dataSource = this.listarray;
      })

  //   });
  }
  displayedColumns: string[] = [
    'MAT_DOC',
    'DOC_YEAR',
    'TR_EV_TYPE',
    'ENTRY_TIME',
    'ENTRY_DATE',
    'USERNAME',
    'DOC_DATE',
    'PSTNG_DATE'
  ];
  displayedColumns1: string[] = [
    'MAT_DOC',
    'DOC_YEAR',
    'MATDOC_ITM',
    'PLANT',
    'STGE_LOC',
    'MOVE_TYPE',
    'ENTRY_UOM',
    'ENTRY_QNT'
  ];


  ondetail(row:any){
    console.log(row['MAT_DOC']._text)
    const matdoc = row['MAT_DOC']._text
    this.detailshow = true
    this.length = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['GOODSVALUE']['item']['length'];
    for (let i = 0; i < this.length; i++) {
      const value = this.mydata['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VEN_PORTAL_DATA.Response']['GOODSVALUE']['item'][i];
      if(value['MAT_DOC']._text == matdoc){
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

