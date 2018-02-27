interface IMovie {
	title: string,
	runtime: number
}

function printMovieDetails(movie: IMovie) {
	console.log("title: " + movie.title + " runtime: " + movie.runtime);
}

function printMovieName(movie: IMovie) {
	console.log("title: " + movie.title);	
}

printMovieDetails({title: "Ser", runtime: 180});
printMovieName({title: "Los", runtime: 120});