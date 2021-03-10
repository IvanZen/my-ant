import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers"
import { useWeb3React } from '@web3-react/core'
import { SWRConfig } from "swr";

import logo from './logo.svg';
import './static/css/App.css';
import Pages from './pages/'

function App() {
  const getLibrary = (provider, _connector) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  }

  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Pages />
      </Web3ReactProvider>
    </div>
  );
}

export default App;
