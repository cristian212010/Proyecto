const zonas = [
    {
        img: "img/uno.jpg",
        titulo: "Hunters"
    },
    {
        img: "img/dos.jpg",
        titulo: "Apolo"
    },
    {
        img: "img/tres.jpg",
        titulo: "Artemis"
    },
    {
        img: "img/cuatro.jpg",
        titulo: "Sputnick"
    },
    {
        img: "img/cinco.jpg",
        titulo: "Auditorio"
    },
    {
        img: "img/seis.jpg",
        titulo: "SoftWare Skills"
    },
    {
        img: "img/siete.jpg",
        titulo: "SoftWare Skills"
    },
    {
        img: "img/ocho.jpg",
        titulo: "SoftWare Skills"
    }
]

const cortes = [
    {
        id:1,
        img: "img/fadeAlto.jpg",
        titulo: "Fade alto con french crop",
        tamaño: "corto",
        tipoRostro: "redondo",
        categoria: "cabello",
        tipocabello:"lacio",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:2,
        img: "img/mullet.jpg",
        titulo: "Mullet",
        tamaño: "mediano",
        tipoRostro: "corazon",
        categoria: "cabello",
        tipocabello:"ondulado",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:3,
        img: "img/wolfCut.jpg",
        titulo: "Wolft cut",
        tamaño: "largo",
        tipoRostro: "diamante",
        categoria: "cabello",
        tipocabello:"ondulado",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:4,
        img: "img/taperFade.jpg",
        titulo: "Taper Fade",
        tamaño: "mediano",
        tipoRostro: "cuadrado",
        categoria: "cabello",
        tipocabello:"lacio",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:5,
        img: "img/underCut.jpg",
        titulo: "Undercut",
        tamaño: "mediano",
        tipoRostro: "trapecio",
        categoria: "cabello",
        tipocabello:"rizado",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:6,
        img: "img/corteMilitar.jpg",
        titulo: "Corte militar",
        tamaño: "corto",
        tipoRostro: "redondo",
        categoria: "cabello",
        tipocabello:"crespo",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:7,
        img: "img/mohicano.jpg",
        titulo: "Mohicano",
        tipoRostro: "rectangular",
        categoria: "cabello",
        tipocabello:"ondulado",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:8,
        img: "img/texturizado.jpg",
        titulo: "Corte texturizado",
        tamaño: "largo",
        tipoRostro: "diamante",
        categoria: "cabello",
        tipocabello:"lacio",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:9,
        img: "img/corteLibrito.jpg",
        titulo: "Corte de librito",
        tamaño: "largo",
        tipoRostro: "diamante",
        categoria: "cabello",
        tipocabello:"rizado",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:10,
        img: "img/corteHongo.jpg",
        titulo: "Corte hongo",
        tamaño: "largo",
        tipoRostro: "ovalado",
        categoria: "cabello",
        tipocabello:"crespo",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:11,
        img: "img/afro.jpg",
        titulo: "Afro",
        tamaño: "largo",
        tipoRostro: "ovalado",
        categoria: "cabello",
        tipocabello:"crespo",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:12,
        img: "img/skinFade.jpg",
        titulo: "Skin fade",
        tamaño: "corto",
        tipoRostro: "cuadrado",
        categoria: "cabello",
        tipocabello:"lacio",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:13,
        img: "img/corteCesar.jpg",
        titulo: "Corte César",
        tamaño: "corto",
        tipoRostro: "redondo",
        categoria: "cabello",
        tipocabello:"rizado",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:14,
        img: "img/spiky.jpg",
        titulo: "Corte spiky",
        tamaño: "mediano",
        tipoRostro: "trapecio",
        categoria: "cabello",
        tipocabello:"crespo",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:15,
        img: "img/quiff.jpg",
        titulo: "Corte quiff",
        tamaño: "corto",
        tipoRostro: "corazon",
        categoria: "cabello",
        tipocabello:"ondulado",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:16,
        img: "img/corteClasico.jpg",
        titulo: "Corte clásico",
        tamaño: "corto",
        tipoRostro: "cuadrado",
        categoria: "cabello",
        tipocabello:"lacio",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:17,
        img: "img/sieteCorte.jpg",
        titulo: "Corte Siete",
        tamaño: "corto",
        tipoRostro: "cuadrado",
        categoria: "cabello",
        tipocabello:"lacio",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:18,
        img: "img/mulletClasico.jpg",
        titulo: "Mullet Clasico",
        tamaño: "largo",
        tipoRostro: "cuadrado",
        categoria: "cabello",
        tipocabello:"lacio",
        precio:"10.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:19,
        img: "img/chevron.jpg",
        titulo: "Barba Chevron",
        tamaño: "mediano",
        categoria: "barba",
        precio:"3.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:20,
        img: "img/fullBear.jpg",
        titulo: "Barba full bear",
        tamaño: "largo",
        categoria: "barba",
        precio:"3.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:21,
        img: "img/candado.jpg",
        titulo: "Barba candado",
        tamaño: "corto",
        categoria: "barba",
        precio:"3.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:22,
        img: "img/tresDias.jpg",
        titulo: "Barba tres dias",
        tamaño: "corto",
        categoria: "barba",
        precio:"3.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:23,
        img: "img/vanDyke.jpg",
        titulo: "Barba Van Dyke",
        tamaño: "mediano",
        categoria: "barba",
        precio:"3.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:24,
        img: "img/bigote.jpg",
        titulo: "Bigote",
        tamaño: "corto",
        categoria: "barba",
        precio:"3.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    },
    {
        id:25,
        img: "img/cejas.jpg",
        titulo: "Diseño cejas",
        tamaño: "corto",
        categoria: "cejas",
        precio:"2.000",
        año:"",
        detalle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed nostrum officia! Commodi nemo doloribus reprehenderit veniam molestias."
    }
]


