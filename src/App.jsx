import MetaConnection from './components/MetaConnection/MetaConnection';
import CalculatorComponent from './components/CalculatorComponent/CalculatorComponent';
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import { Layout } from 'antd';
import { AccountContext } from './context/AccountContext';
import { contractAddress, contractABI } from './helpers/addresses'
import './styles/App.css';


const App = () => {
  const [defaultAccount, setDefaultAccount] = useState('no address specified')
  const [usageOnCount, setUsageOnCount] = useState(null)

  // const INFURA_ID = ''
  const provider = new ethers.providers.JsonRpcProvider();
  const contract = new ethers.Contract(contractAddress, contractABI, provider)

  const main = async () => {
    const usageCount = await contract.usageCount()
    setUsageOnCount(usageCount)
  } 

  useEffect(() => {
    main()
  }, []);

  // console.log('usageCount', usageCount);

  return (
    <Layout>
      <AccountContext.Provider 
          value = {{ 
            defaultAccount, 
            setDefaultAccount,
            usageOnCount
          }}
      >
        <MetaConnection />
        <CalculatorComponent />
      </AccountContext.Provider>
    </Layout>
  );
}

export default App;
