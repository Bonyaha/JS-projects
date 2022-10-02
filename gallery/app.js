function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];
    //console.log(this.list);
    //target
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imgName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');

    console.log(this.modalImages);
    /* this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this); */
    //container event
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    });
  }
  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map((item) => {
        return `<img 
        src='${item.src}'
        title='${item.title}'
        data-id='${item.dataset.id}'
        class='${
          selectedImage.dataset.id === item.dataset.id
            ? 'modal-img selected'
            : 'modal-img'
        }'
         />`;
      })
      .join('');
    this.modal.classList.add('open');
    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.modalImages.addEventListener('click', this.chooseImages);
  }

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imgName.textContent = selectedImage.title;
  }
  //= () => instead of binding
  closeModal = () => {
    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
    this.modalImages.removeEventListener('click', this.chooseImage);
  };
  nextImage = () => {
    const selected = this.modalImages.querySelector('.selected');
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  };

  prevImage = () => {
    const selected = this.modalImages.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  };
  chooseImages = (e) => {
    if (e.target.classList.contains('modal-img')) {
      const selected = this.modalImages.querySelector('.selected');
      selected.classList.remove('selected');

      this.setMainImage(e.target);
      e.target.classList.add('selected');
    }
  };
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

//another way
