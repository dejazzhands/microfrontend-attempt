import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'delivery-order',
    loadChildren: () =>
    import('./delivery-order/delivery-order.module').then(
      (m) => m.DeliveryOrderModule
    ),
  },
  {
    path: 'invoice',
    loadChildren: () =>
    import('./invoice/invoice.module').then(
      (m) => m.InvoiceModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
