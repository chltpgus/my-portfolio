import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import GlobalStyle from "@/styles/global-styles";
const Providers = dynamic(() => import("@/components/Providers"), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <GlobalStyle />
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
