const Category = ({ category }) => {
  const { image, title, description } = category;
  return (
    <div className="bg-bg-grad p-10 rounded-lg">
      <img className="bg-bg-grad-2 p-4 rounded-lg" src={image} />
      <h3 className="mt-8 text-xl font-extrabold text-dark-2">{title}</h3>
      <p className="mt-2 font-medium text-dark-4">{description}</p>
    </div>
  );
};

export default Category;
