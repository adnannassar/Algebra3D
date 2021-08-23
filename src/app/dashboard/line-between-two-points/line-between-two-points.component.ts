import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-line-between-two-points',
  templateUrl: './line-between-two-points.component.html',
  styleUrls: ['./line-between-two-points.component.css']
})
export class LineBetweenTwoPointsComponent implements OnInit {
  pointForm1: SafeHtml = '';
  pointForm2: SafeHtml = '';
  intersectionForm: SafeHtml = '';

  constructor(private _renderer2: Renderer2,
              @Inject(DOCUMENT) private _document: Document,
              private sanitizer: DomSanitizer,
              private scriptService: ScriptService,) {

  }

  ngOnInit(): void {
    this.loadHtml().then(() => this.loadScripts()).then(() => this.loadApplet());
  }

  async loadScripts() {
    this.scriptService.load('mathjax-script-source').then(data => {
      console.log('mathjax-script-source loaded ', data);
    }).catch(error => console.log(error));

    await this.scriptService.load('geogebra-script-source').then(data => {
      console.log('geogebra-source loaded ', data);
    }).catch(error => console.log(error));


  }

  async loadApplet() {
    this.scriptService.load('geogebra-applet-line-between-two-points').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {
    this.loadPoint1Form();
    this.loadPoint2Form();
    this.loadResultForm();
  }


  loadPoint1Form() {
    fetch('/assets/math-templates/line-between-two-points/point1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.pointForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadPoint2Form() {
    fetch('/assets/math-templates/line-between-two-points/point2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.pointForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadResultForm() {
    fetch('/assets/math-templates/line-between-two-points/line-output-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.intersectionForm = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
}
