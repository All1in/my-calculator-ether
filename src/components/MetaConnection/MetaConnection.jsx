import { AccountContext } from '../../context/AccountContext';
import { useContext, useState } from 'react'
import { Typography, Button } from 'antd'
import { ethers } from 'ethers'
import './MetaConnection.css'

const { Title } = Typography;

const MetaConnection = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    // const [defaultAccount, setDefaultAccount] = useState('no address specified')
    const [userBalance, setUserBalance] = useState('no money on balance')
    // const [connButtonText, setConnButtonText] = useState('Connect Wallet')
    const { defaultAccount, setDefaultAccount } = useContext(AccountContext)

    console.log('====================================');
    console.log('defaultAccount', defaultAccount);
    console.log('====================================');
    
    const accountChangedHandler = newAccount => {
        setDefaultAccount(newAccount)
        getUserBalance(newAccount.toString())
    }

    const connectWallethandler = () => {
        if(window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})  
                  .then((result) => {
                     accountChangedHandler(result[0])  
                  })  
        } else {
            setErrorMessage('Install MetaMask');
        }    
    }


    const getUserBalance = address => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
              .then((balance) => {
                  setUserBalance(ethers.utils.formatEther(balance))
              })
    }

    const chainChangedHandler = () => window.location.reload();

    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);


    return (
        <div 
            className='metamask-container'
        >
            <Title level={2}>Connect your MetaMask</Title>
            
            <Button 
                type='primary'
                onClick={connectWallethandler}
            >
                Connect Wallet
            </Button>

            <Title style={{ marginTop: '20px' }} level={3}>Address: { defaultAccount }</Title>
            <Title level={3}>Balance: { userBalance }</Title>
        </div>
    );
}

export default MetaConnection