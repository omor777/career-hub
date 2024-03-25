import ButtonOutline from "../ButtonOutline/ButtonOutline";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import Button from "../Button/Button";

const AppliedJob = ({ job }) => {
  const { image, company_name, location, job_title, salary_range } = job;
  return (
    <div className="p-7 rounded-lg grid grid-cols-[auto_1fr] gap-6 items-center border border-dark-6 ">
      <div className="bg-dark-7 rounded-lg size-[244px] flex items-center justify-center">
        <img className="" src={image} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-2xl font-extrabold text-dark-2">{job_title}</h4>
          <p className="text-2xl font-semibold text-dark-3 mt-2">
            {company_name}
          </p>
          <div className="flex items-center flex-wrap gap-4 mt-4">
            <ButtonOutline>Remote</ButtonOutline>
            <ButtonOutline>Full Time</ButtonOutline>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="flex items-center gap-2">
              <IoLocationOutline className="text-2xl text-indigo-500" />
              <span>{location}</span>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineDollar className="text-2xl text-indigo-500" />
              <span>Salary: {salary_range}</span>
            </p>
          </div>
        </div>
        <Button>View Details</Button>
      </div>
    </div>
  );
};

export default AppliedJob;
