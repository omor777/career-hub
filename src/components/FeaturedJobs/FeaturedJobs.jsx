import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import Button from "../Button/Button";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobsData.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
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

        <div className="grid grid-cols-2 gap-6 mt-8">
          {jobs.map((job) => (
            <FeaturedJob key={job.id} job={job} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button>See All Jobs</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;

/**
 * texla image: https://i.postimg.cc/qMnPWXJS/tesla-9-1.png
 * google image: https://i.postimg.cc/kG87j0Yh/google-1-1-1.png
 * netflix : https://i.postimg.cc/jSyJW9sc/netflix-4-1.png
 *
 * airbnn : https://i.postimg.cc/jdMRM4MT/airbnb-logo-belo-1-1.png
 *
 */
