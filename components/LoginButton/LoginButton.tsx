import { useWeb3React } from "@web3-react/core";
import { Button, Grid } from "@nextui-org/react";

import { injected } from "../Wallet/Connectors";

export default function LoginButton() {
  const { active, account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <Grid.Container alignItems="center">
      {!account && (
        <Button onClick={connect} size="sm">
          Connect to MetaMask
        </Button>
      )}
      {active ? (
        <span>
          Connected with{" "}
          <b>
            {account?.slice(0, 6)}...{account?.slice(38, 42)}
          </b>
        </span>
      ) : (
        <span>Not connected</span>
      )}
      {account && (
        <Button size="sm" onClick={disconnect}>
          Disconnect
        </Button>
      )}
    </Grid.Container>
  );
}
