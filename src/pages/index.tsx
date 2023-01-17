import MovieCard from "@/components/movie-card/movie-card";
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';

const getTrendingMoviesForTheDay = () =>
  fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=df8eaa15e995159971aca48245ccfa02"
  ).then((response) => response.json());

export default function Home() {
  const [trendingMedia, setTrendingMedia] = useState([]);  

  useEffect(() => {
    getTrendingMoviesForTheDay().then((media) =>
      setTrendingMedia(media.results)
    );
  }, []);

  return (
    <div className={styles.home}>
      <h2>Trending movies and shows</h2>
      <ul className={styles.movieList}>
        {trendingMedia.map((media: any, index: number) => {
          return (
            <li key={index}>
              <MovieCard movie={media} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
