import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerPageRoutingModule } from './payer-routing.module';

import { PayerPage } from './payer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerPageRoutingModule
  ],
  declarations: [PayerPage]
})
export class PayerPageModule {}
