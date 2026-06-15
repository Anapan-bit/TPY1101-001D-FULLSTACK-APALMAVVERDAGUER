import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUsuario } from '../api';
import UserForm from '../components/organisms/UserForm/UserForm';
import Button from '../components/atoms/Button/Button';
import './FormPage.css';

const INICIAL = { username: '', password: '', nombre: '', email: '', rol: 'USER' };

export default function CrearUsuario() {
  const [form, setForm] = useState(INICIAL);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await createUsuario(form);
      navigate('/usuarios');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="form-page">
      <div className="form-page-header">
        <h1>Crear Usuario</h1>
        <Button variant="secondary" onClick={() => navigate('/usuarios')}>← Volver</Button>
      </div>
      <UserForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/usuarios')}
        error={error}
        loading={loading}
        isEdit={false}
      />
    </div>
  );
}
