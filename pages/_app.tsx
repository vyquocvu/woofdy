import "../styles/globals.css";

import Web3 from "web3";
import { provider } from "web3-core";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Web3ReactProvider } from "@web3-react/core";

import Layout from "../components/Layout/Layout";

function getLibrary(pv: provider): Web3 {
  return new Web3(pv);
}

function MyApp({ Component }: AppProps) {
  return (
    <NextUIProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component />
        </Layout>
      </Web3ReactProvider>
    </NextUIProvider>
  );
}

export default MyApp;
