import React from 'react';

const Favorites = ({ favorites }) => {
    return (
        <div id='marvel-container'>
        {favorites &&
            favorites.map(marvel => (
                <div>
                    <div>
                        <div className='card marvel-card'key={marvel.id}>
                            <img
                                className='card-img-top'
                                src={`${marvel.thumbnail.path}/portrait_medium.jpg`}
                                alt='Card image'
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>{marvel.name} </h5>
                                <p className='card-text'>{marvel.description}</p>
                                
                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    Date modified: {marvel.modified}
                                </li>
                                <li className='list-group-item'>{marvel.resourceURI}</li>
                                <li className='list-group-item'>
                                    Data provided by Marvel. © 2014 Marvel
                                </li>
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
}

export default Favorites;

