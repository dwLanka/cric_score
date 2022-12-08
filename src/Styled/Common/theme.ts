
const theme = {
  colors: {
    primary: {
      0: "hsl(196, 39%, 0%)",
      10: "hsl(196, 39%, 11%)", // on primary container
      20: "hsl(196, 39%, 18%)",
      30: "hsl(196, 39%, 25%)",
      40: "hsl(196, 39%, 32%)", // primary
      50: "hsl(196, 39%, 39%)",
      60: "hsl(196, 39%, 46%)",
      70: "hsl(196, 39%, 53%)",
      80: "hsl(196, 39%, 60%)",
      90: "hsl(196, 39%, 67%)", // primary container
      95: "hsl(196, 39%, 74%)",
      99: "hsl(196, 39%, 81%)",
      100: "hsl(196, 39%, 100%)", // on primary
    },
    secondary: {
      0: "hsl(191, 33%, 0%)",
      10: "hsl(191, 33%, 16%)",
      20: "hsl(191, 33%, 24%)",
      30: "hsl(191, 33%, 42%)",
      40: "hsl(191, 33%, 52%)",
      50: "hsl(191, 33%, 62%)",
      60: "hsl(191, 33%, 72%)",
      70: "hsl(191, 33%, 82%)",
      80: "hsl(191, 33%, 92%)",
      90: "hsl(191, 33%, 95%)",
      99: "hsl(191, 33%, 97%)",
      100: "hsl(191, 33%, 100%)",
    },
    tertiary: {
      0: "hsl(19, 66%, 0%)",
      10: "hsl(19, 66%, 20%)",
      30: "hsl(19, 66%, 54%)",
      40: "hsl(19, 66%, 67%)",
      90: "hsl(19, 66%, 85%)",
      99: "hsl(19, 66%, 90%)",
      100: "hsl(19, 66%, 100%)",
    },
    gray: {
      0: "hsl(0, 0%, 0%)",
      10: "hsl(0, 0%, 60%)",
      30: "hsl(0, 0%, 80%)",
      40: "hsl(0, 0%, 93%)",
      90: "hsl(0, 0%, 99%)",
      100: "hsl(0, 0%, 100%)",
    },
    error: "hsl(0, 67%, 50%)",
    black: "#000",
    white: "#fff",
  },
  fontFamily: {
    primary: "Roboto, sans-serif",
    secondary: "Source Sans Pro, sans-serif",
  },
  fontSize: {
    h1: "48px",
    h2: "34px",
    h3: "24px",
    title: {
      sm: "16px",
      default: "18px",
      lg: "24px",
    },
    body: {
      sm: "12px",
      default: "14px",
      lg: "16px",
    },
    button: {
      sm: "12px",
      default: "14px",
      lg: "16px",
    },
    caption: "11px",
    small: "9px",
  },
  lineHeight: (fs: any, h: any) => (h / fs).toFixed(2),
  space: {
    px: "1px",
    0: 0,
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    11: "44px",
    12: "48px",
  },
  sizes: {
    asideWidth: "54px",
    headerHeight: "48px",
  },
  rounded: {
    xs: "2px",
    sm: "4px",
    default: "8px",
    lg: "12px",
    full: "999px",
  },
  letterSpacing: {
    0: "0px",
    1: "0.075rem",
  },
  animate: {
    primary: "all ease-in-out 0.4s",
  },
  shadow: {
    button: "0px 1px 2px 0px rgb(0 0 0 / 20%)",
    toolbar: "0px 1px 3px 1px rgb(0 0 0 / 7%)",
  },
};

export default theme;
