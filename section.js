const introducao = document.querySelector('.introducao'); //procura a section (.introducao) no html e declara a variavel glossario

introducao.addEventListener('mousemove', e => { //adiona a função quando o mouse move dentro da section/variavel (introdução)
  const rect = introducao.getBoundingClientRect(); //retorna a posição da section na viewport
  const mouseX = e.clientX; // posição X do mouse na viewport
  const mouseY = e.clientY;  // posição Y do mouse na viewport
  const x = mouseX - rect.left;
  const y = mouseY - rect.top;

  introducao.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(68, 68, 68, 0.8), rgba(68, 68, 68, 0.3), #333)`; //deixa o fundo gradiente relativo a posição x e y do mouse
});

introducao.addEventListener('mouseleave', () => { // aciona a função quando o mouse sai da section/variavel (introducao)
    introducao.style.background = '#444'; // volta para cor base ao tirar o mouse
});