import FormField from '../../molecules/FormField/FormField';
import ErrorMessage from '../../molecules/ErrorMessage/ErrorMessage';
import Button from '../../atoms/Button/Button';
import './UserForm.css';

const ROL_OPTIONS = [
  { value: 'USER', label: 'USER' },
  { value: 'ADMIN', label: 'ADMIN' },
];

export default function UserForm({ form, onChange, onSubmit, onCancel, error, loading, isEdit }) {
  return (
    <div className="user-form-card">
      <form onSubmit={onSubmit}>
        <FormField label="Usuario" name="username" value={form.username} onChange={onChange} required />
        <FormField
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          required={!isEdit}
          placeholder={isEdit ? '••••••••' : ''}
          hint={isEdit ? '(dejar vacío para no cambiar)' : ''}
        />
        <FormField label="Nombre" name="nombre" value={form.nombre} onChange={onChange} required />
        <FormField label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <FormField label="Rol" name="rol" value={form.rol} onChange={onChange} options={ROL_OPTIONS} />
        <ErrorMessage message={error} />
        <div className="user-form-actions">
          <Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Crear usuario'}
          </Button>
        </div>
      </form>
    </div>
  );
}
