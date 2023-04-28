export const Form = ({
  handleFormSubmit,
  children,
  classNameForm,
}) => {
  return (
    <form className={classNameForm} onSubmit={handleFormSubmit}>
      {children}
    </form>
  );
};
