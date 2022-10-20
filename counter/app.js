let count = 0;

// select value and buttons

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
      value.style.color = 'black';
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }

    value.textContent = count;
  });
});

//jQuery variant
/* $(document).ready(function () {
  let count = 0;

  let value = $('#value');
  let btns = $('.btn');
  console.log(btns);
  btns.click((e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
      value.css('color', 'black');
    }
    if (count > 0) {
      value.css('color', 'green');
    }
    if (count < 0) {
      value.css('color', 'red');
    }
    value.text(count);
  });
}); */
