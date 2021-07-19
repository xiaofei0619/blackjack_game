import Dealer from './Dealer.js';

export default class GameController {
  constructor(app) {
    this.app = app;
    this._playerCards = [];
    this._dealerCards = [];
    this.dealer = new Dealer();
    this.setup();
  }

  get gameState() {
    return this._gameState;
  }

  set gameState(s) {
    this._gameState = s;
  }

  deal() {
    this.gameState = 'Dealing';
    this.app.setState({});
    this.dealer.deal();
  }

  setup() {
    this.playerScore = 0;
    this.dealerScore = 0;
    this.playerHasAce = false;
    this.dealerHasAce = false;
    this.playerStays = false;
    this.dealerStays = false;
    this.gameState = 'Start';
  }


};