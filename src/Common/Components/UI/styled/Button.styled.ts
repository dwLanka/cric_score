import styled, { css } from "styled-components";

const primaryBtnCss = css`
  background-color: ${({ theme }) => theme.colors.primary["40"]};
  color: ${({ theme }) => theme.colors.primary["100"]};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary["99"]};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.primary["30"]};
  }
`;

const secondaryBtnCss = css`
  background-color: ${({ theme }) => theme.colors.secondary["40"]};
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary["99"]};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.secondary["50"]};
  }
`;

const tertiaryBtnCss = css`
  background-color: ${({ theme }) => theme.colors.tertiary["40"]};
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tertiary["99"]};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.tertiary["30"]};
  }
`;

export const StyledButton = styled.button<any>`
  cursor: pointer;
  text-align: center;
  line-height: 1.2;
  border-radius: ${({ theme }) => theme.rounded.sm};
  transition: ${({ theme }) => theme.animate.primary};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : null};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  letter-spacing: ${({ theme }) => theme.letterSpacing["1"]};
  box-shadow: ${({ theme }) => theme.shadow.button};

  /* Button Sizes */
  ${({ size, theme }) => {
    switch (size) {
      case "sm": {
        return `
          padding: 6px 12px;
          font-size: ${theme.fontSize.button.sm};
        `;
      }

      case "lg": {
        return `
          padding: 12px 24px;
          font-size: ${theme.fontSize.button.lg};
        `;
      }

      default:
        return `
          padding: 8px 16px;
          font-size: ${theme.fontSize.button.default};
        `;
    }
  }}

  /* variants */
  ${({ variant, theme }) => {
    switch (variant) {
      case "primary": {
        return primaryBtnCss;
      }

      case "secondary": {
        return secondaryBtnCss;
      }

      case "tertiary": {
        return tertiaryBtnCss;
      }

      default:
        return `
            background-color: ${theme.colors.gray["400"]};
            color: ${theme.colors.primary["400"]};
            box-shadow:none;
        `;
    }
  }}
`;
