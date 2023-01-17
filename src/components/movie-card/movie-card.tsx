import Link from "next/link";
import styles from "../../styles/movie-card.module.css";

const formatDate = (date: string) => {
  const dateObject = new Date(date);
  const mediaReleaseMonth = dateObject.toLocaleString("default", {
    month: "long",
  });
  return {
    month: mediaReleaseMonth,
    year: dateObject.getFullYear(),
    day: dateObject.getDate() + 1,
  };
};

export default function MovieCard(props: any) {
  const mediaReleaseDate = formatDate(
    props.movie.first_air_date || props.movie.release_date
  );

  return (
    <div className={styles.movieCard}>
      <Link
        href={{
          pathname: "/movie-description",
          query: props.movie,
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`}
          alt={props.movie.name || props.movie.original_title}
        />
      </Link>
      <div className={styles.movieCardDescription}>
        <h2>
          <Link
            href={{
              pathname: "/movie-description",
              query: props.movie,
            }}
          >
            {props.movie.name || props.movie.original_title}
          </Link>
        </h2>
        <p className={styles.mediaReleaseDate}>
          {mediaReleaseDate.day} de {mediaReleaseDate.month} de{" "}
          {mediaReleaseDate.year}
        </p>
      </div>
    </div>
  );
}
