const logoButton = document.querySelector('.logotype');

const popularContainer = document.createElement('div');
const popularButton = document.createElement('button');
popularButton.textContent = 'See more';
popularButton.classList.add('popularButton');
popularContainer.classList.add('popular__movies-container');
const popular = document.querySelector('.popular');
popular.append(popularContainer, popularButton);

const section__movieDetails = document.querySelector('.movieDetails');
const section__popular = document.querySelector('.popular');

const gendersContainer = document.querySelector('.genders__container');
const gendersView = document.querySelector('.genders__view');

const gendersMoviesContainer = document.querySelector('.genders__movies-container');

const backButton = document.querySelector('.back__button');
const backIcon = document.querySelector('.back__icon');