import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {IntersectionTwoPlanesComponent} from "./dashboard/intersection-two-planes/intersection-two-planes.component";
import {IntersectionPlaneAndLineComponent} from "./dashboard/intersection-plane-and-line/intersection-plane-and-line.component";
import {LineBetweenTwoPointsComponent} from "./dashboard/line-between-two-points/line-between-two-points.component";
import {LengthBetweenTwoPointsComponent} from "./dashboard/length-between-two-points/length-between-two-points.component";
import {ParallelLineComponent} from "./dashboard/parallel-line/parallel-line.component";
import {IntersectionOfTwoLinesComponent} from "./dashboard/intersection-of-two-lines/intersection-of-two-lines.component";
import {ParallelPlaneComponent} from "./dashboard/parallel-plane/parallel-plane.component";


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'line-between-two-points', component: LineBetweenTwoPointsComponent},
  {path: 'length-between-two-points', component: LengthBetweenTwoPointsComponent},
  {path: 'parallel-line', component: ParallelLineComponent},
  {path: 'intersection-of-two-lines', component: IntersectionOfTwoLinesComponent},
  {path: 'intersection-plane-and-line', component: IntersectionPlaneAndLineComponent},
  {path: 'intersection-planes', component: IntersectionTwoPlanesComponent},
  {path: 'parallel-plane', component: ParallelPlaneComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
