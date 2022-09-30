import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  leaveshow = false
  payslipshow = false
  payslippdfshow = false
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  Onleave(){
    this.payslipshow = false
    this.payslippdfshow = false
    this.leaveshow = true
  }
  Onpayslip(){
    this.leaveshow = false
    this.payslippdfshow = false
    this.payslipshow = true
  }
  Onpayslippdf(){
    this.payslipshow = false
    this.leaveshow = false
    this.payslippdfshow = true
  }
}
