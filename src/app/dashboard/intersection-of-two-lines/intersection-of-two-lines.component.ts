import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-intersection-of-two-lines',
  templateUrl: './intersection-of-two-lines.component.html',
  styleUrls: ['./intersection-of-two-lines.component.css']
})
export class IntersectionOfTwoLinesComponent implements OnInit {

  lineForm1: SafeHtml = '';
  lineForm2: SafeHtml = '';
  intersectionPoint: SafeHtml = '';

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
    this.scriptService.load('geogebra-applet-intersection-of-two-lines').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {
    this.loadLine1InputForm1()
    this.loadLine2InputForm1();
    this.loadIntersectionPoint();
  }

  loadLine1InputForm1() {
    fetch('/assets/math-templates/intersection-of-two-lines/line1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.lineForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadLine2InputForm1() {
    fetch('/assets/math-templates/intersection-of-two-lines/line2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.lineForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadIntersectionPoint() {
    fetch('/assets/math-templates/intersection-of-two-lines/point-output-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.intersectionPoint = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }


}
