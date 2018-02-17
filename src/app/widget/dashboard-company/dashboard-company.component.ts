import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.less']
})
export class DashboardCompanyComponent implements OnInit {
  lat = 31.276650;
  lng = 34.803724;

  companyName = 'Company name';
  companyAddress = 'downtown 123, Metropolis, USA';
  companyContactUsEmail = 'contact-us@company.com';
  companyPhone = '523345215215';

  constructor() { }

  ngOnInit() {

  }
}
