// Inicializar el dataLayer si no existe
window.dataLayer = window.dataLayer || [];

// Obtener el pop-up por su ID o clase
const popup = document.getElementById('miPopup');

// Función para verificar si el pop-up es visible
function checkPopupVisibility() {
  if (popup.classList.contains('visible')) {
    window.dataLayer.push({
      event: 'formulario_enviado',
      category: 'B2C',
      action: 'button click',
      label: 'HN',
      bu: 'POSTPAGO',
      oferta: 'PLAN MÓVIL 10 GB',
      valor: 9.99,
      numero: '5c91117b2ba54a20e53f49a2098f03c89a5f78d4a9ff9fb3bedd8fe4f826a41a',
      correo: '8095ac28eb371aa20fff24e7fca1dea95fac0fa282e399fe1e0ad72ae304135e',
    });
  }
}

// Escuchar cambios en la clase del pop-up
const observer = new MutationObserver(checkPopupVisibility);

observer.observe(popup, {
  attributes: true,
  attributeFilter: ['class']
});
