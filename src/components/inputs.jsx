import styles from '../styles/input.module.css';

export default function Input({ iconURL, iconDescription, type = 'text', placeholder, required, value, onChange }) {
  return (
    <div className={`${styles.input} flex`}>
      <img 
        src={iconURL} 
        alt={iconDescription}
      />

      <input 
        type={type} 
        placeholder={placeholder} 
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}