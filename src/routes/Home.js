import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const movie_url =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(movie_url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              coverImg={m.medium_cover_image}
              title={m.title}
              summary={m.summary}
              genres={m.genres}></Movie>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
