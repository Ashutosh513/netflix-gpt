import React from 'react';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from '../utils/constants';
import { useState } from 'react';

const GPTSearchBar = () => {
    const current_ISO = useSelector((store) => store.lang.currentLang);
    const searchText = useRef(null);
    const [message, setMessage] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const genAI = new GoogleGenerativeAI(API_KEY);

    const handleGPTSearchClick = async () => {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const prompt =
            searchText.current.value +
            `please ans in this language ISO code and ISO code is ${current_ISO} `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const lines = text.split('\n');
        setMessage(lines);
        setShowMessage(true);
        //     messages: [{ role: 'user', content: searchText.current.value }],
        //     model: 'gpt-3.5-turbo',
        // });

        // console.log(chatCompletion);
    };

    const closeGPTSearchResult = () => {
        setMessage([]);
        setShowMessage(false);
        searchText.current.value = '';
    };

    return (
        <div>
            <div
                className={`${showMessage ? 'pt-[6%]' : 'pt-[12%]'}  flex justify-center justify-items-center`}
            >
                <form
                    className='w-1/2 grid grid-cols-12 text-lg'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        ref={searchText}
                        type='text'
                        placeholder={lang[current_ISO].gptSearchPlaceholder}
                        className='bg-white text-black px-7 py-3 rounded-l-md col-span-9 hover:bg-gray-100'
                    />
                    <button
                        className='px-7 py-3 rounded-r-md bg-red-700 text-white col-span-3 hover:bg-red-600'
                        onClick={handleGPTSearchClick}
                    >
                        {lang[current_ISO].search}
                    </button>
                </form>
            </div>
            <div
                className={` max-h-screen mt-4 w-3/5 mx-auto rounded-3xl bg-red-700 text-white overflow-y-scroll relative ${showMessage ? '' : 'hidden'}`}
            >
                {' '}
                <div
                    className='absolute right-5 top-5 text-xl cursor-pointer'
                    onClick={closeGPTSearchResult}
                >
                    <p>X</p>
                </div>
                <div className='py-5 px-[7%]'>
                    {message.map((line, index) => {
                        if (line.startsWith('**')) {
                            return (
                                <React.Fragment key={index}>
                                    <br />
                                    <br />
                                    <p
                                        className={`${index === 0 ? 'text-center text-2xl' : 'text-xl'}`}
                                    >
                                        {line.replaceAll('*', ' ')}
                                    </p>
                                    <br />
                                </React.Fragment>
                            );
                        } else if (line.startsWith('*')) {
                            return (
                                <React.Fragment key={index}>
                                    <p>{line.replaceAll('*', ' ')}</p>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <React.Fragment key={index}>
                                    <p>{line.replaceAll('*', ' ')}</p>
                                </React.Fragment>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default GPTSearchBar;
