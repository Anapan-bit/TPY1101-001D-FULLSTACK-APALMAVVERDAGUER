import Badge from '../../atoms/Badge/Badge';
import Button from '../../atoms/Button/Button';
import './UserTable.css';

export default function UserTable({ usuarios, onEdit, onDelete }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.username}</td>
            <td>{u.nombre}</td>
            <td>{u.email}</td>
            <td><Badge rol={u.rol} /></td>
            <td className="actions">
              <Button variant="edit" onClick={() => onEdit(u.id)}>Editar</Button>
              <Button variant="delete" onClick={() => onDelete(u.id, u.username)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
