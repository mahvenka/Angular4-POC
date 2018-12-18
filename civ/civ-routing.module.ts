import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CivComponent } from './civ.component';
import { ContactComponent } from './tabs/contact/contact.component';
import { IdentityComponent } from './tabs/identity/identity.component';
import { CountryComponent } from './tabs/country/country.component';

const civRoutes: Routes = [
  {
    path: '',
    component: CivComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contact'
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'identity',
        component: IdentityComponent
      },
      {
        path: 'country',
        component: CountryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(civRoutes)],
  exports: [RouterModule]
})
export class CivRoutingModule { }