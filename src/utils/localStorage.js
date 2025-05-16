export function guardarEnLocalStorage(valor) {
    let dataLocal = JSON.parse(localStorage.getItem("usuarios"))
    dataLocal.push(valor)
    localStorage.setItem("usuarios", JSON.stringify(dataLocal));
}

export function obtenerDeLocalStorage(clave) {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : null;
}

export function eliminarDeLocalStorage(clave) {
    localStorage.removeItem(clave);
}

export function limpiarLocalStorage() {
    localStorage.clear();
}
