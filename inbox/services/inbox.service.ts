import { Injectable } from '@angular/core';
import { getUrl } from '../helper/url-mapping';
import { InboxApiService } from './inboxApi.service';

@Injectable()
export class InboxService {

  public tabdetail : any;
  
  public apiObject: any = {
    "filterConfig": null,
    "sortInfo": null
}


  constructor(
    private apiService:InboxApiService
  ) {}

  getInboxData(){
    let url = '';
    this.apiService.get(url);
  }

  getRoleId(){
    let url = 'restservices/ClientInboxService/fetchRolesFortheUser/inboxType/Group';
    return  this.apiService.get(url);
  }
  
  getMyInboxData(){
    let url='restservices/ClientInboxService/loadMyInboxItemWithSortAndFilter/offset/20';
    return  this.apiService.post(url,this.apiObject);
  }

  getMyIndiInboxData(roleId){
    let url='restservices/ClientInboxService/loadIndividualInboxItemPagination/roleCode/'+roleId+'/offset/10'
    return  this.apiService.post(url,this.apiObject);
  }
  getUnAssInboxData(roleId){
    let url='restservices/ClientInboxService/loadUnclaimedGroupInboxWithSortAndFilter/roleCode/'+roleId+'/offset/10'
    return  this.apiService.post(url,this.apiObject);
  }

  getAssInboxData(roleId){
    let url='restservices/ClientInboxService/loadclaimedInboxWithSortAndFilter/roleCode/'+roleId+'/offset/10'
    return  this.apiService.post(url,this.apiObject);
  }
}