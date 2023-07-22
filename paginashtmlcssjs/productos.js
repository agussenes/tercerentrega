
class producto {
    constructor(nombre, precio, altura, ancho, profundidad){
        this.nombre = nombre
        this.precio = precio
        this.altura = altura
        this.ancho = ancho
        this.profundidad = profundidad
        this.vendido = false
    }
    vender(){
        this.vendido = true
    }
}

const muebleMovil      = new producto('Mueble Movil', 5000,'90 cm','45cm','120cm')
const dominoAnimales   = new producto('Domino Animales',2000, '40cm','20cm')
const juegosMontessori = new producto('Juegos Montessori', 10000, '70cm', '160cm')
const minutasMaderas   = new producto('Minutas Maderas',4000, '40cm', '30cm')

const mostrarMv = document.getElementById("mostrarObmv")
mostrarMv.textContent = `${muebleMovil.nombre}, Precio: ${muebleMovil.precio}, Altura: ${muebleMovil.altura}, Ancho: ${muebleMovil.ancho}, Profundidad: ${muebleMovil.profundidad}`

const mostrarDA = document.getElementById("mostrarDA")
mostrarDA.textContent = `${dominoAnimales.nombre}, Precio: ${dominoAnimales.precio}, Altura: ${dominoAnimales.altura}, Ancho: ${dominoAnimales.ancho}`

const mostrarJM = document.getElementById("mostrarJM")
mostrarJM.textContent = `${juegosMontessori.nombre}, Precio: ${juegosMontessori.precio}, Altura: ${juegosMontessori.altura}, Largo: ${juegosMontessori.ancho}`

const mostrarMM = document.getElementById("mostrarMM")
mostrarMM.textContent = `${minutasMaderas.nombre}, Precio: ${minutasMaderas.precio}, Altura: ${minutasMaderas.altura}, Ancho: ${minutasMaderas.ancho}`


const carrito = []
const buttonMuv = document.querySelector('#buttonMV')
buttonMuv.addEventListener('click',() =>{
    carrito.push(muebleMovil)
    guardarCarritoLocalS() 
    alert('se agrego al carrito') 
    
})

const buttonDA= document.querySelector('#buttonDA')
buttonDA.addEventListener('click',() =>{
    carrito.push(dominoAnimales)
    guardarCarritoLocalS()
    alert('se añadio al carrito')    
})

const buttonJM= document.querySelector('#buttonJM')
buttonJM.addEventListener('click',() =>{
    carrito.push(juegosMontessori)
    guardarCarritoLocalS()
    alert('se añadio al carrito')     
})

const buttonMM= document.querySelector('#buttonMM')
buttonMM.addEventListener('click',() =>{
    carrito.push(minutasMaderas)
    guardarCarritoLocalS()
    alert('se añadio al carrito')    
})


function guardarCarritoLocalS(){
    const arrayJSONcarrito = JSON.stringify(carrito)
    localStorage.setItem('carrito',arrayJSONcarrito)
    console.log('se guardo en el localStorage el carrito')
}


const verStorage= document.querySelector('#versotaregePorconsola')
verStorage.addEventListener('click',() =>{
    console.log('Ver el LocalStorage')
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i)
        const valor = localStorage.getItem(clave)
        console.log(`${clave}: ${valor}`)
      }    
})

//mostrar carritooo(en desarrollo)
// function mostrarCarrito() {
//     const carritoObj = JSON.parse(arrayJSONcarrito);
//     const carritoTexto = carritoObj.map(producto => producto.nombre).join(', ');
//     mostrarElCarrito.textContent = `Carrito guardado en el localStorage: ${carritoTexto}`;
//   }

// const mostrarElCarrito = document.getElementById("mostrarCarrito")
// mostrarElCarrito.textContent = `Carrito guardado en el localStorage, mostrarCarrito()`




// console.log('los productos en stock son, ')
// const productosenStock = []
// productosenStock.push('MuebleMovil')
// productosenStock.push('dominoAnimales')
// productosenStock.push('rollo Papel')

// for (const r of productosenStock){
//     console.log(r)
// }

// //[] 
// console.log('|1|para comprar y espesificar medidas de mueblesmoviles, |2| para comprar domino de animales, |3| para comprar y espesificar largo de Porta rollo')
// let compra = prompt('indique el producto | 1 - 2 - 3|')
// if (compra == 1){
//     const precioM = 5000
//     let alturaM = prompt('indique altura del Mueble Movil')
//     let anchoM = prompt('indique ancho del Mueble Movil')
//     let profundidadM = prompt('indique profundidad del Mueble Movil')
//     const mueblesMovil = new producto(precioM, alturaM, anchoM, profundidadM)
//     mueblesMovil.vender()
//     productosenStock.splice(0,1)

//    console.log(mueblesMovil)

    
// }else if (compra == 2){
//     const precioD = 2000
//     let alturaD = 40
//     let anchoD = 20
    
//     const dominoAnimales = new producto(precioD, alturaD, anchoD)
//     dominoAnimales.vender()
//     productosenStock.splice(1,1)
//    console.log(dominoAnimales)

// }else if (compra == 3){
//     const PrecioR = 3000
//     let alturaR = prompt('indique altura del Porta Rollo')
//     let anchoR = prompt('indique ancho del Porta Rollo')
//     const portaRollo = new producto(PrecioR, alturaR, anchoR)
//     portaRollo.vender()
//     productosenStock.splice(2,2)
//     console.log(portaRollo)
// }

// console.log('los productos en stock son, ')
// for (const r of productosenStock){
//     console.log(r)
// }




//calculo de envios dentro y fuera del anillo de circunvalacion (cordoba)
//Envios dentro de Circunvalacion 300, Fuera del anillo de circunvalacion 600
//alert('Indique 1 si el envio es dentro del anillo de circunvalacion | indique 2 si el envio es Afuera del anillo de circunvalacion')
//let envio = prompt('el envio es Dentro o Fuera de circunvalacion: ')      

// let salida = 0
// function calculoDeEnvio(){
// let envio = prompt('Indeique con |1| si es dentro del anillo de circunvalacion y |2| si el envio es Afuera del anillo de circunvalacion: ')

// switch (envio) {
//     case '1':
//         console.log('El envio es dentro del anillo de circunvalacion, tiene un valor de $300')
//         salida = 1
//         break;
//     case '2':
//         console.log('El envio es Afuera del anillo de circunvalacion, tiene un valor de $600')
//         salida = 1
//         break;
//     default:
//         console.log('numero incorrecto, Indeique con 1 si es dentro del anillo de circunvalacion y 2 si el envio es Afuera del anillo de circunvalacion')
//         salida = 0
//         break;

// }
// return salida;

// }

// let resultadoEnvio = 0 

// do{
//     resultadoEnvio =calculoDeEnvio()
//     console.log(resultadoEnvio) 
// }while(salida !== 1)


// //Calcula tus cuotas!!

// let muebleMovil = 5000
// let dominoAnimales = 2000
// let juegosMontessori = 8000
// let minutasMadera = 6000
// let respuesta = 0
// let totalCuotas = 0
// let salidaCuotas = 0
// let condicion = 0

// function calculoCuotas(){
//     console.log('|1| para saber cuotas disponibles para Muebles Movil')
//     console.log('|2| para saber cuotas disponibles para Domino de Animales')
//     console.log('|3| para saber cuotas disponibles para Juegos Montessori')
//     console.log('|4| para saber cuotas disponibles para Minutas de Madera')
//     respuesta = prompt()
//     if(respuesta == 1){
//         totalCuotas = muebleMovil / 3
//         console.log('Esta disponible en 3 cuotas sin interes de: ' + totalCuotas)
//         salidaCuotas = 1
//     }if(respuesta == 2){
//         totalCuotas = (dominoAnimales + 400) / 2
//         console.log('Esta disponible en 2 cuotas con un 20% de interes de: ' + totalCuotas)
//         salidaCuotas = 1
//     }if(respuesta == 3){
//         totalCuotas = juegosMontessori / 4
//         console.log('Esta disponible en 4 cuotas sin interes de: ' + totalCuotas) 
//         salidaCuotas = 1
//     }if(respuesta == 4){
//         totalCuotas = (minutasMaderan + 1800) / 5
//         console.log('Esta disponible en 5 cuotas con un 30% de interes de: ' + totalCuotas)
//         salidaCuotas = 1
//     }if(respuesta > 4 || respuesta <= 0){
//         console.log('Error numero incorrecto, vuelve a indicar para que juego quiere ver las cuotas disponibles')
//         salidaCuotas = 0
//     }
//     return salidaCuotas
// }

// while(condicion != 1){
// condicion = calculoCuotas()

// }
