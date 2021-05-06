import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import './App.scss'
import Web3 from 'web3';
import DaiToken from '../abis/DaiToken.json';
import DappToken from '../abis/DappToken.json';
import TokenFarm from '../abis/TokenFarm.json';


const App = () => {

  const [account, setAccount] = useState('0x0');
  const [daiToken, setDaiToken] = useState({});
  const [dappToken, setDappToken] = useState({});
  const [tokenFarm, setTokenFarm] = useState({});
  const [daiTokenBalance, setDaiTokenBalance] = useState('0');
  const [dappTokenBalance, setDappTokenBalance] = useState('0');
  const [stakingBalance, setStakingBalance] = useState('0');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, [])

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    
    if(account.length > 0){
      setAccount(accounts[0]);
    }

    const networkId = await web3.eth.net.getId();
    
    // Load Dai Token
    const daiTokenData = DaiToken.networks[networkId];
    if(daiTokenData){      
      const daiToken = new web3.eth.Contract(DaiToken.abi, daiTokenData.address);      
      setDaiToken(daiToken);
      let daiTokenBalance = await daiToken.methods.balanceOf(accounts[0]).call();
      setDaiTokenBalance(daiTokenBalance.toString());      
    }else{
      window.alert("Dai Token contract not deployed to detected network");
    }

    // Load Dapp Token
    const dappTokenData = DappToken.networks[networkId];
    if(dappTokenData){      
      const dappToken = new web3.eth.Contract(DappToken.abi, dappTokenData.address);      
      setDappToken(dappToken);
      let dappTokenBalance = await dappToken.methods.balanceOf(accounts[0]).call();
      setDappTokenBalance(dappTokenBalance.toString());          
    }else{
      window.alert("Dapp Token contract not deployed to detected network");
    }

    // Load Token Farm
    const tokenFarmData = TokenFarm.networks[networkId];
    if(tokenFarmData){      
      const tokenFarm = new web3.eth.Contract(TokenFarm.abi, tokenFarmData.address);      
      setTokenFarm(tokenFarm);
      let stakingBalance = await tokenFarm.methods.stakingBalance(accounts[0]).call();
      setStakingBalance(stakingBalance.toString());    
      console.log(stakingBalance)  ;
    }else{
      window.alert("Dapp Token contract not deployed to detected network");
    }

    setLoading(false);
  }

  const loadWeb3 = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable()
    } else if(window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying Metamask!");
    }
  }
  
  return (
    <div>
      <Navbar account={account} />
      <div className="container">        
        <main role="main" className="main" style={{ maxWidth: '600px' }}>
          <div className="content">              

            <h1 data-testid="content-title">Hello, World!</h1>

          </div>
        </main>        
      </div>
    </div>
  );
  
}

export default App;
