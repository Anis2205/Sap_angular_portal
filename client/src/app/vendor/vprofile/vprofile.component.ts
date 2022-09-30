import { Component, OnInit } from '@angular/core';
import { Vendorservice } from '../vendor.service';

@Component({
  selector: 'app-vprofile',
  templateUrl: './vprofile.component.html',
  styleUrls: ['./vprofile.component.css']
})
export class VprofileComponent implements OnInit {

  constructor(private vservice: Vendorservice) {}
  profile:{
    VENDOR: any
    NAME: any
    NAME_2: any
    NAME_3: any
    NAME_4: any
    CITY: any
    DISTRICT: any
    PO_BOX: any
    POBX_PCD: any
    POSTL_CODE: any
    REGION: any
    STREET: any
    COUNTRY: any
    COUNTRYISO: any
    POBX_CTY: any
    LANGU: any
    LANGU_ISO: any
    TELEPHONE: any
    FORMOFADDR: any
    TELEPHONE2: any
  }| undefined;
  bankdata :{
      VENDOR: any
      BANK_CTRY: any
      BANK_KEY: any
      BANK_ACCT: any
      CTRL_KEY: any
      PARTNER_BK: any
      COLL_AUTH: any
      BANK_REF: any
    }| undefined;

  ngOnInit(): void {

   this.profile = this.vservice.profile
   this.bankdata = this.vservice.bankdata
}
}
