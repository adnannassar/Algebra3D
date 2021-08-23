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

let
  Base_Vec_a, Base_Vec_b, Base_Vec_c,
  Direction_Vec1_a, Direction_Vec1_b, Direction_Vec1_c,
  Direction_Vec2_a, Direction_Vec2_b, Direction_Vec2_c,
  Base_Vec_G_a, Base_Vec_G_b, Base_Vec_G_c, Direction_Vec1_G_a,
  Direction_Vec1_G_b, Direction_Vec1_G_c;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getPlaneValues() {
  Base_Vec_a = document.getElementById(`E-base-vector-01`).value;
  Base_Vec_b = document.getElementById(`E-base-vector-02`).value;
  Base_Vec_c = document.getElementById(`E-base-vector-03`).value;

  Direction_Vec1_a = document.getElementById(`E-direction-vector-01-a`).value;
  Direction_Vec1_b = document.getElementById(`E-direction-vector-01-b`).value;
  Direction_Vec1_c = document.getElementById(`E-direction-vector-01-c`).value;

  Direction_Vec2_a = document.getElementById(`E-direction-vector-02-a`).value;
  Direction_Vec2_b = document.getElementById(`E-direction-vector-02-b`).value;
  Direction_Vec2_c = document.getElementById(`E-direction-vector-02-c`).value;
}

function getLineValues() {
  Base_Vec_G_a = document.getElementById(`G-base-vector-01`).value;
  Base_Vec_G_b = document.getElementById(`G-base-vector-02`).value;
  Base_Vec_G_c = document.getElementById(`G-base-vector-03`).value;

  Direction_Vec1_G_a = document.getElementById(`G-direction-vector-01`).value;
  Direction_Vec1_G_b = document.getElementById(`G-direction-vector-02`).value;
  Direction_Vec1_G_c = document.getElementById(`G-direction-vector-03`).value;

}

function fillTestValuesInPlane() {
  document.getElementById(`E-base-vector-01`).value = 2.39;
  document.getElementById(`E-base-vector-02`).value = -3.2;
  document.getElementById(`E-base-vector-03`).value = 4;

  document.getElementById(`E-direction-vector-01-a`).value = 5.94;
  document.getElementById(`E-direction-vector-01-b`).value = -4.35;
  document.getElementById(`E-direction-vector-01-c`).value = 4;

  document.getElementById(`E-direction-vector-02-a`).value = -2.63;
  document.getElementById(`E-direction-vector-02-b`).value = -8.22;
  document.getElementById(`E-direction-vector-02-c`).value = 3;
}

function fillTestValuesInLine() {
  document.getElementById(`G-base-vector-01`).value = 0;
  document.getElementById(`G-base-vector-02`).value = 4;
  document.getElementById(`G-base-vector-03`).value = 0;

  document.getElementById(`G-direction-vector-01`).value = -3.38;
  document.getElementById(`G-direction-vector-02`).value = 0.35;
  document.getElementById(`G-direction-vector-03`).value = 7;
}

function drawLine() {
  getLineValues();
  if (okayToDrawLine()) {
    ggbApplet.evalCommand(`A_1= (${Base_Vec_G_a} , ${Base_Vec_G_b} ,${Base_Vec_G_c})`);
    ggbApplet.setFixed(`A_1`, false, false);

    ggbApplet.evalCommand(`B_1= (${Direction_Vec1_G_a} , ${Direction_Vec1_G_b} ,${Direction_Vec1_G_c})`);
    ggbApplet.setFixed(`B_1`, false, false);

    ggbApplet.evalCommand(`G= Line(A_1,B_1)`);
  } else {
    window.alert("Bitte zu erst alle Werte der Gerade eingeben")
  }


}

function drawPlane() {
  getPlaneValues();
  if (okayToDrawPlane()) {

    ggbApplet.evalCommand('S = (0,0,0)');
    ggbApplet.evalCommand(`A= (${Base_Vec_a} , ${Base_Vec_b} ,${Base_Vec_c})`);
    ggbApplet.evalCommand(`baseVectorE = Vector(S,A)`);
    ggbApplet.setFixed(`A`, false, false);

    ggbApplet.evalCommand(`B= (${Direction_Vec1_a} , ${Direction_Vec1_b} ,${Direction_Vec1_c})`);
    ggbApplet.evalCommand(`directionVector1E = Vector(A,B)`);
    ggbApplet.setFixed(`B`, false, false);

    ggbApplet.evalCommand(`C= (${Direction_Vec2_a} , ${Direction_Vec2_b} ,${Direction_Vec2_c})`);
    ggbApplet.evalCommand(`directionVector2E = Vector(A,C)`);
    ggbApplet.setFixed(`C`, false, false);

    ggbApplet.evalCommand(`E= Plane(A,B,C)`);

  } else {
    window.alert("Bitte zu erst alle Werte der Ebene eingeben")
  }
}

function findIntersection() {
  if (okayToDrawFindIntersection()) {
    ggbApplet.evalCommand(`Schnittpunkt = Intersect(E,G)`);
    ggbApplet.setColor('Schnittpunkt', 255, 0, 0);

    let intersectionPointString = ggbApplet.getValueString("Schnittpunkt");

    let intersectionPointStringEdited = intersectionPointString.substring(16, intersectionPointString.length - 1);

    let intersectionPointStringRow = intersectionPointStringEdited.replace(/\s/g, "");

    document.getElementById(`intersection_point_x`).innerHTML = getCoordinate(intersectionPointStringRow, 'x');
    document.getElementById(`intersection_point_y`).innerHTML = getCoordinate(intersectionPointStringRow, 'y');
    document.getElementById(`intersection_point_z`).innerHTML = getCoordinate(intersectionPointStringRow, 'z');


    // disableButtons();

  } else {
    window.alert("Bitte zu erst die Ebene und Gerade zeichnen lassen")
  }
}

function clearInputs() {

  document.getElementById(`E-base-vector-01`).value = '';
  document.getElementById(`E-base-vector-02`).value = '';
  document.getElementById(`E-base-vector-03`).value = '';

  document.getElementById(`E-direction-vector-01-a`).value = '';
  document.getElementById(`E-direction-vector-01-b`).value = '';
  document.getElementById(`E-direction-vector-01-c`).value = '';

  document.getElementById(`E-direction-vector-02-a`).value = '';
  document.getElementById(`E-direction-vector-02-b`).value = '';
  document.getElementById(`E-direction-vector-02-c`).value = '';

  document.getElementById(`G-base-vector-01`).value = '';
  document.getElementById(`G-base-vector-02`).value = '';
  document.getElementById(`G-base-vector-03`).value = '';

  document.getElementById(`G-direction-vector-01`).value = '';
  document.getElementById(`G-direction-vector-02`).value = '';
  document.getElementById(`G-direction-vector-03`).value = '';


  document.getElementById(`intersection_point_x`).innerHTML = ' - ';
  document.getElementById(`intersection_point_y`).innerHTML = ' - ';
  document.getElementById(`intersection_point_z`).innerHTML = ' - ';

  // enableButtons();
}

function okayToDrawPlane() {
  return Base_Vec_a && Base_Vec_b && Base_Vec_c && Direction_Vec1_a && Direction_Vec1_b && Direction_Vec1_c && Direction_Vec2_a &&
    Direction_Vec2_b && Direction_Vec2_c;
}

function okayToDrawLine() {
  return Base_Vec_G_a && Base_Vec_G_c && Base_Vec_G_c && Direction_Vec1_G_a && Direction_Vec1_G_b && Direction_Vec1_G_c;
}


function okayToDrawFindIntersection() {
  return ggbApplet.getVisible('E') && ggbApplet.getVisible('G');
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


