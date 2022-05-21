import "§/styles/globals.css";

import type { AppProps } from "next/app";
import withDarkMode from "next-dark-mode";

import { Theme } from "§/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

const MyAppWithDarkMode = withDarkMode(MyApp);

export default MyAppWithDarkMode;
