import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccounutPage } from './accounut.page';

const routes: Routes = [
  {
    path: '',
    component: AccounutPage,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccounutPageRoutingModule {}
