import Vote from 'components/Vote';
import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({
  date, explanation, media_type, title, url, copyright,
}: Props) {
  return (
    <div className={styles.card}>
      {/* Only render image if it's availible */}
      {media_type === 'image' && (
      <div className={styles.image}>
        {/* Use fill layout as image size is inconsistent */}
        <Image src={url} layout="fill" objectFit="cover" />
        {copyright && (
        <span className={styles.copyright}>
          ©
          {' '}
          {copyright}
        </span>
        )}
        <Vote date={date} />
      </div>
      )}
      {/* If APOD is a youtube video include an embed */}
      {media_type === 'video' && (
      <div className={styles.image}>
        <iframe
          width="100%"
          height="300"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Vote date={date} />
      </div>
      ) }
      <div className={styles.content}>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.explanation}>
          {explanation}
        </span>
        {date}
      </div>
    </div>
  );
}

interface Props {
  date: string;
  explanation: string;
  media_type: 'image' | 'video';
  title: string;
  url: string;
  copyright?: string;
}
