// Geogebra Applet Declaration
var ggbApp = new GGBApplet({
  "appName": '3d',
  "showMenuBar": false,
  "showToolBar": false,
  "enableLabelDrags": false,
  "enableRightClick": false,
  "errorDialogsActive": true,
  "useBrowserForJS": true,
  "enableUndoRedo": false,
  "material_id": 'zu9afzy8',
  "scaleContainerClass": "d-flex",
  "autoHeight": true,
  "borderColor": "#000000",
}, true);


window.addEventListener("load", function () {
  ggbApp.inject("ggb-element");
});


var Base_Vec_a, Base_Vec_b, Base_Vec_c, Dircetion_Vec1_a, Dircetion_Vec1_b, Dircetion_Vec1_c, Dircetion_Vec2_a,
  Dircetion_Vec2_b, Dircetion_Vec2_c;

function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getValues(planeNumber) {
  Base_Vec_a = document.getElementById(`E${planeNumber}-base-vector-01`).value;
  Base_Vec_b = document.getElementById(`E${planeNumber}-base-vector-02`).value;
  Base_Vec_c = document.getElementById(`E${planeNumber}-base-vector-03`).value;

  Dircetion_Vec1_a = document.getElementById(`E${planeNumber}-direction-vector-01-a`).value;
  Dircetion_Vec1_b = document.getElementById(`E${planeNumber}-direction-vector-01-b`).value;
  Dircetion_Vec1_c = document.getElementById(`E${planeNumber}-direction-vector-01-c`).value;

  Dircetion_Vec2_a = document.getElementById(`E${planeNumber}-direction-vector-02-a`).value;
  Dircetion_Vec2_b = document.getElementById(`E${planeNumber}-direction-vector-02-b`).value;
  Dircetion_Vec2_c = document.getElementById(`E${planeNumber}-direction-vector-02-c`).value;
}

function fillTestValuesInPlanes(planeNumber) {
  if (planeNumber === 1) {
    document.getElementById(`E${planeNumber}-base-vector-01`).value = 1;
    document.getElementById(`E${planeNumber}-base-vector-02`).value = 0;
    document.getElementById(`E${planeNumber}-base-vector-03`).value = 1;

    document.getElementById(`E${planeNumber}-direction-vector-01-a`).value = 2;
    document.getElementById(`E${planeNumber}-direction-vector-01-b`).value = 0;
    document.getElementById(`E${planeNumber}-direction-vector-01-c`).value = 0;

    document.getElementById(`E${planeNumber}-direction-vector-02-a`).value = 0;
    document.getElementById(`E${planeNumber}-direction-vector-02-b`).value = -1;
    document.getElementById(`E${planeNumber}-direction-vector-02-c`).value = 0;
  }
  if (planeNumber === 2) {
    document.getElementById(`E${planeNumber}-base-vector-01`).value = 0;
    document.getElementById(`E${planeNumber}-base-vector-02`).value = 1;
    document.getElementById(`E${planeNumber}-base-vector-03`).value = 2;

    document.getElementById(`E${planeNumber}-direction-vector-01-a`).value = 0;
    document.getElementById(`E${planeNumber}-direction-vector-01-b`).value = 0;
    document.getElementById(`E${planeNumber}-direction-vector-01-c`).value = 4;

    document.getElementById(`E${planeNumber}-direction-vector-02-a`).value = 1;
    document.getElementById(`E${planeNumber}-direction-vector-02-b`).value = 0;
    document.getElementById(`E${planeNumber}-direction-vector-02-c`).value = 0;
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

}

function drawPlane(planeNumber) {
  getValues(planeNumber);
  for (var i = 0; i < 5; i++) {
    //ggbApplet.evalCommand('A_' + i + ' = (random()*5 , random()*5)');
  }
  ggbApplet.evalCommand('S = (0,0,0)');
  ggbApplet.evalCommand(`A_${planeNumber} = (${Base_Vec_a} , ${Base_Vec_b} ,${Base_Vec_c})`);
  ggbApplet.evalCommand(`baseVector_E${planeNumber} = Vector(S,A_${planeNumber})`);


  ggbApplet.evalCommand(`B_${planeNumber} = (${Dircetion_Vec1_a} , ${Dircetion_Vec1_b} ,${Dircetion_Vec1_c})`);
  ggbApplet.evalCommand(`directionVector1_E${planeNumber} = Vector(A_${planeNumber} ,B_${planeNumber})`);

  ggbApplet.evalCommand(`C_${planeNumber} = (${Dircetion_Vec2_a} , ${Dircetion_Vec2_b} ,${Dircetion_Vec2_c})`);
  ggbApplet.evalCommand(`directionVector2_E${planeNumber} = Vector(A_${planeNumber} ,C_${planeNumber})`);

  ggbApplet.evalCommand(`E_${planeNumber} = Plane(A_${planeNumber},B_${planeNumber},C_${planeNumber})`);
}

function findIntersection() {
  ggbApplet.evalCommand(`F = IntersectPath(E_${1},E_${2})`);
}
