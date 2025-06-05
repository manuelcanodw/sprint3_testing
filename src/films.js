// Exercise 1: Get the array of all directors.. 

const movies = require('./data');

function getAllDirectors(array) {
  const directors = array.map((item) => item.director);
  //console.log(directors); 
  return directors;
}


// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  const moviesByDirector = array.filter(item => item.director === director); 
  return moviesByDirector; 
}

// Exercise 3: Calculate the average of the films of a given director.

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

function orderAlphabetically(array) {
  // OBTENEMOS las los titles del array movies -map-
  const titles = array.map(item => item.title);
  // Ordenar los títulos alfabéticamente -sort-
  const sortedTitles = titles.sort();
  // Devolver hasta 20 títulos 
  return sortedTitles.slice(0, 20);
}

// Exercise 5: Order by year, ascending

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
