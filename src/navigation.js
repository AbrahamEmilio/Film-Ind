
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

    popularContainer.classList.remove('popular__movies-container');
    popularContainer.classList.add('popular__movies-large-container');
    gendersContainer.classList.add('inactive');
    gendersView.classList.add('inactive');

    if(popularContainer.getAttribute('class') === 'popular__movies-large-container'){
        backButton.classList.remove('inactvie')
    }

    getPopularMovies();
    backButtonFun();
    logoButtonFun();
}

function searchPague(){

}

function moviePague(){

    section__movieDetails.classList.remove('inactive');
    section__popular.classList.add('inactive');
    section__genders.classList.add('inactive');

    movieDetails();
}

function categoryPague(){

    section__movieDetails.classList.add('inactive');
    section__popular.classList.add('inactive');
    gendersContainer.classList.remove('inactive');
    gendersView.classList.remove('inactive');
    backButton.classList.remove('inactive')

    const [_, categoryData] = location.hash.split('='); //CONVERTIMOS EN ARRAY EL URL (STRING) Y LO DESESTRUCTURAMOS 
    const [categoryId, categoryName] = categoryData.split('-')

    const categoryTitle = document.querySelector('.genders__view-title')
    categoryTitle.textContent = categoryName;

    getGenders();
    getMoviesByCategory(categoryId);
    backButtonFun();

}

function homePague(){

    section__movieDetails.classList.add('inactive');
    section__popular.classList.remove('inactive');
    gendersContainer.classList.remove('inactive');
    gendersView.classList.add('inactive');
    backButton.classList.add('inactive')
    popularContainer.classList.add('popular__movies-container')

    popularButton.addEventListener('click', () => {
        popularContainer.classList.remove('popular__movies-container');
        popularContainer.classList.add('popular__movies-large-container');
        backButton.classList.remove('inactvie')
        location.hash = 'trends';
    });

    getGenders();
    getPopularMovies();
}

function logoButtonFun (){

    logoButton.addEventListener('click', () => {
        location.hash = 'home';
    });

};