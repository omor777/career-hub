import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
const Navbar = () => {
  return (
    <nav className="container mx-auto py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-32px text-dark-1 font-extrabold">CareerHub</h3>
        <ul className="flex items-center gap-10">
          <NavLink
            to={"/statistics"}
            className={({ isActive, isPending }) =>
              isActive
                ? "font-bold bg-btn-grad bg-clip-text text-transparent"
                : isPending
                ? "pending"
                : "text-dark-3 font-medium"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/applied-jobs"}
            className={({ isActive, isPending }) =>
              isActive
                ? "font-bold bg-btn-grad bg-clip-text text-transparent"
                : isPending
                ? "pending"
                : "text-dark-3 font-medium"
            }
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive, isPending }) =>
              isActive
                ? "font-bold bg-btn-grad bg-clip-text text-transparent"
                : isPending
                ? "pending"
                : "text-dark-3 font-medium"
            }
          >
            Blog
          </NavLink>
        </ul>
        <Button>Start Applying</Button>
      </div>
    </nav>
  );
};

export default Navbar;
