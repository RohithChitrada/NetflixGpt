import Body from './components/Body'
import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStote';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
      <Body/>
      </Provider> 
    </div>
  );
}

export default App;
