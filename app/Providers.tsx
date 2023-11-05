"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import GlobalStyles from "@/theme/globalStyles";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <GlobalStyles />
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};

export default Providers;
