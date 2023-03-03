const cardsGeo = document.getElementById("cards")
const locationGeo = document.getElementById("location").content
const fragment = document.createDocumentFragment()

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
            creaLocation()
        })
        .catch(err => console.error(err));
}

const creaLocation = () => {

    topGeo.forEach((ubica) => {
        locationGeo.querySelectionAll('p')[0].textConstent = ubica.location
        locationGeo.querySelectionAll('p')[1].textConstent = ubica.city
        locationGeo.querySelectionAll('p')[2].textConstent = ubica.country
        locationGeo.querySelectionAll('p')[3].textConstent = ubica.languaje
        locationGeo.querySelectionAll('p')[4].textConstent = ubica.continent
        locationGeo.querySelectionAll('p')[5].textConstent = ubica.currency

        const clone = locationGeo.cloneNode(true)
        fragment.appendChild(clone)
    })


    cardsGeo.appendChild(fragment)
}