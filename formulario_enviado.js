// Inicializar el dataLayer si no existe
window.dataLayer = window.dataLayer || [];
// Función que se ejecuta cuando se hace clic en el botón
function handleFormSubmit() {
    window.dataLayer.push({
      event: 'formulario_enviado',
      category: 'B2C',
      action: 'submit form',
      label: 'HN',
      bu: 'POSTPAGO',
      oferta: 'PLAN MÓVIL 10 GB',
      numero: '5c91117b2ba54a20e53f49a2098f03c89a5f78d4a9ff9fb3bedd8fe4f826a41a',
      correo: '8095ac28eb371aa20fff24e7fca1dea95fac0fa282e399fe1e0ad72ae304135e',
 });
}
// Añadir el event listener cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    const botonEnviar = document.getElementById("botonEnviar");
// Añadir un event listener al botón de enviar
    botonEnviar.addEventListener("click", handleFormSubmit);
});
