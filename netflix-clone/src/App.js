import './App.css';
import './css/reset.css';
import Nav from './Components/Nav';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Banner />
      </div>
    </div>
  );
}

export default App;
