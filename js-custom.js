// Mensaje al enviar formulario

function msjEnviado() {
  var remitente = document.getElementById("nombre").value;

  alert(
    "¡Gracias " + remitente + " por contactarme! Pronto responderé tu mensaje"
  );
}

// Poner en blanco el formulario después de enviar

function resetForm() {
  document.contactForm.reset();
}
