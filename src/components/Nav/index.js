// https://gateway.marvel.com:443/v1/public/characters?name=Thor&apikey=338c499bfe7e07137ffb35480e17f40f

import axios from 'axios';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';


const Nav = () => {
	const [userInput, setUserInput] = useState('')

	const user = useContext(UserContext);
	console.log('Nav', user);


	const fetchMarvel = async () => {
	
		try {
		//   const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`)
		const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${userInput}&apikey=338c499bfe7e07137ffb35480e17f40f`)
		//   setCharacters(response.data.data.results)
		  console.log(response)
	  
		} catch(error) {
		  console.log(error)
		}
	  
	  }


	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Marvel-O-Pedia
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link
								className='nav-link active'
								aria-current='page'
								to='marvel/characters'
							>
								Marvel Characters
							</Link>
						</li>

						{!user ? (
							<li className='nav-item'>
								<Link className='nav-link' to='login'>
									Login
								</Link>
							</li>
						) : (
							<li className='nav-item'>
								<Link className='nav-link' to='favorites'>
									Favorites
								</Link>
							</li>
						)}

						<li className='nav-item dropdown'>
							<Link
								className='nav-link dropdown-toggle'
								to='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Dropdown
							</Link>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<Link className='dropdown-item' to='#'>
										Search by character
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='#'>
										Search by comic
									</Link>
								</li>
								{/* <li><hr className="dropdown-divider"> </hr></li> */}
								<li>
									<Link className='dropdown-item' to='#'>
										Search by artist
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<form className='d-flex' >
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
							onChange={(e) => {
								return setUserInput(e.target.value)
							}}
							value={ userInput }
						/>
						<button className='btn btn-outline-success' type='submit'
						 onClick={(e) => {
							 e.preventDefault()
							
							 console.log('Nav', userInput)
							 return fetchMarvel()
						 }}>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
