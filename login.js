function iniciarSesion() {
    let usuario = document.getElementById('usuarioLogin').value;
    let contrasena = document.getElementById('contrasenaLogin').value;

    // verificar si el usuario existe
    let usuarioRegistrado = localStorage.getItem(usuario);
    if (!usuarioRegistrado) {
        alert("Usuario no encontrado.");
        return;
    }

    // usuario a objeto
    usuarioRegistrado = JSON.parse(usuarioRegistrado);

    // Verificar la contraseña
    if (usuarioRegistrado.contrasena !== contrasena) {
        alert("Contraseña incorrecta.");
        return;
    }
    alert("¡Inició sesión con exito!");

    window.location.href = "menu.html";
}

document.getElementById('inicioSesionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    iniciarSesion();
});
