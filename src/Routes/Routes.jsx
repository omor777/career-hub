import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Statistics from "../Pages/Statistics/Statistics";
import Blog from "../Pages/Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: () => fetch("/jobsData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
