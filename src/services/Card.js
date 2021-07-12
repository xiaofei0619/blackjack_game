export default class Card {
  constructor(suit, face) {
    this._suit = suit;
    this._face = face;
    this._flip = false;
  }

  get suit() {
    return this._suit;
  }

  get face() {
    return this._face;
  }

  get flip() {
    return this._flip;
  }

  set flip(f) {
    this._flip = f;
  }

  get value() {
    return (this._face === 'king' ||
            this._face === 'queen' ||
            this._face === 'jack') ? 10 : Number(this._face);
  }
}
