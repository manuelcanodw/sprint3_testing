# Sprint 3 IT Academy | Video management tool

## Introduction

A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.

You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.

## Implemented Features

The following features have been implemented in the `films.js` file:

1. **getAllDirectors**: Returns an array with all movie directors.
2. **getMoviesFromDirector**: Returns an array with all movies from a specific director.
3. **moviesAverageOfDirector**: Calculates the average score of movies from a specific director.
4. **orderAlphabetically**: Returns an array of movie titles sorted alphabetically (limited to 20 titles).
5. **orderByYear**: Returns an array of movies sorted by year and alphabetically by title when years are equal.
6. **moviesAverageByCategory**: Calculates the average score of movies in a specific category.
7. **hoursToMinutes**: Converts movie durations from "Xh Ymin" format to total minutes.
8. **bestFilmOfYear**: Returns the best movie (highest score) from a specific year.

<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository
```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>

## Tests!


```shell
$ npm install
$ npm run test:watch
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

Apart from the statement, you will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, all tests are already defined here!

<br>

## Instructions

You have the following indications from the frontend responsible:

- It is mandatory to implement all loops in ES6 (using map, reduce, filter and sort to manipulate arrays).

- As at the moment we don't consume data from a server using an API, we will work with data from the src/data.js archive. For the moment we will implement the logic using
an array of information about 250 movies.

- The implementation is about processing this array of movies, to display it as requested in each exercise.

- The logic to implement will be placed in the src/films.js file.

- You don't need to show the result of each function on the screen. Your goal is to pass the tests.  More information on how to program oriented to pass tests at the end of the document.

- Don't forget to include the capture of the test results in the virtual campus.

## Technical Implementation Details

- All array manipulations are implemented using ES6 methods (map, reduce, filter, sort)
- The application works with a dataset of approximately 250 movies from `src/data.js`
- All functions are implemented in `src/films.js`
- Each function is designed to be pure and not modify the original data
- The implementation focuses on passing all unit tests defined in `tests/films.spec.js`

## Code Style

- Functions are implemented following functional programming principles
- Original arrays are never modified (immutability)
- Clear and descriptive variable names are used
- Code is well-commented for better understanding
- Error cases are properly handled (e.g., empty arrays, no matches)

## Tests Implementation

The project includes comprehensive unit tests implemented in `tests/films.spec.js`. These tests verify the correct implementation of each function:

### Test Structure
Each function has its own test suite that verifies:
- Function declaration and type
- Return value type
- Immutability of original data
- Correct handling of edge cases
- Expected output for different inputs

### Test Cases by Function

1. **getAllDirectors**
   - Verifies function returns an array
   - Checks array contains only director names
   - Ensures original array is not modified

2. **getMoviesFromDirector**
   - Tests filtering by director name
   - Verifies correct movie objects are returned
   - Checks handling of non-existent directors

3. **moviesAverageOfDirector**
   - Verifies correct average calculation
   - Tests handling of decimal places
   - Checks handling of directors with no movies

4. **orderAlphabetically**
   - Tests alphabetical sorting
   - Verifies 20-title limit
   - Checks handling of special characters

5. **orderByYear**
   - Tests year-based sorting
   - Verifies alphabetical sorting for same-year movies
   - Checks array immutability

6. **moviesAverageByCategory**
   - Tests average calculation by category
   - Verifies handling of movies with multiple categories
   - Checks decimal precision

7. **hoursToMinutes**
   - Tests conversion of different duration formats
   - Verifies correct minute calculations
   - Checks handling of edge cases

8. **bestFilmOfYear**
   - Tests finding highest-scored movie
   - Verifies handling of years with no movies
   - Checks return format

### Running Tests
```shell
$ npm install
$ npm run test:watch
```

The test results are displayed in real-time and can be viewed in detail by opening the generated `test-results.html` file with the "Live Server" VSCode extension.

### Test Coverage
- All functions are tested for their core functionality
- Edge cases are covered (empty arrays, invalid inputs)
- Data immutability is verified
- Return types and formats are checked
- Performance considerations are tested

