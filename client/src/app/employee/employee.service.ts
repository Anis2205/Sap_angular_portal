import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Employeeservice {
  id = '';
  detailid: any;
  code = '0001';
  accesstoken = false;

  constructor(private http: HttpClient) {}

  OnEmployeedata(body:any) {
    console.log(body);
    return this.http.post('http://localhost:8000/employee/employeedata', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }

  OnEmployeedatasoap(body:any) {
    console.log(body);
    return this.http.post('http://localhost:8000/employee/employeedatasoap', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}
