import { PlatformLocation } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customerservice } from '../customer.service';
import { DeliveryDetailComponent } from '../delivery-detail/delivery-detail.component';
import { DELIVERYLIST } from './delivery-list.model';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css'],
})
export class DeliveryListComponent implements OnInit {
  constructor(
    private cservice: Customerservice,
    location: PlatformLocation,
    public dialog: MatDialog
  ) {
    location.onPopState(() => {
      this.cservice.parentshow.emit();
    });
  }
  parentshow: any;
  listarray: any;
  length = 0;
  deliverylistarray: DELIVERYLIST[] = [];
  deliveryfilterarray: DELIVERYLIST[] = [];
  dataSource: DELIVERYLIST[] = [];
  content = false;

  ngOnInit(): void {
    const body = {
      id: this.cservice.id,
      bapitocall: 'DELIVERYLIST',
      password: '',
      salesorg: '',
      docid: '',
    };
    console.log(body);
    // this.cservice.Ondeliverylist().subscribe((data) => {
    //   this.listarray = data;
    //   this.length = this.listarray['DELIVERYDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.listarray['DELIVERYDATA']['item'][i];
    //     this.deliverylistarray.push(value);
    //   }
    //   console.log(this.deliverylistarray);
    //   this.dataSource = this.deliverylistarray
    //   this.content =true
    // });

    this.cservice.Oncustomerdata(body).subscribe((data) => {
      console.log(data);
      this.listarray = data;
      this.length =
        this.listarray['SOAP:Envelope']['SOAP:Body'][
          'ns0:ZFM_CUST_PORTAL_DATA.Response'
        ]['DELIVERYDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value =
          this.listarray['SOAP:Envelope']['SOAP:Body'][
            'ns0:ZFM_CUST_PORTAL_DATA.Response'
          ]['DELIVERYDATA']['item'][i];
        if (value.VBELN._text != undefined) {
          value.VBELN._text = Number(value.VBELN._text).toString();
          this.deliverylistarray.push(value);
        }
      }
      console.log(this.deliverylistarray);
      this.dataSource = this.deliverylistarray;
      this.content = true;
    });
  }

  applyFilter(filterValue: any) {
    this.deliveryfilterarray.splice(0);
    if (filterValue.value.length != '') {
      console.log(filterValue.value);
      console.log(this.deliverylistarray);
      for (let i = 0; i < this.deliverylistarray.length; i++) {
        const value = this.deliverylistarray[i];
        if (value.VBELN['_text'] == filterValue.value) {
          this.deliveryfilterarray.push(value);
        }
      }
      this.dataSource = this.deliveryfilterarray;
    } else {
      this.dataSource = this.deliverylistarray;
    }
  }

  Ondetail(rowdata: any) {
    console.log('Details of ID : ' + rowdata['VBELN']._text);
    this.cservice.detailid = rowdata['VBELN']._text;
    let dialogRef = this.dialog.open(DeliveryDetailComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  displayedColumns: string[] = [
    'VBELN',
    'VKORG ',
    'LFUHR ',
    'LFART',
    'ERZET',
    'ARKTX',
    'ERDAT',
  ];
}
