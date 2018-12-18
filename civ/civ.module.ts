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
import { FormlyFieldInput } from './tabs/formly-fields/input/formly-field-input';
import { FormlyFieldRadio } from './tabs/formly-fields/radio/formly-field-radio';
import { FormlyFieldSelect } from './tabs/formly-fields/select/formly-field-select';

//CIV Module Components
//Contact Components
import { CivComponent }  from './civ.component';
import { ContactComponent } from './tabs/contact/contact.component';
import { DbaComponent } from './tabs/dba/dba.component';
import { PhoneComponent } from './tabs/phone/phone.component';
import { AddressComponent } from './tabs/address/address.component';
import { UploadComponent } from './tabs/upload/upload.component';
//Identity Components
import { IdentityComponent } from './tabs/identity/identity.component';

//Country Components
import { CountryComponent } from './tabs/country/country.component';

//Routing Module for CIV
import { CivRoutingModule }  from './civ-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from "ag-grid-angular";

//Services
import { CivService } from './services/civ.service';
import { CivSaveService } from './services/civ.save.service';
import { ApiService } from './services/api.service';

//import { RestServicesMappingUrls } from '../shared/services/restservices-mappings';

@NgModule({
  imports: [     
    CommonModule,
		ReactiveFormsModule,
    CivRoutingModule,
    SharedModule,
    TooltipModule,
    DialogModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'QuestionStringName', component: FormlyFieldInput },
        { name: 'QuestionEmail', component: FormlyFieldInput },
        { name: 'QuestionString', component: FormlyFieldInput },
        { name: 'QuestionRadio', component: FormlyFieldRadio },
        { name: 'MetadataClientInfoAddressEditor', component: AddressComponent },
        { name: 'QuestionSelect', component: FormlyFieldSelect },
        { name: 'MultiQuestionList', component: FormlyFieldSelect },
        { name: 'QuestionSelectLarge', component: FormlyFieldSelect },
        { name: 'MetaDBAGrid', component: DbaComponent },
        { name: 'MetaMultipleFileUploadField', component: UploadComponent },
        { name: 'MetaPhoneGrid', component: PhoneComponent }
      ]
    }),
    FormlyBootstrapModule,
    AgGridModule.withComponents([]),
    PanelModule,
    PickListModule
  ], 
  declarations: [
    CivComponent,
    ContactComponent,
    PhoneComponent,
    AddressComponent,
    DbaComponent,
    UploadComponent,
    FormlyFieldInput,
    FormlyFieldRadio,
    FormlyFieldSelect,
    IdentityComponent,
    CountryComponent,
    
  ],
  providers: [ CivService, ApiService, CivSaveService ]
})
export class CivModule { }
