import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
// css
import './App.css';
//contexts
import UserContext from './contexts/UserContext.js';
// pages
import './pages/Home';
import Login from './pages/Login';
//components
import Nav from './components/Nav';

function App() {
	// const user = useContext(UserContext)
	// console.log(user)
	return (
		<div className='App'>
			<UserContext.Provider value={'filler'}>
				<Nav />

				<Routes>
          <Route path='login' element={<Login />} />
          {/* <Route path='home' element ={<Home />} /> */}
        </Routes>
			</UserContext.Provider>

			{/* <Login /> */}
		</div>
	);
}

export default App;
