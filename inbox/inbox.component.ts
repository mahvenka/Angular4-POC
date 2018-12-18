import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs';
import { concat } from 'rxjs/observable/concat';

import { InboxService } from './services/inbox.service';

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inboxId: any;
  inboxTabProgressBar: boolean=true;
  selectedTab: any;
  roleList:any;
  tabsList: any = [
    {
      "roleId" : "MY_INBOX",
      "name" : "MY INBOX",
      "inboxType" : "Individual",
      "tblRoleId" : "0"
    }
  ]
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private inboxService:InboxService
  ){}
  userId: any;

  ngOnInit() {

    
    this.getRoleList();
    this.selectedTab = this.tabsList[0];
    this.inboxService.tabdetail=this.selectedTab;
    //this.inboxService.getInboxData();

  }

  getRoleList(){
   
    this.inboxService.getRoleId().subscribe(data => {
     this.roleList=data;this.tabsList=this.tabsList.concat(this.roleList);
     this.inboxTabProgressBar=false;
    })
   
    
  }

  switchToTab(tab){
    
      this.selectedTab =tab;
    
    this.inboxService.tabdetail=this.selectedTab
   // console.log(this.inboxService.tabdetail)
    this.router.navigate(['inbox',tab.roleId]);
  }
}