let ggbApp;
init(false);


let
  E1_BaseVector_x, E1_BaseVector_y, E1_BaseVector_z,
  E1_DirectionVector1_x, E1_DirectionVector1_y, E1_DirectionVector1_z,
  E1_DirectionVector2_x, E1_DirectionVector2_y, E1_DirectionVector2_z,

  E2_BaseVector_x, E2_BaseVector_y, E2_BaseVector_z,
  E2_DirectionVector1_x, E2_DirectionVector1_y, E2_DirectionVector1_z,
  E2_DirectionVector2_x, E2_DirectionVector2_y, E2_DirectionVector2_z;


function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getPlaneValues(planeId) {
  if (planeId === 1) {
    E1_BaseVector_x = document.getElementById(`E${planeId}-base-vector-x`).value;
    E1_BaseVector_y = document.getElementById(`E${planeId}-base-vector-y`).value;
    E1_BaseVector_z = document.getElementById(`E${planeId}-base-vector-z`).value;
    E1_DirectionVector1_x = document.getElementById(`E${planeId}-direction-vector1-x`).value;
    E1_DirectionVector1_y = document.getElementById(`E${planeId}-direction-vector1-y`).value;
    E1_DirectionVector1_z = document.getElementById(`E${planeId}-direction-vector1-z`).value;
    E1_DirectionVector2_x = document.getElementById(`E${planeId}-direction-vector2-x`).value;
    E1_DirectionVector2_y = document.getElementById(`E${planeId}-direction-vector2-y`).value;
    E1_DirectionVector2_z = document.getElementById(`E${planeId}-direction-vector2-z`).value;
  } else {
    E2_BaseVector_x = document.getElementById(`E${planeId}-base-vector-x`).value;
    E2_BaseVector_y = document.getElementById(`E${planeId}-base-vector-y`).value;
    E2_BaseVector_z = document.getElementById(`E${planeId}-base-vector-z`).value;
    E2_DirectionVector1_x = document.getElementById(`E${planeId}-direction-vector1-x`).value;
    E2_DirectionVector1_y = document.getElementById(`E${planeId}-direction-vector1-y`).value;
    E2_DirectionVector1_z = document.getElementById(`E${planeId}-direction-vector1-z`).value;
    E2_DirectionVector2_x = document.getElementById(`E${planeId}-direction-vector2-x`).value;
    E2_DirectionVector2_y = document.getElementById(`E${planeId}-direction-vector2-y`).value;
    E2_DirectionVector2_z = document.getElementById(`E${planeId}-direction-vector2-z`).value;
  }
}

function fillTestValuesInPlane(planeId) {
  E1_BaseVector_x = document.getElementById(`E${planeId}-base-vector-x`).value = randomInRange(-1, 10);
  E1_BaseVector_y = document.getElementById(`E${planeId}-base-vector-y`).value = randomInRange(-1, 10);
  E1_BaseVector_z = document.getElementById(`E${planeId}-base-vector-z`).value = randomInRange(-1, 10);
  E1_DirectionVector1_x = document.getElementById(`E${planeId}-direction-vector1-x`).value = randomInRange(-1, 10);
  E1_DirectionVector1_y = document.getElementById(`E${planeId}-direction-vector1-y`).value = randomInRange(-1, 10);
  E1_DirectionVector1_z = document.getElementById(`E${planeId}-direction-vector1-z`).value = randomInRange(-1, 10);
  E1_DirectionVector2_x = document.getElementById(`E${planeId}-direction-vector2-x`).value = randomInRange(-1, 10);
  E1_DirectionVector2_y = document.getElementById(`E${planeId}-direction-vector2-y`).value = randomInRange(-1, 10);
  E1_DirectionVector2_z = document.getElementById(`E${planeId}-direction-vector2-z`).value = randomInRange(-1, 10);
}

function drawPlane(planeId) {
  getPlaneValues(planeId);
  if (okayToDrawPlane(planeId)) {
    if (planeId === 1) {
      ggbApplet.evalCommand(`A_${planeId}= (${E1_BaseVector_x} , ${E1_BaseVector_y} ,${E1_BaseVector_z})`);
      ggbApplet.setFixed(`A_${planeId}`, false, false);

      ggbApplet.evalCommand(`B_${planeId}= (${E1_DirectionVector1_x} , ${E1_DirectionVector1_y} ,${E1_DirectionVector1_z})`);
      ggbApplet.setFixed(`B_${planeId}`, false, false);

      ggbApplet.evalCommand(`C_${planeId}= (${E1_DirectionVector2_x} , ${E1_DirectionVector2_y} ,${E1_DirectionVector2_z})`);
      ggbApplet.setFixed(`C_${planeId}`, false, false);

      ggbApplet.evalCommand(`E_${planeId}= Plane(A_${planeId},B_${planeId},C_${planeId})`);
      ggbApplet.setColor('E_1', 220, 20, 60);
    } else {
      ggbApplet.evalCommand(`A_${planeId}= (${E2_BaseVector_x} , ${E2_BaseVector_y} ,${E2_BaseVector_z})`);
      ggbApplet.setFixed(`A_${planeId}`, false, false);

      ggbApplet.evalCommand(`B_${planeId}= (${E2_DirectionVector1_x} , ${E2_DirectionVector1_y} ,${E2_DirectionVector1_z})`);
      ggbApplet.setFixed(`B_${planeId}`, false, false);

      ggbApplet.evalCommand(`C_${planeId}= (${E2_DirectionVector2_x} , ${E2_DirectionVector2_y} ,${E2_DirectionVector2_z})`);
      ggbApplet.setFixed(`C_${planeId}`, false, false);

      ggbApplet.evalCommand(`E_${planeId}= Plane(A_${planeId},B_${planeId},C_${planeId})`);
      ggbApplet.setColor('E_2', 220, 20, 60);
    }
    ggbApplet.setColor('E_2', 0, 128, 228);

    // ggbApplet.registerUpdateListener("updateLine");

  } else {
    window.alert(`Bitte zu erst alle Werte der Ebene E${planeId} eingeben`);
  }
}

function okayToDrawPlane(planeId) {
  return document.getElementById(`E${planeId}-base-vector-x`).value !== '' &&
    document.getElementById(`E${planeId}-base-vector-y`).value !== '' &&
    document.getElementById(`E${planeId}-base-vector-z`).value !== '' &&
    document.getElementById(`E${planeId}-direction-vector1-x`).value !== '' &&
    document.getElementById(`E${planeId}-direction-vector1-y`).value !== '' &&
    document.getElementById(`E${planeId}-direction-vector1-z`).value !== '' &&
    document.getElementById(`E${planeId}-direction-vector2-x`).value !== '' &&
    document.getElementById(`E${planeId}-direction-vector2-y`).value !== '' &&
    document.getElementById(`E${planeId}-direction-vector2-z`).value !== '';
}

function drawParallelPlaneToPlane(lineId) {
  if (ggbApplet.getVisible(`E_${lineId}`)) {
    ggbApplet.evalCommand(`PToE_${lineId}= Plane((1,1,1),E_${lineId})`);
    if (lineId === 1) {
      ggbApplet.setColor('PToE_1', 255, 127, 80);
      document.getElementById('output-container-1').style.display = 'block';
      /*
      let parallelPlane1 = ggbApplet.getValueString("PToE_1");
      let parallelPlane1BaseVector = parallelPlane1.split('+')[0].replace(/\s/g, "");
      let parallelPlane1DirectionVector = parallelPlane1.split('+')[1].replace(/\s/g, "");
      let parallelPlane1BaseVectorRow = parallelPlane1BaseVector.substring(10, parallelPlane1BaseVector.length - 1);
      let parallelPlane1DirectionVectorRow = parallelPlane1DirectionVector.substring(2, parallelPlane1DirectionVector.length - 1);

      document.getElementById(`E1-out-base-vector-x`).value = getCoordinate(parallelPlane1BaseVectorRow, 'x');
      document.getElementById(`E1-out-base-vector-y`).value = getCoordinate(parallelPlane1BaseVectorRow, 'y');
      document.getElementById(`E1-out-base-vector-z`).value = getCoordinate(parallelPlane1BaseVectorRow, 'z');
      document.getElementById(`E1-out-direction-vector1-x`).value = getCoordinate(parallelPlane1DirectionVectorRow, 'x');
      document.getElementById(`E1-out-direction-vector1-y`).value = getCoordinate(parallelPlane1DirectionVectorRow, 'y');
      document.getElementById(`E1-out-direction-vector1-z`).value = getCoordinate(parallelPlane1DirectionVectorRow, 'z');
      document.getElementById(`E1-out-direction-vector2-x`).value = getCoordinate(parallelPlane1DirectionVectorRow, 'x');
      document.getElementById(`E1-out-direction-vector2-y`).value = getCoordinate(parallelPlane1DirectionVectorRow, 'y');
      document.getElementById(`E1-out-direction-vector2-z`).value = getCoordinate(parallelPlane1DirectionVectorRow, 'z');


       */
    } else {
      ggbApplet.setColor('PToE_2', 0, 206, 190);
      document.getElementById('output-container-2').style.display = 'block';
      /*
      let parallelLine2 = ggbApplet.getValueString("PToE_2");
      let parallelLine2BaseVector = parallelLine2.split('+')[0].replace(/\s/g, "");
      let parallelLine2DirectionVector = parallelLine2.split('+')[1].replace(/\s/g, "");
      let parallelLine2BaseVectorRow = parallelLine2BaseVector.substring(10, parallelLine2BaseVector.length - 1);
      let parallelLine2DirectionVectorRow = parallelLine2DirectionVector.substring(2, parallelLine2DirectionVector.length - 1);

      document.getElementById(`E2-out-base-vector-x`).value = getCoordinate(parallelLine2BaseVectorRow, 'x');
      document.getElementById(`E2-out-base-vector-y`).value = getCoordinate(parallelLine2BaseVectorRow, 'y');
      document.getElementById(`E2-out-base-vector-z`).value = getCoordinate(parallelLine2BaseVectorRow, 'z');
      document.getElementById(`E2-out-direction-vector1-x`).value = getCoordinate(parallelLine2DirectionVectorRow, 'x');
      document.getElementById(`E2-out-direction-vector1-y`).value = getCoordinate(parallelLine2DirectionVectorRow, 'y');
      document.getElementById(`E2-out-direction-vector1-z`).value = getCoordinate(parallelLine2DirectionVectorRow, 'z');
      document.getElementById(`E2-out-direction-vector2-x`).value = getCoordinate(parallelLine2DirectionVectorRow, 'x');
      document.getElementById(`E2-out-direction-vector2-y`).value = getCoordinate(parallelLine2DirectionVectorRow, 'y');
      document.getElementById(`E2-out-direction-vector2-z`).value = getCoordinate(parallelLine2DirectionVectorRow, 'z');

       */
    }
  } else {
    window.alert(`Bitte zu erst die Ebene E${lineId} zeichnen lassen`);
  }
}

function checkParallelismOfPlanes(lineId) {
  if (ggbApplet.getVisible('G_1') && ggbApplet.getVisible('G_2')) {
    // AreParallel(Line((1,1),(2,2)),Line((1,1),(3,3)))
    var areParallel = ggbApplet.evalCommand(`AreParallel(Line((1,1),(2,2)),Line((1,1),(3,3)))`);
    console.log('areParallel: ', areParallel);
  } else {
    window.alert(`Bitte zu erst die Gerade G1 und G2 zeichnen lassen`);
  }
}

function updateLine(obj) {

  if (ggbApplet.getObjectType(obj) == "point") {
    drawLine();
  }
}


function clearInputs() {

  for (let i = 1; i <= 2; i++) {
    document.getElementById(`E${i}-base-vector-x`).value = '';
    document.getElementById(`E${i}-base-vector-y`).value = '';
    document.getElementById(`E${i}-base-vector-z`).value = '';
    document.getElementById(`E${i}-direction-vector1-x`).value = '';
    document.getElementById(`E${i}-direction-vector1-y`).value = '';
    document.getElementById(`E${i}-direction-vector1-z`).value = '';
    document.getElementById(`E${i}-direction-vector2-x`).value = '';
    document.getElementById(`E${i}-direction-vector2-y`).value = '';
    document.getElementById(`E${i}-direction-vector2-z`).value = '';

    document.getElementById(`E${i}-out-base-vector-x`).value = '';
    document.getElementById(`E${i}-out-base-vector-y`).value = '';
    document.getElementById(`E${i}-out-base-vector-z`).value = '';
    document.getElementById(`E${i}-out-direction-vector1-x`).value = '';
    document.getElementById(`E${i}-out-direction-vector1-y`).value = '';
    document.getElementById(`E${i}-out-direction-vector1-z`).value = '';
    document.getElementById(`E${i}-out-direction-vector2-x`).value = '';
    document.getElementById(`E${i}-out-direction-vector2-y`).value = '';
    document.getElementById(`E${i}-out-direction-vector2-z`).value = '';
    document.getElementById(`output-container-${i}`).style.display = 'none';
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





