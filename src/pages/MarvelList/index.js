//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=338c499bfe7e07137ffb35480e17f40f&hash=092e64fa15d51070c8f625a052723958

import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import './styles.css';

const imgURL = `http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73`;

const MarvelList = ({ marvelList, itemsPerPage }) => {
	// We start with an empty list of marvelList.
	const [currentMarvel, setCurrentMarvel] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);

	console.log('props', marvelList);
	//   const [characters, setCharacters] = useState([])
	const apiKey = '338c499bfe7e07137ffb35480e17f40f';
	const hash = '092e64fa15d51070c8f625a052723958';

	const getCharacters = async () => {
		const response = await axios.get(
			`https://gateway.marvel.com:443/v1/public/characters?apikey=338c499bfe7e07137ffb35480e17f40f`
		);
		// axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`)
		// .then(response => console.log('data',response))
		console.log(response.data.data.results).catch((err) => console.log(err));
	};

	useEffect(() => {
		try {
			// Fetch marvelList from another resources.
			const endOffset = itemOffset + itemsPerPage;
			console.log(`Loading marvelList from ${itemOffset} to ${endOffset}`);

			const marvelURLs = [];

			for (let i = itemOffset; i < endOffset; i++) {
				console.log(i);
				marvelURLs.push(
					`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}/${i}`
				);
			}

			console.log('urls', marvelURLs);

			console.log(
				'testURL',
				`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}/0`
			);

			// marvelList[7]

			currPageMarvel(marvelURLs);

			// setCurrentMarvel(marvelList.slice(itemOffset, endOffset));
			// if(currentMarvel) currPageMarvel()
			setPageCount(Math.ceil(marvelList.length / itemsPerPage));
		} catch (error) {
			console.log(error);
		}

		// console.log(marvel.url);
	}, [itemOffset, itemsPerPage]);

	const currPageMarvel = (marvelURLs) => {
		//forEach isn't working because currentMarvel doesn't have any data
		//in line 32 figure out whether MarvelList has data (console log)
		//where is MarvelList coming from?

		try {
			const marvelArr = [];

			axios.all(
				marvelURLs.map(async (url) => {
					const response = await axios.get(url);
					console.log('response axios', response.data.data.results);
					marvelArr.push(response.data);

					console.log('Marvel Array', marvelArr);
				})
			);
		} catch (error) {
			// console.log(marvel.urls)
		}
	};

	const Marvel = () => {
		return (
			<div>
				{marvelList &&
					marvelList.map((marvel) => (
						<div>
							<div>
								<div className='card'>
									<img
										className='card-img-top'
										src={`${marvel.thumbnail.path}/portrait_xlarge.jpg`}
										alt='Card image'
									/>
									<div className='card-body'>
										<h5 className='card-title'>{marvel.name} </h5>
										<p className='card-text'>{marvel.description}</p>
									</div>
									<ul className='list-group list-group-flush'>
										<li className='list-group-item'>{marvel.name}</li>
										<li className='list-group-item'>{marvel.name}</li>
										<li className='list-group-item'>Data provided by Marvel. © 2014 Marvel</li>
									</ul>
									<div className='card-body'>
										<a href='#' className='card-link'>
											Card link
										</a>
										<a href='#' className='card-link'>
											Another link
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				{/* <h3>{marvel.name}</h3>
					<h3>{marvel.description}</h3> */}
			</div>
		);
	};

	//     try{
	//       getCharacters()
	//     } catch(error){
	//       console.log(error)
	//     }
	//   }, [])

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % marvelList.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<div>
			{/* MARVEL LIST 
          {
            marvelList.map(marvelList => <li>{marvelList.name}</li>)
          } */}

			<Marvel />
			<ReactPaginate
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				previousLabel='< previous'
				pageClassName='page-item'
				pageLinkClassName='page-link'
				previousClassName='page-item'
				previousLinkClassName='page-link'
				nextClassName='page-item'
				nextLinkClassName='page-link'
				breakLabel='...'
				breakClassName='page-item'
				breakLinkClassName='page-link'
				containerClassName='pagination'
				activeClassName='active'
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default MarvelList;
