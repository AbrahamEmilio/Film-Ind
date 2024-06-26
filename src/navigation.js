
window.addEventListener('hashchange', navigator, false); //Llamamos a la funcion para cada que cambie el hash
window.addEventListener('DOMContentLoaded', navigator, false); //De igual manera llamamos a la funcion pero ahora para cuando cargue por primera ves el navegador

function navigator(){

    if (location.hash.startsWith('#trends')) {
        trendsPague();
    } else if(location.hash.startsWith('#search')){
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
    backButton.classList.remove('inactvie')

    popularContainer.classList.add('popular__movies-large-container');
    gendersContainer.classList.add('inactive');
    gendersView.classList.add('inactive');

    if(popularContainer.getAttribute('class') === 'popular__movies-large-container'){
        backButton.classList.remove('inactive')
    }

    getPopularMovies();
    logoButtonFun();
    backButtonFun();
}

function searchPague(){

    backButton.classList.remove('inactive');
    popularButton.classList.add('inactive');

    backButtonFun();
}

function moviePague(){

    section__movieDetails.classList.remove('inactive');
    
    backButton.classList.add('inactive');
    gendersView.classList.add('inactive');
    gendersContainer.classList.add('inactive');
    section__popular.classList.add('inactive');

    movieDetails();
    backButtonFun();
}

function categoryPague(){

    gendersContainer.classList.remove('inactive');
    gendersView.classList.remove('inactive');
    backButton.classList.remove('inactive')

    section__movieDetails.classList.add('inactive');
    section__popular.classList.add('inactive');

    const [_, categoryData] = location.hash.split('='); //CONVERTIMOS EN ARRAY EL URL (STRING) Y LO DESESTRUCTURAMOS 
    const [categoryId, categoryName] = categoryData.split('-')

    const categoryTitle = document.querySelector('.genders__view-title')
    categoryTitle.textContent = categoryName;

    getGenders();
    getMoviesByCategory(categoryId);
    backButtonFun();
    

}

function homePague(){

    section__popular.classList.remove('inactive');
    gendersContainer.classList.remove('inactive');
    popularButton.classList.remove('inactive')

    section__movieDetails.classList.add('inactive');
    gendersView.classList.add('inactive');
    backButton.classList.add('inactive');
    popularContainer.classList.add('popular__movies-container');
    popularContainer.classList.remove('popular__movies-large-container');


    popularButton.addEventListener('click', () => {

        // popularContainer.classList.remove('popular__movies-container');
        location.hash = 'trends';
        popularButton.classList.add('inactive');

    });

    //Llamamos las siguientes funciones solo en el home ya que nos cargaran por default las peliculas populare y generos
    getGenders();
    getPopularMovies();
}

function logoButtonFun (){

    logoButton.addEventListener('click', () => {
        location.hash = 'home';
    });

};