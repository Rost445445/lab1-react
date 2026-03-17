import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Якщо не авторизований, редирект на /login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
