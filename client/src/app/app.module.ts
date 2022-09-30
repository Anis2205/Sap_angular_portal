import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DeliveryListComponent } from './customer/delivery-list/delivery-list.component';
import { DeliveryDetailComponent } from './customer/delivery-detail/delivery-detail.component';
import { CloginComponent } from './customer/clogin/clogin.component';
import { AppRoutes } from './app_routes.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FormsModule } from '@angular/forms';
import { InquirylistComponent } from './customer/inquirylist/inquirylist.component';
import { SalesorderComponent } from './customer/salesorder/salesorder.component';
import { CommonModule } from '@angular/common';
import { InvoicelistComponent } from './customer/invoicelist/invoicelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CprofileComponent } from './customer/cprofile/cprofile.component';
import { MatTableModule } from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InquirydetailComponent } from './customer/inquirydetail/inquirydetail.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PaymentComponent } from './customer/payment/payment.component';
import { InvoicedetailComponent } from './customer/invoicedetail/invoicedetail.component';
import { AboutComponent } from './customer/about/about.component';
import { CreditdebitmemoComponent } from './customer/creditdebitmemo/creditdebitmemo.component';
import { VloginComponent } from './vendor/vlogin/vlogin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VdashboardComponent } from './vendor/vdashboard/vdashboard.component';
import { VprofileComponent } from './vendor/vprofile/vprofile.component';
import { VinvoicelistComponent } from './vendor/vinvoicelist/vinvoicelist.component';
import { VgoodsComponent } from './vendor/vgoods/vgoods.component';
import { QuotationComponent } from './vendor/quotation/quotation.component';
import { VpurchaseComponent } from './vendor/vpurchase/vpurchase.component';
import { CreditmemoComponent } from './vendor/creditmemo/creditmemo.component';
import { VinvoicedetailComponent } from './vendor/vinvoicedetail/vinvoicedetail.component';
import { VpaymentComponent } from './vendor/vpayment/vpayment.component';
import { LoginComponent } from './employee/login/login.component';
import { EmployeedashboardComponent } from './employee/employeedashboard/employeedashboard.component';
import { LeaveComponent } from './employee/leave/leave.component';
import { PayslipComponent } from './employee/payslip/payslip.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { EnavComponent } from './employee/enav/enav.component';
import { VnavComponent } from './vendor/vnav/vnav.component';
import { PayslippdfComponent } from './employee/payslippdf/payslippdf.component';
import { ContactComponent } from './contact/contact.component';
import { CnavComponent } from './customer/cnav/cnav.component';


@NgModule({
  declarations: [
    AppComponent,
    DeliveryListComponent,
    DeliveryDetailComponent,
    CloginComponent,
    LandingpageComponent,
    InquirylistComponent,
    SalesorderComponent,
    InvoicelistComponent,
    NavComponent,
    FooterComponent,
    InvoicelistComponent,
    CprofileComponent,
    DeliveryListComponent,
    InquirydetailComponent,
    PaymentComponent,
    InvoicedetailComponent,
    AboutComponent,
    CreditdebitmemoComponent,
    VloginComponent,
    VdashboardComponent,
    VprofileComponent,
    VinvoicelistComponent,
    VgoodsComponent,
    QuotationComponent,
    VpurchaseComponent,
    CreditmemoComponent,
    VinvoicedetailComponent,
    VpaymentComponent,
    LoginComponent,
    EmployeedashboardComponent,
    LeaveComponent,
    PayslipComponent,
    ProfileComponent,
    EnavComponent,
    VnavComponent,
    PayslippdfComponent,
    ContactComponent,
    CnavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    NgbModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
