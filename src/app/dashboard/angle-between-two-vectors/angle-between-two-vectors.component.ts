import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-angle-between-two-vectors',
  templateUrl: './angle-between-two-vectors.component.html',
  styleUrls: ['./angle-between-two-vectors.component.css']
})
export class AngleBetweenTwoVectorsComponent implements OnInit {

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
    this.scriptService.load('geogebra-applet-angle-between-two-vectors').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {
    this.loadLine1InputForm1()
    this.loadLine2InputForm1();

  }

  loadLine1InputForm1() {
    fetch('/assets/math-templates/angle-between-two-vectors/vector1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.lineForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadLine2InputForm1() {
    fetch('/assets/math-templates/angle-between-two-vectors/vector2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.lineForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }





}
