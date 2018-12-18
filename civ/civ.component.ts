import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'civ',
  templateUrl: './civ.component.html',
  styleUrls: ['./civ.component.css']
})
export class CivComponent implements OnInit {
  // selectedTab: any;
  // tabsList: any = [
  //     { id:2, displayText: "Work Item Details ", active: false, route:"clientProfile"},
  //     { id:1, displayText: "Executive Summary", active: true, route:"executive-summary"},
  //     { id:3, displayText: "Client Details ", route:"clientIdentificationandVerification/contact", active: false},
  //     { id:4, displayText: "Risk Rating ", active: false, route:"riskrating"},
  //     { id:5, displayText: "Appendix", active: false, route:"appendix"}        
  //   ]

  constructor(private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    //console.log(this.router.url);
    //this.selectedTab = this.tabsList[2];
  }

  // switchToTab(tabId, route){
  //   this.selectedTab = this.tabsList[tabId-1];
  //   this.router.navigate([ route ]);
  // }

}