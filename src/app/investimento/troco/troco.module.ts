import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrocoPageRoutingModule } from './troco-routing.module';

import { TrocoPage } from './troco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrocoPageRoutingModule
  ],
  declarations: [TrocoPage]
})
export class TrocoPageModule {}
