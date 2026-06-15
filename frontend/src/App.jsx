import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Listado from './pages/Listado';
import CrearUsuario from './pages/CrearUsuario';
import EditarUsuario from './pages/EditarUsuario';

function PrivateRoute({ children }) {
  const usuario = localStorage.getItem('usuario');
  return usuario ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuarios" element={<PrivateRoute><Listado /></PrivateRoute>} />
        <Route path="/usuarios/nuevo" element={<PrivateRoute><CrearUsuario /></PrivateRoute>} />
        <Route path="/usuarios/editar/:id" element={<PrivateRoute><EditarUsuario /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
