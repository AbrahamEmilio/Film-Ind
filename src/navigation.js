
window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false)

function navigator(){

    if (location.hash.startsWith('#trends')) {
        trendsPague();
    } else if(location.hash.startsWith('#search=')){
        searchPague();
    } else if(location.hash.startsWith('#movie')){
        moviePague();
    } else if(location.hash.startsWith('#category=')){
        categoryPague();
    } else {
        homePague();
    }
    location.hash
}

function trendsPague(){
popularButton.addEventListener('click', () => {
    popularContainer.classList.remove('popular__movies-container');
    popularContainer.classList.add('popular__movies-large-container');
    getPopularMovies();
});

}

function searchPague(){

}

function moviePague(){
    movieDetails();

    section__movieDetails.classList.remove('inactive');
    section__popular.classList.add('inactive');
    section__genders.classList.add('inactive');

    backButton.addEventListener('click', () => {
        location.hash = 'home';
    });
}

function categoryPague(){

    section__movieDetails.classList.add('inactive');
    section__popular.classList.add('inactive');
    gendersContainer.classList.remove('inactive');
    gendersView.classList.remove('inactive');

    const [_, categoryData] = location.hash.split('='); //CONVERTIMOS EN ARRAY EL URL (STRING) Y LO DESESTRUCTURAMOS 
    const [categoryId, categoryName] = categoryData.split('-')

    const categoryTitle = document.querySelector('.genders__view-title')
    categoryTitle.textContent = categoryName;
    getGenders();
    getMoviesByCategory(categoryId);
}

function homePague(){

    section__movieDetails.classList.add('inactive');
    section__popular.classList.remove('inactive');
    gendersContainer.classList.remove('inactive');
    gendersView.classList.add('inactive');

    popularButton.addEventListener('click', () => {
        popularContainer.classList.remove('popular__movies-container');
        popularContainer.classList.add('popular__movies-large-container');
        getPopularMovies();
    });

    getGenders();
    getPopularMovies();
}

function logoButton (){
    const logoButton = document.querySelector('.logotype');
    logoButton.addEventListener('click', ()=>{
        location.hash = 'home'
    })
}