import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-intersection-plane-and-line',
  templateUrl: './intersection-plane-and-line.component.html',
  styleUrls: ['./intersection-plane-and-line.component.css']
})
export class IntersectionPlaneAndLineComponent implements OnInit {

  planeForm1: SafeHtml = '';
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
    this.scriptService.load('geogebra-applet-intersection-plane-line').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {

    this.loadPlane1InputForm1();
    this.loadIntersectionForm();
  }

  loadPlane1InputForm1() {
    fetch('/assets/math-templates/intersection-plane-and-line/plane-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.planeForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadIntersectionForm() {
    fetch('/assets/math-templates/intersection-plane-and-line/line-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.intersectionForm = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

}
