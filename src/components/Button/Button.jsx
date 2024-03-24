const Button = ({ children = "Star Applying",full }) => {
  return (
    <div>
      <button
        className={`btn btn-lg bg-btn-grad text-white font-extrabold text-xl ${full && 'w-full'}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
