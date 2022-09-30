import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class Vendorservice implements OnInit {
  id = '';
  detailid: any;
  code = '0001';
  accesstoken = false;
  profile:any
  bankdata : any
  mydata:any
  constructor(private http: HttpClient) {}
  ngOnInit(): void {

  }
  parentshow = new EventEmitter<null>();
  invoicedetailevent = new EventEmitter<null>();

  OnLogin(body: { id: string; password: string }) {
    console.log(body);
    this.id = body.id;
    return this.http.post('http://localhost:8000/vendor/vendorlogin', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  Onpayment() {
    // return this.http.post('http://localhost:8000/customerdeliverylist', body, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    // })
    return this.http.get(
      'http://localhost:8000/vendor/vendorpayment?id=' + this.id + ''
    );
  }

  Ongoods() {
    // return this.http.post('http://localhost:8000/customerinquirylist', body, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    // })
    return this.http.get(
      'http://localhost:8000/vendor/vendorgoods?id=' + this.id + ''
    );
  }

  Oninvoicelist() {
    // return this.http.post('http://localhost:8000/customerinvoicelist', body, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    // })
    return this.http.get(
      'http://localhost:8000/vendor/vendorinvoicelist?id=' + this.id + ''
    );
  }

  Onprofile() {
    return this.http.get('http://localhost:8000/vendor/vendorprofile?id=' + this.id + '');
  }

  Onpurchase() {
    return this.http.get(
      'http://localhost:8000/vendor/vendorpurchase?id=' + this.id + ''
    );
  }

  Onquotation() {
    return this.http.get(
      'http://localhost:8000/vendor/vendorquotation?id='+this.id+''
    );
  }

  Oninvoicedetail() {
    return this.http.get(
      'http://localhost:8000/vendor/vendorinvoicedetail?id=' + this.detailid + ''
    );
  }

  Oncreditdetail() {
    return this.http.get(
      'http://localhost:8000/vendor/vendorcreditmemo?id=' + this.id + ''
    );
  }

  Onvendordatasoap(body:{
      id: string,
      password:string,
      no: string,
      code:string,
      callbapi:string
  }
) {
    console.log(body);
    return this.http.post('http://localhost:8000/vendor/vendordatasoap', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}



