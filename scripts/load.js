function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.webp');
  imagemGameOver = loadImage('imagens/assets/game-over.webp');
  imagemPersonagem = loadImage('imagens/personagem/correndo.webp');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.webp');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.webp');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.webp');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.webp');
  imagemVida = loadImage('imagens/assets/coracao.webp');

  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}
