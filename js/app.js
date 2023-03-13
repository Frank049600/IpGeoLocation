let cardsGeo = document.getElementById("cards")
let locationGeo = document.getElementById("location").content
let fragment = document.createDocumentFragment()
let showInput = document.querySelector("location")
let showOutput = document.querySelector("location")


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
    
    fetch('http://localhost:5050/js/api.json', options)
        .then(response => response.json())
        .then(response => {
            topGeo = response
            //console.log(topGeo)

            //Muestra la información del Templade despues de dar click en el boton Buscar
            showInput.addEventListener('onClick', () => {
                showInput.mostrarGeo();
            })

            showOutput.addEventListener('onClick', () => {
                showOutput.cerrarGeo();
            })

        })
        .catch(err => console.error(err));
}

const mostrarGeo = () =>{
    
    locationGeo.querySelectorAll('p')[0].textContent = "Latitud: "+topGeo.location.latitude
    locationGeo.querySelectorAll('p')[1].textContent = "Longitud: "+topGeo.location.longitude
    locationGeo.querySelectorAll('p')[2].textContent = topGeo.city.name
    locationGeo.querySelectorAll('p')[3].textContent = topGeo.country.country_name
    locationGeo.querySelectorAll('p')[4].textContent = "Lenguaje: "+topGeo.country.languages[0].native
    locationGeo.querySelectorAll('p')[5].textContent = topGeo.continent.continent_name
    locationGeo.querySelectorAll('p')[6].textContent = "Moneda: "+topGeo.currency.name
    locationGeo.querySelectorAll('p')[7].textContent = "Código: "+topGeo.currency.code
    

    const clone = locationGeo.cloneNode(true)
    fragment.appendChild(clone)

    cardsGeo.appendChild(fragment)
}

const cerrarGeo = () => {
    topGeo.close(cardsGeo);
}