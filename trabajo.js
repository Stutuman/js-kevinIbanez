const contenedor = document.querySelector("#productos");
const carrito = [];
const containerShop = document.querySelector(".productitos")
const costo = document.querySelector(".total")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

stockProductos.forEach((productos) => {
    if(productos.stock === 0){
        return
    }
const div = document.createElement('div')
div.className = 'card card-body'
div.innerHTML = `
                
                
                <img src="${productos.img}" class="card-img-top" alt="...">
                    <h5 class="card-title">${productos.nombre}</h5>
                    <p class="card-text"> ${productos.precio} USD</p>
                    
                

`
const button = document.createElement('button')
    button.className = "btn btn-primary"
    button.innerHTML = `Agregar al carrito`

    button.addEventListener('click', () => {
        agregarAlCarrito(productos.id)
    })

    div.append(button)
contenedor.append(div)
})

const agregarAlCarrito = (id) => {
    const producto = stockProductos.find( (item) => item.id === id )
    carrito.push(producto)
    console.log(carrito)
    renderShop()
    renderTotalCarrito()
}

const renderShop = () =>{
containerShop.innerHTML = ' ' 
    carrito.forEach((producto)=>{

    const div = document.createElement('div')
    div.className = "modal-body"
    div.innerHTML = `
    <img src="${producto.img}" alt="">
                        <p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                         <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
                        
    `
containerShop.append(div)
})
}

const renderTotalCarrito = () => {
    let total = 0

    carrito.forEach((producto) => {
        total += producto.precio
    })

    costo.innerText = "costo total:" + total + " USD"
     
}
//cambiar color pagina
const cmb = document.querySelector("#color-change")
const main = document.body
let darkmode= localStorage.getItem("dark-mode")

function activarDarkMode(){
main.classList.add("dark-mode");
localStorage.setItem("dark-mode","activado")
}

function desactivarDark(){
main.classList.remove("dark-mode");
localStorage.setItem("dark-mode","desactivado")

}
if (darkmode === "activado") {
    activarDarkMode()
} else {
    desactivarDark()
}


cmb.addEventListener("click",() =>{
darkmode = localStorage.getItem("dark-mode")
if (darkmode === "activado") {
    desactivarDark();
} else {
    activarDarkMode();
}

})


/** 
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}*/
