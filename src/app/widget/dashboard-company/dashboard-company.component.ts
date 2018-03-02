import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.less']
})
export class DashboardCompanyComponent implements OnInit {
  lat = 41.172023;
  lng = -8.587747;

  companyName = 'Marias Bonitas ';
  companyAddress = 'Rua de Costa Cabral 1818 4200-216 Porto';
  companyContactUsEmail = 'mariasbonitas045@gmail.com';
  companyPhone = '+351 914 903 755';

  constructor() { }

  ngOnInit() {

  }
}
