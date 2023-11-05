import { PoppinsFont } from "@/app/layout";

const theme = {
  colors: {
    primary: "#4C9AFF",
    secondary: "#027AFF",
    disabled: "#EDEDED",
    dividers: "#D0D0D0",
  },
  textColors: {
    pageHeadings: "#172B4D",
    sectionHeadings: "#323C47",
    inputLabels: "#6B778C",
  },
  fonts: {
    primary: PoppinsFont.style.fontFamily,
  },
};

export type ThemeType = typeof theme;

export default theme;
