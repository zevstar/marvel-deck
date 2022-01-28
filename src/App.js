// css
import './App.css';

// pages
import './pages/Home';
import './pages/Login';
//components
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
     
      <Nav />
      {/* <Login /> */}
    </div>
  );
}

export default App;
