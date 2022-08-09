import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceModule } from './invoice/invoice.module';
import { DeliveryOrderModule } from './delivery-order/delivery-order.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoiceModule,
    DeliveryOrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
