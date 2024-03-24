import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
const Navbar = () => {
  return (
    <nav className="container mx-auto py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-32px text-dark-1 font-extrabold">CareerHub</h3>
        <ul className="flex items-center gap-10">
          <NavLink className={"text-dark-3 font-medium"}>Statistics</NavLink>
          <NavLink className={"text-dark-3 font-medium"}>Applied Jobs</NavLink>
          <NavLink className={"text-dark-3 font-medium"}>Blog</NavLink>
        </ul>
        <Button>Start Applying</Button>
      </div>
    </nav>
  );
};

export default Navbar;
