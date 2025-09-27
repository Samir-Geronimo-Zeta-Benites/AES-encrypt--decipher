const clave = "claveaes12345678"; // Clave de 128 bits

function encriptar() {
    const textarea = document.getElementById("texto");
    const texto = textarea.value.trim(); // eliminamos espacios en blanco
    if (texto === "") {
        const mensaje = document.getElementById("mensajeError");
        document.getElementById("resultado").value = "Escribe una frase antes de encriptar.";
        mensaje.textContent = "Escribe una frase antes de encriptar.";
        return;
    }
    try {
        const resultado = CryptoJS.AES.encrypt(texto, clave).toString();
        document.getElementById("resultado").value = resultado;
    } catch (e) {
        document.getElementById("resultado").value = "Error al encriptar";
        mensaje.textContent = "Error al encriptar.";
    }
}


function desencriptar() {
    const texto = document.getElementById("texto").value;
    try {
        const bytes = CryptoJS.AES.decrypt(texto, clave);
        const resultado = bytes.toString(CryptoJS.enc.Utf8);
        const mensaje = document.getElementById("mensajeError");
        mensaje.textContent = "";
        document.getElementById("resultado").value = resultado || "Texto invalido";
        mensaje.textContent = resultado ? "" : "Texto invalido";
    } catch (e) {
        document.getElementById("resultado").value = "Error al desencriptar.";
        mensaje.textContent = "Error al desencriptar.";
    }
};
//archivo.txt
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fileInput").addEventListener("change", function () {
    const archivo = this.files[0];
    const mensaje = document.getElementById("mensajeError");
    mensaje.textContent = "";

    if (archivo && archivo.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("texto").value = e.target.result;
      };
      reader.readAsText(archivo);
    } else {
      mensaje.textContent = "Archivo incompatible. Solo se permiten archivos .txt";
      this.value = ""; // limpiar selección
    }
  });
});
function borrarContenido() {
    const textarea = document.getElementById("texto");
    const resultado = document.getElementById("resultado");
    if(textarea.value.trim() === "" && resultado.value.trim() === ""){
      const mensaje = document.getElementById("mensajeError");
      mensaje.textContent = "No hay nada que borrar";
      return;
    }
    textarea.value = "";
    resultado.value = "";

    if (mensaje) {
        mensaje.textContent = "";  
    }
}

