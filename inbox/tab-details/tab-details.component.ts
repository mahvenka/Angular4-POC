import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../../shared/services/api.service';
import { GlobalService  } from '../../global.service';
import { InboxService } from '../services/inbox.service';
import { Http, Headers } from '@angular/http';
import {tap } from  "rxjs/operators/tap";
import { pluck } from "rxjs/operators/pluck";
import { filter, switchMap, shareReplay, map } from "rxjs/operators";

@Component({
    selector: 'tabDetails',
    templateUrl: './tab-details.component.html',
    styleUrls: ['./tab-details.component.css']
})

export class TabDetailComponent implements OnInit {
    public rowDatareadyFlag: boolean =true;
    public groupInboxFlag : boolean =false;
    public rowData: any;
    public unAssignedRowData: any;
    public tabName : any;
    public getRowHeight = 125;
    public gridApi;
    public gridColumnApi;
    public columnDefs = [
        { headerName: 'Client Id', field: 'gfcId', width: 110,
            
        cellRenderer: function(params){
            let icon = "<a href='javascript:void(0);' data-action-type='view'; data-action-value='"+params.value+"'>"+params.value+"</a>";
            return icon;
          }
        },
        { headerName: 'Client Id Type', field: 'idType', width: 150 },
        { headerName: 'Client Name', field: 'clientName', width: 150 },
        { headerName: 'Business Internal Name', field: 'businessInternalName', width: 160 },
        { headerName: 'Work Item ID', field: 'workItemIdReadOnly', width: 180 },
        { headerName: 'Country Of Citi Service', field: 'countryOfServiceName', width: 200 },
        { headerName: 'Record Creation Date', field: 'recordCreationDate', width: 200 },
        { headerName: 'Work Item Creation Date', field: 'creationDate', width: 200 },
        { headerName: 'Work Item Status', field: 'workItemStatusDesc', width: 200 },
        { headerName: 'Client Type', field: 'clientType', width: 150 },
        { headerName: 'Periodic review Date', field: 'periodicRevDate', width: 200 },
        { headerName: 'Work Item Type', field: 'workItemTypeDesc', width: 130 },
        { headerName: 'KYC Owner', field: 'kycOwner', width: 130 },
        { headerName: 'Parent ID', field: 'parentTaskId', width: 130 },
        { headerName: 'Assigned Date', field: 'assignedDate', width: 130 },
        { headerName: 'Domicile Country Of Client', field: 'countryOfService', width: 200 },
        { headerName: 'Risk Rating', field: 'riskRating', width: 130 },
        { headerName: 'Role', field: 'role', width: 130 },
        { headerName: 'Assigned To', field: 'assignedTo', width: 160 },
        { headerName: 'SLA Breach Indicator', field: 'slaBreachIndicator', width: 200 },
        { headerName: 'Managed Country', field: 'managedCountry', width: 200 }
    ];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private apiService: ApiService,
        private http: Http,
        private inboxService:InboxService,
        private globalService: GlobalService
    ) {}   
    
    routerId: any;

    ngOnInit(): void{
        this.rowData = [];
        const params$ = this.route.params;
     
        params$.pipe(
            pluck('id'),
            switchMap(this.fetchInboxData.bind(this)),
            shareReplay(1),
            tap(console.log),
        ).subscribe(data => {
            this.rowData = data.data; console.log(this.rowData);
            this.rowDatareadyFlag=false;
        })
    }

    fetchInboxData(id){
        let inboxData : any;
        this.rowDatareadyFlag=true;
        this.tabName=this.inboxService.tabdetail
        // console.log(this.tabName.roleId);
        if(this.tabName.roleId==="MY_INBOX"){
            inboxData= this.inboxService.getMyInboxData();
        }
        else if(this.tabName.inboxType==='Individual'){
             inboxData=this.inboxService.getMyIndiInboxData(this.tabName.roleId);
        }else{
            this.inboxService.getUnAssInboxData(this.tabName.roleId).subscribe(data =>{
                this.unAssignedRowData= data.data;
            }); 

            inboxData= this.inboxService.getAssInboxData(this.tabName.roleId)
        }
        return inboxData
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.gridcolumnApi;
    }


    myRowClickedHandler(event) {
        console.log('the row was clicked');
    }
    
    
    progressOnRowClicked($event) {
        if($event.event.target !== undefined){
            const actionType = $event.event.target.getAttribute('data-action-type');
            const selectedValue=$event.event.target.getAttribute('data-action-value');
            console.log(selectedValue);
            if(actionType == 'view'){
                //console.log('Change Route');
                for(let data of this.rowData){
                       if( data.gfcId == selectedValue){
                        this.globalService.setInboxClientData(data);
                    }
                }
                console.log(this.globalService.inboxClientData)
                this.router.navigateByUrl('/executive-summary');
            } else {
              return false;
            }
          }
    }

    
}