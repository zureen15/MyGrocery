import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardsAndCouponsPageRoutingModule } from './rewards-and-coupons-routing.module';

import { RewardsAndCouponsPage } from './rewards-and-coupons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardsAndCouponsPageRoutingModule
  ],
  declarations: [RewardsAndCouponsPage]
})
export class RewardsAndCouponsPageModule {}
