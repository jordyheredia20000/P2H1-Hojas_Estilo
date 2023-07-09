// script.js

function login() {
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    
    // Realizar alguna acción, como mostrar una alerta
    if (username === "jordy" && password === "123456") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}

document.getElementById("loginButton").addEventListener("click", login);
