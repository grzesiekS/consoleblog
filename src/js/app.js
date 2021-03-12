import Header from './components/Header.js';
import LatestGames from './components/LatestGames.js';

import { select } from './settings.js';

const app = {
  initHeader: () => {
    const headerElement = document.querySelector(select.headerElements.header);
    new Header(headerElement);
  },

  initLatestGames: () => {
    const latestGamesElement = document.querySelector(select.latestGamesElements.latestGames);
    new LatestGames(latestGamesElement);
  },

  init: () => {
    app.initHeader();
    app.initLatestGames();
  },
};

app.init();