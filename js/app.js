let cardsGeo = document.getElementById('cards')
let locationGeo = document.getElementById('ubica').content
let fragment = document.createDocumentFragment()

let output = document.getElementById('map')


let topGeo = []

document.addEventListener('DOMContentLoaded', () => {
    loadGeo()
})

const loadGeo = () => { 
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78a9963e2fmshfb77a08e87c14c5p17758cjsn3829d2ad97c0',
            'X-RapidAPI-Host': 'ip-geo-location4.p.rapidapi.com'
        }
    };
    
    fetch('https://ip-geo-location4.p.rapidapi.com/?ip=8.8.8.8', options)
        .then(response => response.json())
        .then(response => {
            topGeo = response
            console.log(topGeo)
        })
        .catch(err => console.error(err));
}

const mostrarGeo = () =>{
    
    locationGeo.querySelectorAll('p')[0].textContent = topGeo.location.latitude
    locationGeo.querySelectorAll('p')[1].textContent = topGeo.location.longitude
    locationGeo.querySelectorAll('p')[2].textContent = topGeo.city.name
    locationGeo.querySelectorAll('p')[3].textContent = topGeo.city.region_name
    locationGeo.querySelectorAll('p')[4].textContent = topGeo.country.country_name
    locationGeo.querySelectorAll('p')[5].textContent = topGeo.country.capital
    locationGeo.querySelectorAll('p')[6].textContent = topGeo.country.population
    locationGeo.querySelectorAll('p')[7].textContent = topGeo.continent.continent_name
    locationGeo.querySelectorAll('p')[8].textContent = topGeo.currency.name
    locationGeo.querySelectorAll('p')[9].textContent = topGeo.currency.code 
    locationGeo.querySelectorAll('p')[10].textContent = topGeo.country.languages[0].name
    locationGeo.querySelectorAll('p')[11].textContent = topGeo.country.languages[0].native
    

    const clone = locationGeo.cloneNode(true)
    fragment.appendChild(clone)

    cardsGeo.appendChild(fragment)
}

const cerrarGeo = () => {
    console.log(locationGeo.querySelector('.close'))

    document.querySelector('div.information').style.display = 'none'
}


function findMe(){

        if (navigator.geolocation){
            output.innerHTML = "<p> TU NAVEGADOR SOPORTA GEOLOCALIZACION</p>";

        }else {
            output.innerHTML="<p> EL NAVEGADOR NO SOPORTA GEOLOCALIZACION</p>";
        }

        function localizacion(topGeo){
            var latitude = topGeo.location.latitude;
            var longitude = topGeo.location.longitude;

            output.innerHTML="<p> LATITUD: "+latitude+"<br>LONGITUD: "+longitude+"</p>";
        }
            function error(){
                output.innerHTML = "<p>NO SE PUEDE OBTENER TU UBICACION, DISCULPE LOS MALESTARES</p>";
            }

            navigator.geolocation.getCurrentPosition(localizacion,error);
            
    }
