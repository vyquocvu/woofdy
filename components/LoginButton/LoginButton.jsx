import { tw } from 'twind';
import React, { useContext } from "react";

import MetaMaskContext from "contexts/metamask";

export default function LoginButton() {
  const { web3, accounts, error, awaiting, openMetaMask } = useContext(
    MetaMaskContext,
  );

  function handleButtonClick() {
    // alert(`Web3 (${web3.version}) is enabled`);
  }

  if (error && error.notInstalled) {
    return (
      <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
        Install MetaMask
      </a>
    );
  } else if (error) {
    return (
      <button type="button" onClick={openMetaMask}>
        {error.message}
      </button>
    );
  } else if (!web3 && awaiting) {
    return (
      <button type="button" onClick={openMetaMask}>
        MetaMask loading...
      </button>
    );
  } else if (!web3) {
    return (
      <button type="button" onClick={openMetaMask}>
        Please open and allow MetaMask
      </button>
    );
  } else if (accounts.length === 0) {
    return <button type="button">No Wallet 🦊</button>;
  } else {
    return (
      <button type="button" onClick={handleButtonClick}>
        <div className={tw("ml-3")}>
          <p className={tw("text-base leading-6 font-medium text-white")}>
            <code>{accounts[0].slice(0, 6)}...{accounts[0].slice(38, 42)}</code> 🦊
          </p>
          <p className={tw("text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150")}>
          </p>
        </div>
      </button>
    );
  }
}