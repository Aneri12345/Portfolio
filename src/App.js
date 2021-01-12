import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Main from './Components/Main';
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

