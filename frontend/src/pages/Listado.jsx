import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsuarios, deleteUsuario } from '../api';
import UserTable from '../components/organisms/UserTable/UserTable';
import Button from '../components/atoms/Button/Button';
import ErrorMessage from '../components/molecules/ErrorMessage/ErrorMessage';
import './Listado.css';

export default function Listado() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

  useEffect(() => {
    if (!usuario) { navigate('/'); return; }
    cargar();
  }, []);

  async function cargar() {
    setLoading(true);
    try {
      setUsuarios(await getUsuarios());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleEliminar(id, username) {
    if (!confirm(`¿Eliminar al usuario "${username}"?`)) return;
    try {
      await deleteUsuario(id);
      setUsuarios((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      alert(err.message);
    }
  }

  function handleLogout() {
    localStorage.removeItem('usuario');
    navigate('/');
  }

  return (
    <div className="listado-page">
      <div className="listado-header">
        <h1>Listado de Usuarios</h1>
        <div className="listado-actions">
          <span className="session-info">
            Sesión: <strong>{usuario?.username}</strong> ({usuario?.rol})
          </span>
          <Button variant="secondary" onClick={handleLogout}>Cerrar sesión</Button>
          <Button variant="primary" onClick={() => navigate('/usuarios/nuevo')}>+ Nuevo usuario</Button>
        </div>
      </div>

      <ErrorMessage message={error} />

      {loading ? (
        <p>Cargando...</p>
      ) : usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <UserTable
          usuarios={usuarios}
          onEdit={(id) => navigate(`/usuarios/editar/${id}`)}
          onDelete={handleEliminar}
        />
      )}
    </div>
  );
}
