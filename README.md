# Defi DApp
- Create a defi DApp that will issue tokens to the investors.

## Project Goals
- Create a WebSite with ReactJS. It will be talk directly with the blockchain.
- Create smart contracts that will handle the backend.
    - These smart contracts will allow us to stake tokens on the application and also reward users with new tokens as an interest in using the app.

## Dependencies
- NodeJS
- ReactJS
- Ganache
- Truffle
- MetaMask

## Frontend
- We'll use a create-react-app bootstrap to create our frontend structure.
- Then we can personalize it.

## Blockchain
- This DApp will be created on ethereum environment using tools and libraries like:
- ganache;
- web3js;
- truffle;

## Smart contracts
- We'll start our structure to develop the smart contracts using truffle bootstrap.
- To do it we need to run:
```
truffle init
```
- For that we'll need the truffle installed in your machine.

## Contract 1 - mDai Token
We will create a Mock Dai Token. The example gonna use this token like example because it is a stable criptocurrency. So it is very usefull on defi environment because its price doesn't change.
Another important Dai characterist is that it is a ERC20 token.

## Contract 2 - Dapp Token
We'll create a fake token to rewards users that investing on our app.

## Contract 3 - Token Farm
It'll be like a digital bank. Investors can transfer mDai for the farm and be rewarded with Dapp Tokens.

## Rewards
So a client can invest on our app with Mock Dai Tokens and if the investor have mDai in the moment that the contract owner run the rewards script it will be rewarded.

# Project result
![image](https://user-images.githubusercontent.com/73957838/117741906-e7359480-b1d9-11eb-9bc3-09ebc8e13980.png)

# References
This project is based on this video from Dapp University: https://www.youtube.com/watch?v=CgXQC4dbGUE&t=1103s
