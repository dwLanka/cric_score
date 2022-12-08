import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { createTournament } from "@/firebase/api/tournaments";

import Button from "@/Common/Components/UI/Button";
import Icon from "@/Common/Components/Icon";
import { Container } from "@/Styled/Common/Container.styled";

const Dashboard = () => {
  // const queryInfo = useQuery("list", () =>
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.data)
  // );

  // console.log(queryInfo);

  // createTournament()
  // .then((res) => {
  //   console.log("dashed", res);
  // })
  // .catch((e) => {
  //   console.log("dashed", e);
  // });

  return (
    <Container>
      <Button>Save</Button>
      <br />
      <br />
      <Button variant="primary">Save</Button>
      <br />
      <br />
      <Button variant="secondary">Save</Button>
      <br />
      <br />
      <Button variant="tertiary">Save</Button>

      <Icon
        name="react"
        options={{ width: 100, height: 100, fill: "yellow", stroke: "red" }}
      />
    </Container>
  );
};

export default Dashboard;
