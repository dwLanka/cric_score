import styled from "styled-components";

export const StyledAside = styled.aside<any>`
  width: ${({theme}) => theme.sizes.asideWidth};
  background-color: ${({ theme }) => theme.colors.primary["40"]};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;

  .start {
    flex: 2;
  }

  .end {
    flex: 1;
  }
`;
