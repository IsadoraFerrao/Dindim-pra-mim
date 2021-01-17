import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetasPage } from './metas.page';

const routes: Routes = [
  {
    path: '',
    component: MetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetasPageRoutingModule {}
