import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsuario, updateUsuario } from '../api';
import UserForm from '../components/organisms/UserForm/UserForm';
import Button from '../components/atoms/Button/Button';
import './FormPage.css';

export default function EditarUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '', nombre: '', email: '', rol: 'USER' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getUsuario(id)
      .then((u) => setForm({ username: u.username, password: '', nombre: u.nombre, email: u.email, rol: u.rol }))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      await updateUsuario(id, form);
      navigate('/usuarios');
    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  }

  if (loading) return <div className="form-page"><p>Cargando...</p></div>;

  return (
    <div className="form-page">
      <div className="form-page-header">
        <h1>Editar Usuario</h1>
        <Button variant="secondary" onClick={() => navigate('/usuarios')}>← Volver</Button>
      </div>
      <UserForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/usuarios')}
        error={error}
        loading={saving}
        isEdit={true}
      />
    </div>
  );
}
