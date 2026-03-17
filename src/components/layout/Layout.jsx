import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Головна</NavLink>
        <NavLink to="/feed" className={({ isActive }) => isActive ? styles.active : ''}>Стрічка</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ''}>Профіль</NavLink>
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
