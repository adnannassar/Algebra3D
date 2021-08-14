import {
  Component,
  Inject, Input,
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
    // @ts-ignore
    /*
    document.getElementById("test").innerHTML = `
        <div class="plane-form">
  <math>
    <msub>
      <mo>E</mo>
      <mn>1</mn>
    </msub>
    <mfenced open="{" close="}">
      <mtable>
        <mrow class="MJX-TeXAtom-ORD">
          <mover>
            <mi>x</mi>
            <mo stretchy="false">&#x2192;</mo>
          </mover>
          <mo>&isin;</mo>
          <msup>
            <mi mathvariant="double-struck">R</mi>
            <mn>3</mn>
          </msup>
          <mo>&#x2223;</mo>
          <mo>&#8707;</mo>
          <mo>&nbsp;</mo>
          <msub>
            <mi>k</mi>
            <mn>1</mn>
          </msub>
          <mo>,</mo>
          <msub>
            <mi>k</mi>
            <mn>2</mn>
          </msub>
          <mo>&isin;</mo>
          <mi mathvariant="double-struck">R</mi>
          <mo>:</mo>
          <mover>
            <mi>x</mi>
            <mo stretchy="false">&#x2192;</mo>
          </mover>
          <mo>=</mo>
          <mo>(</mo>
          <mtable rowspacing="4pt" columnspacing="1em">
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-base-vector-01" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-base-vector-02" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-base-vector-03" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
          </mtable>
          <mo>)</mo>
          <mo>+</mo>
          <msub>
            <mi>k</mi>
            <mn>1</mn>
          </msub>
          <mo>(</mo>
          <mtable rowspacing="4pt" columnspacing="1em">
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-direction-vector-01-a" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-direction-vector-01-b" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-direction-vector-01-c" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
          </mtable>
          <mo>)</mo>
          <mo>+</mo>
          <msub>
            <mi>k</mi>
            <mn>2</mn>
          </msub>
          <mo>(</mo>
          <mtable rowspacing="4pt" columnspacing="1em">
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-direction-vector-02-a" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-direction-vector-02-b" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E1-direction-vector-02-c" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
          </mtable>
          <mo>)</mo>
        </mrow>
      </mtable>
    </mfenced>
  </math>
  <button onclick="fillTestValuesInPlanes(1);">Füllen mit Testwerten</button>
</div>

        <div class="plane-form">
  <math>
    <msub>
      <mo>E</mo>
      <mn>2</mn>
    </msub>
    <mfenced open="{" close="}">
      <mtable>
        <mrow class="MJX-TeXAtom-ORD">
          <mover>
            <mi>x</mi>
            <mo stretchy="false">&#x2192;</mo>
          </mover>
          <mo>&isin;</mo>
          <msup>
            <mi mathvariant="double-struck">R</mi>
            <mn>3</mn>
          </msup>
          <mo>&#x2223;</mo>
          <mo>&#8707;</mo>
          <mo>&nbsp;</mo>
          <msub>
            <mi>k</mi>
            <mn>3</mn>
          </msub>
          <mo>,</mo>
          <msub>
            <mi>k</mi>
            <mn>4</mn>
          </msub>
          <mo>&isin;</mo>
          <mi mathvariant="double-struck">R</mi>
          <mo>:</mo>
          <mover>
            <mi>x</mi>
            <mo stretchy="false">&#x2192;</mo>
          </mover>
          <mo>=</mo>
          <mo>(</mo>
          <mtable rowspacing="4pt" columnspacing="1em">
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-base-vector-01" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-base-vector-02" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-base-vector-03" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
          </mtable>
          <mo>)</mo>
          <mo>+</mo>
          <msub>
            <mi>k</mi>
            <mn>3</mn>
          </msub>
          <mo>(</mo>
          <mtable rowspacing="4pt" columnspacing="1em">
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-direction-vector-01-a" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-direction-vector-01-b" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-direction-vector-01-c" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
          </mtable>
          <mo>)</mo>
          <mo>+</mo>
          <msub>
            <mi>k</mi>
            <mn>4</mn>
          </msub>
          <mo>(</mo>
          <mtable rowspacing="4pt" columnspacing="1em">
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-direction-vector-02-a" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-direction-vector-02-b" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <semantics>
                  <annotation-xml encoding="application/xhtml+xml">
                    <input ID="E2-direction-vector-02-c" xmlns="http://www.w3.org/1999/xhtml" class="vector-input">
                  </annotation-xml>
                </semantics>
              </mtd>
            </mtr>
          </mtable>
          <mo>)</mo>
        </mrow>
      </mtable>
    </mfenced>
  </math>
  <button onclick="fillTestValuesInPlanes(2);">Füllen mit Testwerten</button>
</div>

        <button onclick="drawPlane(1);">Ebene 1 zeichnen</button>
        <button onclick="drawPlane(2);">Ebene 2 zeichnen</button>
        <button onclick="reset();">Reset</button>
        <button onclick="findIntersection()">Schnittmenge</button>

        <div id="ggb-element"></div>`;
     */
    this.loadPlane1InputForm1();
    this.loadPlane1InputForm2();
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


}
