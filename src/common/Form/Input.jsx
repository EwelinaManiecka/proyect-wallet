export const Input = ({
  value,
  handleChange,
  handleInputSubmit,
  name,
  type,
  placeholder,
  classNameInput,
  inputPattern,
  inputRequired,
}) => {
  return (
    <input
      pattern={inputPattern}
      className={classNameInput}
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
