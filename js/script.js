// Inicializa EmailJS con tu Public Key
emailjs.init("ktOWdFGJb6FBKNzz7"); // Reemplaza con tu Public Key de EmailJS

// Maneja el envío del formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Muestra un mensaje de estado inicial
    const formStatus = document.getElementById("form-status");
    formStatus.innerText = "Enviando mensaje...";

    // Captura los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Configura los parámetros para la plantilla
    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    // Enviar el correo usando EmailJS
    emailjs.send("service_ok6tkmm", "template_mevefb9", templateParams)
        .then(function (response) {
            console.log("Correo enviado exitosamente!", response.status, response.text);
            formStatus.innerText = "¡Mensaje enviado exitosamente! 🎉";
            document.getElementById("contact-form").reset(); // Reinicia el formulario
        })
        .catch(function (error) {
            console.error("Error al enviar el mensaje:", error);
            formStatus.innerText = "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        });
});
