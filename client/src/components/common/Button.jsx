import { Link } from "react-router-dom";

const Button = ({
  variant = "secondary",
  click,
  children,
  icon,
  link,
  className,
}) => {
  const variants = {
    primary:
      "bg-gray-800 font-semibold text-gray-50 border cursor-pointer hover:opacity-75 h-7 px-2",
    secondary:
      "border-gray-200 border font-semibold cursor-pointer hover:bg-gray-50 h-7 px-2",
    ghost: "cursor-pointer hover:bg-gray-50",
    link: "bg-none border-none hover:opacity-90",
    icon: "border-gray-200 border cursor-pointer hover:bg-gray-50 h-7 w-7",
  };

  const baseStyles =
    "h-6 px-1 flex items-center text-xs gap-1 justify-center rounded-md ";

  const classes = `${baseStyles} ${className}  ${
    variants[variant] || variants.primary
  }`;

  return link ? (
    <Link to={link} className={classes}>
      {icon && icon} {children}
    </Link>
  ) : (
    <button className={classes} onClick={click}>
      {icon && icon} {children}
    </button>
  );
};

export default Button;
