import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendar } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../../components/Button/Button";

const JobDetails = () => {
  const [jobData, setJobData] = useState({});
  const jobs = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const singleJob = jobs && jobs.find((job) => job.id == id);
    setJobData(singleJob);
  }, [id, jobs]);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary_range,
    phone_number,
    email,
    address,
  } = jobData;
  console.log(jobData);
  return (
    <section className=" container mx-auto min-h-[calc(100vh-653px-8rem)] mt-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="space-y-6 col-span-8">
          <p className="font-medium text-dark-3 leading-8">
            <span className="text-dark-1 font-extrabold">Job Description:</span>{" "}
            {job_description}
          </p>
          <p className="font-medium text-dark-3 leading-8">
            <span className="text-dark-1 font-extrabold">
              Job Responsibility:
            </span>{" "}
            {job_responsibility}
          </p>
          <div className="flex flex-col gap-4">
            <span className="text-dark-1 font-extrabold">
              Educational Requirements:
            </span>{" "}
            <p className="font-medium text-dark-3 leading-8">
              {educational_requirements}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-dark-1 font-extrabold">Experiences:</span>{" "}
            <p className="font-medium text-dark-3 leading-8">{experiences}</p>
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="p-8 rounded-lg bg-bg-grad-2">
            <h3 className="text-xl font-extrabold text-dark-1">Job Details</h3>
            <div className="divider"></div>
            <div>
              <p className="flex flex-wrap items-center">
                <AiOutlineDollar className="mr-2 text-2xl text-indigo-400" />
                <b className="mr-1">Salary:</b> <span>{salary_range}</span>{" "}
                (Per-Month)
              </p>
              <p className="flex flex-wrap items-center mt-4">
                <IoCalendar className="mr-2 text-2xl text-indigo-400" />
                <b className="mr-1">Job Title:</b> <span>{salary_range}</span>{" "}
                (Per-Month)
              </p>
            </div>
            <h3 className="text-xl font-extrabold text-dark-1 mt-8">
              Contact Information
            </h3>
            <div className="divider"></div>
            <div>
              <p className="flex flex-wrap items-center">
                <BsTelephone className="mr-2 text-2xl text-indigo-400" />
                <b className="mr-1">Phone:</b> <span>{phone_number}</span>
              </p>
              <p className="flex flex-wrap items-center mt-4">
                <HiOutlineMail className="mr-2 text-2xl text-indigo-400" />
                <b className="mr-1">Email:</b> <span>{email}</span>
              </p>
              <p className="flex flex-wrap items-center mt-4">
                <IoLocationOutline className="mr-2 text-2xl text-indigo-400" />
                <b className="mr-1">Address:</b> <span>{address}</span>
              </p>
            </div>
          </div>
          <div className="mt-6 w-full">
            <Button full={true} className="btn bg-btn-grad">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
