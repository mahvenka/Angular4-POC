import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";

import { homeRouter } from './home-routing.module';
//PrimeNG 2.x
import { PanelModule } from 'primeng/components/panel/panel';
//ag-Grid 
import { AgGridModule } from "ag-grid-angular";
//ng-charts
import { ChartsModule } from 'ng4-charts';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ PanelModule, homeRouter, ChartsModule, AgGridModule.withComponents([]), SharedModule ]
})

export class HomeModule {}
