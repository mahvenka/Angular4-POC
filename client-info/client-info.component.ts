import { Component, OnInit } from '@angular/core';
import { Router, CanActivate,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
// import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInformationComponent implements OnInit {
  
  public clientInfo: any = this.globalService.inboxClientData;
  clientInfoFlag: boolean= false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private globalService: GlobalService ) { }

  

  ngOnInit() {
    //console.log(this.router.url);
    this.clientInfo = this.globalService.getInboxClientData()
    console.log(this.globalService.getInboxClientData());
    
  }

  


}