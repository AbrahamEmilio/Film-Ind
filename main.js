const API_KEY = '59d62911c231ed050d12674f6c45bdff';

const getGenders = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    const data = await response.json();
    const gendres = data.genres;
    gendres.forEach((e) => {
    //     <div class="genders__container">
    //     <!-- <div class="gender__container">
    //         <h3 class="gender__container-text">Terror</h3>
    //     </div> -->
    // </div>

    const gendersContainer = document.querySelector('.genders__container');
    const genderContainer = document.createElement('div')
    const gender = document.createElement('h3')

    genderContainer.classList.add('gender__container')
    gender.classList.add('gender__container-text')

    gender.textContent = e.name;
    genderContainer.append(gender)
    gendersContainer.append(genderContainer)
    })
}

getGenders();