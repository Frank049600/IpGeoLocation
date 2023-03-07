let cardsGeo = document.getElementById("cards")
let locationGeo = document.getElementById("location").content
let fragment = document.createDocumentFragment() 

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
            mostrarGeo()
        })
        .catch(err => console.error(err));
}

const mostrarGeo = () =>{

    locationGeo.querySelector('p')[0].textContent = topGeo.city.region_name
    locationGeo.querySelector('p')[1].textContent = topGeo.location
}