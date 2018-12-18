import { Component, OnInit } from '@angular/core';
import { Router, CanActivate,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-tab-details',
  templateUrl: './form-tab-details.component.html',
  styleUrls: ['./form-tab-details.component.css']
})
export class FormTabDetailsComponent implements OnInit {
  public selectedTab: any;
  tabsList: any = [
    { id:1, displayText: "Work Item Details ", active: false, route:"/clientProfile"},
    { id:2, displayText: "Executive Summary", active: true, route:"/executive-summary"},
    { id:3, displayText: "Client Details ", route:"/clientIdentificationandVerification/contact", active: false},
    { id:4, displayText: "Risk Rating ", active: false, route:"/risk-rating"},
    { id:5, displayText: "Appendix", active: false, route:"/appendix/member"}        
  ]
  currentUrl:string;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.selectedTab = this.tabsList[1]; 
  }

  switchToTab(tab){
    this.selectedTab = tab ;
    this.router.navigate([ tab.route ]);
  }
}
