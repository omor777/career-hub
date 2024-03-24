import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Category from "../Category/Category";
import SectionHeading from "../SectionHeading/SectionHeading";

const CategoryLists = () => {
  const [categoryLists, setCategoryLists] = useState([]);
  useEffect(() => {
    fetch("/categoryList.json")
      .then((res) => res.json())
      .then((data) => setCategoryLists(data));
  }, []);
  return (
    <section className="container mx-auto mt-32">
      <div>
        <SectionHeading
          title={"Job Category List"}
          description={
            "Explore thousands of job opportunities with all the information you need. Its your future"
          }
        />
        <div className="grid grid-cols-4 gap-6 mt-8">
          {categoryLists.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLists;
