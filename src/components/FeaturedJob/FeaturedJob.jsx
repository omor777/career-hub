import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

const FeaturedJob = ({ job }) => {
  const { image, id, company_name, job_title, location, salary_range } = job;
//   console.log(job);
  return (
    <div className="border border-dark-6 rounded-lg p-10">
      <img src={image} />
      <h2 className="text-2xl font-extrabold text-dark-2 mt-8">{job_title}</h2>
      <p className="text-xl font-semibold text-dark-3 mt-2">{company_name}</p>
      <div className="flex items-center gap-4 mt-4">
        <ButtonOutline>Remote</ButtonOutline>
        <ButtonOutline>Full Time</ButtonOutline>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <p>{location}</p>
        <p>Salary: {salary_range}</p>
      </div>
      <div className="mt-6">
        <Link to={`/job-details/${id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;
