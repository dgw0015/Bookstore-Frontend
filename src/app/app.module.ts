import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookTableComponent } from './tables/book/book-table.component';
import { CustomerTableComponent } from './tables/customer/customer-table.component';
import { EmployeeTableComponent } from './tables/employee/employee-table.component';
import { OrderTableComponent } from './tables/order/order-table.component';
import { OrderDetailsTableComponent } from './tables/order-details/order-details-table.component';
import { ShipperTableComponent } from './tables/shipper/shipper-table.component';
import { SubjectTableComponent } from './tables/subject/subject-table.component';
import { SupplierTableComponent } from './tables/supplier/supplier-table.component';
import { HeaderComponent } from './shared/header.component';
import { SubjectNameOnlyComponent } from './tables/subject-name-only/subject-name-only.component';
import { TitleOnlyComponent } from './tables/title-only/title-only.component';
import { NamesWithPhoneAndTotalOrdersComponent } from './tables/names-with-phone-and-total-orders/names-with-phone-and-total-orders.component';
import { FirstLastNameAndTitleComponent } from './tables/first-last-name-and-title/first-last-name-and-title.component';
import { FirstLastNameAndTotalOrdersComponent } from './tables/first-last-name-and-total-orders/first-last-name-and-total-orders.component';
import { FirstLastNameAndTotalPurchasesComponent } from './tables/first-last-name-and-total-purchases/first-last-name-and-total-purchases.component';
import { FirstLastNameTotalSaleComponent } from './tables/first-last-name-total-sale/first-last-name-total-sale.component';
import { TitleAndPriceComponent } from './tables/title-and-price/title-and-price.component';
import { TitleAndQuantityComponent } from './tables/title-and-quantity/title-and-quantity.component';
import { TitleAndShipperNameComponent } from './tables/title-and-shipper-name/title-and-shipper-name.component';
import { TitleAndTotalQuantityComponent } from './tables/title-and-total-quantity/title-and-total-quantity.component';
import { TotalPriceComponent } from './tables/total-price/total-price.component';
import { FirstAndLastNameComponent } from './tables/first-and-last-name/first-and-last-name.component';
import { TitlesOnlyUnitsComponent } from './tables/titles-only-units/titles-only-units.component';
import { TitleOnlyBySupplierComponent } from './tables/title-only-by-supplier/title-only-by-supplier.component';
import { TitlesOnlyByCustomerOrderComponent } from './tables/titles-only-by-customer-order/titles-only-by-customer-order.component';
import { TitlesOnlyByEmployeeComponent } from './tables/titles-only-by-employee/titles-only-by-employee.component';
import { NamesByOrderAmountComponent } from './tables/names-by-order-amount/names-by-order-amount.component';
import { NamesByAuthorComponent } from './tables/names-by-author/names-by-author.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookTableComponent,
    CustomerTableComponent,
    EmployeeTableComponent,
    OrderTableComponent,
    OrderDetailsTableComponent,
    ShipperTableComponent,
    SubjectTableComponent,
    SupplierTableComponent,
    HeaderComponent,
    SubjectNameOnlyComponent,
    TitleOnlyComponent,
    NamesWithPhoneAndTotalOrdersComponent,
    FirstLastNameAndTitleComponent,
    FirstLastNameAndTotalOrdersComponent,
    FirstLastNameAndTotalPurchasesComponent,
    FirstLastNameTotalSaleComponent,
    TitleAndPriceComponent,
    TitleAndQuantityComponent,
    TitleAndShipperNameComponent,
    TitleAndTotalQuantityComponent,
    TotalPriceComponent,
    FirstAndLastNameComponent,
    TitlesOnlyUnitsComponent,
    TitleOnlyBySupplierComponent,
    TitlesOnlyByCustomerOrderComponent,
    TitlesOnlyByEmployeeComponent,
    NamesByOrderAmountComponent,
    NamesByAuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
