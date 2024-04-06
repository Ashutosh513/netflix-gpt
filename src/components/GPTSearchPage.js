import React from 'react';
import { MAIN_BG } from '../utils/constants';
import GPTSearchBar from './GPTSearchBar';

const GPTSearchPage = () => {
    return (
        <div className='h-screen'>
            <div className='absolute -z-10'>
                <img src={MAIN_BG} alt='Movies' />
            </div>
            <GPTSearchBar />
        </div>
    );
};

export default GPTSearchPage;
