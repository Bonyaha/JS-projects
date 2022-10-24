const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  // OR
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');

    return `<article class="post">
  <h2>${title}</h2>
  <div class="post-info">
  <span>${formatDate}</span>
  <span>${length} min read</span>
  </div>
  <p>${snippet}</p>
  </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;

//jQuery
/* const toggleBtn = $('.btn');
const articlesContainer = $('.articles');
console.log($('body'));
$(document).ready(
  toggleBtn.click(() => {
    $('body').toggleClass('dark-theme');
  })
);

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');

    return `<article class="post">
  <h2>${title}</h2>
  <div class="post-info">
  <span>${formatDate}</span>
  <span>${length} min read</span>
  </div>
  <p>${snippet}</p>
  </article>`;
  })
  .join('');
articlesContainer.html(articlesData); */
