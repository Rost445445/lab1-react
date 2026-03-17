import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '5rem', color: '#1877f2' }}>404</h1>
      <h2>Сторінку не знайдено</h2>
      <p>Ви потрапили в невідоме місце 😅</p>
      <Link to="/" style={{ color: '#1877f2', fontWeight: 'bold' }}>
        Повернутися на головну
      </Link>
    </div>
  );
}

export default NotFound;
