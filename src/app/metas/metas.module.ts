import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetasPageRoutingModule } from './metas-routing.module';

import { MetasPage } from './metas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetasPageRoutingModule
  ],
  declarations: [MetasPage]
})
export class MetasPageModule {}
