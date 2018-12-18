import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//primeNg Modules
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { PanelModule } from 'primeng/components/panel/panel';
import { PickListModule } from 'primeng/components/picklist/picklist';

//Formly libraries V2.x
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


//CIV Module Components
//Contact Components
import { InboxComponent } from './inbox.component';

//Routing Module for CIV
import { InboxRoutingModule }  from './inbox-routing.module';
import { AgGridModule } from "ag-grid-angular";
import { TabDetailComponent } from "./tab-details/tab-details.component";

//Services
import { InboxService } from './services/inbox.service';
import { InboxApiService } from './services/inboxApi.service';
import { CommonService  } from '../shared/services/common.service';

@NgModule({
  imports: [     
    CommonModule,
		ReactiveFormsModule,
    TooltipModule,
    DialogModule,
    FormlyBootstrapModule,
    InboxRoutingModule,
    AgGridModule.withComponents([]),
    PanelModule
  ], 
  declarations: [
    InboxComponent,
    TabDetailComponent
  ],
  providers: [ InboxService, InboxApiService, CommonService ]
})
export class InboxModule { }
