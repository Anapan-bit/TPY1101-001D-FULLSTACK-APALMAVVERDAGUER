import './Badge.css';

export default function Badge({ rol }) {
  return (
    <span className={`badge badge-${rol.toLowerCase()}`}>{rol}</span>
  );
}
