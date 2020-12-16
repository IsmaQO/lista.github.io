const lista = document.getElementById("lista");
let contador = 1;
let index = 1;
let totalpre = 0;
let totaluds = 0;

function del(elem) {
  elem.parentNode.removeChild(elem);
  contador--;
  if (contador == 0) {
    document.getElementById("nothing").innerHTML =
      "Pulsa en <strong>'Añadir elemento'</strong> para añadir productos a la lista.";
  }
}

function add() {
  contador++;
  index++;
  if (contador != 0) {
    document.getElementById("nothing").innerHTML = "";
  }
  let elem =
    '<div class="field-body message-header has-background-white">' +
    '<div class="field">' +
    '<p class="control is-expanded has-icons-left">' +
    '<input class="input" type="text" placeholder="Producto">' +
    '<span class="icon is-small is-left">' +
    '<i class="fas fa-cube"></i>' +
    " </span>" +
    "</p>" +
    "</div>" +
    '<div class="field">' +
    '<p class="control is-expanded has-icons-left has-icons-right">' +
    '<input id="ud-0' +
    index +
    '" class="input" type="number" placeholder="Cantidad">' +
    '<span class="icon is-small is-left">' +
    '<i class="fas fa-cart-plus"></i>' +
    "</span>" +
    "</p>" +
    "</div>" +
    '<div class="field">' +
    '<p class="control is-expanded has-icons-left has-icons-right">' +
    '<input id="pre-0' +
    index +
    '" class="input" type="number" placeholder="Precio Unitario">' +
    '<span class="icon is-small is-left">' +
    '<i class="fas fa-euro-sign"></i>' +
    "</span>" +
    "</p>" +
    "</div>" +
    '<a class="delete is-large" onclick="del(document.getElementById(\'elem-0' +
    index +
    "'));\"></a>" +
    "</div>";
  let block_to_insert;
  let container_block;
  block_to_insert = document.createElement("div");
  block_to_insert.setAttribute("class", "field is-horizontal");
  block_to_insert.setAttribute("id", "elem-0" + index);
  block_to_insert.innerHTML = elem;

  container_block = document.getElementById("lista");
  container_block.appendChild(block_to_insert);
}

function calc() {
  (uds = 0), (pre = 0);

  for (let i = 1; i <= index; i++) {
    let bloque = document.getElementById("elem-0" + i);
    let unidad = document.getElementById("ud-0" + i);
    let precio = document.getElementById("pre-0" + i);

    if (bloque != null) {
      if (unidad.value == "") {
        unidad.value = 0;
      }

      if (precio.value == "") {
        precio.value = 0;
      }

      uds = Number(unidad.value);
      totaluds += uds;

      pre = parseFloat(precio.value);
      prod = pre * uds;
      totalpre += prod;
    }
  }

  document.getElementById("res-elem").innerHTML = contador;
  document.getElementById("res-ud").innerHTML = totaluds;

  document.getElementById("res-pre").innerHTML = totalpre.toFixed(2);
  calcPresupuesto();
  uds = 0;
  pre = 0;
  totaluds = 0;
  totalpre = 0;
  prod = 0;
}

function calcPresupuesto() {
  let presupuestoInput = document.getElementById("presupuesto");
  let presupuestoValue = presupuestoInput.value;

  if (presupuestoValue != "") {
    if (presupuestoValue < totalpre) {
      document.getElementById("res-presu").innerHTML =
        "Presupuesto insuficiente, necesitas: " +
        Number(totalpre - presupuestoValue) +
        " €";
    } else if (presupuestoValue >= totalpre) {
      document.getElementById("res-presu").innerHTML =
        "Presupuesto suficiente, te quedan: " +
        Number(presupuestoValue - totalpre) +
        " €";
    }
  }
}
