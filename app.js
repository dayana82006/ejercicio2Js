const data = {
    Toyota: [
      { name: "Corolla", image: "https://via.placeholder.com/300?text=Toyota+Corolla", event: "Evento: Feria Automotriz - 15 de diciembre" },
      { name: "Camry", image: "https://via.placeholder.com/300?text=Toyota+Camry", event: "Evento: Expo de Innovación - 22 de diciembre" },
    ],
    Ford: [
      { name: "Mustang", image: "https://via.placeholder.com/300?text=Ford+Mustang", event: "Evento: Carrera de Drag - 10 de enero" },
      { name: "F-150", image: "https://via.placeholder.com/300?text=Ford+F-150", event: "Evento: Lanzamiento de Autos - 5 de febrero" },
    ],
    BMW: [
      { name: "Serie 3", image: "https://via.placeholder.com/300?text=BMW+Serie+3", event: "Evento: Exhibición de Lujo - 12 de marzo" },
      { name: "X5", image: "https://via.placeholder.com/300?text=BMW+X5", event: "Evento: Experiencia SUV - 20 de marzo" },
    ],
  };
  const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const carImage = document.getElementById("carImage");
const eventInfo = document.getElementById("eventInfo");

// Cargar marcas en la primera lista desplegable
Object.keys(data).forEach((brand) => {
  const option = document.createElement("option");
  option.value = brand;
  option.textContent = brand;
  brandSelect.appendChild(option);
});


brandSelect.addEventListener("change", () => {
  const selectedBrand = brandSelect.value;
  modelSelect.innerHTML = '<option value="">Seleccionar</option>';

  if (selectedBrand) {
    data[selectedBrand].forEach((model, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = model.name;
      modelSelect.appendChild(option);
    });
  }
  resetDisplay();
});

// Mostrar imagen y evento según el modelo seleccionado
modelSelect.addEventListener("change", () => {
  const selectedBrand = brandSelect.value;
  const selectedModelIndex = modelSelect.value;

  if (selectedBrand && selectedModelIndex !== "") {
    const modelData = data[selectedBrand][selectedModelIndex];
    carImage.src = modelData.image;
    carImage.style.display = "block";
    eventInfo.textContent = "";
  } else {
    resetDisplay();
  }
});


carImage.addEventListener("click", () => {
  const selectedBrand = brandSelect.value;
  const selectedModelIndex = modelSelect.value;

  if (selectedBrand && selectedModelIndex !== "") {
    const modelData = data[selectedBrand][selectedModelIndex];
    eventInfo.textContent = modelData.event;
  }
});

// Reiniciar imagen y evento
function resetDisplay() {
  carImage.style.display = "none";
  eventInfo.textContent = "";
}