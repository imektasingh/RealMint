import './App.css';
import Fetch from './components/FetchTokenBound/Fetch';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, polygon, scrollTestnet } from 'wagmi/chains';
import { infuraProvider } from '@wagmi/core/providers/infura';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import Header from './components/Header/Header';
import Steps from './components/Steps/Steps';
import Footer from './components/Footer/Footer';
import WalletConnect from './components/WalletConnect/WalletConnect';
import About from './components/About/About';
import { mantleTestnet  } from 'wagmi/chains';

const chains = [ mantleTestnet ]
const projectId = "59198889d7df78b39ea70d871d0ec131";

const { publicClient } = configureChains(
  chains, 
  [ w3mProvider({ projectId }), 
    infuraProvider({ apiKey: '1cd853bc10304f8ba6faa52343f86aac' }),
  
    jsonRpcProvider({
      rpc: (chain) => ({
        http: "https://rpc.testnet.mantle.xyz",
      }),
    }),
  ]
  
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <WalletConnect />
        <Header />
        <About />
        <Steps />
        <Fetch/>
        <Footer />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
