import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import {IntersectionTwoPlanesComponent} from './dashboard/intersection-two-planes/intersection-two-planes.component';
import {IntersectionPlaneAndLineComponent} from './dashboard/intersection-plane-and-line/intersection-plane-and-line.component';
import { LineBetweenTwoPointsComponent } from './dashboard/line-between-two-points/line-between-two-points.component';
import { LengthBetweenTwoPointsComponent } from './dashboard/length-between-two-points/length-between-two-points.component';
import { ParallelLineComponent } from './dashboard/parallel-line/parallel-line.component';
import { IntersectionOfTwoLinesComponent } from './dashboard/intersection-of-two-lines/intersection-of-two-lines.component';
import { ParallelPlaneComponent } from './dashboard/parallel-plane/parallel-plane.component';
import {AngleBetweenTwoVectorsComponent} from "./dashboard/angle-between-two-vectors/angle-between-two-vectors.component";
import {LengthOfVectorComponent} from "./dashboard/length-of-vector/length-of-vector.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IntersectionTwoPlanesComponent,
    IntersectionPlaneAndLineComponent,
    LineBetweenTwoPointsComponent,
    LengthBetweenTwoPointsComponent,
    ParallelLineComponent,
    IntersectionOfTwoLinesComponent,
    ParallelPlaneComponent,
    AngleBetweenTwoVectorsComponent,
    LengthOfVectorComponent
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
