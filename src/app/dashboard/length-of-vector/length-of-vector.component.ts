import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-length-of-vektor',
  templateUrl: './length-of-vector.component.html',
  styleUrls: ['./length-of-vector.component.css']
})
export class LengthOfVectorComponent implements OnInit {

  pointForm1: SafeHtml = '';
  pointForm2: SafeHtml = '';


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
    this.scriptService.load('geogebra-applet-length-of-vector').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {
    this.loadPoint1Form();
    this.loadPoint2Form();

  }


  loadPoint1Form() {
    fetch('/assets/math-templates/length-of-vector/point1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.pointForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadPoint2Form() {
    fetch('/assets/math-templates/length-of-vector/point2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.pointForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }


}
