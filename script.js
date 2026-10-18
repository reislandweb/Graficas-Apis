/* 
var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0]
  ]
};
// Crea un nuevo objeto de gráfico de líneas, pasando como primer parámetro un selector que haga referencia al elemento contenedor del gráfico. 
// El segundo parámetro es el objeto que contiene los datos.

new Chartist.Line('.ct-chart', data);

async function getData() {
    try {
        const res = await fetch("https://fakestoreapi.com/products?limit=10");
        const data = await res.json();
        return data;
    }catch(error) {
        console.log(error);
    }
}
//getData().then(data => console.log(data))

//FUNCION PARA PINTAR LA GRAFICA
function paintGraph(data) {

    let titles = [];
    let prices = [];

    data.forEach(product => {
        titles.push(`prod${product.id}`);
        prices.push(product.price);
    });

    new Chartist.Bar('.products', {
        labels: titles,
        series: prices
        }, {
        distributeSeries: true
        });
}
getData().then(data => paintGraph(data)) */

// -----------EJERCICIO 1 ---------------
//FASE 1 -SACAR INFO DE LA API
async function getFilmsAndYear() {
    try {
        const res = await fetch("https://swapi.info/api/films");
        const data = await res.json();
        return data;
    }catch(error){
        console.error(error);
    }
}
//getFilmsAndYear().then(data => console.log(data));

//FASE 2 PINTAR LA GRAFICA CON LA INFO SOLICITADA

function printGraft(data) {
    let film = [];
    let yearPublication = [];

    data.forEach(product => {
        film.push(product.title);
        const year = parseInt(product.release_date.substring(0,4),10);
        yearPublication.push(year);
    });
    console.log(yearPublication);
    
    new Chartist.Line('.products', {
        labels: film,
        series: [yearPublication]
        }, {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
        });
}
//getFilmsAndYear().then(data => printGraft(data));


// -----------EJERCICIO 2 ---------------

async function getPersonAndFlims() {
    try {
        const resp = await fetch("https://swapi.info/api/people");
        const data = await resp.json();
        return data;
    }catch(error){
        console.error(error);
    }
}
//getPersonAndFlims().then(data => console.log(data));

function printGraftPeople(data) {
    let people = [];
    let numberFilms = [];
    data.forEach(information => {
        people.push(information.name);
        numberFilms.push(information.films.length);
    })
    console.log();
    
     /* new Chartist.Bar('.characters', {
  labels: people,
  series: numberFilms
        }, {
        distributeSeries: true
        }); */

    new Chartist.Bar('.characters', {
    labels: people,
    series: [numberFilms
    ]
    }, {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
        offset: 150
    }
    });
}
//getPersonAndFlims().then(data => printGraftPeople(data))