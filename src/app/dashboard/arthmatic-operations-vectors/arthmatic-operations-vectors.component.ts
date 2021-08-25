import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScriptService} from "../../services/script.service";

@Component({
  selector: 'app-arthmatic-operations-vectors',
  templateUrl: './arthmatic-operations-vectors.component.html',
  styleUrls: ['./arthmatic-operations-vectors.component.css']
})
export class ArthmaticOperationsVectorsComponent implements OnInit {


  vectorInputForm1: SafeHtml = '';
  vectorInputForm2: SafeHtml = '';
  vectorOutputForm: SafeHtml = '';

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
    this.scriptService.load('arithmatic-operations-vectors').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {
    this.loadVector1InputForm()
    this.loadVector2InputForm();
    this.loadVectorOutputForm();
  }

  loadVector1InputForm() {
    fetch('/assets/math-templates/arithmatic-operations-vectors/vector1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.vectorInputForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadVector2InputForm() {
    fetch('/assets/math-templates/arithmatic-operations-vectors/vector2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.vectorInputForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadVectorOutputForm() {
    fetch('/assets/math-templates/arithmatic-operations-vectors/vector-output-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.vectorOutputForm = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }


}
