import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4  bg-dark-1 py-20 mt-32">
      <div className="container flex flex-col justify-between mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex flex-col">
            <h3 className=" text-32px font-extrabold text-white">CareerHub</h3>
            <p className="leading-27px text-white-70 max-w-[18.75rem] mt-5">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <ul className="flex items-center gap-5 mt-5">
              <li className="size-11 cursor-pointer rounded-full bg-white flex items-center justify-center">
                <FaFacebookF className="text-facebook text-2xl" />
              </li>
              <li className="size-11 cursor-pointer rounded-full bg-white flex items-center justify-center">
                <FaTwitter className="text-twitter text-2xl" />
              </li>
              <li className="size-11 cursor-pointer rounded-full bg-white flex items-center justify-center">
                <FaInstagram className="text-red-700 text-2xl" />
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h4 className="text-white text-xl font-semibold">Company</h4>
            <div className="flex flex-col">
              <a className="text-white-70 hover:underline leading-8" href="#">
                About Us
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Work
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Latest News
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Careers
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white text-xl font-semibold">Product</h4>
            <div className="flex flex-col">
              <a className="text-white-70 hover:underline leading-8" href="#">
                Prototype
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Plans & Pricing
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Customers
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Integrations
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white text-xl font-semibold">Support</h4>
            <div className="flex flex-col">
              <a className="text-white-70 hover:underline leading-8" href="#">
                Help Desk
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Sales
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Become a Partner
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                Developers
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white text-xl font-semibold">Contact</h4>
            <div className="flex flex-col">
              <a className="text-white-70 hover:underline leading-8" href="#">
                524 Broadway , NYC
              </a>
              <a className="text-white-70 hover:underline leading-8" href="#">
                +1 777 - 978 - 5570
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex  items-center justify-between pt-12 container mx-auto">
        <p className="text-white-40">@2023 CareerHub. All Rights Reserved</p>
        <p className="font-bold text-white-40">Powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
