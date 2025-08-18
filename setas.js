const track = document.querySelector(".cards"); //declara a variavel track como o elemento .cards do html
const cssTrack = document.querySelector(".css-cards")//declara a variavel cssTrack como o elemento .css-cards do html
const setaEsquerda = document.querySelector(".seta-esquerda");//declara a variavel setaEsquerda como o elemento .seta-esquerda do html
const setaDireita = document.querySelector(".seta-direita");//declara a variavel setaDireita como o elemento .seta-direita rds do html
const setaEsquerdaCss = document.querySelector(".seta-esquerda-css");//declara a variavel setaEsquerdaCss como o elemento .seta-esquerda-css do html
const setaDireitaCss = document.querySelector(".seta-direita-css");//declara a variavel setaDireitaCss como o elemento .seta-direita-css do html

const scroll = 800; //quantidade de px que vai ser scrollado

setaEsquerda.addEventListener("click", () => { //aciona a função quando clicar na setaEsquerda
  track.scrollBy({ left: -scroll, behavior: "smooth" }); //vai scrollar a track no sentido da esquerda (-scroll) de forma suave (smooth)
  console.log('CLICK')
});


setaDireita.addEventListener("click", () => { //aciona a função quando clicar na setaDireita
  track.scrollBy({ left: scroll, behavior: "smooth" }); //vai scrollar a track no sentido da direita (scroll (positivo)) de forma suave (smooth)
});

setaEsquerdaCss.addEventListener("click", () => { //aciona a função quando clicar na setaEsquerdaCss
  cssTrack.scrollBy({ left: -scroll, behavior: "smooth" }); //vai scrollar a track no sentido da esquerda de forma suave (smooth)
  console.log('CLICK')
});


setaDireitaCss.addEventListener("click", () => { //aciona a função quando clicar na setaDireitaCSs
  cssTrack.scrollBy({ left: scroll, behavior: "smooth" }); //vai scrollar a track no sentido da esquerda de forma suave (smooth)
});