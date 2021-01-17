import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccounutPageRoutingModule } from './accounut-routing.module';

import { AccounutPage } from './accounut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccounutPageRoutingModule
  ],
  declarations: [AccounutPage]
})
export class AccounutPageModule {}
