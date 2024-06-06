import styles from "./Input.module.css";
function Input({ type, text, name, placeholder, hendleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={hendleOnChange} value={value}/>
    </div>
  );
}
export default Input;
