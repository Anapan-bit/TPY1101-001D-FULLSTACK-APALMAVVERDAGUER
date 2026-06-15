const BASE = 'http://localhost:8080/api';

export async function login(username, password) {
  const res = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (res.status === 401) throw new Error('Credenciales incorrectas');
  if (!res.ok) throw new Error('Error al iniciar sesión');
  return res.json();
}

export async function getUsuarios() {
  const res = await fetch(`${BASE}/usuarios`);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

export async function getUsuario(id) {
  const res = await fetch(`${BASE}/usuarios/${id}`);
  if (res.status === 404) throw new Error('Usuario no encontrado');
  if (!res.ok) throw new Error('Error al obtener usuario');
  return res.json();
}

export async function createUsuario(data) {
  const res = await fetch(`${BASE}/usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (res.status === 400) throw new Error('La contraseña es obligatoria');
  if (res.status === 409) throw new Error('El nombre de usuario ya existe');
  if (!res.ok) throw new Error('Error al crear usuario');
  return res.json();
}

export async function updateUsuario(id, data) {
  const res = await fetch(`${BASE}/usuarios/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (res.status === 404) throw new Error('Usuario no encontrado');
  if (!res.ok) throw new Error('Error al actualizar usuario');
  return res.json();
}

export async function deleteUsuario(id) {
  const res = await fetch(`${BASE}/usuarios/${id}`, { method: 'DELETE' });
  if (res.status === 404) throw new Error('Usuario no encontrado');
  if (!res.ok) throw new Error('Error al eliminar usuario');
}
