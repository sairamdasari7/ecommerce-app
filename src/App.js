import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import ThankyouPage from './components/ThankyouPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/thankyou" element={<ThankyouPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;