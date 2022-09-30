import { Component, OnInit } from '@angular/core';
import { Customerservice } from '../customer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private cservice: Customerservice) {}
  customerprofile:
  {
        id: string;
        name: string;
        city: string;
        phone: string;
        pcode: string;
      }
    | undefined;
  ngOnInit(): void {
    console.log(this.cservice.customerprofile);
    this.customerprofile = this.cservice.customerprofile;
  }
}
