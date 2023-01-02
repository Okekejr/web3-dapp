import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { configureChains, WagmiConfig, createClient } from "wagmi";
import { polygon, polygonMumbai, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

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
    <ChakraProvider>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  );
}
