import { NgModule, ModuleWithProviders }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

// import { HomeComponent } from './home/home.component';
// import { InboxComponent } from './inbox/inbox.component';

// import { TabDetailComponent } from './inbox/tab-details/tab-details.component'; 
// import { CivComponent } from './civ/civ.component';
// import { ContactComponent } from './civ/tabs/contact/contact.component';

import { ClientProfileComponent } from './clientProfile/clientProfile.component';
import { RiskRatingComponent } from './risk-rating/risk-rating.component';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { SowComponent } from './sow/sow.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'inbox',
        loadChildren: 'app/inbox/inbox.module#InboxModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'clientIdentificationandVerification',
        loadChildren: 'app/civ/civ.module#CivModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'appendix',
        loadChildren: 'app/appendix/appendix.module#AppendixModule',
        canActivate: [AuthGuard]
    },
    { path: 'clientProfile', component: ClientProfileComponent, canActivate: [AuthGuard]},
    { path: 'executive-summary', component: ExecutiveSummaryComponent, canActivate: [AuthGuard]},
    { path: 'risk-rating', component: RiskRatingComponent, canActivate: [AuthGuard]},
    { path: 'sow', component: SowComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotFoundComponent},
]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
