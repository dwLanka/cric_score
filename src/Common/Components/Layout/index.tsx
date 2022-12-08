import React from "react";
import Aside from "./Components/Aside";
import Toolbar from "./Components/Toolbar";
import { InnerLayout, MainWrapper } from "./Layout.styled";


interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <MainWrapper>
      <Aside />
      <InnerLayout>
        <Toolbar />
        <main>{children}</main>
      </InnerLayout>
    </MainWrapper>
  );
};

export default Layout;
