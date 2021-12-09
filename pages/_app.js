import MetaMaskContext from "contexts/metamask";

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskContext.Provider immediate value={null}>
      <Component {...pageProps} />
    </MetaMaskContext.Provider>
  )
}

export default MyApp