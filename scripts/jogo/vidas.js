class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      let margem = i * 10;
      let posicao = this.xInicial * (i + 1);
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++;
    }
  }

  perdeVida() {
    this.vidas--;
  }
}