import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InboxComponent } from './inbox.component';
import { TabDetailComponent } from "./tab-details/tab-details.component";

const inboxRoutes: Routes = [
  {
    path: '',
    component: InboxComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/inbox/MY_INBOX'
      },
      {
        path: ':id',
        component: TabDetailComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(inboxRoutes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }