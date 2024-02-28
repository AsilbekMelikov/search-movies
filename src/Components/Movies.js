import Movie from "./Movie";

export default function Movies(props) {
    const {movies = []} = props;
    return (
        <div className='movies'>
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : (
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700" rel="stylesheet"/>
                    <link type="text/css" rel="stylesheet" href="/error/style.css"/>

                    <div id="notfound">
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>Oops!</h1>
                                <h2>404 - The Page can't be found</h2>
                            </div>
                            <a href="/index.html">Go TO Homepage</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}