document.addEventListener("DOMContentLoaded", () => {
  const arrayHabitaciones = [
    {
      nombre: "Habitacion Normal",
      img: "./img/producto1.jpg",
      precio: 100000,
      descripcion: "Habitación económica, 7 días y 6 noches",
    },
    {
      nombre: "Habitacion Premium",
      img: "./img/producto2.jpg",
      precio: 250000,
      descripcion: "Precio moderado y gran comodidad",
    },
    {
      nombre: "Habitacion Continental",
      img: "./img/producto3.jpg",
      precio: 400000,
      descripcion: "Incluye desayuno continental y eventos guiados",
    },
  ];

  const mainContainer = document.getElementById("main-container");

  const contenedor = document.createElement("section");
  contenedor.classList.add("grid-productos");

  arrayHabitaciones.forEach((habitacion) => {
    const producto = document.createElement("div");
    producto.classList.add("producto");

    const imagen = document.createElement("img");
    imagen.src = habitacion.img;
    imagen.alt = habitacion.nombre;
    imagen.classList.add("imagen");

    const titulo = document.createElement("h2");
    titulo.textContent = habitacion.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = habitacion.descripcion;

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${habitacion.precio}`;

    const boton = document.createElement("button");
    boton.type = "submit";
    boton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Agregar al carrito`;

    producto.appendChild(imagen);
    producto.appendChild(titulo);
    producto.appendChild(descripcion);
    producto.appendChild(precio);
    producto.appendChild(boton);

    contenedor.appendChild(producto);
  });

  mainContainer.appendChild(contenedor);
});