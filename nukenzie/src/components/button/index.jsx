const Button = ({ className, children, type, btt }) => (
    <button className={`button-${className} ${btt}`} type={type}>
      {children}
    </button>
  );
  
  export default Button;