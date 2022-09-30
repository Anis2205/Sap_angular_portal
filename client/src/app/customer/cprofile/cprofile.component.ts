import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customerservice } from '../customer.service';

@Component({
  selector: 'app-cprofile',
  templateUrl: './cprofile.component.html',
  styleUrls: ['./cprofile.component.css'],
})
export class CprofileComponent implements OnInit {
  constructor(private cservice: Customerservice, private router: Router,private route: ActivatedRoute,) {

  }
  id: any;
  name: any;
  city: any;
  data: any;
  phone: any;
  pcode: any;content =false
  parent=true
  ngOnInit(): void {
    this.cservice.parentshow.subscribe(()=>{
      this.parent=true
    })
    const body = {
      id: this.cservice.id,
      bapitocall:"PROFILE",
      password: '',
      salesorg:'',
      docid:''
      };
    // this.cservice.Onprofile(body).subscribe((data) => {
    //   this.data = data;
    //   console.log(data);
    // });
    // setTimeout(() => {
    //   this.id = this.data['CUST_DATA']['KUNNR'];
    //   this.name = this.data['CUST_DATA']['NAME1'];
    //   this.city = this.data['CUST_DATA']['ORT01'];
    //   this.phone = this.data['CUST_DATA']['TELF1'];
    //   this.pcode = this.data['CUST_DATA']['PSTLZ'];
    //   this.cservice.customerprofile = {
    //   id : this.id,
    //   name : this.name,
    //   city : this.city,
    //   phone : this.phone,
    //   pcode : this.pcode
    //   }
    // }, 3000);

     this.cservice.Oncustomerdata(body).subscribe(
      (data)=>{
        this.data = data;
        console.log(data)
      }
     )
      setTimeout(() => {
      this.id = this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['CUST_DATA']['KUNNR']['_text'];
      this.name = this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['CUST_DATA']['NAME1']['_text'];
      this.city = this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['CUST_DATA']['ORT01']['_text'];
      this.phone = this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['CUST_DATA']['TELF1']['_text'];
      this.pcode = this.data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_PORTAL_DATA.Response']['CUST_DATA']['PSTLZ']['_text'];
      this.cservice.customerprofile = {
      id : this.id,
      name : this.name,
      city : this.city,
      phone : this.phone,
      pcode : this.pcode
      }
    }, 3000);
    }


  ondeliverylist() {
    this.parent = false
    this.router.navigate(['deliverylist'], {relativeTo: this.route});
  }
  onsalesorderlist() {
    this.parent = false
    this.router.navigate(['salesorder'], {relativeTo: this.route});
  }
  oninquirylist() {
    this.parent = false
    this.router.navigate(['inquirylist'], {relativeTo: this.route});
  }
  oninvoicelist() {
    this.parent = false
    this.router.navigate(['invoicelist'], {relativeTo: this.route});
  }
  onpaymentlist(){
    this.parent = false
    this.router.navigate(['payment'], {relativeTo: this.route});
  }
  oncreditmemo(){
    this.parent = false
    this.router.navigate(['creditdebitmemo'], {relativeTo: this.route});
  }
}
