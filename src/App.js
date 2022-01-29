import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
// css
import './App.css';
//contexts
import UserContext from './contexts/UserContext.js';
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import MarvelList from './pages/MarvelList';
//components
import Nav from './components/Nav';

const App = () => {
	// const user = useContext(UserContext)
	// console.log(user)

const [user, setUser] = useState('')

const fetchMarvel = async () => {
  try {
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&apikey=338c499bfe7e07137ffb35480e17f40f')

    console.log(response)

  } catch(error) {
    console.log(error)
  }

}

useEffect()

	return (
		<div className='App'>
			<UserContext.Provider value={user}>
				<Nav />

				<Routes>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='/' element ={<Home />} />
          <Route path='marvel/list' element={<MarvelList />} />
        </Routes>
			</UserContext.Provider>

			{/* <Login /> */}
		</div>
	);
}

export default App;
