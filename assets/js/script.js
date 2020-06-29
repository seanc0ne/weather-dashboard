let APIkey = '506c4e6b64f3b4c0e8dbee95e27e6e43'

let cities = ['san miguel de allende', 'osaka', 'chattanooga', 'canberra', 'new delhi'];

function renderCities() {
    $('.list-group').empty();
    let city;
    for (city of cities) {
        let listItem = $('<li>').addClass('list-group-item').attr('data-name', city).text(city);
        $('.list-group').append(listItem);
    }
}

function saveCities() {
    localStorage.setItem('cities', cities);
    renderCities();
}

getCities();

saveCities();

function getCities() {
    let result = localStorage.getItem('cities');
    if (result !== null) {
        cities = result.split(',');
    }
}

let city;

$('.input-search').on('change', function () {
    city = $('.input-search').val();
    getCityWeather();
});

$('.input-group-text').click(function () {
    city = $('.input-search').val();
    getCityWeather();
});