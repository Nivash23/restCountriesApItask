const restcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountries(data));
}
const displaycountries = (countries) => {
    const countryHtml = countries.map(country => getCountries(country));
    const countriescontainer = document.getElementById('container');
    countriescontainer.innerHTML = countryHtml.join(' ');
}
const getCountries = (country) => {
    console.log(country);
    return `
    
        <div id='container-div' >
            <h2>${country.name.common}</h2>
            <img src='${country.flags.png}'/>
            <h4>capital:${country.capital}</h4>
            <h4>Region:${country.region}</h4>
            <h4>Country Code:${country.cca3}</h4>
            <button type='button' onclick="location.href='https://openweathermap.org/'">Click for Weather</button>
        </div>
    `
    
}


restcountries();
