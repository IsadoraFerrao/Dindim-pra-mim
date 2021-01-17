import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainelPageRoutingModule } from './painel-routing.module';

import { PainelPage } from './painel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainelPageRoutingModule
  ],
  declarations: [PainelPage]
})
export class PainelPageModule {}
