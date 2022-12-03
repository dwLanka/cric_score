import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Dashboard = () => {
  const queryInfo = useQuery("list", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
  );

  console.log(queryInfo);

  return <div>Dashboard</div>;
};

export default Dashboard;
