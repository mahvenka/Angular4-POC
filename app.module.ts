import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './errorhandler/app.error-handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { ClientProfileComponent } from './clientProfile/clientProfile.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.router.module';
import { AuthGuard } from './shared/services/auth.guard';
import { ApiService } from './shared/services/api.service';
import { UserService } from './shared/services/user.service';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { AgGridModule } from "ag-grid-angular";
import { PanelMenuModule } from 'primeng/components/panelmenu/panelmenu';
import { MenuItem } from 'primeng/components/common/api';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { RiskRatingComponent } from './risk-rating/risk-rating.component';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { SowComponent } from './sow/sow.component';
import { ExecutiveSummaryService } from './executive-summary/executive-summary.service';

//shared module
import { SharedModule } from './shared/shared.module';
import { RatingModule } from 'primeng/components/rating/rating';
import { AgridComponent } from './risk-rating/agrid/agrid.component';
import { CommonService  } from './shared/services/common.service';
import { GlobalService } from "./global.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientProfileComponent,
    NotFoundComponent,
    RiskRatingComponent,
    ExecutiveSummaryComponent,
    SowComponent,
    AgridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelModule,
    PanelMenuModule,
    AgGridModule.withComponents([]),
    SharedModule,
    RatingModule,
  ],
  providers: [
    AuthGuard,
    ApiService,
    UserService,
    CommonService,
    GlobalService,
	ExecutiveSummaryService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    Location, {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
