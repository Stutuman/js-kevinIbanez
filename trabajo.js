const contenedor = document.querySelector("#productos");
const carrito = [];
const containerShop = document.querySelector(".productitos")
const costo = document.querySelector(".total")

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