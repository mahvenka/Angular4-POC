import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'kyc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rowData: any;
  public getRowHeight = 125;
  public gridApi;
  public gridColumnApi;
  public columnDefs = [
    { headerName: 'Client Id', field: 'clientId', width: 110 },
    { headerName: 'client ID Type', field: 'clientIdType', width: 150 },
    { headerName: 'Client Name', field: 'clientName', width: 150 },
    { headerName: 'Business Internal Name', field: 'bin', width: 160 },
    { headerName: 'Work Item ID', field: 'workItemID', width: 180 },
    { headerName: 'Queue Name', field: 'qName', width: 160 },
    { headerName: 'Country', field: 'country', width: 130 }
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private httpService: HttpClient
  ) { }

  ngOnInit() {
    this.httpService.get('./assets/graphDetails.json').subscribe(
      data => {
        this.barChartData = data as any;
      },
      (err: HttpErrorResponse) =>{
        console.log(err.message);
      }
    );
    this.rowData =[
      {
        clientId: '1000212462',
        clientIdType: 'GFCID',
        clientName: 'OBERBANK AG',
        bin: 'OBERBANK',
        workItemID: '61384331'
      },
      {
        clientId: '1000212463',
        clientIdType: 'GFCID',
        clientName: 'AEOCC Management',
        bin: 'AEOCC',
        workItemID: '61384332'
      },
      {
        clientId: '1000212464',
        clientIdType: 'GFCID',
        clientName: 'OBERBANK AG',
        bin: 'OBERBANK',
        workItemID: '61384333'
      },
      {
        clientId: '1000212465',
        clientIdType: 'GFCID',
        clientName: 'OBERBANK AG',
        bin: 'OBERBANK',
        workItemID: '61384334'
      },
      {
        clientId: '1000212466',
        clientIdType: 'GFCID',
        clientName: 'OBERBANK AG',
        bin: 'OBERBANK',
        workItemID: '61384335'
      }
    ];
  }
  public barChartOptions: any ={
    scaleShowVerticalLines: false,
    responsive: true,
    scales:{
      xAxes : [{
        stacked: true
      }],
      yAxes : [{
        stacked: true
      }]
    }
  };
  public barChartLabels: string[]= ['Overdue','Due Today','Due This Week','Due Within 30 Days','Due After 30 Days'];
  public barChartType: string ='bar';
  public barChartLegend: boolean = true;

  public barChartData:any[]=[
    {data: [], label: ''}
  ];

  public barChartColors: Array<any> =[
    {
    backgroundColor: 'rgb(198, 176, 131 )'
    },
    {
      backgroundColor: 'orange'
    },
    {
      backgroundColor: 'rgb(30, 169, 224)'
    }
  ]

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  progressOnRowClicked($event){
    console.log($event);
  }


}
