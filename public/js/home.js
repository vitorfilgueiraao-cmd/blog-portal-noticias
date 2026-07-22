const noticias=[
    {
        titulo:"Nova tecnologia chega ao mercado",
        imagem:"https://picsum.photos/300/200?1"
    },
    {
        titulo:"Campeonato começa amanhã",
        imagem:"https://picsum.photos/300/200?2"
    },
    {
        titulo:"Economia cresce em 2026",
        imagem:"https://picsum.photos/300/200?3"
    }
];

const container=document.getElementById("noticias");

noticias.forEach(noticia=>{

    container.innerHTML+=`

        <div class="card">

            <img src="${noticia.imagem}">

            <h3>${noticia.titulo}</h3>

        </div>

    `;

});    
const pesquisa=document.getElementById("pesquisa");

pesquisa.addEventListener("keyup",()=>{

    const texto=pesquisa.value.toLowerCase();

});