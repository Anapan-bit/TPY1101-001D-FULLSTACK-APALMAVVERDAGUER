import './FormField.css';

export default function FormField({ label, hint, children, ...inputProps }) {
  const { name, type = 'text', value, onChange, required, placeholder, options } = inputProps;

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {hint && <span className="hint"> {hint}</span>}
      </label>
      {options ? (
        <select id={name} name={name} value={value} onChange={onChange}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
