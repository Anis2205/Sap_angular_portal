import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  images = {
    '0': "https://www.acecloudhosting.com/blog/wp-content/uploads/2019/06/erp-all-you-need-to-know.jpg",
    '1': "https://hh-certificates.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2021/08/06080117/Sap-competitors-and-alternatives-1.jpg",
    '2':"https://tecnologiaparatuempresa.ituser.es/files/202102/linke-sap-cloud.jpg",
  }
  constructor(private router: Router,config: NgbCarouselConfig) {
    config.interval = 1500;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }
  cportal(){
    this.router.navigate(['clogin'])
  }
  vportal(){
    this.router.navigate(['vlogin'])
  }
  eportal(){
  this.router.navigate(['elogin'])
  }

}
