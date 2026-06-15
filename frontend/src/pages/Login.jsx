import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import LoginForm from '../components/organisms/LoginForm/LoginForm';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  async function handleLogin(username, password) {
    const user = await login(username, password);
    localStorage.setItem('usuario', JSON.stringify(user));
    navigate('/usuarios');
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Sistema de Usuarios</h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}
