import MetaConnection from './components/MetaConnection/MetaConnection';
import CalculatorComponent from './components/CalculatorComponent/CalculatorComponent';
import { useState, useEffect } from 'react'
import { Layout } from 'antd';
import { AccountContext } from './context/AccountContext';
// import Web3 from 'web3';
import './styles/App.css';


const App = () => {
  const [defaultAccount, setDefaultAccount] = useState('no address specified')
  const [usageCount, setUsageCount] = useState(null)

  
  
  useEffect(() => {
    
  }, []);

  console.log('data', usageCount);

  return (
    <Layout>
      <AccountContext.Provider 
          value = {{ 
            defaultAccount, 
            setDefaultAccount,
            usageCount
          }}
      >
        <MetaConnection />
        <CalculatorComponent />
      </AccountContext.Provider>
    </Layout>
  );
}

export default App;
