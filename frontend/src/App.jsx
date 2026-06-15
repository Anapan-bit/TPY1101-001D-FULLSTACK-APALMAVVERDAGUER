import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Listado from './pages/Listado';
import CrearUsuario from './pages/CrearUsuario';
import EditarUsuario from './pages/EditarUsuario';

function PrivateRoute({ children }) {
  const usuario = localStorage.getItem('usuario');
  return usuario ? children : <Navigate to="/" replace />;
}

function AdminRoute({ children }) {
  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
  if (!usuario) return <Navigate to="/" replace />;
  if (usuario.rol !== 'ADMIN') return <Navigate to="/usuarios" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuarios" element={<PrivateRoute><Listado /></PrivateRoute>} />
        <Route path="/usuarios/nuevo" element={<AdminRoute><CrearUsuario /></AdminRoute>} />
        <Route path="/usuarios/editar/:id" element={<AdminRoute><EditarUsuario /></AdminRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
