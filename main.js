const logotype = document.querySelector('#logotype')
const input = document.querySelector('#input')
const button__input = document.querySelector('#button__input')

button__input.addEventListener('click', (e) => {
    e.preventDefault();
    const name = input.value;
    getMovie(name)
})

async function getMovie (name){
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${API_KEY}`)
    const data = await response.json();
    const movies = data;
    
    movies.forEach((i) => {
        const popularMovieContainer = document.createElement('div');
        const popularMovieImg = document.createElement('img')
        const popularMovieDescripcion = document.createElement('div')
        const popularMovieTitle = document.createElement('h3')
        const popularMovieText = document.createElement('p')
        const buttonDescription = document.createElement('button');
        const movieContainer = document.createElement('div');

        popularMovieContainer.classList.add('popular__movie');
        popularMovieImg.classList.add('popular__movie-img');
        popularMovieDescripcion.classList.add('popular__movie-descripcion');
        popularMovieTitle.classList.add('popular__movie-title')
        popularMovieText.classList.add('popular__movie-text')
        buttonDescription.classList.add('buttonDescription');
        movieContainer.classList.add('.movieContainer');

        popularMovieTitle.textContent = i.title;
        popularMovieImg.src = `https://image.tmdb.org/t/p/w300/${i.poster_path}`;
        popularMovieText.textContent = i.overview;
        buttonDescription.textContent = 'Description';

        popularMovieText.classList.add('inactive');

        popularMovieDescripcion.append(popularMovieTitle, popularMovieText, buttonDescription);
        popularMovieContainer.append(popularMovieImg, popularMovieDescripcion);
        movieContainer.append(popularMovieContainer);
        popularContainer.append(movieContainer);


        buttonDescription.addEventListener('click', ()=>{
            popularMovieText.classList.toggle('inactive');
        })

        popularMovieImg.addEventListener('click', ()=>{
            movieDetails(i)
        })

    });

}

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
    getMoviesByCategory(id);

};

const getPopularMovies = async() => {
    const { data } = await api(`movie/popular`)

    const popularMovies = data.results;
    
    popularContainer.innerHTML = ''; //ESTA LINEA NOS AYUDA A VACIAN EL CONTAINER PARA QUE NO SE REPITAN LOS ELEMENTOS
    
    if(popularContainer.getAttribute('class') === 'popular__movies-container'){

        for(let i = 0; i < 12; i++){

            const popularMovieContainer = document.createElement('div');
            const popularMovieImg = document.createElement('img');
            const popularMovieDescripcion = document.createElement('div');
            const popularMovieTitle = document.createElement('h3');
            const popularMovieText = document.createElement('p');
            const buttonDescription = document.createElement('button');
            const movieContainer = document.createElement('div');

            popularMovieContainer.classList.add('popular__movie');
            popularMovieImg.classList.add('popular__movie-img');
            popularMovieDescripcion.classList.add('popular__movie-descripcion');
            popularMovieTitle.classList.add('popular__movie-title');
            popularMovieText.classList.add('popular__movie-text');
            buttonDescription.classList.add('buttonDescription');
            movieContainer.classList.add('.movieContainer');
            
            popularMovieTitle.textContent = popularMovies[i].title;
            popularMovieImg.src = `https://image.tmdb.org/t/p/w300/${popularMovies[i].poster_path}`;
            popularMovieText.textContent = popularMovies[i].overview;
            buttonDescription.textContent = 'Description';

            popularMovieText.classList.add('inactive');

            popularMovieDescripcion.append(popularMovieTitle, popularMovieText, buttonDescription);
            popularMovieContainer.append(popularMovieImg, popularMovieDescripcion);
            movieContainer.append(popularMovieContainer);
            popularContainer.append(movieContainer);

            buttonDescription.addEventListener('click', ()=>{
                popularMovieText.classList.toggle('inactive');
            })

            popularMovieImg.addEventListener('click', ()=>{
                movieDetails(popularMovies[i])
            })

        }

    } else {

        popularMovies.forEach((i) => {
            const popularMovieContainer = document.createElement('div');
            const popularMovieImg = document.createElement('img')
            const popularMovieDescripcion = document.createElement('div')
            const popularMovieTitle = document.createElement('h3')
            const popularMovieText = document.createElement('p')
            const buttonDescription = document.createElement('button');
            const movieContainer = document.createElement('div');

            popularMovieContainer.classList.add('popular__movie');
            popularMovieImg.classList.add('popular__movie-img');
            popularMovieDescripcion.classList.add('popular__movie-descripcion');
            popularMovieTitle.classList.add('popular__movie-title')
            popularMovieText.classList.add('popular__movie-text')
            buttonDescription.classList.add('buttonDescription');
            movieContainer.classList.add('.movieContainer');

            popularMovieTitle.textContent = i.title;
            popularMovieImg.src = `https://image.tmdb.org/t/p/w300/${i.poster_path}`;
            popularMovieText.textContent = i.overview;
            buttonDescription.textContent = 'Description';

            popularMovieText.classList.add('inactive');

            popularMovieDescripcion.append(popularMovieTitle, popularMovieText, buttonDescription);
            popularMovieContainer.append(popularMovieImg, popularMovieDescripcion);
            movieContainer.append(popularMovieContainer);
            popularContainer.append(movieContainer);


            buttonDescription.addEventListener('click', ()=>{
                popularMovieText.classList.toggle('inactive');
            })

            popularMovieImg.addEventListener('click', ()=>{
                movieDetails(i)
            })
        });
    };
}

const getMoviesByCategory = async(id) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
    const data = await response.json();
    
    gendersMoviesContainer.innerHTML = '';
    const peliculas = data.results;

    peliculas.forEach((i) =>{

        const popularMovieContainer = document.createElement('div');
        const popularMovieImg = document.createElement('img')
        const popularMovieDescripcion = document.createElement('div')
        const popularMovieTitle = document.createElement('h3')
        const popularMovieText = document.createElement('p')
        const buttonDescription = document.createElement('button');
        const movieContainer = document.createElement('div');

        popularMovieContainer.classList.add('popular__movie');
        popularMovieImg.classList.add('popular__movie-img');
        popularMovieDescripcion.classList.add('popular__movie-descripcion');
        popularMovieTitle.classList.add('popular__movie-title')
        popularMovieText.classList.add('popular__movie-text')
        buttonDescription.classList.add('buttonDescription');
        movieContainer.classList.add('.movieContainer');

        popularMovieTitle.textContent = i.title;
        popularMovieImg.src = `https://image.tmdb.org/t/p/w200/${i.poster_path}`;
        popularMovieText.textContent = i.overview;
        buttonDescription.textContent = 'Description';

        popularMovieText.classList.add('inactive');

        popularMovieDescripcion.append(popularMovieTitle, popularMovieText, buttonDescription);
        popularMovieContainer.append(popularMovieImg, popularMovieDescripcion);
        movieContainer.append(popularMovieContainer);
        gendersMoviesContainer.append(movieContainer);


        buttonDescription.addEventListener('click', ()=>{
            popularMovieText.classList.toggle('inactive');
        })

        popularMovieImg.addEventListener('click', ()=>{
            movieDetails(i)
        })
        
        // const movieCategoryContainer = document.createElement('div');
        // const movieCategoryImg = document.createElement('img');
        
        // movieCategoryImg.src = `https://image.tmdb.org/t/p/w200/${e.poster_path}`;

        // movieCategoryContainer.append(movieCategoryImg);
        // gendersMoviesContainer.append(movieCategoryContainer);

    });

};

const movieDetails = async(i) => {

    const {data} = await api('movie/popular')
    const movie = i;

    section__movieDetails.style.backgroundImage = 'url(https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + '})';
    
    const movieDetails__img = document.querySelector('.movieDetails__img')
    movieDetails__img.src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    
    const movieDetails__title = document.querySelector('.movieDetails__title');
    movieDetails__title.textContent = movie.title;

    const movieDetails__descripcion = document.querySelector('.movieDetails__descripcion');
    movieDetails__descripcion.textContent = movie.overview;

    const movieDetails__rate = document.querySelector('.movieDetails__rate');
    movieDetails__rate.textContent = movie.vote_average;

    location.hash = 'movie';
    moviePague()

}

const backButtonFun = () => {

    backButton.addEventListener('click', ( )=> {
        location.hash = 'home';
    });

}

logotype.addEventListener('click', ()=>{
    location.hash = 'home';
})