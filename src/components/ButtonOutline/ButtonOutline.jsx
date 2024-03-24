const ButtonOutline = ({ children }) => {
  return (
    <div>
      <button className="border py-[9px] px-[19px] font-extrabold  bg-btn-grad bg-clip-text text-transparent rounded border-indigo-500">
        {children}
      </button>
    </div>
  );
};

export default ButtonOutline;
