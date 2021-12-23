

//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
const min = max-10;


// generar un objeto con la busqueda

const datosBusqueda = {

    marca :'',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '' ,

}
//eventos
document.addEventListener('DOMContentLoaded',()=>{

    mostrarAutos(autos);
    llenarSelct();

});

//event listener para los formulario de busqueda
marca.addEventListener('change',(e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change',(e)=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change',(e)=>{
    datosBusqueda.minimo = parseFloat(e.target.value);
    filtrarAuto();
});
maximo.addEventListener('change',(e)=>{
    datosBusqueda.maximo = parseFloat(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
color.addEventListener('change',(e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

//funciones

const mostrarAutos = (autos) =>{

    limpiarHTML();
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `

            ${auto.marca} -${auto.modelo} -${auto.year} 
            -${auto.puertas} puertas 
            -transmision: ${auto.transmision} 
            -precio: ${auto.precio} 
            -color: ${auto.color}
        
        `;
        resultado.appendChild(autoHTML);
    });

}

//limpiar html

const limpiarHTML = ()=>{

 while (resultado.firstChild) {
     resultado.removeChild(resultado.firstChild);
     
 }
}

const llenarSelct = () =>{

    for(let i = max; i > min; i--){

        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent=i;
        year.appendChild(opcion);
    }
    
}
//funcion que filtra en la base

const filtrarAuto= () =>{

    // El método Filter crea un nuevo arreglo, el cual no busca modificar el valor    
    //de los elementos para el nuevo arreglo, únicamente retorna aquellos elementos 
    //que cumplan con las condiciones del filtro, los cuales serán almacenados en otro arreglo.
    const  resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);
    if(resultado.length){

        mostrarAutos(resultado);
    }else{
      noResultado();
    }
    
}
const noResultado = () =>{

    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultado :) '
    resultado.appendChild(noResultado);

}

const filtrarMarca = (auto) =>{

    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
}

const filtrarYear = (auto) =>{

    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }else{
        return auto;
    }
    
}
const filtrarMinimo = (auto) =>{

    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }else{
        return auto;
    }
    
}
const filtrarMaximo = (auto) =>{

    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }else{
        return auto;
    }
    
}
const filtrarPuertas = (auto) =>{

    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }else{
        return auto;
    }
}
const filtrarTransmision = (auto) =>{

    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }else{
        return auto;
    }
}
const filtrarColor = (auto) =>{
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }else{
        return auto;
    }

}