import { obtenerAlimentosPorNombre, obtenerDetallesDeAlimento } from "../api.js";

const formAlimentos = document.querySelector(".form-datosComida");
const datosAlimentos = document.querySelector(".datosAlimentos");
formAlimentos.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const nombreAlimento = document.getElementById("nombreComida").value;
  const alimentos = await obtenerAlimentosPorNombre(nombreAlimento);
  if( alimentos.status === 400 ) {
    const pErrorAlimentos = document.createElement("p");
    pErrorAlimentos.classList.add("texto-error");
    pErrorAlimentos.textContent = "El servidor no está funcionando";
    datosAlimentos.appendChild(pErrorAlimentos);
    return;
  }
  if ( alimentos.length === 0 ) {
    const pErrorAlimentos = document.createElement("p");
    pErrorAlimentos.classList.add("texto-error");
    pErrorAlimentos.textContent = "No existen alimentos con ese nombre";
    datosAlimentos.appendChild(pErrorAlimentos);
  } else {
    const ul = document.createElement("ul");
    ul.classList.add("ul-alimentos");
    alimentos.forEach((alimento) => {
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const pcategory = document.createElement("p");
      const pSubCategory = document.createElement("p");
      const buttonAdd = document.createElement("button");
      const buttonVerMas = document.createElement("button");
      buttonAdd.textContent = "Cargar comida";
      buttonVerMas.textContent = "Ver detalles";
      buttonAdd.setAttribute("data-name", "button-add");
      buttonVerMas.setAttribute("data-name", "button-verMas");
      buttonVerMas.setAttribute("data-id", alimento.id);
      h3.textContent = alimento.name;
      pSubCategory.textContent = `Sub Categoría: ${alimento.subcategory}`;
      pcategory.textContent = `Categoría: ${alimento.category}`;
      if (!alimento.category) {
        pcategory.textContent = `Categoría: N/A`;
      }
      if (!alimento.subcategory) {
        pSubCategory.textContent = `Sub Categoría: N/A`;
      }

      li.appendChild(h3);
      li.appendChild(pcategory);
      li.appendChild(pSubCategory);
      li.appendChild(buttonAdd);
      li.appendChild(buttonVerMas);
      ul.appendChild(li);
    });
    datosAlimentos.textContent = "";
    datosAlimentos.appendChild(ul);
  }
});

document.addEventListener("click", async (ev) => {
  if (ev.target.dataset.name === "button-verMas") {
    const id = ev.target.dataset.id;
    const data = await obtenerDetallesDeAlimento(id);
    if (data) {
      datosAlimentos.textContent = "";
      const table = document.createElement("table");
      const tbody = document.createElement("tbody");
      const rows = [
        ["Nombre", data.name],
        ["Categoría", data.category],
        ["Sub Categoría", data.subcategory],
        ["Cantidad", data.amount],
        ["Unidad cantidad", data.amount_type],
        ["Medida", data.extent],
        ["Unidad de medida", data.extent_type],
        ["Tipo alimento", data.content_type],
      ];
      rows.forEach(([label, value]) => {
        const td = document.createElement("td");
        const tr = document.createElement("tr");
        const th = document.createElement("th");

        th.textContent = label;
        td.textContent = value ?? "N/A";
        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
      });
      const caption = document.createElement("caption");
      caption.textContent = "La cantidad es para 15 gramos de carbohidratos";
      table.appendChild(tbody);
      table.appendChild(caption);
      datosAlimentos.appendChild(table);
    }
  }
});
