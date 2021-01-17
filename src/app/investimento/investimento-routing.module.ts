import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestimentoPage } from './investimento.page';

const routes: Routes = [
  {
    path: '',
    component: InvestimentoPage
  },  {
    path: 'troco',
    loadChildren: () => import('./troco/troco.module').then( m => m.TrocoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestimentoPageRoutingModule {}
