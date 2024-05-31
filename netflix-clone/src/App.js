import './App.css';
import './css/reset.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detail' element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
