let ggbApp;
init(false);


let
  V_x, V_y, V_z;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getVectorValues(vectorId) {
  V_x = document.getElementById(`V${vectorId}-x`).value;
  V_y = document.getElementById(`V${vectorId}-y`).value;
  V_z = document.getElementById(`V${vectorId}-z`).value;
}

function fillTestValuesInVector(vectorId) {
  document.getElementById(`V${vectorId}-x`).value = randomInRange(1, 5);
  document.getElementById(`V${vectorId}-y`).value = randomInRange(1, 5);
  document.getElementById(`V${vectorId}-z`).value = randomInRange(1, 5);
}

function drawVector(vectorId) {
  getVectorValues(vectorId);
  if (okayToDrawVector(vectorId)) {

    ggbApplet.evalCommand(`A_${vectorId}= (0,0,0)`);
    ggbApplet.setFixed(`A_${vectorId}`, false, false);
    ggbApplet.setVisible(`A_${vectorId}`, false);

    ggbApplet.evalCommand(`B_${vectorId}=(${V_x} , ${V_y} ,${V_z})`);
    ggbApplet.setFixed(`B_${vectorId}`, false, false);

    ggbApplet.evalCommand(`V_${vectorId}= Vector(A_${vectorId},B_${vectorId})`);

    // ggbApplet.registerUpdateListener("updatePoint");

  } else {
    window.alert(`Bitte zu erst alle Werte des Vektors V${vectorId} eingeben`);
  }
}


function okayToDrawVector(vectorId) {
  return document.getElementById(`V${vectorId}-x`).value !== '' &&
    document.getElementById(`V${vectorId}-y`).value !== '' &&
    document.getElementById(`V${vectorId}-z`).value !== '';
}

function calculateAngel() {
  if (okayToCalculateAngel()) {
    ggbApplet.evalCommand('winkel = Angle(V_1, V_2)')
    ggbApplet.setColor('winkel', 255,165,0);

    document.getElementById("angel-result").innerHTML = ggbApplet.getValueString("winkel");
  } else {
    window.alert(`Bitte zu erst die Vektoren V1 und V2 zeichnen lassen`);
  }
}

function okayToCalculateAngel() {
  return ggbApplet.getVisible('V_1') && ggbApplet.getVisible('V_2');
}


function updatePoint(obj) {

  if (ggbApplet.getObjectType(obj) === "line") {
    findIntersectionPointBetweenTwoLines();
  }
}


function clearInputs() {

  for (let i = 1; i <= 2; i++) {
    document.getElementById(`V${i}-x`).value = '';
    document.getElementById(`V${i}-y`).value = '';
    document.getElementById(`V${i}-z`).value = '';
  }
  document.getElementById(`angel-result`).innerHTML = '';

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





