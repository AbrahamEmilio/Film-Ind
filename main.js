//Creamos una instancia de axios (Axios es una herramienta que nos hace reducir el codigo a la hora de consumir un API)
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/', //Agregamos la parte de la url api que nunca cambiara para asi reutilizarla con axios
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

async function getTrendingMoviesPreview(){
    const { data } = await api(`trending/movie/day`);
    // const data = await response.json(); Con axios no es necesario parsear la respuesta, ya que el ya lo hace por nosotros

    const movies = data.results;
    console.log(movies)
}

getTrendingMoviesPreview()

const getGenders = async() => {
    const { data } = await api(`genre/movie/list`)

    const genders = data.genres;
    gendersContainer.innerHTML = '';
    genders.forEach((e) => {

    const genderContainer = document.createElement('div');
    const gender = document.createElement('h3');

    genderContainer.classList.add('gender__container');
    gender.classList.add('gender__container-text');

    gender.textContent = e.name;
    genderContainer.append(gender);
    gendersContainer.append(genderContainer);

    genderContainer.addEventListener('click', () => {
        location.hash = `category=${e.id}-${e.name}`
    })

    });
    getMoviesByCategory();

};

const getPopularMovies = async() => {
    const { data } = await api(`movie/popular`)

    const popularMovies = data.results;
    
    popularContainer.innerHTML = ''; //ESTA LINEA NOS AYUDA A VACIAN EL CONTAINER PARA QUE NO SE REPITAN LOS ELEMENTOS
    
    if(popularContainer.getAttribute('class') === 'popular__movies-container'){

        for(let i = 0; i <= 4; i++){

            const popularMovieContainer = document.createElement('div');
            const popularMovieImg = document.createElement('img')
            const popularMovieDescripcion = document.createElement('div')
            const popularMovieTitle = document.createElement('h3')
            const popularMovieText = document.createElement('p')

            popularMovieContainer.classList.add('popular__movie');
            popularMovieImg.classList.add('popular__movie-img');
            popularMovieDescripcion.classList.add('popular__movie-descripcion');
            popularMovieTitle.classList.add('popular__movie-title')
            popularMovieText.classList.add('popular__movie-text')

            popularMovieTitle.textContent = popularMovies[i].title;
            popularMovieImg.src = `https://image.tmdb.org/t/p/w300/${popularMovies[i].poster_path}`;
            popularMovieText.textContent = popularMovies[i].overview;

            popularMovieDescripcion.append(popularMovieTitle, popularMovieText);
            popularMovieContainer.append(popularMovieImg, popularMovieDescripcion);
            popularContainer.append(popularMovieContainer);

        }

    } else {

        popularMovies.forEach((e) => {
            const popularMovieContainer = document.createElement('div');
            const popularMovieImg = document.createElement('img')
            const popularMovieDescripcion = document.createElement('div')
            const popularMovieTitle = document.createElement('h3')
            const popularMovieText = document.createElement('p')

            popularMovieContainer.classList.add('popular__movie');
            popularMovieImg.classList.add('popular__movie-img');
            popularMovieDescripcion.classList.add('popular__movie-descripcion');
            popularMovieTitle.classList.add('popular__movie-title')
            popularMovieText.classList.add('popular__movie-text')

            popularMovieTitle.textContent = e.title;
            popularMovieImg.src = `https://image.tmdb.org/t/p/w300/${e.poster_path}`;
            popularMovieText.textContent = e.overview;

            popularMovieDescripcion.append(popularMovieTitle, popularMovieText);
            popularMovieContainer.append(popularMovieImg, popularMovieDescripcion);
            popularContainer.append(popularMovieContainer);

            popularButton.classList.add('inactive');

        });
    };
}

const movieDetails = async() => {
    const { data } = await api(`movie/popular`)

    const popularMovie = data.results[0];

    section__movieDetails.style.backgroundImage = 'url(`https://image.tmdb.org/t/p/w300/${popularMovie.poster_path}`)';

    const movieDetails__img = document.querySelector('.movieDetails__img')
    movieDetails__img.src = `https://image.tmdb.org/t/p/w300/${popularMovie.poster_path}`
    
    const movieDetails__title = document.querySelector('.movieDetails__title');
    movieDetails__title.textContent = popularMovie.title;

    const movieDetails__descripcion = document.querySelector('.movieDetails__descripcion');
    movieDetails__descripcion.textContent = popularMovie.overview;

    const movieDetails__rate = document.querySelector('.movieDetails__rate');
    movieDetails__rate.textContent = popularMovie.vote_average;

}

const getMoviesByCategory = async(id) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
    const data = await response.json();
    
    const peliculas = data.results;
    gendersMoviesContainer.innerHTML = '';
    peliculas.forEach((e) =>{
        const movieCategoryContainer = document.createElement('div');
        const movieCategoryImg = document.createElement('img');
        
        movieCategoryImg.src = `https://image.tmdb.org/t/p/w200/${e.poster_path}`;

        movieCategoryContainer.append(movieCategoryImg);
        gendersMoviesContainer.append(movieCategoryContainer);
    });
};

const backButtonFun = () => {

        backButton.addEventListener('click', ( )=> {
            location.hash = 'home';
        });

}
