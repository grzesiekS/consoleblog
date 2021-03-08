import { select } from '../settings.js';

class Header {
  constructor(element) {
    const thisHeader = this;

    thisHeader.getElement(element);
  }

  getElement(element) {
    const thisHeader = this;
    
    thisHeader.dom = {};
    thisHeader.dom.wrapper = element;
    thisHeader.dom.headerSlider = thisHeader.dom.wrapper.querySelectorAll(select.headerElements.headerSlider.img);
    thisHeader.dom.leftButton = thisHeader.dom.wrapper.querySelector(select.headerElements.headerSlider.leftButton);
    thisHeader.dom.rightButton = thisHeader.dom.wrapper.querySelector(select.headerElements.headerSlider.rightButton);
  }
}

export default Header;