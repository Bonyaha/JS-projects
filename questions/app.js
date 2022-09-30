//traversing dom

/* const buttons = document.querySelectorAll('.question-btn');
buttons.forEach((item) => {
  item.addEventListener('click', (e) => {
    const target = e.currentTarget.parentElement.parentElement;
    target.classList.toggle('show-text');
  });
}); */

//using selectors inside the elements
const questions = document.querySelectorAll('.question');

questions.forEach((item) => {
  const btn = item.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach((question) => {
      if (question !== item) {
        question.classList.remove('show-text');
      }
    });
    item.classList.toggle('show-text');
  });
});
