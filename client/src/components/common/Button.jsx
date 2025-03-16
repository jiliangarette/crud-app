const Button = ({ variant = "secondary", click, children, icon }) => {
  const variants = {
    primary:
      "border-slate-200 bg-slate-100 border cursor-pointer hover:opacity-75",
    secondary: "border-slate-200 border cursor-pointer hover:bg-slate-50",
    simple: "cursor-pointer hover:bg-slate-50",
  };

  const baseStyles = "h-8 px-2 flex items-center text-sm gap-1 rounded-sm";

  const classes = `${baseStyles}  ${variants[variant] || variants.primary}`;

  return (
    <button className={classes} onClick={click}>
      {icon && icon} {children}
    </button>
  );
};

export default Button;
