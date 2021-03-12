import { select } from '../settings.js';

class Header {
  constructor(element) {
    const thisHeader = this;

    thisHeader.getElement(element);
    thisHeader.handleLeftButtonAction();
    thisHeader.handleRightButtonAction();

    thisHeader.pictureInPage = 3;
    thisHeader.sliderPageCount = Math.ceil(thisHeader.dom.headerSliderImg.length/thisHeader.pictureInPage);
    thisHeader.sliderCurrentPage = 0;

    
  }

  handleLeftButtonAction() {
    const thisHeader = this;

    thisHeader.dom.leftButton.addEventListener('click', event => {
      event.preventDefault();

      if(thisHeader.sliderCurrentPage > 0) thisHeader.sliderCurrentPage--;

      thisHeader.selectedImgs = 
      Array.from(thisHeader.dom.headerSliderImg)
        .splice(thisHeader.sliderCurrentPage*thisHeader.pictureInPage, (thisHeader.sliderCurrentPage + 1)*thisHeader.pictureInPage);

      console.log(thisHeader.selectedImgs);
    });
  }

  handleRightButtonAction() {
    const thisHeader = this;

    thisHeader.dom.rightButton.addEventListener('click', event => {
      event.preventDefault();
      
      if(thisHeader.sliderCurrentPage < thisHeader.sliderPageCount - 1) thisHeader.sliderCurrentPage++;
      
      thisHeader.selectedImgs = 
      Array.from(thisHeader.dom.headerSliderImg)
        .splice(thisHeader.sliderCurrentPage*thisHeader.pictureInPage, (thisHeader.sliderCurrentPage + 1)*thisHeader.pictureInPage);
      
      console.log(thisHeader.selectedImgs);
    });
  }

  getElement(element) {
    const thisHeader = this;
    
    thisHeader.dom = {};
    thisHeader.dom.wrapper = element;
    thisHeader.dom.headerSliderImg = thisHeader.dom.wrapper.querySelectorAll(select.headerElements.headerSlider.img);
    thisHeader.dom.leftButton = thisHeader.dom.wrapper.querySelector(select.headerElements.headerSlider.leftButton);
    thisHeader.dom.rightButton = thisHeader.dom.wrapper.querySelector(select.headerElements.headerSlider.rightButton);
  }
}

export default Header;