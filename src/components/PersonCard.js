import React from 'react';

const PersonCard = ({ person }) => {
    return (
        <div className='text-xs w-[120px] pr-3'>
            <img
                src={'https://image.tmdb.org/t/p/w500/' + person.profile_path}
                alt='Avatar'
                className='w-20 h-28 rounded-md object-cover bg-slate-300'
            ></img>
            <p className='mt-2'>{person.original_name}</p>
            <p>{person.character}</p>
        </div>
    );
};

export default PersonCard;
