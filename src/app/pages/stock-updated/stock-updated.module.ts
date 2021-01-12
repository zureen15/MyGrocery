import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockUpdatedPageRoutingModule } from './stock-updated-routing.module';

import { StockUpdatedPage } from './stock-updated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockUpdatedPageRoutingModule
  ],
  declarations: [StockUpdatedPage]
})
export class StockUpdatedPageModule {}
