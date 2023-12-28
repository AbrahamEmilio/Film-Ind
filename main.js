const API_KEY = '59d62911c231ed050d12674f6c45bdff';

const getGenders = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    const data = await response.json();
    const gendres = data.genres;
    gendres.forEach((e) => {

    const gendersContainer = document.querySelector('.genders__container');
    const genderContainer = document.createElement('div');
    const gender = document.createElement('h3');

    genderContainer.classList.add('gender__container');
    gender.classList.add('gender__container-text');

    gender.textContent = e.name;
    genderContainer.append(gender);
    gendersContainer.append(genderContainer);

    });
};

const getPopularMovies = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    const popularMovies = data.results;
    popularMovies.forEach((e) => {
        const popularMoviesContainer = document.querySelector('.popular__movies-container');
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

        console.log(e)

        popularMovieTitle.textContent = e.title;
        popularMovieImg.src = `https://image.tmdb.org/t/p/w300/${e.poster_path}`;
        popularMovieText.textContent = e.overview;

        popularMovieDescripcion.append(popularMovieTitle, popularMovieText);
        popularMovieContainer.append(popularMovieImg, popularMovieDescripcion);
        popularMoviesContainer.append(popularMovieContainer);
    });
}

