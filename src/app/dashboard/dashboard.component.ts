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


  moveToIntersectionOfPlanes() {
    this.router.navigate(['intersection-planes'])
      .then(() => {
        window.location.reload();
      });
  }

  moveToIntersectionOfPlaneAndLine() {
    this.router.navigate(['intersection-plane-and-line'])
      .then(() => {
        window.location.reload();
      });
  }
}
