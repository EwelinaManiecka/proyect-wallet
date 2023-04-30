export const Input = ({
  value,
  handleChange,
  handleInputSubmit,
  name,
  type,
  placeholder,
  classNameInput,
  idInput,
  inputPattern,
  inputRequired,
}) => {
  return (
    <input
      pattern={inputPattern}
      className={classNameInput}
      id={idInput}
      type={type}
      name={name}
      onSubmit={handleInputSubmit}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      required={inputRequired}
    />
  );
};
