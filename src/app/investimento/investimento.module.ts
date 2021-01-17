import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestimentoPageRoutingModule } from './investimento-routing.module';

import { InvestimentoPage } from './investimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestimentoPageRoutingModule
  ],
  declarations: [InvestimentoPage]
})
export class InvestimentoPageModule {}
