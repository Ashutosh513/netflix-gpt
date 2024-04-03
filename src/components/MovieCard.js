import React from 'react';

const MovieCard = ({ poster }) => {
    return (
        <div className='w-36 pr-6'>
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster}.jpg`}
                alt='movie'
            />
        </div>
    );
};

export default MovieCard;
