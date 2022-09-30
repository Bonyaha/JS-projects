function getElement(selection) {
  let element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error('No such element');
  }
}
class Counter {
  constructor(element, value) {
    //this.counter = element;
    this.value = value;
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.resetBtn = element.querySelector('.reset');
    this.valueDom = element.querySelector('.value');
    this.valueDom.textContent = this.value;
    //bind functions to this
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }

  //make methods in class directly
  //class field here just for example o usage instead of bind
  increase = () => {
    this.value++;
    this.valueDom.textContent = this.value;
  };
  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDom.textContent = this.value;
  }
}
//or attach them later
/* Counter.prototype.increase = function () {
  this.value++;
  this.valueDom.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDom.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};
 */
new Counter(getElement('.first-counter'), 100);
new Counter(getElement('.second-counter'), 200);
//console.log(getElement('.first-counter'));
