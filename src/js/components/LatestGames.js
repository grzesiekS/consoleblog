import { select } from '../settings.js';

class LatestGames {
  constructor(element) {
    const thisLG = this;

    thisLG.getElement(element);
  }

  getElement(element) {
    const thisLG = this;

    thisLG.dom = {};
    thisLG.dom.wrapper = element;
    thisLG.dom.latesGamesGameImg = thisLG.dom.wrapper.querySelectorAll(select.latestGamesElements.latestGames_game_img);

    console.log(thisLG.dom.latesGamesGameImg);
  }
}

export default LatestGames;