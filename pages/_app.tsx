import "../styles/reset.css";
import "../styles/bootstrap.min.css";
import "../styles/color.css";
import "../styles/globals.css";
import "../styles/animations.css";

import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";
import AppLayout from "common/components/AppLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default App;
