import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { configureChains, WagmiConfig, createClient } from "wagmi";
import { polygon, polygonMumbai, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { Layout } from "../src/components/layout/Layout";
import theme from "../src/theme";

const { provider, webSocketProvider } = configureChains(
  [mainnet, polygon, polygonMumbai],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <WagmiConfig client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WagmiConfig>
    </ChakraProvider>
  );
}
