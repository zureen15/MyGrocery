import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomeSellerPage } from './home-seller.page';

import { HomeSellerPageRoutingModule } from './home-seller-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSellerPageRoutingModule
  ],
  declarations: [HomeSellerPage]
})
export class HomeSellerPageModule {}
