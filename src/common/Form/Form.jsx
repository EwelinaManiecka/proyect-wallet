export const Form = ({
  value,
  handleChange,
  handleInputSubmit,
  handleFormSubmit,
  name,
  type,
  placeholder,
  children,
  classNameInput,
  classNameForm,
  inputPattern,
  inputRequired,
}) => {
  return (
    <form className={classNameForm} onSubmit={handleFormSubmit}>
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
      {children}
    </form>
  );
};
