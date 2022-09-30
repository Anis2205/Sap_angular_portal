import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-vdashboard',
  templateUrl: './vdashboard.component.html',
  styleUrls: ['./vdashboard.component.css'],
  providers: [NgbCarouselConfig],
})
export class VdashboardComponent {
  title = 'ng-carousel-demo';

  images = [
    {
      src1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkI4MxnE0gxh_CayxuIx0ToHZRg0aBTlvOg&usqp=CAU',
      src2: 'https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg?w=2000',
      src3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgoctyTt9QvGolWFLIMRv-2E3eySrzrQXMQ&usqp=CAU',
      title1: 'Invoice Data',
      title2: 'Purchase Data',
      title3: 'Payment Data',
      detail1:
        'An invoice is a time-stamped commercial document that records a transaction between a buyer and a seller.',
      detail2:
        ' A formal purchase order will be generated which include material details, quantity and other related details',
      detail3:
        'The Vendor aging report displays the balances that are due to vendors, sorted by date interval',
    },
    {
      src1: 'https://img.freepik.com/free-vector/dollar-bills-coins-set-piles-cash-stacks-green-paper-banknotes-isolated-white-flat-illustration_74855-14348.jpg',
      src2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXehrgvwguQCXJdaitK83LPw6wX5HODhw5Q&usqp=CAU',
      src3: 'https://images.businessnewsdaily.com/app/uploads/2022/04/04073245/quote.png',
      title1: 'Credit/Debit Memo',
      title2: 'Goods Receipt',
      title3: 'Request for Quotation',
      detail1:
        'Debit - Reduces Amounts Payable to a vendor, Credit - Reduces Amounts Receivable from a customer',
      detail2:
        'Goods receipt refers to the physical movement of goods into the warehouse from external vendors.',
      detail3:
        ' Request for quotation is a form of invitation that is sent to the vendors',
    },
  ];

  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.pauseOnFocus = false;
  }

  onroute(pos: any) {
    if (pos == 0) {
      this.router.navigate(['vinvoicelist']);
    } else {
      this.router.navigate(['vcreditdebitmemo']);
    }
  }
  onroute1(pos: any) {
    if (pos == 0) {
      this.router.navigate(['vpurchase']);
    } else {
      this.router.navigate(['vgoods']);
    }
  }
  onroute2(pos: any) {
    if (pos == 0) {
      this.router.navigate(['vpayment']);
    } else {
      this.router.navigate(['vquotation']);
    }
  }
}
