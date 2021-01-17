import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaPage } from './entrada.page';

const routes: Routes = [
  {
    path: '',
    component: EntradaPage,
    children:[
      {
        path: 'accounut',
        children:[
          {
          path: '',
          loadChildren: () => import('../pages/accounut/accounut.module').then(m => m.AccounutPageModule)
          }
        ]
      },
      {
        path: 'calls',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/calls/calls.module').then(m => m.CallsPageModule)
          }
        ]
      },
      {
        path: 'inbox',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/inbox/inbox.module').then(m => m.InboxPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaPageRoutingModule {}
