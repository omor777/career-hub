import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import useJobsData from "../../Hooks/useJobsData";
import PropTypes from "prop-types";

const Statistics = () => {
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [fullTimeJobs, setFullTimeJobs] = useState([]);
  const { allJobs } = useJobsData();

  useEffect(() => {
    const remote = allJobs.filter((job) => {
      return job.remote_or_fulltime.toLowerCase() === "remote";
    });
    setRemoteJobs(remote);

    const fullTime = allJobs.filter((job) => {
      return job.remote_or_fulltime.toLowerCase() === "full-time";
    });
    setFullTimeJobs(fullTime);
  }, [allJobs]);

  // console.log(allJobs);

  const data = [
    { name: "Remote Jobs", value: remoteJobs.length },
    { name: "Full-Time Jobs", value: fullTimeJobs.length },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white px-4 rounded">
          <p className="label">{`${payload[0].value} : ${payload[0].value} Jobs`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container mx-auto min-h-[calc(100vh-653px-8rem)]">
      <div className="w-full h-[60vh]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={160}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Statistics;
