import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import { Global } from "styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
