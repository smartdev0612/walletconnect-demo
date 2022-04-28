import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import { useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
 walletconnect: {
   package: WalletConnect, 
   options: {
     infuraId: "infura_project_id" 
   }
 }
};

const web3Modal = new Web3Modal({
  providerOptions // required
});

function App() {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      window.web3 = new Web3(provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
       <button onClick={connectWallet}>Connect Wallet</button>  
    </div>
  );
}

export default App;
