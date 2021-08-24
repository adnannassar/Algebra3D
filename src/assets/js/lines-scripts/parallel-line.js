let ggbApp;
init(false);


let
  G1_BaseVector_x, G1_BaseVector_y, G1_BaseVector_z,
  G1_DirectionVector_x, G1_DirectionVector_y, G1_DirectionVector_z,
  G2_BaseVector_x, G2_BaseVector_y, G2_BaseVector_z,
  G2_DirectionVector_x, G2_DirectionVector_y, G2_DirectionVector_z;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getLineValues(lineId) {
  if (lineId === 1) {
    G1_BaseVector_x = document.getElementById(`G${lineId}-base-vector-x`).value;
    G1_BaseVector_y = document.getElementById(`G${lineId}-base-vector-y`).value;
    G1_BaseVector_z = document.getElementById(`G${lineId}-base-vector-z`).value;
    G1_DirectionVector_x = document.getElementById(`G${lineId}-direction-vector-x`).value;
    G1_DirectionVector_y = document.getElementById(`G${lineId}-direction-vector-y`).value;
    G1_DirectionVector_z = document.getElementById(`G${lineId}-direction-vector-z`).value;
  } else {
    G2_BaseVector_x = document.getElementById(`G${lineId}-base-vector-x`).value;
    G2_BaseVector_y = document.getElementById(`G${lineId}-base-vector-y`).value;
    G2_BaseVector_z = document.getElementById(`G${lineId}-base-vector-z`).value;
    G2_DirectionVector_x = document.getElementById(`G${lineId}-direction-vector-x`).value;
    G2_DirectionVector_y = document.getElementById(`G${lineId}-direction-vector-y`).value;
    G2_DirectionVector_z = document.getElementById(`G${lineId}-direction-vector-z`).value;
  }

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
    if (lineId === 1) {
      ggbApplet.evalCommand(`A_${lineId}= (${G1_BaseVector_x} , ${G1_BaseVector_y} ,${G1_BaseVector_z})`);
      ggbApplet.setFixed(`A_${lineId}`, false, false);

      ggbApplet.evalCommand(`B_${lineId}= (${G1_DirectionVector_x} , ${G1_DirectionVector_y} ,${G1_DirectionVector_z})`);
      ggbApplet.setFixed(`B_${lineId}`, false, false);

      ggbApplet.evalCommand(`G_${lineId}= Line(A_${lineId},B_${lineId})`);
      ggbApplet.setColor('G_1', 220, 20, 60);
    } else {
      ggbApplet.evalCommand(`A_${lineId}= (${G2_BaseVector_x} , ${G2_BaseVector_y} ,${G2_BaseVector_z})`);
      ggbApplet.setFixed(`A_${lineId}`, false, false);

      ggbApplet.evalCommand(`B_${lineId}= (${G2_DirectionVector_x} , ${G2_DirectionVector_y} ,${G2_DirectionVector_z})`);
      ggbApplet.setFixed(`B_${lineId}`, false, false);

      ggbApplet.evalCommand(`G_${lineId}= Line(A_${lineId},B_${lineId})`);
      ggbApplet.setColor('G_2', 0, 128, 128);
    }
    // ggbApplet.registerUpdateListener("updateLine");

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

function drawParallelLineToLine(lineId) {
  if (ggbApplet.getVisible(`G_${lineId}`)) {
    ggbApplet.evalCommand(`PToG_${lineId}= Line((1,1,1),G_${lineId})`);
    if (lineId === 1) {
      ggbApplet.setColor('PToG_1', 255, 127, 80);
      document.getElementById('output-container-1').style.display = 'block';
      let parallelLine1 = ggbApplet.getValueString("PToG_1");
      let parallelLine1BaseVector = parallelLine1.split('+')[0].replace(/\s/g, "");
      let parallelLine1DirectionVector = parallelLine1.split('+')[1].replace(/\s/g, "");
      let parallelLine1BaseVectorRow = parallelLine1BaseVector.substring(10, parallelLine1BaseVector.length - 1);
      let parallelLine1DirectionVectorRow = parallelLine1DirectionVector.substring(2, parallelLine1DirectionVector.length - 1);

      document.getElementById(`G1-OUT-base-vector-x`).value = getCoordinate(parallelLine1BaseVectorRow, 'x');
      document.getElementById(`G1-OUT-base-vector-y`).value = getCoordinate(parallelLine1BaseVectorRow, 'y');
      document.getElementById(`G1-OUT-base-vector-z`).value = getCoordinate(parallelLine1BaseVectorRow, 'z');
      document.getElementById(`G1-OUT-direction-vector-x`).value = getCoordinate(parallelLine1DirectionVectorRow, 'x');
      document.getElementById(`G1-OUT-direction-vector-y`).value = getCoordinate(parallelLine1DirectionVectorRow, 'y');
      document.getElementById(`G1-OUT-direction-vector-z`).value = getCoordinate(parallelLine1DirectionVectorRow, 'z');

    } else {
      ggbApplet.setColor('PToG_2', 0, 206, 209);
      document.getElementById('output-container-2').style.display = 'block';
      let parallelLine2 = ggbApplet.getValueString("PToG_2");
      let parallelLine2BaseVector = parallelLine2.split('+')[0].replace(/\s/g, "");
      let parallelLine2DirectionVector = parallelLine2.split('+')[1].replace(/\s/g, "");
      let parallelLine2BaseVectorRow = parallelLine2BaseVector.substring(10, parallelLine2BaseVector.length - 1);
      let parallelLine2DirectionVectorRow = parallelLine2DirectionVector.substring(2, parallelLine2DirectionVector.length - 1);

      document.getElementById(`G2-OUT-base-vector-x`).value = getCoordinate(parallelLine2BaseVectorRow, 'x');
      document.getElementById(`G2-OUT-base-vector-y`).value = getCoordinate(parallelLine2BaseVectorRow, 'y');
      document.getElementById(`G2-OUT-base-vector-z`).value = getCoordinate(parallelLine2BaseVectorRow, 'z');
      document.getElementById(`G2-OUT-direction-vector-x`).value = getCoordinate(parallelLine2DirectionVectorRow, 'x');
      document.getElementById(`G2-OUT-direction-vector-y`).value = getCoordinate(parallelLine2DirectionVectorRow, 'y');
      document.getElementById(`G2-OUT-direction-vector-z`).value = getCoordinate(parallelLine2DirectionVectorRow, 'z');
    }
  } else {
    window.alert(`Bitte zu erst die Gerade G${lineId} zeichnen lassen`);
  }
}

function checkParallelism(lineId) {
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
    document.getElementById(`G${i}-base-vector-x`).value = '';
    document.getElementById(`G${i}-base-vector-y`).value = '';
    document.getElementById(`G${i}-base-vector-z`).value = '';
    document.getElementById(`G${i}-direction-vector-x`).value = '';
    document.getElementById(`G${i}-direction-vector-y`).value = '';
    document.getElementById(`G${i}-direction-vector-z`).value = '';
    document.getElementById(`G${i}-OUT-base-vector-x`).value = '';
    document.getElementById(`G${i}-OUT-base-vector-y`).value = '';
    document.getElementById(`G${i}-OUT-base-vector-z`).value = '';
    document.getElementById(`G${i}-OUT-direction-vector-x`).value = '';
    document.getElementById(`G${i}-OUT-direction-vector-y`).value = '';
    document.getElementById(`G${i}-OUT-direction-vector-z`).value = '';
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





