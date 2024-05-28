// Registro usuario nuevo
function registro() {
    // Obtener valores del formulario
    let identificacion = document.getElementById('numeroId').value;
    let usuario = document.getElementById('nombreUsuario').value;
    let correo = document.getElementById('correoUsuario').value;
    let contrasena1 = document.getElementById('contrasena1').value;
    let contrasena2 = document.getElementById('contrasena2').value;

    // si las contraseñas son diferentes nos muestra un error
    if (contrasena1 !== contrasena2) {
        alert("Sus contraseñas no coinciden.");
        return;
    }

    // Si el usuario ya esta registrado no permite continuar con el registro
    if (localStorage.getItem(usuario)) {
        alert("Usuario existente.");
        return;
    }

    // Guardar usuario
    let usuarioNuevo = {
        identificacion: numeroId ,
        correo: correoUsuario,
        contrasena: contrasena1
    };
    localStorage.setItem(usuario, JSON.stringify(usuarioNuevo));

    // Redirigir al usuario a la página index.html
    window.location.href = "login.html";
}
