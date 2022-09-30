import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Customerservice {
  id = '';
  detailid: any;
  code = '0001';
  accesstoken = false;
  customerprofile: {
        id: string;
        name: string;
        city: string;
        phone: string;
        pcode: string;
      } | undefined;
  constructor(private http: HttpClient) {}
  parentshow = new EventEmitter<null>();
  invoicedetailevent = new EventEmitter<null>();

  OnLogin(body: { id: string; password: string }) {
    console.log(body);
    this.id = body.id;
    return this.http.post('http://localhost:8000/customerlogin', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  Ondeliverylist() {
    // return this.http.post('http://localhost:8000/customerdeliverylist', body, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    // })
    return this.http.get(
      'http://localhost:8000/customerdeliverylist?id=' + this.id + ''
    );
  }

  Oninquirylist() {
    // return this.http.post('http://localhost:8000/customerinquirylist', body, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    // })
    return this.http.get(
      'http://localhost:8000/customerinquirylist?id=' + this.id + ''
    );
  }

  Oninvoicelist() {
    // return this.http.post('http://localhost:8000/customerinvoicelist', body, {
    //   observe: 'body',
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    // })
    return this.http.get(
      'http://localhost:8000/customerinvoicelist?id=' + this.id + ''
    );
  }

  Onprofile(body: { id: string }) {
    return this.http.post('http://localhost:8000/customerprofile', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  Onsalesorder() {
    //   return this.http.post('http://localhost:8000/customersalesorderlist', body, {
    //     observe: 'body',
    //     headers: new HttpHeaders().append('Content-Type', 'application/json'),
    //   })
    return this.http.get(
      'http://localhost:8000/customersalesorderlist?id=' + this.id + ''
    );
  }

  Oninquirydetail() {
    return this.http.get(
      'http://localhost:8000/customerinquirydetail?id=' + this.detailid + ''
    );
  }

  Onpaymentlist() {
    return this.http.get(
      'http://localhost:8000/customerpaymentlist?id='+this.id+'&code=' +this.code+''
    );
  }

  Oninvoicedetail() {
    return this.http.get(
      'http://localhost:8000/customerinvoicedetail?id=' + this.detailid + ''
    );
  }

  Oncreditdetail() {
    return this.http.get(
      'http://localhost:8000/customercredit?id=' + this.id + ''
    );
  }

  Oncustomerdata(body:{
    id: string,
    password:string,
    docid: string,
    salesorg:string,
    bapitocall:string
}){
  return this.http.post('http://localhost:8000/customerdatasoap', body, {
    observe: 'body',
    headers: new HttpHeaders().append('Content-Type', 'application/json'),
  });
  }
}
