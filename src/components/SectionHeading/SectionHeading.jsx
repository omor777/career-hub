const SectionHeading = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-dark-1 text-center text-5xl font-extrabold">
        {title}
      </h2>
      <p
        className="text-dark-3
       font-medium leading-26px mt-4 text-center"
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
