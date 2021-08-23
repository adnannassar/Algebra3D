import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }


  navigateToIntersectionOfPlanes() {
    this.router.navigate(['intersection-planes'])
      .then(() => {
        window.location.reload();
      });
  }

  navigateToIntersectionOfPlaneAndLine() {
    this.router.navigate(['intersection-plane-and-line'])
      .then(() => {
        window.location.reload();
      });
  }
  navigateToLineBetweenTowPoints() {
    this.router.navigate(['line-between-two-points'])
      .then(() => {
        window.location.reload();
      });
  }
  navigateToLengthBetweenTwoPoints() {
    this.router.navigate(['length-between-two-points'])
      .then(() => {
        window.location.reload();
      });
  }
  navigateToParallelLine() {
    this.router.navigate(['parallel-line'])
      .then(() => {
        window.location.reload();
      });
  }
  navigateToIntersectionOfTwoLine() {
    this.router.navigate(['intersection-of-two-lines'])
      .then(() => {
        window.location.reload();
      });
  }
}
