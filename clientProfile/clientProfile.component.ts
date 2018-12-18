import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { GlobalService } from ".././global.service";

@Component({
  selector: 'client-profile',
  templateUrl: './clientProfile.component.html',
  styleUrls: ['./clientProfile.component.css']
})
export class ClientProfileComponent {
  constructor(
    private globalService : GlobalService
  ){}
  public workItems = this.globalService.getInboxClientData();
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Field 1',
        placeholder: 'Formly is terrific!',
      },
    },
  ];
}