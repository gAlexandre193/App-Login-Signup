import styles from '../styles/button.module.css';

export default function Button({ type = 'button', onClick, customStyle, children }) {
  return (
    <button
      type={type}
      className={styles.button}
      style={customStyle}
      onClick={onClick}>
      {children}
    </button>
  );
}