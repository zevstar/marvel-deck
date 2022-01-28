import { useContext } from 'react'
// css
import './App.css';
//contexts
import UserContext from './contexts/UserContext.js'
// pages
import './pages/Home';
import './pages/Login';
//components
import Nav from './components/Nav'

function App() {
  // const user = useContext(UserContext)
  // console.log(user)
  return (
    <div className="App">
     <UserContext.Provider value={'filler'}>

        <Nav />

     </UserContext.Provider>

      
      {/* <Login /> */}
    </div>
  );
}

export default App;
