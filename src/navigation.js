
window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false)

function navigator(){
    if (location.hash.startsWith('#trends')) {
        trendsPague();
    } else if(location.hash.startsWith('#search=')){
        searchPague();
    } else if(location.hash.startsWith('#movie')){
        moviePague();
    } else if(location.hash.startsWith('#category')){
        categoryPague();
    } else {
        homePague();
    }
    location.hash
}

function trendsPague(){
    console.log('trends')
}

function searchPague(){
    console.log('search')
}

function moviePague(){
    console.log('movie')
}

function categoryPague(){
    console.log('category')
}

function homePague(){
    console.log('home')
    getGenders();
    getPopularMovies();
}