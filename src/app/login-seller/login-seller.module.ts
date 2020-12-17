import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSellerPageRoutingModule } from './login-seller-routing.module';

import { LoginSellerPage } from './login-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSellerPageRoutingModule
  ],
  declarations: [LoginSellerPage]
})
export class LoginSellerPageModule {}
