import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header';
import { useAuth } from '../../context/AuthContext';
import styles from './Layout.module.css';

function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="app-container">
      <Header />
      <nav className={styles.nav}>
        <div className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Головна</NavLink>
          <NavLink to="/feed" className={({ isActive }) => isActive ? styles.active : ''}>Стрічка</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ''}>Профіль</NavLink>
        </div>
        
        <div className={styles.auth}>
          {user ? (
            <>
              <span className={styles.username}>Вітаємо, {user.name}!</span>
              <button onClick={handleLogout} className={styles.logoutBtn}>Вийти</button>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ''}>Увійти</NavLink>
          )}
        </div>
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

