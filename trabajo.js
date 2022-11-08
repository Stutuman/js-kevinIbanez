carrito = []
const opcion = mostrarMenu();
const variedad = "";
const elegir = 0;
dineroIngresado = 0;


 class Product {
    constructor(articulo, precio, disponibilidad) {
        this.articulo = articulo;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }
         }


//productos

const product1 = new Product ("auriculares",30,"true");
const product2 = new Product ("teclado",25,true);
const product3 = new Product ("mouse",45,true);
const product4 = new Product ("webcam", 7,true);

if (opcion != 5) {
    venderProducto(opcion);
}
else {
    alert("GRACIAS");
}

function mostrarMenu(){
return prompt(`que desea agregar al carrito?
1.auriculares 30
2.teclado 25
3. mouse 45
4. webcam 7
5. salir`);
}


function venderProducto (opcion){
    switch(opcion){
case "1":
{
    carrito.push(product1)
pedirDinero(30)
    break;
}
case "2":
    {
        carrito.push(product2)
        pedirDinero(25)
        break;      
    }
case "3":
    {
        carrito.push(product3)
        pedirDinero(45)
        break;
    }
    
case "4":
 {   
        carrito.push(product4)
        pedirDinero(7)
        break;
 }  
    default:
  {      
        alert("no eligio producto")
        break;
  }     
    }
    pedirDinero()
}
function pedirDinero(numMin) {
        

       while (dineroIngresado < numMin) {
        let dinero = Number(prompt("Ingrese un monto"));

        if (dinero < numMin) {
            alert("monto invalido")
        }
        else {
            dineroIngresado += dinero;
        }
    }
    

    let cambio = dineroIngresado - numMin;

    alert("Su cambio es: " + cambio + ". GRACIAS!");

    console.log("compra realizada");
}

console.log(carrito)