function printMovieDetails(movie) {
    console.log("title: " + movie.title + " runtime: " + movie.runtime);
}
function printMovieName(movie) {
    console.log("title: " + movie.title);
}
printMovieDetails({ title: "Ser", runtime: 180 });
printMovieName({ title: "Los", runtime: 120 });
