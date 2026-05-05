// ===========================
//   ESTADO DE LA APLICACIÓN
// ===========================

// Array que guarda todos los productos agregados al carrito
var productos = [];


// ===========================
//   CAPTURA DE ELEMENTOS DEL DOM
// ===========================

var inputNombre    = document.getElementById('inputNombre');
var inputPrecio    = document.getElementById('inputPrecio');
var btnAgregar     = document.getElementById('btnAgregar');
var listaProductos = document.getElementById('listaProductos');
var totalTexto     = document.getElementById('totalTexto');
var resumen        = document.getElementById('resumen');
var msgError       = document.getElementById('msgError');


// ===========================
//   FUNCIÓN: agregar producto
// ===========================

function agregarProducto() {
  var nombre = inputNombre.value.trim();
  var precio = parseFloat(inputPrecio.value);

  // Validación: los dos campos deben estar completos y el precio debe ser un número válido
  if (nombre === '' || isNaN(precio) || precio < 0) {
    msgError.textContent = 'Completá ambos campos con valores válidos.';
    return;
  }

  msgError.textContent = '';

  // Crear el objeto producto y agregarlo al array
  var producto = { nombre: nombre, precio: precio };
  productos.push(producto);

  // Limpiar los inputs y volver el foco al primero
  inputNombre.value = '';
  inputPrecio.value = '';
  inputNombre.focus();

  // Actualizar la interfaz
  renderizarLista();
  actualizarTotal();
}


// ===========================
//   FUNCIÓN: eliminar producto
// ===========================

function eliminarProducto(indice) {
  // splice(indice, 1) elimina 1 elemento en la posición indicada
  productos.splice(indice, 1);

  renderizarLista();
  actualizarTotal();
}


// ===========================
//   FUNCIÓN: renderizar la lista en el DOM
// ===========================

function renderizarLista() {
  // Limpiar la lista antes de volver a dibujarla
  listaProductos.innerHTML = '';

  // Recorrer el array y crear un <li> por cada producto
  for (var i = 0; i < productos.length; i++) {

    // Usamos una función inmediata para capturar el valor de 'i' en el closure
    (function(indice) {

      var producto = productos[indice];

      // Crear el elemento de lista
      var li = document.createElement('li');
      li.classList.add('item-producto');

      // Nombre del producto
      var spanNombre = document.createElement('span');
      spanNombre.classList.add('item-nombre');
      spanNombre.textContent = producto.nombre;

      // Contenedor derecho (precio + ícono)
      var divDerecha = document.createElement('div');
      divDerecha.classList.add('item-derecha');

      // Precio
      var spanPrecio = document.createElement('span');
      spanPrecio.classList.add('item-precio');
      spanPrecio.textContent = '$' + producto.precio.toFixed(2);

      // Ícono de eliminar
      var spanEliminar = document.createElement('span');
      spanEliminar.classList.add('item-eliminar');
      spanEliminar.textContent = 'x';

      // Armar la estructura del <li>
      divDerecha.appendChild(spanPrecio);
      divDerecha.appendChild(spanEliminar);
      li.appendChild(spanNombre);
      li.appendChild(divDerecha);

      // Evento click: eliminar este producto al hacer clic
      li.addEventListener('click', function() {
        eliminarProducto(indice);
      });

      // Agregar el <li> a la lista en el DOM
      listaProductos.appendChild(li);

    })(i);
  }
}


// ===========================
//   FUNCIÓN: calcular y mostrar el total
// ===========================

function actualizarTotal() {
  var total = 0;

  for (var i = 0; i < productos.length; i++) {
    total += productos[i].precio;
  }

  // Mostrar el total con dos decimales
  totalTexto.textContent = '$' + total.toFixed(2);

  // Mostrar u ocultar el resumen según si hay productos
  if (productos.length > 0) {
    resumen.classList.remove('oculto');
  } else {
    resumen.classList.add('oculto');
  }
}


// ===========================
//   EVENTOS
// ===========================

// Clic en el botón agregar
btnAgregar.addEventListener('click', agregarProducto);

// Presionar Enter en el campo nombre pasa al campo precio
inputNombre.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    inputPrecio.focus();
  }
});

// Presionar Enter en el campo precio agrega el producto
inputPrecio.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    agregarProducto();
  }
});
