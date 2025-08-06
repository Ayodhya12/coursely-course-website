export const Button = ({ children, variant = "primary" }) => {
  const styles = {
    primary: "bg-primary-600 hover:bg-primary-400 text-white",
    secondary: "bg-secondary-800 hover:bg-secondary-400 text-white",
  };

  return (
    <button
      className={`px-6 py-2 rounded-full font-semibold ${styles[variant]}`}
    >
      {children}
    </button>
  );
};
