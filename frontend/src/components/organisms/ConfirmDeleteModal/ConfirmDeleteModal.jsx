import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import './ConfirmDeleteModal.css';

export default function ConfirmDeleteModal({ username, onConfirm, onCancel }) {
  const [step, setStep] = useState(1);

  function handleCancel() {
    setStep(1);
    onCancel();
  }

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {step === 1 ? (
          <>
            <h2>Eliminar usuario</h2>
            <p>¿Estás seguro de que deseas eliminar al usuario <strong>{username}</strong>?</p>
            <div className="modal-actions">
              <Button variant="secondary" onClick={handleCancel}>Cancelar</Button>
              <Button variant="delete" onClick={() => setStep(2)}>Eliminar</Button>
            </div>
          </>
        ) : (
          <>
            <h2>Confirmar eliminación</h2>
            <p>Esta acción <strong>no se puede deshacer</strong>.</p>
            <p>Confirma nuevamente que deseas eliminar a <strong>{username}</strong> de forma definitiva.</p>
            <div className="modal-actions">
              <Button variant="secondary" onClick={handleCancel}>Cancelar</Button>
              <Button variant="delete" onClick={onConfirm}>Sí, eliminar definitivamente</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
