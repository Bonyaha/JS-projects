/* const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
console.log(color);
btn.addEventListener('click', () => {
  // get random number between 0 - 3 //
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
} */

// Using jQuery
$(document).ready(() => {
  const btn = $('#btn');
  const color = $('.color');
  const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

  btn.click(() => {
    const randomNumber = getRandomNumber();
    console.log($('body'.style));
    $('body').style.backgroundColor = colors[randomNumber];

    color.text(colors[randomNumber]);
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
});
