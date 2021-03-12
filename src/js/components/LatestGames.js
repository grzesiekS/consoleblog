import { select } from '../settings.js';

class LatestGames {
  constructor(element) {
    const thisLG = this;

    thisLG.getElement(element);
    thisLG.handleImgClick();
  }

  handleImgClick() {
    const thisLG = this;

    for(const img of thisLG.dom.latesGamesGameImg) {
      img.addEventListener('click', function() {
        this.classList.toggle('bigger');
      });
    }
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