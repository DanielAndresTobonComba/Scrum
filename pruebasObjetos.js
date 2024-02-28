//Variables globales 
let link = ""
let etiquetaImg = ""



//Reemplazar los arreglos por objetos 
let arregloLuz = [{"Codensa":{"link": "url" }} , {"Enel":{"link": "url" }}]

let arregloAgua = [{"Metropolitana":{"link": "url" }}, {"Codensa":{"link": "url" }}]

let arregloGas = [{"Terpel":{"link": "url" }}, {"Enel":{"link": "url" }}]


//Se coloca en las condiciones if de agua-luz-gas de la funcion campoServicios

for (const dato of arregloAgua) {
    // Obtener las llaves y valores de cada objeto
    for (const [llave, valor] of Object.entries(dato)) {
      console.log("Llave:", llave);
      console.log("Valor:", valor.link);
      
    }
  }

  for (const dato of arregloLuz) {
    // Obtener las llaves y valores de cada objeto
    for (const [llave, valor] of Object.entries(dato)) {
      console.log("Llave:", llave);
      console.log("Valor:", valor.link);
      
    }
  }

  for (const dato of arregloGas) {
    // Obtener las llaves y valores de cada objeto
    for (const [llave, valor] of Object.entries(dato)) {
      console.log("Llave:", llave);
      console.log("Valor:", valor.link);
      
    }
  }

  
  //Esto es para obtener el link de la empresa correspondiente va en la funcion de botonConsultar despues de obtener los datos de tipoServicio, proovedor , codigoFactura y antes de la cosnt datosObtenidos

  if (tipoServicio == "Agua"){

    for (const dato of arregloAgua) {
        // Obtener las llaves y valores de cada objeto
        for (const [llave, valor] of Object.entries(dato)) {
          if (llave == proveedor){
             link = valor.link
             console.log("Llave:", llave);
             console.log("Valor:", valor.link);
          }
          
          
        }
      }

  }else if (tipoServicio == "Luz"){

    for (const dato of arregloLuz) {
        // Obtener las llaves y valores de cada objeto
        for (const [llave, valor] of Object.entries(dato)) {
            if (llave == proveedor){
                link = valor.link
                console.log("Llave:", llave);
                console.log("Valor:", valor.link);
             }
          
        }
      }

  } else if (tipoServicio == "Gas"){

    for (const dato of arregloGas) {
        // Obtener las llaves y valores de cada objeto
        for (const [llave, valor] of Object.entries(dato)) {
            if (llave == proveedor){
                link = valor.link
                console.log("Llave:", llave);
                console.log("Valor:", valor.link);
             }
        }
      }

  }

 //Crear la etiqueta de la imagen colocarla en donde inserto todos los datos de la factura 
 etiquetaImg = `<img class="logoEmpresa" src="${link}" alt="Logo de la empresa">`


 //Contenedor de la imagen 
 contenedorLogo.innerHTML = etiquetaImg 
