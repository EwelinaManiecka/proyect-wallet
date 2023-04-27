const Button = ({
  classNameBtn,
  handleClick,
  type,
  children,
  selected,
  name,
}) => {
  return (
    <button
      className={classNameBtn}
      selected={selected}
      onClick={handleClick}
      type={type}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
