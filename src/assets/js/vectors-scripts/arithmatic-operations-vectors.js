let ggbApp;
init(false);


let
  V1_BaseVector_x, V1_BaseVector_y, V1_BaseVector_z,
  V1_DirectionVector_x, V1_DirectionVector_y, V1_DirectionVector_z,

  V2_BaseVector_x, V2_BaseVector_y, V2_BaseVector_z,
  V2_DirectionVector_x, V2_DirectionVector_y, V2_DirectionVector_z,

  V_out_BaseVector_x, V_out_BaseVector_y, V_out_BaseVector_z,
  V_out_DirectionVector_x, V_out_DirectionVector_y, V_out_DirectionVector_z;


function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getVectorValues(vectorId) {
  if (vectorId === 1) {
    V1_BaseVector_x = document.getElementById(`V${vectorId}-base-vector-x`).value;
    V1_BaseVector_y = document.getElementById(`V${vectorId}-base-vector-y`).value;
    V1_BaseVector_z = document.getElementById(`V${vectorId}-base-vector-z`).value;
    V1_DirectionVector_x = document.getElementById(`V${vectorId}-direction-vector-x`).value;
    V1_DirectionVector_y = document.getElementById(`V${vectorId}-direction-vector-y`).value;
    V1_DirectionVector_z = document.getElementById(`V${vectorId}-direction-vector-z`).value;
  } else {
    V2_BaseVector_x = document.getElementById(`V${vectorId}-base-vector-x`).value;
    V2_BaseVector_y = document.getElementById(`V${vectorId}-base-vector-y`).value;
    V2_BaseVector_z = document.getElementById(`V${vectorId}-base-vector-z`).value;
    V2_DirectionVector_x = document.getElementById(`V${vectorId}-direction-vector-x`).value;
    V2_DirectionVector_y = document.getElementById(`V${vectorId}-direction-vector-y`).value;
    V2_DirectionVector_z = document.getElementById(`V${vectorId}-direction-vector-z`).value;
  }

}

function fillTestValuesInVector(lineId) {
  document.getElementById(`V${lineId}-base-vector-x`).value = randomInRange(1, 5);
  document.getElementById(`V${lineId}-base-vector-y`).value = randomInRange(1, 5);
  document.getElementById(`V${lineId}-base-vector-z`).value = randomInRange(1, 5);
  document.getElementById(`V${lineId}-direction-vector-x`).value = randomInRange(1, 5);
  document.getElementById(`V${lineId}-direction-vector-y`).value = randomInRange(1, 5);
  document.getElementById(`V${lineId}-direction-vector-z`).value = randomInRange(1, 5);
}

function drawVector(vectorId) {
  getVectorValues(vectorId);
  if (okayToDrawVector(vectorId)) {
    if (vectorId === 1) {
      ggbApplet.evalCommand(`A_${vectorId}= (${V1_BaseVector_x} , ${V1_BaseVector_y} ,${V1_BaseVector_z})`);
      ggbApplet.setFixed(`A_${vectorId}`, false, false);

      ggbApplet.evalCommand(`B_${vectorId}= (${V1_DirectionVector_x} , ${V1_DirectionVector_y} ,${V1_DirectionVector_z})`);
      ggbApplet.setFixed(`B_${vectorId}`, false, false);

      ggbApplet.evalCommand(`V_${vectorId}= Vector(A_${vectorId},B_${vectorId})`);

    } else {
      ggbApplet.evalCommand(`A_${vectorId}= (${V2_BaseVector_x} , ${V2_BaseVector_y} ,${V2_BaseVector_z})`);
      ggbApplet.setFixed(`A_${vectorId}`, false, false);

      ggbApplet.evalCommand(`B_${vectorId}= (${V2_DirectionVector_x} , ${V2_DirectionVector_y} ,${V2_DirectionVector_z})`);
      ggbApplet.setFixed(`B_${vectorId}`, false, false);

      ggbApplet.evalCommand(`V_${vectorId}= Vector(A_${vectorId},B_${vectorId})`);
    }

    // ggbApplet.registerUpdateListener("updatePoint");

  } else {
    window.alert(`Bitte zu erst alle Werte des Vektors V${vectorId} eingeben`);
  }
}


function okayToDrawVector(vectorId) {
  return document.getElementById(`V${vectorId}-base-vector-x`).value !== '' &&
    document.getElementById(`V${vectorId}-base-vector-y`).value !== '' &&
    document.getElementById(`V${vectorId}-base-vector-z`).value !== '' &&
    document.getElementById(`V${vectorId}-direction-vector-x`).value !== '' &&
    document.getElementById(`V${vectorId}-direction-vector-y`).value !== '' &&
    document.getElementById(`V${vectorId}-direction-vector-z`).value !== '';
}

function addTwoVectors() {
  if (okayToDoOperation()) {
    V_out_BaseVector_x = Number(V1_BaseVector_x) + Number(V2_BaseVector_x);
    V_out_BaseVector_y = Number(V1_BaseVector_y) + Number(V2_BaseVector_y);
    V_out_BaseVector_z = Number(V1_BaseVector_z) + Number(V2_BaseVector_z);
    V_out_DirectionVector_x = Number(V1_DirectionVector_x) + Number(V2_DirectionVector_x);
    V_out_DirectionVector_y = Number(V1_DirectionVector_y) + Number(V2_DirectionVector_y);
    V_out_DirectionVector_z = Number(V1_DirectionVector_z) + Number(V2_DirectionVector_z);

    ggbApplet.evalCommand(`C= (${V_out_BaseVector_x} , ${V_out_BaseVector_y} ,${V_out_BaseVector_z})`);
    ggbApplet.setFixed(`C`, false, false);

    ggbApplet.evalCommand(`D= (${V_out_DirectionVector_x} , ${V_out_DirectionVector_y} ,${V_out_DirectionVector_z})`);
    ggbApplet.setFixed(`D, false, false`);

    ggbApplet.evalCommand(`VOutPlus = Vector(C,D)`);
    ggbApplet.setColor('VOutPlus', 255, 0, 0);


    document.getElementById("V-out-base-vector-x").value = V_out_BaseVector_x;
    document.getElementById("V-out-base-vector-y").value = V_out_BaseVector_y;
    document.getElementById("V-out-base-vector-z").value = V_out_BaseVector_z;
    document.getElementById("V-out-direction-vector-x").value = V_out_DirectionVector_x;
    document.getElementById("V-out-direction-vector-y").value = V_out_DirectionVector_y;
    document.getElementById("V-out-direction-vector-z").value = V_out_DirectionVector_z;

    document.getElementById("result-container").style.display = "block";


  } else {
    window.alert(`Bitte zu erst die Vektoren V1 und V2 zeichnen lassen`);
  }
}

function subTwoVectors() {
  if (okayToDoOperation()) {

  } else {
    window.alert(`Bitte zu erst die Vektoren V1 und V2 zeichnen lassen`);
  }
}

function mulTwoVectors() {
  if (okayToDoOperation()) {

  } else {
    window.alert(`Bitte zu erst die Vektoren V1 und V2 zeichnen lassen`);
  }
}

function divTwoVectors() {
  if (okayToDoOperation()) {

  } else {
    window.alert(`Bitte zu erst die Vektoren V1 und V2 zeichnen lassen`);
  }
}

function scalarProduct() {
  if (okayToDoOperation()) {

  } else {
    window.alert(`Bitte zu erst die Vektoren V1 und V2 zeichnen lassen`);
  }
}

function okayToDoOperation() {
  return ggbApplet.getVisible('V_1') && ggbApplet.getVisible('V_2');
}

function findIntersectionPointBetweenTwoLines() {
  if (okayToDoOperation()) {
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





