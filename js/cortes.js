//selectores
const inpuNombre = document.querySelector('#inputNombre')
const nombre = document.querySelector('#nombre')
const tamañoCabello = document.querySelector('#tamaño')
const tipoRostro = document.querySelector('#tipoRostro')
const categoria = document.querySelector('#categoria')
const tipocabello = document.querySelector('#tipoCabello')
const inputNombre = document.querySelector('#inputNombre')

//llenar dinamicamente
cortes.forEach((optionCorte)=>{
    const opcion = document.createElement('option');
    opcion.value = optionCorte.titulo;
    opcion.textContent = optionCorte.titulo;
    document.querySelector('#nombre').appendChild(opcion);
})

const parametros = {
    titulo: "",
    tamaño : "",
    tipoRostro: "",
    categoria: "",
    tipocabello:"",
}

//eventos select
inpuNombre.addEventListener('input', (e)=>{
    parametros.titulo = e.target.value;
    filtrarCorte()
})

nombre.addEventListener('input', (e)=>{
    parametros.titulo = e.target.value;
    filtrarCorte()
})

tamañoCabello.addEventListener('input', (e)=>{
    parametros.tamaño = e.target.value;
    filtrarCorte()
})

tipoRostro.addEventListener('input', (e)=>{
    parametros.tipoRostro = e.target.value;
    filtrarCorte()
})

categoria.addEventListener('input', (e)=>{
    parametros.categoria = e.target.value;
    filtrarCorte()
})

tipocabello.addEventListener('input', (e)=>{
    parametros.tipocabello = e.target.value;
    filtrarCorte()
})

inputNombre.addEventListener('input', (e)=>{
    parametros.titulo = e.target.value
    filtrarCorte();
})

function filtrarCorte() {
    const resultado = cortes
    .filter(filtrarNombre)
    .filter(filtrarTamañoCabello)
    .filter(filtrarTipoRostro)
    .filter(filtrarCategoria)
    .filter(filtrarTipoCabello)
    .filter(filtrarInputNombre)

    showCortes(resultado);
    if (!resultado.length) {
        const notFound = document.querySelector('#tarjetas');
        const divNotFound = document.createElement('div')
        const texto = document.createElement('p')
        divNotFound.classList.add('notFound')
        divNotFound.innerHTML=`
        Corte no encontrado
        `
        texto.appendChild(divNotFound)
        notFound.appendChild(texto)
    }
}
function filtrarNombre(corte) {
    if (parametros.titulo) {
        return corte.titulo === parametros.titulo
    }
    return corte
}
function filtrarTamañoCabello(corte) {
    if (parametros.tamaño) {
        return corte.tamaño === parametros.tamaño
    }
    return corte
}
function  filtrarTipoRostro(corte){
    if (parametros.tipoRostro){
        return corte.tipoRostro === parametros.tipoRostro
    }
    return corte
}
function filtrarCategoria(corte){
    if (parametros.categoria){
        return corte.categoria === parametros.categoria
    }
    return corte
}
function filtrarTipoCabello(corte){
    if (parametros.tipocabello){
        return corte.tipocabello === parametros.tipocabello
    }
    return corte
}
function filtrarInputNombre(corte) {
    if (parametros.titulo) {
        return corte.titulo === parametros.titulo
    }
    return corte
}


function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    showCortes(cortes);
    selectCorte();
})


function showCortes(cortes){
    const contenedorTarjetas = document.querySelector('#tarjetas');
    limpiar()
    cortes.forEach((corte)=>{
        const corteHTML = document.createElement('p');
        
        //Destructuring
        const {img, titulo, detalle, id, tipoRostro, tamaño, tipocabello, categoria, precio} = corte;

        corteHTML.innerHTML = `
        <div class="card" style="width: 20rem">
            <img src="${img}" class="card-img-top" alt="..." id="imgCard">
        <div class="card-body">
          <h5 class="card-title ">${titulo}</h5>
          <h6 class="card-text">Precio: ${precio}</h6>
        </div>
            <ul class="list-group list-group-flush">
            <p class="list-group-item">${detalle}</p>
            <a id="detalles" href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" imagen="${img}" nombre="${titulo}" detalle="${detalle}" tipoRostro="${tipoRostro}" tamaño="${tamaño}" tipoCabello="${tipocabello}" categoria="${categoria}" precio="${precio}">Detalle</a>
            <a class="btn btn-primary boton" imagen2="${img}" nombre2="${titulo}" detalle2="${detalle}" id="${id}" precio="${precio}">Agregar al carrito</a>
            </ul>
        </div>
        `
        contenedorTarjetas.appendChild(corteHTML);
        
    })
}

const tbody = document.querySelector('tbody')
const rowModal = document.createElement('tr')
function selectCorte(){
    const corteDetails = document.querySelector("#tarjetas")
    corteDetails.addEventListener("click", loadDetail);
}
function loadDetail(e){
    const nombre = e.target.getAttribute('nombre')
     const titulo = document.querySelector('#exampleModalLabel')
    titulo.textContent=nombre
    const imagen = e.target.getAttribute('imagen')
    const detalle = e.target.getAttribute('detalle')
    const tipoRostro = e.target.getAttribute('tipoRostro')
    const tamaño = e.target.getAttribute('tamaño')
    const tipoCabello = e.target.getAttribute('tipoCabello')
    const categoria = e.target.getAttribute('categoria')
    rowModal.innerHTML=`
    <td>
        <img src="${imagen}" width="150px">
    </td>
    <td>
        ${detalle}
    </td>
    <td>
        ${tipoRostro}
    </td>
    <td>
        ${tamaño}
    </td>
    <td>
        ${tipoCabello}
    </td>
    <td>
        ${categoria}
    </td>
    `;
    tbody.appendChild(rowModal)

}


const cards = document.querySelector('#tarjetas')
let arrayCards = [];
const tbodie = document.querySelector('#hiring')
const deleteListCards = document.querySelector('#deleteListCards')
const cleanCart = document.querySelector('#cleanCart')
//listeners

cards.addEventListener('click', selectCards)
deleteListCards.addEventListener('click', deleteCards)
cleanCart.addEventListener("click", trashCart)
//
function selectCards(e) {
    e.preventDefault();
    if (e.target.classList.contains("boton")) {
        const selectedCorte = e.target.parentElement.parentElement;
        console.log(selectedCorte);
        detail(selectedCorte)
    }
}

function detail(selectCorte) {
    const corteDetail = {
        imagen: selectCorte.querySelector("img").src,
        nombre: selectCorte.querySelector("h5").textContent,
        detalle: selectCorte.querySelector("p").textContent,
        precio: selectCorte.querySelector('.boton').getAttribute('precio'),
        id: selectCorte.querySelector(".boton").getAttribute("id")
    }
    console.log(corteDetail);
    arrayCards=[...arrayCards,corteDetail]
    console.log(arrayCards);
    injectingCortesHtml();
}

function deleteCards(e) {
    if (e.target.classList.contains("deleteCard")) {
        const cardToDelete = e.target.getAttribute("id")
        console.log(cardToDelete);
        arrayCards=arrayCards.filter((cd)=>cd.id !==cardToDelete)
        injectingCortesHtml();
    }
}

function injectingCortesHtml() {
    cleanHtml();
    arrayCards.forEach((arrayCard)=>{
        const {imagen,nombre,detalle,id, precio} = arrayCard

        const row = document.createElement("tr")
        row.innerHTML=`
        <td>
            <img src="${imagen}" width="160px">        
        </td>
        <td>
            ${nombre}
        </td>
        <td>
            ${detalle}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            <a id="${id}" class="deleteCard btn btn-danger eliminador">X</a>
        </td>
        `
        tbodie.appendChild(row)
    })
    addStorage();
}
function addStorage() {
    localStorage.setItem('jobCart', JSON.stringify(arrayCards))
}
//localstorage DOM Contentloaded
document.addEventListener('DOMContentLoaded', ()=>{
    arrayCards = JSON.parse(localStorage.getItem('jobCart')) || [];
    injectingCortesHtml();
})

function trashCart() {
    arrayCards=[];
    cleanHtml();
}

function cleanHtml() {
    tbodie.innerHTML=``
}