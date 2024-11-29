// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "TU_DATABASE_URL",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Manejo del Formulario
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevenir envío estándar del formulario

        // Recoger datos
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Guardar datos en Firebase
        try {
            const newMessageRef = firebase.database().ref("messages").push();
            await newMessageRef.set({
                name,
                email,
                message,
                timestamp: new Date().toISOString()
            });

            // Mostrar mensaje de éxito
            formStatus.textContent = "Mensaje enviado con éxito. ¡Gracias!";
            formStatus.style.color = "green";

            // Limpiar formulario
            form.reset();
        } catch (error) {
            // Mostrar error
            formStatus.textContent = "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
            formStatus.style.color = "red";
            console.error("Error:", error);
        }
    });
});
