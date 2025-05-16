import { alertaGeneral } from "../utils/alertas.js";
import { guardarEnLocalStorage } from "../utils/localStorage.js";

const formRegister = document.getElementById("form--register");
const btnRegister = document.getElementById("submit");
const formLogin = document.getElementById("form--login");
const btnLogin = formLogin.querySelector(".submit");

btnRegister.addEventListener("click", () => {
    const datos = new FormData(formRegister);
    const usuario = Object.fromEntries(datos);
    if (Object.values(usuario).includes("")) {
        alertaGeneral("Error", "Los campos no puede ir vacios", "error")
    } else {
        if (usuario.clave !== usuario.confirmar) {
            alertaGeneral("Error", "Las contraseñas no coinciden", "error")
            return;
        }
        guardarEnLocalStorage(usuario)
    }

});

btnLogin.addEventListener("click", () => {
    const datos = new FormData(formLogin);
    const credenciales = Object.fromEntries(datos);
    console.log("🔐 Datos de login:", credenciales);
});


document.getElementById("login").addEventListener("click", () => {
    document.getElementById("form--register").style.display = "flex"
    document.getElementById("form--login").style.display = "none"
})
document.getElementById("register").addEventListener("click", () => {
    document.getElementById("form--register").style.display = "none"
    document.getElementById("form--login").style.display = "flex"
})
