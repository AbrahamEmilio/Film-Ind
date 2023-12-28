const popularContainer = document.createElement('div');
const popularButton = document.createElement('button');
popularButton.textContent = 'See more';
popularButton.classList.add('popularButton');
popularContainer.classList.add('popular__movies-container');
const popular = document.querySelector('.popular');
popular.append(popularContainer, popularButton);

const section__movieDetails = document.querySelector('.movieDetails');
const section__popular = document.querySelector('.popular');
const section__genders = document.querySelector('.genders');

const backButton = document.querySelector('.back__icon')