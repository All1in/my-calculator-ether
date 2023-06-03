import MetaConnection from './components/MetaConnection/MetaConnection';
import { useState } from 'react'
import { Layout } from 'antd';
import { AccountContext } from './context/AccountContext';
import './styles/App.css';


const App = () => {
  const [defaultAccount, setDefaultAccount] = useState('no address specified')

  return (
    <Layout>
      <AccountContext.Provider 
          value = {{ 
            defaultAccount, 
            setDefaultAccount 
          }}
      >
        <MetaConnection />
      </AccountContext.Provider>
    </Layout>
  );
}

export default App;
