// Exercise 1: Get the array of all directors.. 
//e mostrará por pantalla al usuario sólo los directores de las películas. 
//Para obtener el array de directores/as, debes crear la función getAllDirectors() .//
// No debes hacer el renderizado del resultado en esta función, debe devolver el array de directores. El objetivo es mantener cada función con una única responsabilidad.
//Ayuda
//Tendrás que implementar un bucle .map que recorra todo el array de películas, extrayendo sólo el campo director de cada una (no olvides que cada película es un objeto, que contiene el campo que nos interesa "director").
const movies = require('./data');

function getAllDirectors(array) {
  const directors = array.map((item) => item.director);
  console.log(directors); 
  return directors;
}


// Exercise 2: Get the films of a certain director
//Otra funcionalidad necesaria es mostrar las películas para un determinado director / a 
////Esta función debe recibir como parámetro el/la director/a para el que se quieren buscar sus películas, y devuelve el array de películas que ha dirigido.
//Ayuda: Es recomendable utilizar el método .filter().

function getMoviesFromDirector(array, director) {
  const moviesByDirector = array.filter(item => item.director === director); 
  return moviesByDirector; 
}

// Exercise 3: Calculate the average of the films of a given director.
//Para tener más información de este/a director/a, se pide calcular la media de las puntuaciones de sus películas.
//Para ello, deberás implementar la función moviesAverageOfDirector() , que recibe un array de películas y devuelve la nota media, con dos decimales.
//Ayuda
//como quieres obtener un único valor, el método .reduce() puede ser útil.

function moviesAverageOfDirector(array, director) {
  // Filtramos las películas del director específico
  const directorMovies = array.filter(item => item.director === director);

  // Si no hay películas del director, retornamos 0
  if (directorMovies.length === 0) return 0;
  
  // Calculamos la suma de las puntuaciones
  const totalScore = directorMovies.reduce((sum, item) => sum + item.score, 0);
  
  // Calculamos el promedio dividiendo la suma entre el número de películas
  const average = totalScore / directorMovies.length;
  
  // Redondeamos a 2 decimales para mejor legibilidad
  return Number(average.toFixed(2));
  
}

// Exercise 4:  Alphabetic order by title 
//Ahora en este ejercicio y en el siguiente implementarás la lógica para ordenar las películas, parte fundamental en cualquier herramienta de visualización de datos.
//En este apartado, tendrás que crear una función, que recibiendo un array de películas, lo devuelva ordenado alfabéticamente por título .
//Solo deben devolverse las 20 primeras películas ordenadas.
//Ayuda
//Para saber si debes devolver un array con toda la información de las películas o un array que contenga sólo el nombre de las películas, analiza el archivo con los test llamado "films.spec.js" y revisa los test del ejercicio 4.

function orderAlphabetically(array) {
  // OBTENEMOS las los titles del array movies -map-
  const titles = array.map(item => item.title);
  // Ordenar los títulos alfabéticamente -sort-
  const sortedTitles = titles.sort();
  // Devolver hasta 20 títulos 
  return sortedTitles.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}