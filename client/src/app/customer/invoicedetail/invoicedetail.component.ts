import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  htmlToPdfmake from 'html-to-pdfmake';
import jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Customerservice } from '../customer.service';
import { INVOICEDETAILINTERFACE } from './invoice.model';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.component.html',
  styleUrls: ['./invoicedetail.component.css']
})
export class InvoicedetailComponent implements OnInit {
  details : any
  invoicedetail : INVOICEDETAILINTERFACE | undefined
  customerprofile:
  {
        id: string;
        name: string;
        city: string;
        phone: string;
        pcode: string;
      }
    | undefined;


   constructor(private cservice:Customerservice) {

    // this.cservice.invoicedetailevent.subscribe(
    //   ()=>{
    //     this.cservice.Oninvoicedetail().subscribe(
    //       (data)=>{
    //         this.details = data
    //         this.invoicedetail=this.details['INVOICEDETAIL']['item']
    //         console.log(data)
    //       }
    //     )
    //   }
    // )

    this.cservice.invoicedetailevent.subscribe(
      ()=>{
        const body = {
          id: this.cservice.id,
          bapitocall:"INVOICEDETAIL",
          password: '',
          salesorg:'',
          docid: this.cservice.detailid
        };
    this.customerprofile = this.cservice.customerprofile
    console.log(this.customerprofile)
    this.cservice.Oncustomerdata(body).subscribe(
      (data)=>{
        this.details = data
            this.invoicedetail=this.details['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['INVOICEDETAIL']['item']
            console.log(data)
            console.log(this.invoicedetail)
      }
    )
         }
    )

  }
  ngOnInit(): void {
        // this.cservice.Oninvoicedetail().subscribe(
        //   (data)=>{
        //     this.details = data
        //     this.invoicedetail=this.details['INVOICEDETAIL']['item']
        //     console.log(data)
        //   }
        // )
        const body = {
          id: this.cservice.id,
          bapitocall:"INVOICEDETAIL",
          password: '',
          salesorg:'',
          docid: this.cservice.detailid
        };
        this.customerprofile = this.cservice.customerprofile
            this.cservice.Oncustomerdata(body).subscribe(
      (data)=>{
        this.details = data
            this.invoicedetail=this.details['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['INVOICEDETAIL']['item']
            console.log(data)
            console.log(this.invoicedetail)
      }
    )
  }
  @ViewChild('pdfTable') pdfTable: ElementRef | undefined;

  //PDF genrate button click function
  // public downloadAsPDF() {
    // const doc = new jsPDF();
    // //get table html
    // const pdfTable = this.pdfTable?.nativeElement;

    // //html to pdf format
    // var html = htmlToPdfmake(pdfTable.innerHTML);

    // const documentDefinition = { content: html };

    // pdfMake.createPdf(documentDefinition).open();
  // }

 public downloadAsPDF()
 {
  var data:any = document.getElementById('pdfTable'); //Id of the table
  html2canvas(data).then(canvas => {
   // Few necessary setting options
   let imgWidth = 120
   let imgHeight = canvas.height * imgWidth / canvas.width;
   const contentDataURL = canvas.toDataURL('image/png')
   let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
   pdf.addImage(contentDataURL, 'PNG',0, 0, 220, 150);
   pdf.save('Invoice.pdf'); // Generated PDF
  });
 }

}

