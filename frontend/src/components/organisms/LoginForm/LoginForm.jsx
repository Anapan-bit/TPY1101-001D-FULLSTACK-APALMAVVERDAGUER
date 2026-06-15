import { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage';
import Button from '../../atoms/Button/Button';
import './LoginForm.css';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await onLogin(username, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <FormField
        label="Usuario"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <FormField
        label="Contraseña"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <ErrorMessage message={error} />
      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </Button>
    </form>
  );
}
