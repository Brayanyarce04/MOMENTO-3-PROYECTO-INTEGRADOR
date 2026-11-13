
const WHATSAPP_NUMBER = "573043909319";

const SOAT = {
    menor100: 256200,
    entre100y200: 343300,
    mayor200: 820000
};

const TECNOMECANICA = 232650;
const SEGURO_TODO_RIESGO = 1500000;

const motocicletas = [
    {
        id: "dr650",
        nombre: "Suzuki DR 650",
        marca: "Suzuki",
        modelo: 2026,
        kilometraje: 500,
        cilindraje: 644,
        precio: 56000000,
        condicion: "Usada",
        fotos: ["DR1.jpg", "DR2.jpg"],
        descripcion: "Motocicleta Suzuki DR 650. Consulta con nuestro asesor todos sus detalles."
    },
    {
        id: "nmaxv3nueva",
        nombre: "Yamaha NMAX V3",
        marca: "Yamaha",
        modelo: 2027,
        kilometraje: 0,
        cilindraje: 155,
        precio: 22100000,
        condicion: "Nueva",
        fotos: [
            "NMAXV3-1NUEVA.jpg",
            "NMAXV3-2NUEVA.jpg",
            "NMAXV3-3NUEVA.jpg",
            "NMAXV3-4NUEVA.jpg",
            "NMAXV3-5NUEVA.jpg"
        ],
        descripcion: "Yamaha NMAX V3 nueva, modelo 2027, con cero kilómetros."
    },
    {
        id: "szr1",
        nombre: "Yamaha SZ R 150 - Unidad 1",
        marca: "Yamaha",
        modelo: 2024,
        kilometraje: 35000,
        cilindraje: 149,
        precio: 8200000,
        condicion: "Usada",
        fotos: ["SZRUSADA1.jpg", "SZRUSADA2.jpg", "SZRUSADA3.jpg"],
        descripcion: "Yamaha SZ R 150 usada, modelo 2024."
    },
    {
        id: "tornado300",
        nombre: "Honda XR 300 Tornado",
        marca: "Honda",
        modelo: 2026,
        kilometraje: 7000,
        cilindraje: 249,
        precio: 38500000,
        condicion: "Usada",
        fotos: [
            "TornadoUsada1.jpg",
            "TornadoUsada2.jpg",
            "TornadoUsada3.jpg",
            "TornadoUsada4.jpg"
        ],
        descripcion: "Honda XR 300 Tornado, modelo 2026."
    },
    {
        id: "xtz250",
        nombre: "Yamaha XTZ 250 Lander",
        marca: "Yamaha",
        modelo: 2025,
        kilometraje: 7000,
        cilindraje: 249,
        precio: 26900000,
        condicion: "Usada",
        fotos: [
            "XTZ250USADA1.jpg",
            "XTZ250USADA2.jpg",
            "XTZ250USADA3.jpg",
            "XTZ250USADA4.jpg"
        ],
        descripcion: "Yamaha XTZ 250 Lander, modelo 2025."
    },
    {
        id: "nmaxv2",
        nombre: "Yamaha NMAX V2 Connected",
        marca: "Yamaha",
        modelo: 2026,
        kilometraje: 9500,
        cilindraje: 155,
        precio: 17800000,
        condicion: "Usada",
        fotos: [
            "NMAXV2-USADA1.jpg",
            "NMAXV2-USADA2.jpg",
            "NMAXV2-USADA3.jpg"
        ],
        descripcion: "Yamaha NMAX V2 Connected, modelo 2026."
    },
    {
        id: "yz85",
        nombre: "Yamaha YZ 85",
        marca: "Yamaha",
        modelo: 2026,
        kilometraje: 25,
        cilindraje: 85,
        precio: 35000000,
        condicion: "Usada",
        fotos: [
            "YZ85-USADA1.jpg",
            "YZ85-USADA2.jpg",
            "YZ85-USADA3.jpg"
        ],
        descripcion: "Yamaha YZ 85, modelo 2026."
    },
    {
        id: "nmaxv3usada",
        nombre: "Yamaha NMAX V3",
        marca: "Yamaha",
        modelo: 2027,
        kilometraje: 500,
        cilindraje: 155,
        precio: 22500000,
        condicion: "Usada",
        fotos: [
            "NMAXV3-USADA1.jpg",
            "NMAXV3-USADA2.jpg",
            "NMAXV3-USADA3.jpg"
        ],
        descripcion: "Yamaha NMAX V3, modelo 2027, con 500 kilómetros."
    },
    {
        id: "szr2",
        nombre: "Yamaha SZ R 150 - Unidad 2",
        marca: "Yamaha",
        modelo: 2026,
        kilometraje: 10000,
        cilindraje: 149,
        precio: 11800000,
        condicion: "Usada",
        fotos: [
            "2.SZR-USADA1.jpg",
            "2.SZR-USADA2.jpg",
            "2.SZR-USADA3.jpg"
        ],
        descripcion: "Yamaha SZ R 150 usada, modelo 2026."
    },
    {
        id: "ducati698",
        nombre: "Ducati Hypermotard 698 Mono",
        marca: "Ducati",
        modelo: 2024,
        kilometraje: 9000,
        cilindraje: 659,
        precio: 59000000,
        condicion: "Usada",
        fotos: [
            "DUCATI698-USADA1.jpg",
            "DUCATI698-USADA2.jpg",
            "DUCATI698-USADA3.jpg"
        ],
        descripcion: "Ducati Hypermotard 698 Mono, modelo 2024."
    },
    {
        id: "xt660",
        nombre: "Yamaha XT 660",
        marca: "Yamaha",
        modelo: 2016,
        kilometraje: 45000,
        cilindraje: 660,
        precio: 55000000,
        condicion: "Usada",
        fotos: [
            "XT660-USADA1.jpg",
            "XT660-USADA2.jpg",
            "XT660-USADA3.jpg"
        ],
        descripcion: "Yamaha XT 660, modelo 2016."
    },
    {
        id: "cryptonfi",
        nombre: "Yamaha Crypton FI 115",
        marca: "Yamaha",
        modelo: 2024,
        kilometraje: 14000,
        cilindraje: 114,
        precio: 7000000,
        condicion: "Usada",
        fotos: [
            "CRYPTONFI-USADA1.jpg",
            "CRYPTONFI-USADA2.jpg",
            "CRYPTONFI-USADA3.jpg"
        ],
        descripcion: "Yamaha Crypton FI 115, modelo 2024."
    },
    {
        id: "ax4",
        nombre: "Suzuki AX4 115",
        marca: "Suzuki",
        modelo: 2026,
        kilometraje: 0,
        cilindraje: 113,
        precio: 6800000,
        condicion: "Nueva",
        fotos: [
            "SUZUKIAX4-NUEVA1.jpg",
            "SUZUKIAX4-NUEVA2.jpg",
            "SUZUKIAX4-NUEVA3.jpg"
        ],
        descripcion: "Suzuki AX4 115 nueva, modelo 2026. Precio comercial sin papeles."
    },
    {
        id: "xadv750",
        nombre: "Honda X-ADV 750",
        marca: "Honda",
        modelo: 2024,
        kilometraje: 7000,
        cilindraje: 745,
        precio: 66000000,
        condicion: "Usada",
        fotos: [
            "ADV750-USADA1.jpg",
            "ADV750-USADA2.jpg",
            "ADV750-USADA3.jpg"
        ],
        descripcion: "Honda X-ADV 750, modelo 2024."
    }
];

const formatoCOP = valor => {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(valor);
};

const formatoKilometros = valor => {
    return new Intl.NumberFormat("es-CO").format(valor) + " km";
};

const obtenerSOAT = cilindraje => {
    if (cilindraje < 100) return SOAT.menor100;
    if (cilindraje <= 200) return SOAT.entre100y200;
    return SOAT.mayor200;
};

const generarMensajeMoto = moto => {
    return `Hola, estoy interesado en la ${moto.nombre}, modelo ${moto.modelo}, con ${formatoKilometros(moto.kilometraje)}. Su precio publicado es ${formatoCOP(moto.precio)}. Quisiera recibir más información y conocer su disponibilidad.`;
};

const crearTarjeta = (moto, index) => {
    const estadoClase = moto.condicion === "Nueva"
        ? "new"
        : moto.condicion === "Usada"
            ? "used"
            : "pending";

    const mensaje = encodeURIComponent(generarMensajeMoto(moto));
    const imagenInicial = `img/motos/${moto.fotos[0]}`;

    return `
        <article class="motorcycle-card" data-id="${moto.id}">

            <div class="motorcycle-gallery"
                 data-photos='${JSON.stringify(moto.fotos)}'
                 data-index="0">

                <img src="${imagenInicial}"
                     alt="${moto.nombre} - fotografía 1"
                     loading="${index < 3 ? "eager" : "lazy"}">

                <span class="motorcycle-condition ${estadoClase}">
                    ${moto.condicion}
                </span>

                ${moto.fotos.length > 1 ? `
                    <button class="gallery-button gallery-prev"
                            type="button"
                            aria-label="Fotografía anterior">‹</button>

                    <button class="gallery-button gallery-next"
                            type="button"
                            aria-label="Fotografía siguiente">›</button>
                ` : ""}

                <span class="gallery-count">01 / ${String(moto.fotos.length).padStart(2, "0")}</span>

            </div>

            <div class="motorcycle-details">

                <h3>${moto.nombre}</h3>

                <span class="motorcycle-price">
                    ${formatoCOP(moto.precio)}
                </span>

                <div class="motorcycle-specs">

                    <div class="motorcycle-spec">
                        <span>MODELO</span>
                        <span>${moto.modelo}</span>
                    </div>

                    <div class="motorcycle-spec">
                        <span>KILOMETRAJE</span>
                        <span>${formatoKilometros(moto.kilometraje)}</span>
                    </div>

                    <div class="motorcycle-spec">
                        <span>CILINDRAJE</span>
                        <span>${moto.cilindraje} cc</span>
                    </div>

                    <div class="motorcycle-spec">
                        <span>CONDICIÓN</span>
                        <span>${moto.condicion}</span>
                    </div>

                </div>

                <p class="motorcycle-description">
                    ${moto.descripcion}
                </p>

                <a class="motorcycle-quote"
                   href="https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}"
                   target="_blank"
                   rel="noopener noreferrer">
                    COTIZA YA POR WHATSAPP
                </a>

            </div>

        </article>
    `;
};

const inventoryGrid = document.getElementById("inventory-grid");
const inventoryTotal = document.getElementById("inventory-total");
const inventoryEmpty = document.getElementById("inventory-empty");

const searchInput = document.getElementById("search-moto");
const brandFilter = document.getElementById("filter-brand");
const conditionFilter = document.getElementById("filter-condition");
const priceFilter = document.getElementById("filter-price");
const clearFilters = document.getElementById("clear-filters");

const quoteSelect = document.getElementById("quote-motorcycle");
const insuranceCheckbox = document.getElementById("include-insurance");
const quotationBreakdown = document.getElementById("quotation-breakdown");
const quotationTotal = document.getElementById("quotation-total");
const quotationBikeInfo = document.getElementById("quotation-bike-info");
const quotationWhatsapp = document.getElementById("quotation-whatsapp");

function mostrarMotocicletas(lista) {
    inventoryGrid.innerHTML = lista.map(crearTarjeta).join("");

    inventoryTotal.textContent =
        `${lista.length} MOTOCICLETAS`;

    inventoryEmpty.hidden = lista.length !== 0;

    configurarCarruseles();
}

function configurarCarruseles() {
    document.querySelectorAll(".motorcycle-gallery").forEach(gallery => {

        const fotos = JSON.parse(gallery.dataset.photos);
        const imagen = gallery.querySelector("img");
        const contador = gallery.querySelector(".gallery-count");

        const anterior = gallery.querySelector(".gallery-prev");
        const siguiente = gallery.querySelector(".gallery-next");

        let indice = 0;

        const actualizarFoto = () => {
            imagen.src = `img/motos/${fotos[indice]}`;
            imagen.alt = `Motocicleta - fotografía ${indice + 1}`;
            contador.textContent =
                `${String(indice + 1).padStart(2, "0")} / ${String(fotos.length).padStart(2, "0")}`;
            gallery.dataset.index = indice;
        };

        if (anterior) {
            anterior.addEventListener("click", () => {
                indice = (indice - 1 + fotos.length) % fotos.length;
                actualizarFoto();
            });
        }

        if (siguiente) {
            siguiente.addEventListener("click", () => {
                indice = (indice + 1) % fotos.length;
                actualizarFoto();
            });
        }
    });
}

function aplicarFiltros() {
    const busqueda = searchInput.value.trim().toLowerCase();
    const marca = brandFilter.value;
    const condicion = conditionFilter.value;
    const orden = priceFilter.value;

    let resultados = motocicletas.filter(moto => {

        const coincideNombre =
            moto.nombre.toLowerCase().includes(busqueda);

        const coincideMarca =
            marca === "" || moto.marca === marca;

        const coincideCondicion =
            condicion === "" || moto.condicion === condicion;

        return coincideNombre && coincideMarca && coincideCondicion;
    });

    if (orden === "asc") {
        resultados.sort((a, b) => a.precio - b.precio);
    }

    if (orden === "desc") {
        resultados.sort((a, b) => b.precio - a.precio);
    }

    mostrarMotocicletas(resultados);
}

searchInput.addEventListener("input", aplicarFiltros);
brandFilter.addEventListener("change", aplicarFiltros);
conditionFilter.addEventListener("change", aplicarFiltros);
priceFilter.addEventListener("change", aplicarFiltros);

clearFilters.addEventListener("click", () => {
    searchInput.value = "";
    brandFilter.value = "";
    conditionFilter.value = "";
    priceFilter.value = "";

    mostrarMotocicletas(motocicletas);
});

function cargarOpcionesCotizacion() {
    motocicletas.forEach(moto => {
        const opcion = document.createElement("option");
        opcion.value = moto.id;
        opcion.textContent = `${moto.nombre} - ${formatoCOP(moto.precio)}`;
        quoteSelect.appendChild(opcion);
    });
}

function actualizarCotizacion() {
    const moto = motocicletas.find(
        item => item.id === quoteSelect.value
    );

    if (!moto) {
        quotationBreakdown.innerHTML =
            "<p>Selecciona una motocicleta para visualizar los valores.</p>";

        quotationTotal.textContent = "$0 COP";
        quotationBikeInfo.innerHTML =
            "<p>Selecciona una motocicleta para comenzar tu cotización.</p>";

        quotationWhatsapp.href = "#";
        return;
    }

    let total = moto.precio;

    let conceptos = `
        <div class="quotation-line">
            <span>Precio de la motocicleta</span>
            <strong>${formatoCOP(moto.precio)}</strong>
        </div>
    `;

    let mensajeDocumentos = "";

    if (moto.condicion === "Nueva") {
        const valorSOAT = obtenerSOAT(moto.cilindraje);

        total += valorSOAT + TECNOMECANICA;

        conceptos += `
            <div class="quotation-line">
                <span>SOAT estimado (${moto.cilindraje} cc)</span>
                <strong>${formatoCOP(valorSOAT)}</strong>
            </div>

            <div class="quotation-line">
                <span>Tecnomecánica (referencia)</span>
                <strong>${formatoCOP(TECNOMECANICA)}</strong>
            </div>
        `;

        mensajeDocumentos =
            "Se incluyen SOAT y tecnomecánica como conceptos de cotización, sujetos a confirmación de exigibilidad y vigencia.";
    } else if (moto.condicion === "Usada") {
        conceptos += `
            <div class="quotation-line">
                <span>SOAT y tecnomecánica</span>
                <strong>No se suman</strong>
            </div>
        `;

        mensajeDocumentos =
            "Se asume que los documentos de la moto están vigentes. Debes confirmar su vigencia con el asesor.";
    } else {
        conceptos += `
            <div class="quotation-line">
                <span>Documentación</span>
                <strong>Por confirmar</strong>
            </div>
        `;

        mensajeDocumentos =
            "El estado de la motocicleta está pendiente de confirmación. Consulta los documentos con el asesor.";
    }

    if (insuranceCheckbox.checked) {
        total += SEGURO_TODO_RIESGO;

        conceptos += `
            <div class="quotation-line">
                <span>Seguro todo riesgo (1 año)</span>
                <strong>${formatoCOP(SEGURO_TODO_RIESGO)}</strong>
            </div>
        `;
    } else {
        conceptos += `
            <div class="quotation-line">
                <span>Seguro todo riesgo</span>
                <strong>No incluido</strong>
            </div>
        `;
    }

    quotationBreakdown.innerHTML = conceptos;
    quotationTotal.textContent = formatoCOP(total);

    quotationBikeInfo.innerHTML = `
        <strong>${moto.nombre}</strong><br>
        Modelo ${moto.modelo} · ${formatoKilometros(moto.kilometraje)} · ${moto.cilindraje} cc
        <br>
        ${mensajeDocumentos}
    `;

    const mensaje = `
Hola, quiero solicitar una cotización de AF MOTORS.

Motocicleta: ${moto.nombre}
Modelo: ${moto.modelo}
Kilometraje: ${formatoKilometros(moto.kilometraje)}
Cilindraje: ${moto.cilindraje} cc
Precio: ${formatoCOP(moto.precio)}
Condición: ${moto.condicion}

${moto.condicion === "Nueva"
    ? `SOAT: ${formatoCOP(obtenerSOAT(moto.cilindraje))}
Tecnomecánica: ${formatoCOP(TECNOMECANICA)}`
    : "Documentación: consultar vigencia con el asesor."}

Seguro todo riesgo: ${insuranceCheckbox.checked ? "Incluido por un año: " + formatoCOP(SEGURO_TODO_RIESGO) : "No incluido"}

TOTAL ESTIMADO: ${formatoCOP(total)}

${mensajeDocumentos}

Por favor, quisiera confirmar la vigencia de los papeles y los valores definitivos.
    `.trim();

    quotationWhatsapp.href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

quoteSelect.addEventListener("change", actualizarCotizacion);
insuranceCheckbox.addEventListener("change", actualizarCotizacion);

function iniciarMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (!menuToggle || !navbar) return;

    menuToggle.addEventListener("click", () => {
        const abierto = navbar.classList.toggle("active");

        menuToggle.classList.toggle("active", abierto);
        menuToggle.setAttribute("aria-expanded", String(abierto));
    });

    navbar.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

mostrarMotocicletas(motocicletas);
cargarOpcionesCotizacion();
actualizarCotizacion();
iniciarMenu();
