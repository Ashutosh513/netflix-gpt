import React from 'react';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
    const current_ISO = useSelector((store) => store.lang.currentLang);

    return (
        <div className='pt-[12%] flex justify-center justify-items-center'>
            <form className='w-1/2 grid grid-cols-12 text-lg'>
                <input
                    type='text'
                    placeholder={lang[current_ISO].gptSearchPlaceholder}
                    className='bg-white text-black px-7 py-3 rounded-l-md col-span-9 hover:bg-gray-100'
                />
                <button className='px-7 py-3 rounded-r-md bg-red-700 text-white col-span-3 hover:bg-red-600'>
                    {lang[current_ISO].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;
