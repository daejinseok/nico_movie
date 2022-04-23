import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const movie_url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

  const getMovie = async () => {
    const json = await (
      await fetch(movie_url, { credentials: "same-origin" })
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log({ id });

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <h1>{detail.title}</h1>
          {detail.description_intro}
        </div>
      )}
    </div>
  );
}

export default Detail;
