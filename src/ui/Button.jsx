import { Link } from "react-router-dom";

const base =
  "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 ";

const styles = {
  primary: base + " px-4 py-3  md:px-6 md:py-4",
  small: base + " px-4 py-2  md:px-5 md:py-2.5 text-xs",
  secondry:
    "inline-block text-sm rounded-full border-2 border-stone-300 bg-transparent font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-400 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 px-4 py-2.5 md:px-6 md:py-3.5  ",
  round: base + " px-2.5 py-1  md:px-3.5 md:py-2 text-sm",
};

function Button({ children, disabled, to, type, onClick }) {
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
