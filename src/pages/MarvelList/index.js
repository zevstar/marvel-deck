//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=338c499bfe7e07137ffb35480e17f40f&hash=092e64fa15d51070c8f625a052723958

// import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const MarvelList = ({ marvelList, itemsPerPage }) => {
   

 // We start with an empty list of marvelList.
 const [currentItems, setCurrentItems] = useState(null);
 const [pageCount, setPageCount] = useState(0);
 // Here we use item offsets; we could also use page offsets
 // following the API or data you're working with.
 const [itemOffset, setItemOffset] = useState(0);

	console.log('props', marvelList);
	//   const [characters, setCharacters] = useState([])
	//   const apiKey = '338c499bfe7e07137ffb35480e17f40f'
	//   const hash = '092e64fa15d51070c8f625a052723958'

	//   const getCharacters = () => {
	//     axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`)
	//     .then(response => console.log('data',response))
	//     .catch(err => console.log(err))
	//   }

	  useEffect(() => {

      // Fetch marvelList from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading marvelList from ${itemOffset} to ${endOffset}`);
    setCurrentItems(marvelList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(marvelList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const Items = ({ currentItems }) => {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }



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

			<Items currentItems={currentItems} />
			<ReactPaginate
				breakLabel='...'
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default MarvelList;
