const Button = ({ children = "Star Applying" }) => {
  return (
    <div>
      <button className="btn btn-lg bg-btn-grad text-white font-extrabold text-xl">
        {children}
      </button>
    </div>
  );
};

export default Button;
