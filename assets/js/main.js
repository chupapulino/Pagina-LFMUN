const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const mailButton = document.querySelector("#enviar-mailto");
const dirigidoSelect = document.querySelector("#dirigido-select");

if (mailButton && dirigidoSelect) {
  mailButton.addEventListener("click", () => {
    const email = dirigidoSelect.value;
    const nombre = document.querySelector("input[name='nombre']")?.value || "";
    const correo = document.querySelector("input[name='correo']")?.value || "";
    const tipo = document.querySelector("select[name='tipo']")?.value || "";
    const mensaje = document.querySelector("textarea[name='mensaje']")?.value || "";

    const subject = encodeURIComponent(`Consulta LFMUN2026 - ${tipo}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${correo}\nTipo: ${tipo}\n\nMensaje:\n${mensaje}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}

const registroForm = document.querySelector("[data-registro-form]");

if (registroForm) {
  const tipoInputs = registroForm.querySelectorAll(
    "input[name='tipo_participante'], select[name='tipo_participante']"
  );
  const internoFields = registroForm.querySelector("[data-scope='interno']");
  const externoFields = registroForm.querySelector("[data-scope='externo']");
  const sectionComite1 = registroForm.querySelector("[data-step='comite-1']");
  const sectionComite2 = registroForm.querySelector("[data-step='comite-2']");
  const sectionPago = registroForm.querySelector("[data-step='pago']");
  const pagoEfectivo = registroForm.querySelector("#pago-efectivo");
  const tipoPagoSelect = registroForm.querySelector("select[name='tipo_pago']");
  const pagoHint = registroForm.querySelector("[data-payment-hint]");

  const updateTipo = () => {
    const selectedRadio = registroForm.querySelector(
      "input[name='tipo_participante']:checked"
    )?.value;
    const selectedDropdown = registroForm.querySelector(
      "select[name='tipo_participante']"
    )?.value;
    const value = selectedRadio || selectedDropdown || "";

    if (internoFields) {
      internoFields.classList.toggle("is-hidden", value !== "interno");
    }

    if (externoFields) {
      externoFields.classList.toggle("is-hidden", value !== "externo");
    }

    if (pagoEfectivo) {
      const allowCash = value === "interno";
      pagoEfectivo.disabled = !allowCash;
      if (!allowCash && tipoPagoSelect?.value === "efectivo") {
        tipoPagoSelect.value = "";
      }
    }

    if (sectionComite1) {
      sectionComite1.classList.toggle("is-hidden", !value);
    }

    if (sectionComite2) {
      sectionComite2.classList.toggle("is-hidden", !value);
    }

    if (sectionPago) {
      sectionPago.classList.toggle("is-hidden", !value);
    }

    if (pagoHint) {
      if (!value) {
        pagoHint.textContent =
          "Selecciona si eres interno o externo para habilitar las opciones de pago.";
      } else if (value === "interno") {
        pagoHint.textContent =
          "Internos pueden pagar en efectivo o transferencia.";
      } else {
        pagoHint.textContent =
          "Externos solo pueden pagar por transferencia.";
      }
    }
  };

  tipoInputs.forEach((input) => {
    input.addEventListener("change", updateTipo);
  });

  updateTipo();
}

const galleryRoot = document.querySelector("[data-gallery-root]");

if (galleryRoot) {
  const photoCatalog = {
    "2025": [
      "fotos todos los años/fotos 2025/IMG_2374.JPG",
      "fotos todos los años/fotos 2025/IMG_2416.JPG",
      "fotos todos los años/fotos 2025/IMG_2417.JPG",
      "fotos todos los años/fotos 2025/IMG_2418.JPG",
      "fotos todos los años/fotos 2025/IMG_2420.JPG",
      "fotos todos los años/fotos 2025/IMG_2422.JPG",
      "fotos todos los años/fotos 2025/IMG_2426.JPG",
      "fotos todos los años/fotos 2025/IMG_2427.JPG",
      "fotos todos los años/fotos 2025/IMG_2428.JPG",
      "fotos todos los años/fotos 2025/IMG_2436.JPG",
      "fotos todos los años/fotos 2025/IMG_2440.JPG",
      "fotos todos los años/fotos 2025/IMG_2451.JPG",
      "fotos todos los años/fotos 2025/IMG_2456.JPG",
      "fotos todos los años/fotos 2025/IMG_2499.JPG",
      "fotos todos los años/fotos 2025/IMG_2567.JPG"
    ],
    "2024": [
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1570.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1575.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1582.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1588.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1590.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1600.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1619.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1625.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1637.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1654.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/IMG_1656.JPG"
    ],
    "2023": [
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0806.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0808.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0812.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0820.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0822.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0825.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0828.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0850.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0852.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0855.JPG",
      "fotos todos los años/fotos 2025/fotos 2024/fotos 2023/IMG_0994.JPG"
    ]
  };

  const sortedYears = Object.keys(photoCatalog).sort((a, b) => Number(b) - Number(a));

  sortedYears.forEach((year) => {
    const photos = photoCatalog[year];
    const card = document.createElement("article");
    card.className = "card gallery-year-card";

    const head = document.createElement("div");
    head.className = "gallery-head";

    const title = document.createElement("h3");
    title.textContent = `Edicion ${year}`;

    const count = document.createElement("p");
    count.className = "gallery-count";
    count.textContent = `${photos.length} fotos`;

    head.appendChild(title);
    head.appendChild(count);

    const grid = document.createElement("div");
    grid.className = "photo-grid";

    photos.forEach((path, index) => {
      const link = document.createElement("a");
      link.href = encodeURI(path);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `Abrir foto ${index + 1} de la edicion ${year}`);

      const image = document.createElement("img");
      image.src = encodeURI(path);
      image.alt = `LFMUN ${year} foto ${index + 1}`;
      image.loading = "lazy";

      link.appendChild(image);
      grid.appendChild(link);
    });

    card.appendChild(head);
    card.appendChild(grid);
    galleryRoot.appendChild(card);
  });
}
