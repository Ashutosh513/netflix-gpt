import React from 'react';
import { MAIN_BG } from '../utils/constants';
import GPTSearchBar from './GPTSearchBar';

const GPTSearchPage = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img className='fixed' src={MAIN_BG} alt='Movies' />
            </div>
            <GPTSearchBar />
        </div>
    );
};

export default GPTSearchPage;
