import banner from "../../assets/banner.png";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h1 className="text-dark-1 text-[clamp(32px,6vw,80px)] font-extrabold lg:leading-100px w-full max-w-[570px]">
            One Step Closer To Your{" "}
            <span className="bg-btn-grad bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="mt-6 font-medium text-lg text-dark-3 leading-30px max-w-[519px]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="mt-8">
            <Button>Get Started</Button>
          </div>
        </div>
        <div>
          <img
            className="max-w-full h-auto bg-bottom"
            src={banner}
            alt="banner-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
