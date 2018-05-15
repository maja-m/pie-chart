export class Kot {
  constructor(imie, waga, id) {
    this.imie = imie;
    this.waga = waga;
    this.id = id;
  }

  miaucz() {
    console.log(`Nazywam się ${this.imie} i ważę ${this.waga} kg`);
  }
}
