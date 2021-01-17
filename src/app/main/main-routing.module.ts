import { InboxPageModule } from './../pages/inbox/inbox.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
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
      {
        path: '',
        redirectTo: '/tabs/accounut',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/accounut',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
