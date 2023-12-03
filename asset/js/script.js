import departamentosAlquiler from "./data/departamentosAlquiler.js";
import departamentosVenta from "./data/departamentosVenta.js";



const listaDepartamentos = (departamentos, containerId) => {
  const container = document.getElementById(containerId);
  const mostrarDepartamentos = departamentos.slice(0, 3); 

  mostrarDepartamentos.forEach(depa => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "col-md-4 mb-4";

      const diseñoCarta = `
          <div class="card" style="width: 25rem; gap: 30px">
              <img src="${depa.src}" class="card-img-top" style="height:18rem" alt="${depa.nombre}">
              <div class="card-body">
                  <h5 class="card-title">${depa.nombre}</h5>
                  <p class="card-text" style="height:80px">${depa.descripcion}</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item"><i class="fa-solid fa-location-dot"></i> ${depa.ubicacion}</li>
                  <li class="list-group-item"><i class="fa-solid fa-bed"></i> ${depa.habitaciones}</li>
                  <li class="list-group-item"><i class="fa-solid fa-dollar-sign"></i> ${depa.costo} Clp</li>
                  <li class="list-group-item"><span class="${depa.smoke ? 'text-success' : 'text-danger'}">Areas Comunes </span>${depa.smoke ? '<i class="fa-solid fa-smoking text-success"></i>' : '<i class="fa-solid fa-ban-smoking text-danger fs-4"></i>'}</li>
                  <li class="list-group-item"><span class="${depa.pets ? 'text-success' : 'text-danger'}">Mascotas </span>${depa.pets ? '<i class="fa-solid fa-paw text-success"></i>' : '<i class="fa-solid fa-ban text-danger"></i>'}</li>
              </ul>
          </div>
      `;

      tarjeta.innerHTML = diseñoCarta;
      container.appendChild(tarjeta);
  });
};

listaDepartamentos(departamentosAlquiler, "contenedorAlquiler");

listaDepartamentos(departamentosVenta, "contenedorVenta");


