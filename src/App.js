import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Main_L from './Components/Main_L';
import Routes from './Components/Routes';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
  );
}

export default App;

