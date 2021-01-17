import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrocoPage } from './troco.page';

const routes: Routes = [
  {
    path: '',
    component: TrocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrocoPageRoutingModule {}
