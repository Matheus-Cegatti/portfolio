const textoTecnologia = document.querySelector(".texto-tecnologias");
const frases = ["HTML","CSS","JavaScript","Angular","Ruby"];
let i = 0;
let m = 0;
let fraseAtual = [];
let deletando = false;
let fim = false

function escrevendo() {
    fim = false
    textoTecnologia.innerHTML = fraseAtual.join('');

    if(i < frases.length) {
        if(!deletando && m <= frases[i].length){
            fraseAtual.push(frases[i][m]);
            m++
            textoTecnologia.innerHTML = fraseAtual.join("")
            
        }
        if(deletando && m <= frases[i].length){
            fraseAtual.pop(frases[i][m])
            m--
            textoTecnologia.innerHTML = fraseAtual.join("")
        }

        if(m==frases[i].length){
            fim = true
            deletando = true
        }

        if(deletando && m === 0){
            fraseAtual = [];
            deletando = false;
            i++
            if(i === frases.length){
                i = 0
            }
        }
    }
    const velocidadeSubindo = Math.random() * (80-50)+50
    const velocidadeNormal = Math.random() * (300 -200) + 200
    const tempo = fim? 2000 : deletando ? velocidadeSubindo : velocidadeNormal
    setTimeout(escrevendo, tempo)
}

escrevendo()