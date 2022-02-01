// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=338c499bfe7e07137ffb35480e17f40f&hash=092e64fa15d51070c8f625a052723958

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

const [characters, setCharacters] = useState([])
	const apiKey = '338c499bfe7e07137ffb35480e17f40f'
	const hash = '092e64fa15d51070c8f625a052723958'



const fetchMarvel = async () => {
	
  


  try {
    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`)

    console.log(response)

  } catch(error) {
    console.log(error)
  }

}

useEffect(() =>{
	try{
		fetchMarvel()
	} catch(error) {
		console.log(error)
	}
	
})

	return (
		<div className='App'>
			{/* <UserContext.Provider value={user}> */}
				<Nav />
				{/* <MarvelList /> */}

				<Routes>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='/' element ={<Home />} />
          <Route path='marvel/list' element={<MarvelList />} />
        </Routes>
			{/* </UserContext.Provider> */}

			{/* <Login /> */}
		</div>
	);
}

export default App;