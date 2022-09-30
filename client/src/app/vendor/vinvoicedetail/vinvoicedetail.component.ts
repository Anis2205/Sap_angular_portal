import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import htmlToPdfmake from 'html-to-pdfmake';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import { Vendorservice } from '../vendor.service';
import { VINVOICEDETAILINTERFACE } from './vinvoicedetail.model';

@Component({
  selector: 'app-vinvoicedetail',
  templateUrl: './vinvoicedetail.component.html',
  styleUrls: ['./vinvoicedetail.component.css'],
})
export class VinvoicedetailComponent implements OnInit {
  details: any;
  invoicedetail: VINVOICEDETAILINTERFACE | undefined;
  profile:
    | {
        VENDOR: any;
        NAME: any;
        NAME_2: any;
        NAME_3: any;
        NAME_4: any;
        CITY: any;
        DISTRICT: any;
        PO_BOX: any;
        POBX_PCD: any;
        POSTL_CODE: any;
        REGION: any;
        STREET: any;
        COUNTRY: any;
        COUNTRYISO: any;
        POBX_CTY: any;
        LANGU: any;
        LANGU_ISO: any;
        TELEPHONE: any;
        FORMOFADDR: any;
        TELEPHONE2: any;
      }
    | undefined;
  constructor(private vservice: Vendorservice) {
    // this.vservice.invoicedetailevent.subscribe(
    //   ()=>{
    //     this.vservice.Oninvoicedetail().subscribe(
    //       (data)=>{
    //         this.details = data
    //         this.invoicedetail=this.details['DATA']['item']
    //         console.log(data)
    //       }
    //     )
    //   }
    // )
    console.log("constructor")
    const body = {
      id: '',
      password: '',
      no: this.vservice.detailid,
      callbapi: 'INVOICEDETAIL',
      code: '',
    };

      this.vservice.Onvendordatasoap(body).subscribe((data) => {
        console.log(data);
        this.details = data;
        this.invoicedetail =
          this.details['SOAP:Envelope']['SOAP:Body'][
            'ns0:ZFM_VEN_PORTAL_DATA.Response'
          ]['DATA']['item'];
      });
    this.profile = this.vservice.profile;
  }
  ngOnInit(): void {
    // console.log(this.vservice.profile);
    // this.profile = this.vservice.profile;
    //     this.vservice.Oninvoicedetail().subscribe(
    //       (data)=>{
    //         this.details = data
    //         this.invoicedetail=this.details['DATA']['item']
    //         console.log(data)
    //       }
    //     )

    this.vservice.invoicedetailevent.subscribe(() => {
      const body = {
        id: '',
        password: '',
        no: this.vservice.detailid,
        callbapi: 'INVOICEDETAIL',
        code: '',
      };
      this.vservice.Onvendordatasoap(body).subscribe((data) => {
        console.log(data);
        this.details = data;
        this.invoicedetail =
          this.details['SOAP:Envelope']['SOAP:Body'][
            'ns0:ZFM_VEN_PORTAL_DATA.Response'
          ]['DATA']['item'];
      });
    });
    this.profile = this.vservice.profile;

  }
  @ViewChild('pdfTable') pdfTable: ElementRef | undefined;

  //PDF genrate button click function
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable?.nativeElement;

    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };

    pdfMake.createPdf(documentDefinition).open();
  }
}
