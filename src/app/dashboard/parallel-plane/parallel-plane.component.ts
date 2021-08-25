import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-parallel-plane',
  templateUrl: './parallel-plane.component.html',
  styleUrls: ['./parallel-plane.component.css']
})
export class ParallelPlaneComponent implements OnInit {

  planeInputForm1: SafeHtml = '';
  planeInputForm2: SafeHtml = '';
  planeOutputForm1: SafeHtml = '';
  planeOutputForm2: SafeHtml = '';

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
    this.scriptService.load('geogebra-applet-parallel-plane').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {
    this.loadInputLie1Form();
    this.loadInputLie2Form();
    this.loadOutputLie1Form();
    this.loadOutputLie2Form();
  }


  loadInputLie1Form() {
    fetch('/assets/math-templates/parallel-plane/plane1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.planeInputForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadInputLie2Form() {
    fetch('/assets/math-templates/parallel-plane/plane2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.planeInputForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadOutputLie1Form() {
    fetch('/assets/math-templates/parallel-plane/plane1-output-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.planeOutputForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }
  loadOutputLie2Form() {
    fetch('/assets/math-templates/parallel-plane/plane2-output-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.planeOutputForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }


}
