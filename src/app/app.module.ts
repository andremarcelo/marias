import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path: 'dashboard', redirectTo: 'DashboardViewComponent'},
  {path: '**', component: DashboardViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
