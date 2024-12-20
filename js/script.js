// Inicializa EmailJS con tu Public Key
emailjs.init("k7BHvG2Hq26c2ixz8"); // Reemplaza con tu Public Key de EmailJS

// Maneja el envío del formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Muestra un mensaje de estado inicial
    const formStatus = document.getElementById("form-status");
    formStatus.innerText = "Enviando mensaje...";

    // Captura los valores del formulario
    const from_name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Configura los parámetros para la plantilla
    const templateParams = {
        from_name: from_name,
        email: email,
        message: message,
        to_name: "Samuel", // Puedes reemplazar esto con el nombre del destinatario si lo deseas
    };

    // Enviar el correo usando EmailJS
    emailjs.send("service_ok6tkmm", "template_mevefb9", templateParams)
        .then(function (response) {
            console.log("Correo enviado exitosamente!", response.status, response.text);
            formStatus.innerText = "¡Mensaje enviado!🎉 Me pondre en contacto contigo proximamente.";
            document.getElementById("contact-form").reset(); // Reinicia el formulario
        })
        .catch(function (error) {
            console.error("Error al enviar el mensaje:", error);
            formStatus.innerText = "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        });
});