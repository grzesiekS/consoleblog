import Header from './components/Header.js';

import { select } from './settings.js';

const app = {
  initHeader: () => {
    const headerElement = document.querySelector(select.headerElements.header);
    new Header(headerElement);
  },

  init: () => {
    app.initHeader();
  },
};

app.init();