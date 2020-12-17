import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSellerPage } from './login-seller.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSellerPageRoutingModule {}
