import React, { useState } from 'react';
import './Main.scss';
import dai from '../../dai.png'

const Main = ({daiTokenBalance, dappTokenBalance, stakingBalance, stakeTokens, unstakeTokens}) => {

    const [inputStake, setInputStake] = useState('');

    const handleInputChange = (event) => {
        setInputStake(event.currentTarget.value);
    }
    
    const handleStaking = () => {
        stakeTokens(window.web3.utils.toWei(inputStake.toString(), 'Ether'))
    }
  
    return (
        <div className="container">        
            <div className="content">                               
                    <p>Staking Balance</p>
                    <p>Reward Balance</p>        
            </div>
            <div className="content">                               
                    <p>{window.web3.utils.fromWei(stakingBalance, 'Ether')} mDAI</p>
                    <p>{window.web3.utils.fromWei(dappTokenBalance, 'Ether')} DAPP</p>        
            </div>     
            <div className="card">
                <div className="input-label">
                    <strong>Stake Tokens</strong>
                    <p>Balance: {window.web3.utils.fromWei(daiTokenBalance, 'Ether')}</p>
                </div>
                <div className="stake-input">
                    <input onChange={handleInputChange}/>
                    <div className="dai-symbol">
                        <img src={dai} alt="" />
                        <p>mDAI</p>
                    </div>
                </div>
                <div className="stake-btn" onClick={handleStaking}>                
                    <p>STAKE</p>                
                </div>
                <div className="unstake-btn" onClick={unstakeTokens}>                
                    <p>UNSTAKE</p>                
                </div>
            </div>   
        </div>
    );  
}

export default Main;
