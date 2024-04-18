import './App.css';
import './css/reset.css';
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Home />
      </div>
    </div>
  );
}

export default App;
