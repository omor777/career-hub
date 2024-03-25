import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../Utils/localStorage";
import AppliedJob from "../../components/AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    const localJobs = getDataFromLocalStorage();

    fetch("/jobsData.json")
      .then((res) => res.json())
      .then((data) => {
        const filterJobs = data.filter((job) =>
          localJobs.includes(String(job.id))
        );
        setJobs(filterJobs);
        setFilterJobs(filterJobs);
      });
  }, []);

  const handleFilterJobs = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "remote") {
      const remoteJobs = jobs.filter((job) => {
        return job.remote_or_fulltime.toLowerCase() === "remote";
      });
      setFilterJobs(remoteJobs);
    } else if (searchValue === "full-time") {
      const fullTimeJobs = jobs.filter((job) => {
        return job.remote_or_fulltime.toLowerCase() === "full-time";
      });
      setFilterJobs(fullTimeJobs);
    } else {
      setFilterJobs(jobs);
    }
  };

  return (
    <section className="container mx-auto min-h-[calc(100vh-653px-8rem)]">
      <div className="mb-8 flex items-center justify-end">
        <select onChange={handleFilterJobs} className="select select-primary ">
          <option value={"all"}>All</option>
          <option value={"remote"}>Remote</option>
          <option value={"full-time"}>Full Time</option>
        </select>
      </div>
      <div className="grid gap-6">
        {filterJobs.map((job) => (
          <AppliedJob job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
};

export default AppliedJobs;
