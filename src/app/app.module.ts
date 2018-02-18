import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgmCoreModule} from '@agm/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { DashboardCarouselComponent } from './widget/dashboard-carousel/dashboard-carousel.component';
import { DashboardProductHighligthsComponent } from './widget/dashboard-product-highligths/dashboard-product-highligths.component';
import { DashboardCompanyComponent } from './widget/dashboard-company/dashboard-company.component';
import { AppFooterComponent } from './common/app-footer/app-footer.component';
import { PhoneFormatPipe } from './pipe/phone-format.pipe';
import { PostsViewComponent } from './view/posts-view/posts-view.component';
import { PageNotFoundViewComponent } from './view/page-not-found-view/page-not-found-view.component';
import {PostsService} from './service/posts.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path: 'dashboard', component: DashboardViewComponent},
  {path: 'posts', component: PostsViewComponent},
  {path: '**', component: PageNotFoundViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardViewComponent,
    DashboardCarouselComponent,
    DashboardProductHighligthsComponent,
    DashboardCompanyComponent,
    AppFooterComponent,
    PhoneFormatPipe,
    PostsViewComponent,
    PageNotFoundViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIqMECcFxjuaPSc6ItWxh7p0lpdR6XYrE'
    })
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
