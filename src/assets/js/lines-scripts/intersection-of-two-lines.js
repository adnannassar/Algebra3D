let ggbApp;
init(false);


let
  G_BaseVector_x, G_BaseVector_y, G_BaseVector_z,
  G_DirectionVector_x, G_DirectionVector_y, G_DirectionVector_z;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getLineValues(lineId) {
  G_BaseVector_x = document.getElementById(`G${lineId}-base-vector-x`).value;
  G_BaseVector_y = document.getElementById(`G${lineId}-base-vector-y`).value;
  G_BaseVector_z = document.getElementById(`G${lineId}-base-vector-z`).value;
  G_DirectionVector_x = document.getElementById(`G${lineId}-direction-vector-x`).value;
  G_DirectionVector_y = document.getElementById(`G${lineId}-direction-vector-y`).value;
  G_DirectionVector_z = document.getElementById(`G${lineId}-direction-vector-z`).value;
}

function fillTestValuesInLine(lineId) {
  document.getElementById(`G${lineId}-base-vector-x`).value = randomInRange(1, 5);
  document.getElementById(`G${lineId}-base-vector-y`).value = randomInRange(1, 5);
  document.getElementById(`G${lineId}-base-vector-z`).value = randomInRange(1, 5);
  document.getElementById(`G${lineId}-direction-vector-x`).value = randomInRange(1, 5);
  document.getElementById(`G${lineId}-direction-vector-y`).value = randomInRange(1, 5);
  document.getElementById(`G${lineId}-direction-vector-z`).value = randomInRange(1, 5);
}

function drawLine(lineId) {
  getLineValues(lineId);
  if (okayToDrawLine(lineId)) {
    ggbApplet.evalCommand(`A_${lineId}= (${G_BaseVector_x} , ${G_BaseVector_y} ,${G_BaseVector_z})`);
    ggbApplet.setFixed(`A_${lineId}`, false, false);

    ggbApplet.evalCommand(`B_${lineId}= (${G_DirectionVector_x} , ${G_DirectionVector_y} ,${G_DirectionVector_z})`);
    ggbApplet.setFixed(`B_${lineId}`, false, false);

    ggbApplet.evalCommand(`G_${lineId}= Line(A_${lineId},B_${lineId})`);

    ggbApplet.registerUpdateListener("updatePoint");

  } else {
    window.alert(`Bitte zu erst alle Werte der Gerade G${lineId} eingeben`);
  }
}


function okayToDrawLine(lineId) {
  return document.getElementById(`G${lineId}-base-vector-x`).value !== '' &&
    document.getElementById(`G${lineId}-base-vector-y`).value !== '' &&
    document.getElementById(`G${lineId}-base-vector-z`).value !== '' &&
    document.getElementById(`G${lineId}-direction-vector-x`).value !== '' &&
    document.getElementById(`G${lineId}-direction-vector-y`).value !== '' &&
    document.getElementById(`G${lineId}-direction-vector-z`).value !== '';
}

function okayToFindIntersectionPoint() {
  return ggbApplet.getVisible('G_1') && ggbApplet.getVisible('G_2');
}

function findIntersectionPointBetweenTwoLines() {
  if (okayToFindIntersectionPoint()) {
    ggbApplet.evalCommand(`Schnittpunkt = Intersect(G_1,G_2)`);
    ggbApplet.setColor('Schnittpunkt', 255, 0, 0);


    let intersectionPointString = ggbApplet.getValueString("Schnittpunkt");
    let intersectionPointStringEdited = intersectionPointString.substring(16, intersectionPointString.length - 1);
    let intersectionPointStringRow = intersectionPointStringEdited.replace(/\s/g, "");

    if (intersectionPointStringEdited.startsWith('?')) {
      document.getElementById(`P1-x`).style.color = "red";
      document.getElementById(`P1-y`).style.color = "red";
      document.getElementById(`P1-z`).style.color = "red";
      document.getElementById(`no-intersection`).style.display = "block";
    } else {
      document.getElementById(`P1-x`).style.color = "black";
      document.getElementById(`P1-y`).style.color = "black";
      document.getElementById(`P1-z`).style.color = "black";
      document.getElementById(`no-intersection`).style.display = "none";
    }

    document.getElementById(`P1-x`).value = getCoordinate(intersectionPointStringRow, 'x')
    document.getElementById(`P1-y`).value = getCoordinate(intersectionPointStringRow, 'y');
    document.getElementById(`P1-z`).value = getCoordinate(intersectionPointStringRow, 'z');

  } else {
    window.alert(`Bitte zu erst die Geraden G1 und G2 zeichnen lassen`);
  }
}


function updatePoint(obj) {

  if (ggbApplet.getObjectType(obj) === "line") {
    findIntersectionPointBetweenTwoLines();
  }
}


function clearInputs() {

  for (let i = 1; i <= 2; i++) {
    document.getElementById(`G${i}-base-vector-x`).value = '';
    document.getElementById(`G${i}-base-vector-y`).value = '';
    document.getElementById(`G${i}-base-vector-z`).value = '';
    document.getElementById(`G${i}-direction-vector-x`).value = '';
    document.getElementById(`G${i}-direction-vector-y`).value = '';
    document.getElementById(`G${i}-direction-vector-z`).value = '';
    document.getElementById(`P1-x`).value = '';
    document.getElementById(`P1-y`).value = '';
    document.getElementById(`P1-z`).value = '';
    document.getElementById(`no-intersection`).style.display = "none";
  }

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

function init(informative) {
  ggbApp = initGgApplet(informative);
  registerGbApplet();
}





