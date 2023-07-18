class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
const movies = [
    new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("Harry Potter and the Philosopher's Stone", "Warner Bros.", "PG"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("The Lion King", "Disney", "G"),
    new Movie("Jurassic Park", "Universal Pictures", "PG-13"),
    new Movie("Casino Royale", "Eon Productions", "PG"),

  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  