function TocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        console.log('Elemento não encontrado');
    }else if(elemento.localName === "audio") {
        elemento.play();
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for(let i=0;i<ListaDeTeclas.length;i++) {
 
    const tecla = ListaDeTeclas[i];

    const som_instrumento = tecla.classList[1];

    const idAudio = `#som_${som_instrumento}`;

    tecla.onclick = function () {
        TocaSom(idAudio);  
    };

    tecla.onkeydown = function(evento) {
        if(evento.code ==='Enter' || evento.code==='Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(evento) {
        if(evento.code ==='Enter' || evento.code==='Space'){
            tecla.classList.remove('ativa');
        }
    }
}

