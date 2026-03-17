import { NavLink, Outlet, Navigate, useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();

  // Автоматичне перенаправлення з /profile на /profile/info
  if (location.pathname === '/profile') {
    return <Navigate to="/profile/info" replace />;
  }

  return (
    <div style={{ padding: '20px', background: '#fff', borderRadius: '12px' }}>
      <h1>Ваш Профіль</h1>
      <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        <NavLink to="/profile/info" style={({ isActive }) => ({ color: isActive ? '#1877f2' : '#666', fontWeight: isActive ? 'bold' : 'normal' })}>
          Інформація
        </NavLink>
        <NavLink to="/profile/settings" style={({ isActive }) => ({ color: isActive ? '#1877f2' : '#666', fontWeight: isActive ? 'bold' : 'normal' })}>
          Налаштування
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export function ProfileInfo() {
  return (
    <section>
      <h2>Інформація про профіль</h2>
      <p>Тут відображаються ваші персональні дані.</p>
    </section>
  );
}

export function ProfileSettings() {
  return (
    <section>
      <h2>Налаштування</h2>
      <p>Керуйте своїм обліковим записом тут.</p>
    </section>
  );
}

export default Profile;
