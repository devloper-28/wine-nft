import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";

import LOGO from "../assets/images/logo192.png";

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;

const NETWORK_URLS = {
  1: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  3: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
};

const POLLING_INTERVAL = process.env.REACT_APP_POLLING_INTERVAL;

const RPC_URLS = {
  1: process.env.REACT_APP_RPC_URL_1,
  80001: `https://polygon-mumbai.g.alchemy.com/v2/k8eQGQDtTk8X8EyDrhxrQHeMsTXzVoUk`,
  // 137: `https://rpc-mainnet.matic.network`,
  3: process.env.REACT_APP_RPC_URL_3,
};

// Add different connectors
export const injected = new InjectedConnector({
  supportedChainIds: [1,3,80001], // Change according to supported Network Ids
});

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
  supportedChainIds: [1,3,80001]
});

export const walletLink = new WalletLinkConnector({
  url: NETWORK_URLS[3], // Change according to supported Network Id
  appName: "NFT Boilerplate",
  appLogoUrl: LOGO,
});

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.REACT_APP_FORTMATIC_API_KEY,
  chainId: 3,
});
