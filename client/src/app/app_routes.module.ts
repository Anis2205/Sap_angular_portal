import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './customer/about/about.component';
import { Authservice } from './customer/auth.service';
import { CloginComponent } from './customer/clogin/clogin.component';
import { CprofileComponent } from './customer/cprofile/cprofile.component';
import { CreditdebitmemoComponent } from './customer/creditdebitmemo/creditdebitmemo.component';
import { DeliveryListComponent } from './customer/delivery-list/delivery-list.component';
import { InquirylistComponent } from './customer/inquirylist/inquirylist.component';
import { InvoicelistComponent } from './customer/invoicelist/invoicelist.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { SalesorderComponent } from './customer/salesorder/salesorder.component';
import { Authserviceemployee } from './employee/auth.service';
import { EmployeedashboardComponent } from './employee/employeedashboard/employeedashboard.component';
import { LeaveComponent } from './employee/leave/leave.component';
import { LoginComponent } from './employee/login/login.component';
import { PayslipComponent } from './employee/payslip/payslip.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { Authservicevendor } from './vendor/auth.service';
import { CreditmemoComponent } from './vendor/creditmemo/creditmemo.component';
import { QuotationComponent } from './vendor/quotation/quotation.component';
import { VdashboardComponent } from './vendor/vdashboard/vdashboard.component';
import { VgoodsComponent } from './vendor/vgoods/vgoods.component';
import { VinvoicelistComponent } from './vendor/vinvoicelist/vinvoicelist.component';
import { VloginComponent } from './vendor/vlogin/vlogin.component';
import { VpaymentComponent } from './vendor/vpayment/vpayment.component';
import { VprofileComponent } from './vendor/vprofile/vprofile.component';
import { VpurchaseComponent } from './vendor/vpurchase/vpurchase.component';

const approutes: Routes = [
  { path: '', component: LandingpageComponent, pathMatch: 'full' },
  { path: 'clogin', component: CloginComponent },
  {
    path: 'cprofile',
    component: AboutComponent,
    canActivate: [Authservice],
  },
  {
    path: 'customer',
    component: CprofileComponent,
    canActivate: [Authservice],
    children: [
      {
        path: 'deliverylist',
        component: DeliveryListComponent,
        canActivate: [Authservice],
      },
      {
        path: 'inquirylist',
        component: InquirylistComponent,
        canActivate: [Authservice],
      },
      {
        path: 'invoicelist',
        component: InvoicelistComponent,
        canActivate: [Authservice],
      },
      {
        path: 'salesorder',
        component: SalesorderComponent,
        canActivate: [Authservice],
      },
      {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [Authservice],
      },
      {
        path: 'creditdebitmemo',
        component: CreditdebitmemoComponent,
        canActivate: [Authservice],
      },
    ],
  },
  {
    path: 'vlogin',
    component: VloginComponent,
  },
  { path: 'vendor', component: VdashboardComponent, canActivate: [Authservicevendor]},
  {
    path: 'vprofile',
    component: VprofileComponent,
    canActivate: [Authservicevendor]
  },
  {
    path: 'vinvoicelist',
    component: VinvoicelistComponent,
    canActivate: [Authservicevendor]
  },
  {
    path: 'vpayment',
    component: VpaymentComponent,
    canActivate: [Authservicevendor]
  },
  {
    path: 'vpurchase',
    component: VpurchaseComponent,
    canActivate: [Authservicevendor]
  },
  {
    path: 'vcreditdebitmemo',
    component: CreditmemoComponent,
    canActivate: [Authservicevendor]
  },
  {
    path: 'vgoods',
    component: VgoodsComponent,
    canActivate: [Authservicevendor]
  },
  {
    path: 'vquotation',
    component: QuotationComponent,
    canActivate: [Authservicevendor]
  },
  {
    path: 'elogin',
    component: LoginComponent,
  },
  {
    path: 'employeedashboard',
    component: EmployeedashboardComponent,
   canActivate: [Authserviceemployee]
  },
  {
    path: 'employeeprofile',
    component: ProfileComponent,
    canActivate: [Authserviceemployee]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule],
})
export class AppRoutes {}
