import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import {
  metaMaskWallet,
  walletConnectWallet,
  coinbaseWallet,
  phantomWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';

// Define Monad networks
export const monadTestnet = {
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Monad',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.monad.xyz'],
    },
    public: {
      http: ['https://testnet-rpc.monad.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monad Testnet Explorer',
      url: 'https://testnet.monad.xyz',
    },
  },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: 'MonadDAO',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'demo-project-id',
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        phantomWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
    {
      groupName: 'More',
      wallets: [
        trustWallet,
        ledgerWallet,
      ],
    },
  ],
  chains: [
    monadTestnet,
  ],
  ssr: true,
});