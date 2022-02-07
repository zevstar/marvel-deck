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
import Favorites from './pages/Favorites';
//components
import Nav from './components/Nav';

const App = () => {
	// const user = useContext(UserContext)
	// console.log(user)

const [user, setUser] = useState('')
const [marvelList, setMarvelList] = useState([])
const [favorites, setFavorites] = useState([])

const [characters, setCharacters] = useState([])
	const apiKey = '338c499bfe7e07137ffb35480e17f40f'
	const hash = '092e64fa15d51070c8f625a052723958'



// const fetchMarvel = async () => {

//   try {
//     const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`)
// 	setCharacters(response.data.data.results)
//     console.log(response.data.data.results)

//   } catch(error) {
//     console.log(error)
//   }

// }

useEffect(() =>{
	// try{
	// 	fetchMarvel()
	// } catch(error) {
	// 	console.log(error)
	// }
	const fetchMarvel = async () => {
	
		  try {
		    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=${apiKey}&hash=${hash}`)
			setCharacters(response.data.data.results)

		    setMarvelList(response.data.data.results)
		
		  } catch(error) {
		    console.log(error)
		  }
		
		}
		fetchMarvel()
}, [])

	console.log('marvelList', marvelList)

	const addToFavorites = (marvel) => {
		console.log('we added', marvel)
		setFavorites([...favorites, marvel])
	}




	return (
		<div className='App'>
			{/* <UserContext.Provider value={user}> */}
				<Nav />
				{/* <MarvelList /> */}

		<Routes>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='/' element ={<Home />} />
          <Route path='marvel/list' element={
		  	<MarvelList
				marvelList={marvelList}
				itemsPerPage={8}
				addToFavorites={addToFavorites}
				/>
				} />
			<Route path='favorites'	elements={
				<Favorites
				favorites={favorites}
				/>
				} />
        </Routes>
			{/* </UserContext.Provider> */}

			{/* <Login /> */}
		</div>
	);
}

export default App;