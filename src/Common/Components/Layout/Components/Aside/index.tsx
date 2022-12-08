import React from "react";
import { StyledAside } from "./styled";

export interface IProps {}

const Aside = (props: IProps) => {
  return (
    <StyledAside>
      <div className="start">
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>

      <div className="end"></div>
    </StyledAside>
  );
};

export default Aside;
