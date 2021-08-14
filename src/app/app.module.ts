import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import {IntersectionTwoPlanesComponent} from './dashboard/intersection-two-planes/intersection-two-planes.component';
import {IntersectionPlaneAndLineComponent} from './dashboard/intersection-plane-and-line/intersection-plane-and-line.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IntersectionTwoPlanesComponent,
    IntersectionPlaneAndLineComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
