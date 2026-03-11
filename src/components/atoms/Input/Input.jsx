import styles from './Input.module.css';

const Input = ({ label, type = 'text', placeholder }) => {
  return (
    <div className={styles.inputWrapper}>
      {/* Якщо label передали, то відображаємо його */}
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;