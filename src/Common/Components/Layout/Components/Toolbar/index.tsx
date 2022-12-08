import { StyledToolbar } from "./Toolbar.styled";

export interface IProps {}

const Toolbar = (props: IProps) => {
  return (
    <StyledToolbar>
      <div className="start"></div>
      <div className="center"></div>
      <div className="end"></div>
    </StyledToolbar>
  );
};

export default Toolbar;
