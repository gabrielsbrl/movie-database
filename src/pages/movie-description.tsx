import { useRouter } from "next/router";
import Image from "next/image";
import styles from '../styles/movie-card.module.css';

export default function MovieDescription() {
  const router = useRouter();
  const mediaData: any = router.query;
  const mediaTitle = mediaData.name || mediaData.original_title;
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w200${mediaData.poster_path}`}
        alt={mediaTitle}
        width={200}
        height={300}
      />
      <div>
        <h2>{mediaTitle}</h2>
        <p>{mediaData.overview}</p>
        <p>rating: {mediaData.vote_average}</p>
        <p>air date: {mediaData.first_air_date}</p>
        <p>type: {mediaData.media_type}</p>
      </div>
    </div>
  );
}
