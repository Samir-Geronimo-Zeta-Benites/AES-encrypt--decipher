const clave = "claveaes12345678"; // Clave de 128 bits

function encriptar() {
    const texto = document.getElementById("texto").value;
    const resultado = CryptoJS.AES.encrypt(texto, clave).toString();
    document.getElementById("resultado").value = resultado;
}

function desencriptar() {
    const texto = document.getElementById("texto").value;
    try {
        const bytes = CryptoJS.AES.decrypt(texto, clave);
        const resultado = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("resultado").value = resultado || "⚠️ Texto inválido, intente escribiendo una frase válida";
    } catch (e) {
        document.getElementById("resultado").value = "⚠️ Error al desencriptar, con una fráse común";
    }
}
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


