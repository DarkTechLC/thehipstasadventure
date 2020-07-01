class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    fill('#dee4e8');
    textSize(50);
    textAlign(RIGHT);
    text(parseInt(this.pontos), width - 30, 50);
  }

  adicionarPontos() {
    this.pontos += 0.2;
  }
}