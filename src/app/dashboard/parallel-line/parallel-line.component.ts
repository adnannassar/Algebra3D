import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-parallel-line',
  templateUrl: './parallel-line.component.html',
  styleUrls: ['./parallel-line.component.css']
})
export class ParallelLineComponent implements OnInit {

  lineForm1: SafeHtml = '';
  lineForm2: SafeHtml = '';

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
    this.scriptService.load('geogebra-applet-parallel-line').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {
    this.loadPoint1Form();
    this.loadPoint2Form();

  }


  loadPoint1Form() {
    fetch('/assets/math-templates/parallel-line/line1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.lineForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadPoint2Form() {
    fetch('/assets/math-templates/parallel-line/line2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.lineForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }


}
