// Geogebra Applet Declaration
var ggbApp = new GGBApplet({
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


window.addEventListener("load", function () {
  ggbApp.inject("ggb-element");
});

let Base_Vec_a, Base_Vec_b, Base_Vec_c, Direction_Vec1_a, Direction_Vec1_b, Direction_Vec1_c, Direction_Vec2_a,
  Direction_Vec2_b, Direction_Vec2_c;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}


function getValuesFromPlane(planeNumber) {
  Base_Vec_a = document.getElementById(`E${planeNumber}-base-vector-01`).value;
  Base_Vec_b = document.getElementById(`E${planeNumber}-base-vector-02`).value;
  Base_Vec_c = document.getElementById(`E${planeNumber}-base-vector-03`).value;


  Direction_Vec1_a = document.getElementById(`E${planeNumber}-direction-vector-01-a`).value;
  Direction_Vec1_b = document.getElementById(`E${planeNumber}-direction-vector-01-b`).value;
  Direction_Vec1_c = document.getElementById(`E${planeNumber}-direction-vector-01-c`).value;

  Direction_Vec2_a = document.getElementById(`E${planeNumber}-direction-vector-02-a`).value;
  Direction_Vec2_b = document.getElementById(`E${planeNumber}-direction-vector-02-b`).value;
  Direction_Vec2_c = document.getElementById(`E${planeNumber}-direction-vector-02-c`).value;

}

function fillTestValuesInPlanes(planeNumber) {
  if (planeNumber === 1) {
    document.getElementById(`E${planeNumber}-base-vector-01`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-base-vector-02`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-base-vector-03`).value = randomInRange(1, 5);

    document.getElementById(`E${planeNumber}-direction-vector-01-a`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-01-b`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-01-c`).value = randomInRange(1, 5);

    document.getElementById(`E${planeNumber}-direction-vector-02-a`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-02-b`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-02-c`).value = randomInRange(1, 5);
  }
  if (planeNumber === 2) {
    document.getElementById(`E${planeNumber}-base-vector-01`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-base-vector-02`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-base-vector-03`).value = randomInRange(1, 5);

    document.getElementById(`E${planeNumber}-direction-vector-01-a`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-01-b`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-01-c`).value = randomInRange(1, 5);

    document.getElementById(`E${planeNumber}-direction-vector-02-a`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-02-b`).value = randomInRange(1, 5);
    document.getElementById(`E${planeNumber}-direction-vector-02-c`).value = randomInRange(1, 5);
  }
}

function drawPlane(planeNumber) {
  getValuesFromPlane(planeNumber);
  if (okayToDrawPlanes()) {

    ggbApplet.evalCommand('S = (0,0,0)');
    ggbApplet.evalCommand(`A_${planeNumber} = (${Base_Vec_a} , ${Base_Vec_b} ,${Base_Vec_c})`);
    ggbApplet.evalCommand(`baseVector_E${planeNumber} = Vector(S,A_${planeNumber})`);
    ggbApplet.setFixed(`A_${planeNumber}`, false, false);

    ggbApplet.evalCommand(`B_${planeNumber} = (${Direction_Vec1_a} , ${Direction_Vec1_b} ,${Direction_Vec1_c})`);
    ggbApplet.evalCommand(`directionVector1_E${planeNumber} = Vector(A_${planeNumber} ,B_${planeNumber})`);
    ggbApplet.setFixed(`B_${planeNumber}`, false, false);

    ggbApplet.evalCommand(`C_${planeNumber} = (${Direction_Vec2_a} , ${Direction_Vec2_b} ,${Direction_Vec2_c})`);
    ggbApplet.evalCommand(`directionVector2_E${planeNumber} = Vector(A_${planeNumber} ,C_${planeNumber})`);
    ggbApplet.setFixed(`C_${planeNumber}`, false, false);

    ggbApplet.evalCommand(`E_${planeNumber} = Plane(A_${planeNumber},B_${planeNumber},C_${planeNumber})`);

  } else {
    window.alert("Bitte zu erst alle Werte eingeben")
  }
}

function findIntersection() {
  if (okayToDrawFindIntersection()) {
    ggbApplet.evalCommand(`F = Intersect(E_${1},E_${2})`);

    let intersectionFormString = ggbApplet.getValueString("F");
    let intersectionFormStringBaseVector = intersectionFormString.split('+')[0].replace(/\s/g, "");
    let intersectionFormStringDirectionVector = intersectionFormString.split('+')[1].replace(/\s/g, "");

    let intersectionFormStringBaseVectorRow = intersectionFormStringBaseVector.substring(5, intersectionFormStringBaseVector.length - 1);
    let intersectionFormStringDirectionVectorRow = intersectionFormStringDirectionVector.substring(2, intersectionFormStringDirectionVector.length - 1);

    document.getElementById(`G-base-vector-01`).value = getCoordinate(intersectionFormStringBaseVectorRow, 'x');
    document.getElementById(`G-base-vector-02`).value = getCoordinate(intersectionFormStringBaseVectorRow, 'y');
    document.getElementById(`G-base-vector-03`).value = getCoordinate(intersectionFormStringBaseVectorRow, 'z');


    document.getElementById(`G-direction-vector-01`).value = getCoordinate(intersectionFormStringDirectionVectorRow, 'x');
    document.getElementById(`G-direction-vector-02`).value = getCoordinate(intersectionFormStringDirectionVectorRow, 'y');
    document.getElementById(`G-direction-vector-03`).value = getCoordinate(intersectionFormStringDirectionVectorRow, 'z');


  } else {
    window.alert("Bitte zu erst E1, E1 zeichnen lassen")
  }
}

function clearInputs() {
  for (let i = 1; i <= 2; i++) {
    document.getElementById(`E${i}-base-vector-01`).value = '';
    document.getElementById(`E${i}-base-vector-02`).value = '';
    document.getElementById(`E${i}-base-vector-03`).value = '';

    document.getElementById(`E${i}-direction-vector-01-a`).value = '';
    document.getElementById(`E${i}-direction-vector-01-b`).value = '';
    document.getElementById(`E${i}-direction-vector-01-c`).value = '';

    document.getElementById(`E${i}-direction-vector-02-a`).value = '';
    document.getElementById(`E${i}-direction-vector-02-b`).value = '';
    document.getElementById(`E${i}-direction-vector-02-c`).value = '';
  }
  document.getElementById(`G-base-vector-01`).value = '';
  document.getElementById(`G-base-vector-02`).value = '';
  document.getElementById(`G-base-vector-03`).value = '';

  document.getElementById(`G-direction-vector-01`).value = '';
  document.getElementById(`G-direction-vector-02`).value = '';
  document.getElementById(`G-direction-vector-03`).value = '';

}

function okayToDrawPlanes() {
  return Base_Vec_a && Base_Vec_b && Base_Vec_c && Direction_Vec1_a && Direction_Vec1_b && Direction_Vec1_c && Direction_Vec2_a &&
    Direction_Vec2_b && Direction_Vec2_c;
}

function okayToDrawFindIntersection() {
  return ggbApplet.getVisible('E_1') && ggbApplet.getVisible('E_2');
}

function disableButtons() {
  document.getElementById("fillE1Btn").disabled = true;
  document.getElementById("fillE2Btn").disabled = true;
  document.getElementById("drawE1Btn").disabled = true;
  document.getElementById("drawE2Btn").disabled = true;
  document.getElementById("intersectionBtn").disabled = true;
}

function enableButtons() {
  document.getElementById("fillE1Btn").disabled = false;
  document.getElementById("fillE2Btn").disabled = false;
  document.getElementById("drawE1Btn").disabled = false;
  document.getElementById("drawE2Btn").disabled = false;
  document.getElementById("intersectionBtn").disabled = false;
}

function getCoordinate(baseString, coordinateLetter) {

  if (coordinateLetter) {
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


