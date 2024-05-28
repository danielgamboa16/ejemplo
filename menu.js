
let saldo = localStorage.getItem('saldo');
if (saldo === null) {
  
    saldo = 1000;
} else {
   
    saldo = parseFloat(saldo);
}

let clave = "1234";
let movimientos = [];


if (localStorage.getItem('movimientos')) {
    movimientos = JSON.parse(localStorage.getItem('movimientos'));
}

function cambiarClave() {
    const nuevaClave = prompt("Ingrese su nueva clave:");
    if (nuevaClave) {
        if (nuevaClave === clave) {
            alert("La nueva clave no puede ser la misma que la clave actual.");
        } else {
            clave = nuevaClave;
            alert("Clave cambiada exitosamente.");
        }
    } else {
        alert("No se cambió la clave.");
    }
}

function retirar() {
    const monto = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (monto > 0 && monto <= saldo) {
        saldo -= monto; 
        movimientos.push(`Retiró $${monto}`);
        actualizarSaldoEnLocalStorage(); 
        actualizarMovimientosEnLocalStorage(); 
        alert(`Retiro exitoso. Su nuevo saldo es $${saldo}`);
        mostrarMovimientosEnPagina();
    } else {
        alert("Monto inválido o saldo insuficiente.");
    }
}

function consignar() {
    const monto = parseFloat(prompt("Ingrese el monto a consignar:"));
    if (monto > 0) {
        saldo += monto; 
        movimientos.push(`Consignó $${monto}`);
        actualizarSaldoEnLocalStorage(); 
        actualizarMovimientosEnLocalStorage(); 
        alert(`Consignación exitosa. Su nuevo saldo es $${saldo}`);
        mostrarMovimientosEnPagina();
    } else {
        alert("Monto inválido.");
    }
}

function consultarSaldo() {
    alert(`Su saldo actual es $${saldo}`);
}



function actualizarMovimientosEnLocalStorage() {
    localStorage.setItem('movimientos', JSON.stringify(movimientos));
}


function actualizarSaldoEnLocalStorage() {
    localStorage.setItem('saldo', saldo);
}

function mostrarMovimientosEnAlert() {
    let movimientosStr = "Movimientos:\n";
    movimientos.forEach(movimiento => {
        movimientosStr += movimiento + "\n";
    });
    if (movimientosStr !== '') {
        alert(movimientosStr);
    } else {
        alert('No hay movimientos.');
    }
}

document.getElementById('mostrarMovimientosBtn').addEventListener('click', function() {
    mostrarMovimientosEnAlert();
});