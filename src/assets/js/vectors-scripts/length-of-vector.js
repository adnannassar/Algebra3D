let ggbApp;
init(false);


let
  V_x, V_y, V_z;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getVectorValues() {
  V_x = document.getElementById(`V-x`).value;
  V_y = document.getElementById(`V-y`).value;
  V_z = document.getElementById(`V-z`).value;
}

function fillTestValuesInVector() {
  document.getElementById(`V-x`).value = randomInRange(1, 5);
  document.getElementById(`V-y`).value = randomInRange(1, 5);
  document.getElementById(`V-z`).value = randomInRange(1, 5);
}

function drawVector() {
  getVectorValues();
  if (okayToDrawVector()) {

    ggbApplet.evalCommand(`A= (0,0,0)`);
    ggbApplet.setFixed(`A`, false, false);
    ggbApplet.setVisible(`A`, false);

    ggbApplet.evalCommand(`B=(${V_x} , ${V_y} ,${V_z})`);
    ggbApplet.setFixed(`B`, false, false);

    ggbApplet.evalCommand(`V= Vector(A,B)`);

    ggbApplet.registerUpdateListener("updateVector");

  } else {
    window.alert(`Bitte zu erst alle Werte des Vektors V eingeben`);
  }
}

function okayToDrawVector() {
  return document.getElementById(`V-x`).value !== '' &&
    document.getElementById(`V-y`).value !== '' &&
    document.getElementById(`V-z`).value !== '';
}

function calculateLengthOfVector() {
  if (okayToCalculateLengthOfVecor()) {
    if (ggbApplet.getVisible('text1')) {
      ggbApplet.deleteObject('text1');
    }
    ggbApplet.evalCommand('l = Distance(A,B)')

    ggbApplet.evalCommand('Text(" ["+Name(A)+ " " +Name(B)+" = "+l+"]", (Midpoint(A,B)), false)');
    ggbApplet.setColor('text1', 128, 0, 128);

    document.getElementById("length-result").innerHTML =
      ggbApplet.getValueString("l").substring(1, ggbApplet.getValueString("l").length);
  } else {
    window.alert(`Bitte zu erst den Vektoren V zeichnen lassen`);
  }
}

function okayToCalculateLengthOfVecor() {
  return ggbApplet.getVisible('V');
}

function updateVector(obj) {

  if (ggbApplet.getObjectType(obj) === "vector") {
    ggbApplet.deleteObject('text1');

    calculateLengthOfVector();
  }
}

function clearInputs() {

  for (let i = 1; i <= 2; i++) {
    document.getElementById(`V-x`).value = '';
    document.getElementById(`V-y`).value = '';
    document.getElementById(`V-z`).value = '';
  }
  document.getElementById(`length-result`).innerHTML = '';

  // enableButtons();
}

function disableButtons() {
  document.getElementById("fillEBtn").disabled = true;
  document.getElementById("fillGBtn").disabled = true;
  document.getElementById("drawEBtn").disabled = true;
  document.getElementById("drawGBtn").disabled = true;
  document.getElementById("intersectionBtn").disabled = true;
}

function enableButtons() {
  document.getElementById("fillEBtn").disabled = false;
  document.getElementById("fillGBtn").disabled = false;
  document.getElementById("drawEBtn").disabled = false;
  document.getElementById("drawGBtn").disabled = false;
  document.getElementById("intersectionBtn").disabled = false;
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function initGgApplet(informative) {

  return informative ? new GGBApplet({
    "appName": '3d',
    "showMenuBar": true,
    "showToolBar": true,
    "enableLabelDrags": true,
    "enableRightClick": true,
    "errorDialogsActive": true,
    "useBrowserForJS": true,
    "enableUndoRedo": true,
    "material_id": 'zu9afzy8',
    "scaleContainerClass": "d-flex",
    "autoHeight": true,
    "borderColor": "rgba(106,104,104,0.24)",
  }, true) : new GGBApplet({
    "appName": '3d',
    "showMenuBar": false,
    "showToolBar": false,
    "enableLabelDrags": false,
    "enableRightClick": false,
    "errorDialogsActive": false,
    "useBrowserForJS": true,
    "enableUndoRedo": false,
    "material_id": 'zu9afzy8',
    "scaleContainerClass": "d-flex",
    "autoHeight": true,
    "borderColor": "rgba(106,104,104,0.24)",
  }, true);
}

function registerGbApplet() {
  window.addEventListener("load", function () {
    ggbApp.inject("ggb-element");
  });
}

function init(informative) {
  ggbApp = initGgApplet(informative);
  registerGbApplet();
}





