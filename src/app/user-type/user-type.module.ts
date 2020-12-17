import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTypePageRoutingModule } from './user-type-routing.module';

import { UserTypePage } from './user-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTypePageRoutingModule
  ],
  declarations: [UserTypePage]
})
export class UserTypePageModule {}
