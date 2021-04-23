import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerPage } from './payer.page';

const routes: Routes = [
  {
    path: '',
    component: PayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerPageRoutingModule {}
