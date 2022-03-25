import "./styles.css";

function Button({ children, backgroundColor, borderRadius, padding }) {
  return (
    <button
      className="button-container"
      style={{
        backgroundColor,
        borderRadius,
        padding,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
