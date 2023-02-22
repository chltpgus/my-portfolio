import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import GlobalStyle from "@/styles/global-styles";
import ChannelTalk from "@/components/ChannelTalk";
import Nav from "@/components/Nav";
const Providers = dynamic(() => import("@/components/Providers"), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChannelTalk />
      <Providers>
        <Nav />
        <GlobalStyle />
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default App;
