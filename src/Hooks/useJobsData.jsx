import { useEffect, useState } from "react";

const useJobsData = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetch("/jobsData.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  return { allJobs };
};

export default useJobsData;
