let ggbApp;
init(false);


let
  V1_x, V1_y, V1_z,
  V2_x, V2_y, V2_z,
  V_out_x, V_out_y, V_out_z;


function reset() {
  clearInputs();
  document.ggbApplet.reset();
}

function getVectorValues(vectorId) {
  if (vectorId === 1) {
    V1_x = document.getElementById(`V${vectorId}-x`).value;
    V1_y = document.getElementById(`V${vectorId}-y`).value;
    V1_z = document.getElementById(`V${vectorId}-z`).value;
  } else {
    V2_x = document.getElementById(`V${vectorId}-x`).value;
    V2_y = document.getElementById(`V${vectorId}-y`).value;
    V2_z = document.getElementById(`V${vectorId}-z`).value;
  }
}

function fillTestValuesInVector(lineId) {
  document.getElementById(`V${lineId}-x`).value = randomInRange(1, 5);
  document.getElementById(`V${lineId}-y`).value = randomInRange(1, 5);
  document.getElementById(`V${lineId}-z`).value = randomInRange(1, 5);
}

function drawVector(vectorId) {
  getVectorValues(vectorId);
  if (okayToDrawVector(vectorId)) {
    if (vectorId === 1) {
      ggbApplet.evalCommand(`A_${vectorId}= (0,0,0)`);
      ggbApplet.setFixed(`A_${vectorId}`, false, false);
      ggbApplet.setVisible(`A_${vectorId}`, false);

      ggbApplet.evalCommand(`B_${vectorId}=(${V1_x} , ${V1_y} ,${V1_z})`);
      ggbApplet.setFixed(`B_${vectorId}`, false, false);

      ggbApplet.evalCommand(`V_${vectorId}= Vector(A_${vectorId},B_${vectorId})`);

    } else {
      ggbApplet.evalCommand(`A_${vectorId}=  (0,0,0)`);
      ggbApplet.setFixed(`A_${vectorId}`, false, false);
      ggbApplet.setVisible(`A_${vectorId}`, false);

      ggbApplet.evalCommand(`B_${vectorId}=(${V2_x} , ${V2_y} ,${V2_z})`);
      ggbApplet.setFixed(`B_${vectorId}`, false, false);

      ggbApplet.evalCommand(`V_${vectorId}= Vector(A_${vectorId},B_${vectorId})`);
    }


  } else {
    window.alert(`Bitte zu erst alle Werte des Vektors V${vectorId} eingeben`);
  }
}

function okayToDrawVector(vectorId) {
  return document.getElementById(`V${vectorId}-x`).value !== '' &&
    document.getElementById(`V${vectorId}-y`).value !== '' &&
    document.getElementById(`V${vectorId}-z`).value !== '';
}

function operationOnTwoVectors(operation) {
  if (okayToDoOperation()) {
    switch (operation) {
      case '+' :
        V_out_x = Number(V1_x) + Number(V2_x);
        V_out_y = Number(V1_y) + Number(V2_y);
        V_out_z = Number(V1_z) + Number(V2_z);

        ggbApplet.evalCommand(`C = (${V1_x} , ${V1_y} ,${V1_z})`);
        ggbApplet.setFixed(`C`, false, false);

        ggbApplet.evalCommand(`D = (${V2_x} , ${V2_y} ,${V2_z})`);
        ggbApplet.setFixed(`D, false, false`);

        ggbApplet.evalCommand(`V_out = Vector(C,D)`);
        ggbApplet.setColor('V_out', 255, 0, 0);

        document.getElementById("V-out-x").value = V_out_x;
        document.getElementById("V-out-y").value = V_out_y;
        document.getElementById("V-out-z").value = V_out_z;

        document.getElementById("result-container").style.display = "block";

        break;

      case '-' :
        V_out_x = Number(V1_x) - Number(V2_x);
        V_out_y = Number(V1_y) - Number(V2_y);
        V_out_z = Number(V1_z) - Number(V2_z);
        break;


      case '*' :
        V_out_x = Number(V1_x) * Number(V2_x);
        V_out_y = Number(V1_y) * Number(V2_y);
        V_out_z = Number(V1_z) * Number(V2_z);
        break;

      case '/' :
        V_out_x = Number(V1_x) / Number(V2_x);
        V_out_y = Number(V1_y) / Number(V2_y);
        V_out_z = Number(V1_z) / Number(V2_z);
        break;
      case 'cross':
        V_out_x = (Number(V1_y) * Number(V2_z)) - (Number(V2_y) * Number(V1_z));
        V_out_y = (Number(V1_z) * Number(V2_x)) - (Number(V2_z) * Number(V1_x));
        V_out_z = (Number(V1_x) * Number(V2_y)) - (Number(V2_x) * Number(V1_y));
        break;
      default:
        console.log("Error by operations on vectors!");
    }
    if (operation !== '+') {
      ggbApplet.evalCommand(`C = (0,0,0)`);
      ggbApplet.setFixed(`C`, false, false);

      ggbApplet.evalCommand(`D = (${V_out_x} , ${V_out_y} ,${V_out_z})`);
      ggbApplet.setFixed(`D, false, false`);

      ggbApplet.evalCommand(`V_out = Vector(C,D)`);
      ggbApplet.setColor('V_out', 255, 0, 0);

      document.getElementById("V-out-x").value = V_out_x;
      document.getElementById("V-out-y").value = V_out_y;
      document.getElementById("V-out-z").value = V_out_z;

      document.getElementById("result-container").style.display = "block";
    }

  } else {
    window.alert(`Bitte zu erst die Vektoren V1 und V2 zeichnen lassen`);
  }
}

function okayToDoOperation() {
  return ggbApplet.getVisible('V_1') && ggbApplet.getVisible('V_2');
}

function clearInputs() {

  for (let i = 1; i <= 2; i++) {
    document.getElementById(`V${i}-x`).value = '';
    document.getElementById(`V${i}-y`).value = '';
    document.getElementById(`V${i}-z`).value = '';
  }
  document.getElementById(`V-out-x`).value = '';
  document.getElementById(`V-out-y`).value = '';
  document.getElementById(`V-out-z`).value = '';

  document.getElementById(`no-intersection`).style.display = "none";

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





