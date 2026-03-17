import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data';

function PostDetails() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <h2>Пост не знайдено!</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', background: '#fff', borderRadius: '12px' }}>
      <button onClick={() => navigate('/feed')} style={{ marginBottom: '20px' }}>
        ← Назад до стрічки
      </button>
      <h1>{post.author}</h1>
      <p style={{ color: '#65676b' }}>{post.date} • {post.category}</p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{post.content}</p>
      <div style={{ marginTop: '20px' }}>
        Лайки: {post.likes}
      </div>
    </div>
  );
}

export default PostDetails;
