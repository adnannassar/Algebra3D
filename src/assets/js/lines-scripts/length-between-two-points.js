let ggbApp;
init(false);


let P1_x, P1_y, P1_z;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getPointValues(pointId) {
  P1_x = document.getElementById(`P${pointId}-x`).value;
  P1_y = document.getElementById(`P${pointId}-y`).value;
  P1_z = document.getElementById(`P${pointId}-z`).value;
}

function fillTestValuesInPoint(pointId) {
  document.getElementById(`P${pointId}-x`).value = randomInRange(1, 5)
  document.getElementById(`P${pointId}-y`).value = randomInRange(1, 5)
  document.getElementById(`P${pointId}-z`).value = randomInRange(1, 5)
}

function drawPoint(pointId) {
  getPointValues(pointId);
  if (okayToDrawPoint(pointId)) {
    ggbApplet.evalCommand(`P_${pointId}= (${P1_x} , ${P1_y} ,${P1_z})`);
    ggbApplet.setFixed(`P_${pointId}`, false, false);

    ggbApplet.registerUpdateListener("updateLine");

  } else {
    window.alert(`Bitte zu erst alle Werte des Punktes ${pointId} eingeben`);
  }
}

function calculateLength() {
  if (okayToDrawLine()) {
    ggbApplet.evalCommand(`S= Segment(P_1,P_2)`);
    ggbApplet.setFixed(`S`, false, false);
    ggbApplet.evalCommand('Text(" ["+Name(P_1)+ " " +Name(P_2)+" = "+S+"]", (Midpoint(P_1,P_2)), false)');
    ggbApplet.setColor('text1', 230, 20, 20)
    let lineBetweenTwoPoints = ggbApplet.getValueString("S");
    document.getElementById(`length-between-points`).innerHTML = lineBetweenTwoPoints.substr(3, lineBetweenTwoPoints.length);

  } else {
    window.alert("Bitte zu erst die Punkten P1, P2 zeichnen lassen")
  }

}

function updateLine(obj) {

  if (ggbApplet.getObjectType(obj) == "point") {
    ggbApplet.deleteObject('text1');
    calculateLength();
  }
}

function clearInputs() {

  for (let i = 1; i <= 2; i++) {
    document.getElementById(`P${i}-x`).value = '';
    document.getElementById(`P${i}-y`).value = '';
    document.getElementById(`P${i}-z`).value = '';
  }
  document.getElementById(`length-between-points`).innerHTML = '...';
  // enableButtons();
}

function okayToDrawPoint(pointId) {
  return document.getElementById(`P${pointId}-x`).value !== '' &&
    document.getElementById(`P${pointId}-y`).value !== '' &&
    document.getElementById(`P${pointId}-z`).value !== '';
}

function okayToDrawLine() {
  return ggbApplet.getVisible('P_1') && ggbApplet.getVisible('P_2');
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

function getCoordinate(baseString, coordinateLetter) {

  if (coordinateLetter && baseString) {
    let splitString = baseString.split(',')
    switch (coordinateLetter) {
      case 'x':
        return splitString[0]
      case 'y':
        return splitString[1]
      case 'z':
        return splitString[2]
      default:
        return '0'
    }
  }
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

function init(informativeApplet) {
  ggbApp = initGgApplet(informativeApplet);
  registerGbApplet();
}



