import { useState } from 'react';
import styles from './Post.module.css';

function Post({ author, avatar, content, date, likes: initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <img src={avatar} alt={author} className={styles.avatar} />
        <div className={styles.authorInfo}>
          <h3 className={styles.author}>{author}</h3>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.footer}>
        <button className={styles.likeButton} onClick={handleLike}>
          👍 Лайк <span className={styles.likeCount}>{likes}</span>
        </button>
      </div>
    </div>
  );
}

export default Post;
