import { Component, OnInit } from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.less']
})
export class DashboardCompanyComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {

  }
}
