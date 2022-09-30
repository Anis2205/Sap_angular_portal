import { Component, OnInit } from '@angular/core';
import { Customerservice } from '../customer.service';
import { INQUIRYLISTINTERFACE } from './inquirylist.model';
import { PlatformLocation } from '@angular/common'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InquirydetailComponent } from '../inquirydetail/inquirydetail.component';

@Component({
  selector: 'app-inquirylist',
  templateUrl: './inquirylist.component.html',
  styleUrls: ['./inquirylist.component.css']
})
export class InquirylistComponent implements OnInit {

  constructor(private cservice: Customerservice, location: PlatformLocation, public dialog: MatDialog) {
    location.onPopState(() => {
      this.cservice.parentshow.emit()
    });
  }

  listarray: any;
  content = false
  length = 0;
  inquirylistarray: INQUIRYLISTINTERFACE[] = [];
  filterarray: INQUIRYLISTINTERFACE[] = [];
  dataSource: INQUIRYLISTINTERFACE[] = []


  ngOnInit(): void {
    // const body = {
    //   id: this.cservice.id,
    // };
    // this.cservice.Oninquirylist().subscribe((data) => {
    //   console.log(data)
    //   this.listarray = data;
    //   this.length = this.listarray['INQUIRYDATA']['item']['length'];
    //   for (let i = 0; i < this.length; i++) {
    //     const value = this.listarray['INQUIRYDATA']['item'][i];
    //     this.inquirylistarray.push(value);
    //   }
    //   console.log(this.inquirylistarray);
    //   this.dataSource = this.inquirylistarray
    //   this.content =true
    // });
    console.log("this is inquirylist")
    const body = {
      id: this.cservice.id,
      bapitocall: "INQUIRYLIST",
      password: '',
      salesorg: '',
      docid: ''
    };

    this.cservice.Oncustomerdata(body).subscribe((data) => {
      console.log(data)
      this.listarray = data;
      this.length = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['INQUIRYDATA']['item']['length'];
      for (let i = 0; i < this.length; i++) {
        const value = this.listarray['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['INQUIRYDATA']['item'][i];
        if (value.VBELN._text != undefined) {
          this.inquirylistarray.push(value);
        }

      }
      console.log(this.inquirylistarray);
      this.dataSource = this.inquirylistarray
      this.content = true
    });


  }

  applyFilter(filterValue: any) {
    this.filterarray.splice(0);
    if (filterValue.value.length != '') {
      for (let i = 0; i < this.inquirylistarray.length; i++) {
        const value = this.inquirylistarray[i];
        if (value.VBELN['_text'] == filterValue.value) {
          this.filterarray.push(value);
        }
      }
      this.dataSource = this.filterarray;
    } else {
      this.dataSource = this.inquirylistarray;
    }
  }

  displayedColumns: string[] = ['VBELN', 'ERNAM', 'ANGDT', 'AUDAT', 'VBTYP', 'WAERK', 'BUKRS_VF'];


  Ondetail(rowdata: any) {
    console.log("Details of ID : " + rowdata['VBELN']._text)
    this.cservice.detailid = rowdata['VBELN']._text
    let dialogRef = this.dialog.open(InquirydetailComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
