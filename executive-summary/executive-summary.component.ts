import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ExecutiveSummaryService } from "./executive-summary.service";
@Component({
  selector: 'app-executive-summary',
  templateUrl: './executive-summary.component.html',
  styleUrls: ['./executive-summary.component.css']
})
export class ExecutiveSummaryComponent implements OnInit {
   loadingFlag : boolean=false;
   public execData;
  constructor(
    private executiveSummaryService : ExecutiveSummaryService
  ) { }

  ngOnInit() {
    this.getExecutiveSummaryData().subscribe(data => {
      this.execData = data.clientSummaryInfo;
      this.loadingFlag = true;
    })
  }

  getExecutiveSummaryData(){
    let url = 'restservices/FormPersistenceAndQueryService/loadExecutiveSummary/a61545a6-0166-1000-a974-28f000061af8';
    return this.executiveSummaryService.get(url);
  }
  // nameOfTheClient = 'CITI';
}
