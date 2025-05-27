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
//En esta ocasión, tendrás que implementar una función que recibiendo un array de películas, devuelve un array de películas ordenadas por año.
//Como podrás observar, existen muchas películas que coinciden en un mismo año. Para ordenar estas películas que tienen el mismo año, debe realizarse por orden alfabético del título.
function orderByYear(array) {
  // Crear una copia del array para no modificar el original
  const sortedMovies = [...array];
  
  // Ordenar por año y, en caso de empate, por título
  return sortedMovies.sort((a, b) => {
    // Primero comparar por año
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    // Si los años son iguales, ordenar por título
    return a.title.localeCompare(b.title);
  });
}

// Exercise 6: Calculate the average of the movies in a category
//Lo estás haciendo muy bien, ¡ya has creado una aplicación web con muchas herramientas que podrán ayudar a los usuarios/as!
//En este apartado, es necesario dar la posibilidad a los usuarios de pedir la nota media de las películas de un determinado género.
//El primer paso será crear el test unitario para testear esa funcionalidad. Recuerda que los tests unitarios tendrán que añadirse al archivo "tests/films.spec.js".
//Luego tendrás que crear la función que reciba una categoría de película, y calcule la media de nota de esa categoría (sobre el array de todas las películas).

function moviesAverageByCategory(array, category) {
  // Filtrar películas que contienen la categoría en su array de géneros
  const moviesInCategory = array.filter(movie => movie.genre.includes(category));
  
  // Si no hay películas en la categoría, retornar 0
  if (moviesInCategory.length === 0) return 0;
  
  // Calcular la suma de las puntuaciones
  const totalScore = moviesInCategory.reduce((sum, movie) => sum + movie.score, 0);
  
  // Calcular el promedio y redondear a 2 decimales
  const average = totalScore / moviesInCategory.length;
  return Number(average.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
//Como habrás podido observar, la duración de las películas del array viene en horas y minutos.
//Esto es un problema para compararlas fácilmente, por lo que tendrás que modificar ese formato de duración.
//Tienes que crear una función donde recibiendo un array de películas, ¡devuelve un array con estas películas pero con la duración en minutos!
//Por ejemplo:
/*
{
title: 'Pulp Fiction',
year: 1994,
director: 'Quentin Tarantino',
duration: '2h 34min',
genre: ['Crime', 'Drama'],
score: 8.9
},
Se transformaría en:

{
title: 'Pulp Fiction',
year: 1994,
director: 'Quentin Tarantino',
duration: '154',
genre: ['Crime', 'Drama'],
score: 8.9
},
*/

function hoursToMinutes(array) {
  // creamos una copia del array 
  return array.map(movie => {
    // la copia creada completa con todos los campos
    const movieCopy = { ...movie };
    
    // Extraer horas y minutos usando expresiones regulares
    const hoursMatch = movie.duration.match(/(\d+)h/);
    const minutesMatch = movie.duration.match(/(\d+)min/);
    
    // Convertir a números, si no hay match usar 0
    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
    
    // Calcular el tiempo  total en minutos
    movieCopy.duration = hours * 60 + minutes;
    
    return movieCopy;
  });
}

// Exercise 8: Get the best film of a year
//Ya estás llegando al final, ¡sólo hace falta implementar una última funcionalidad!
//Los usuarios/as necesitan saber qué película es la mejor de cada año. Para llevar a cabo esta funcionalidad, tendrás que crear una función que acepte el año, y devuelva la mejor película de ese año.

function bestFilmOfYear(array, year) {
  // Filtrar películas del año que se quiere
  const moviesOfYear = array.filter(movie => movie.year === year);
  
  // Si no hay películas de ese año, retornar array vacío
  if (moviesOfYear.length === 0) return [];
  
  // Encontrar la película con la puntuación más alta
  const bestMovie = moviesOfYear.reduce((best, current) => {
    return current.score > best.score ? current : best;
  });
  
  // Retornar un array con la mejor película delaño elegido 
  return [bestMovie];
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
