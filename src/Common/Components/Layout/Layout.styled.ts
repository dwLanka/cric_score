import styled from "styled-components";

export const MainWrapper = styled.section<any>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-left: ${({ theme }) => theme.sizes.asideWidth};
`;

export const InnerLayout = styled.section<any>`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  main {
    flex: 1;
    /* padding-top: ${({ theme }) => theme.sizes.headerHeight}; */
  }
`;
