import styles from "./Select.module.css";
function Select({ text, name, options, hendleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select bame={name} id={name}>
        <option>Selecione uma Opção </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}
export default Select