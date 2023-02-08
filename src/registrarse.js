//FUNCIONES

function crearCuenta(e) {
    e.preventDefault()
    let datos = e.target
    if (definirPassword(datos)) {
        let nuevaCuenta = new Cuenta(datos.children[1].value, datos.children[3].value, datos.children[7].value)
        localStorage.setItem(nuevaCuenta.email, JSON.stringify(nuevaCuenta))
    }
}

function definirPassword(f) {
    if (f.children[5].value != f.children[7].value) {
        document.getElementById("pass").innerHTML="*Las contrasenas no coinciden"    
    }else{
        document.getElementById("pass").innerHTML=" "
        return true;
    }
}

//CLASES

class Cuenta {
    constructor(nombre,email,password) {
        this.nombre = nombre
        this.email = email
        this.password = password
    }
}

//ARRAYS


//REGISTRARSE

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", crearCuenta)














