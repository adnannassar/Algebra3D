import {
  Component,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ScriptService} from "../../services/script.service";


@Component({
  selector: 'app-intersection-two-planes',
  templateUrl: './intersection-two-planes.component.html',
  styleUrls: ['./intersection-two-planes.component.scss'],

})
export class IntersectionTwoPlanesComponent implements OnInit {
  planeForm1: SafeHtml = '';
  planeForm2: SafeHtml = '';
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
    this.scriptService.load('geogebra-applet').then(data => {
      console.log('geogebra-applet loaded ', data);
    }).catch(error => console.log(error));
  }

  async loadHtml() {

    this.loadPlane1InputForm1();
    this.loadPlane1InputForm2();
    this.loadIntersectionForm();
  }

  loadPlane1InputForm1() {
    fetch('/assets/math-templates/intersection-of-two-planes/plane1-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.planeForm1 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadPlane1InputForm2() {
    fetch('/assets/math-templates/intersection-of-two-planes/plane2-input-form.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.planeForm2 = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }

  loadIntersectionForm() {
    fetch('/assets/math-templates/intersection-of-two-planes/intersection-line-two-planes.html').then(res => res.text()).then(data => {
      console.log('HTML loaded');
      this.intersectionForm = this.sanitizer.bypassSecurityTrustHtml(data);
    });
  }


}
