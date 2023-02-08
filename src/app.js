//FUNCIONES

function sinIva() {
    for (let i = 0; i < productos.length; i++) {
        document.getElementById(`precio-${i+1}`).innerHTML = `$ ${productos[i].precio}`
    }
}

function sumarIva() {
    const prodConIva = productos.map((elementos) => elementos.precio * 1.21)
    for (let i = 0; i < prodConIva.length; i++) {
        document.getElementById(`precio-${i+1}`).innerHTML = `$ ${prodConIva[i]}`
    }
    console.log(prodConIva)
}

//ARRAYS

const productos = []

//CLASES

class Producto {
    constructor (nombre,precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

//OBJETOS

let producto1 = new Producto('Fender Stratocaster',415000)
let producto2 = new Producto('Gibson Les Paul',350000)
let producto3 = new Producto('Fender Telecaster',240000)

productos.push(producto1, producto2, producto3)

//PROGRAMA PRINCIPAL

for (let i = 0; i < productos.length; i++) {
    document.getElementById(`nombre-${i+1}`).innerHTML = productos[i].nombre
    document.getElementById(`precio-${i+1}`).innerHTML = `$ ${productos[i].precio}`
}

let btnIva = document.getElementById("btn-iva")
btnIva.addEventListener("click", sumarIva)

let btnSinIva = document.getElementById("btn-sinIva")
btnSinIva.addEventListener("click", sinIva)



