// ---------- Cambio de pestaña (Monedas / Billetes) ----------
function mostrarPanel(tipo) {
    const panelMonedas = document.getElementById("panelMonedas");
    const panelBilletes = document.getElementById("panelBilletes");
    const tabMonedas = document.getElementById("tabMonedas");
    const tabBilletes = document.getElementById("tabBilletes");
    const selector = document.getElementById("selector");
    selector.dataset.activo = tipo;

    if (tipo === "monedas") {
        panelMonedas.classList.remove("is-oculto");
        panelBilletes.classList.add("is-oculto");
        tabMonedas.classList.add("is-activa");
        tabBilletes.classList.remove("is-activa");
        tabMonedas.setAttribute("aria-selected", "true");
        tabBilletes.setAttribute("aria-selected", "false");
    } else {
        panelBilletes.classList.remove("is-oculto");
        panelMonedas.classList.add("is-oculto");
        tabBilletes.classList.add("is-activa");
        tabMonedas.classList.remove("is-activa");
        tabBilletes.setAttribute("aria-selected", "true");
        tabMonedas.setAttribute("aria-selected", "false");
    }
}

// ---------- Utilidad: leer y sanear un input ----------
function leerCantidad(id) {
    const input = document.getElementById(id);
    let valor = parseInt(input.value) || 0;
    if (valor < 0) {
        valor = 0;
        input.value = 0;
    }
    return valor;
}

// ---------- Reiniciar la calculadora ----------
function reiniciar() {
    document.querySelectorAll(".pieza__input").forEach((input) => {
        input.value = "";
    });
    calcularTotal();
}

// ---------- Cálculo principal ----------
function calcularTotal() {
    // Valores de cada moneda
    const valoresMonedas = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let subtotalMonedas = 0;

    valoresMonedas.forEach((valor, i) => {
        const cantidad = leerCantidad(`numero${i + 1}`);
        const total = cantidad * valor;
        document.getElementById(`resultado${i + 1}`).textContent = total.toFixed(2);
        subtotalMonedas += total;
    });

    // Valores de cada billete
    const valoresBilletes = [200, 100, 50, 20, 10, 5];
    let subtotalBilletes = 0;

    valoresBilletes.forEach((valor, i) => {
        const cantidad = leerCantidad(`billete${i + 1}`);
        const total = cantidad * valor;
        document.getElementById(`resultadoB${i + 1}`).textContent = total.toFixed(2);
        subtotalBilletes += total;
    });

    // Subtotales por panel
    document.getElementById("subtotalMonedas").textContent = subtotalMonedas.toFixed(2);
    document.getElementById("subtotalBilletes").textContent = subtotalBilletes.toFixed(2);

    // Desglose en la barra inferior
    document.getElementById("miniMonedas").textContent = subtotalMonedas.toFixed(2);
    document.getElementById("miniBilletes").textContent = subtotalBilletes.toFixed(2);

    // Total general (monedas + billetes)
    const totalGeneral = subtotalMonedas + subtotalBilletes;
    const spanTotal = document.getElementById("totalGeneral");
    const totalAnterior = spanTotal.textContent;
    spanTotal.textContent = totalGeneral.toFixed(2);

    if (totalAnterior !== spanTotal.textContent) {
        const cifra = document.querySelector(".total__cifra");
        cifra.classList.remove("is-actualizado");
        // Forzar reflow para poder reiniciar la animación
        void cifra.offsetWidth;
        cifra.classList.add("is-actualizado");
        clearTimeout(cifra._temporizador);
        cifra._temporizador = setTimeout(() => cifra.classList.remove("is-actualizado"), 180);
    }
}