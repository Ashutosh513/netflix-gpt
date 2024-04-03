import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen pt-[15%] px-12 absolute text-white  aspect-video bg-gradient-to-r from-black'>
            <h1 className='text-3xl bold'>{title}</h1>
            <p className='w-1/3 mt-2 mb-4 leading-5'>{overview}</p>
            <div className='flex'>
                <button className='px-7 bg-white text-black rounded-md hover:bg-opacity-80 flex'>
                    <div className='text-3xl py-1 mr-2 '>▷</div>
                    <div className='py-3'>
                        <strong>Play</strong>
                    </div>
                </button>
                <button className='px-7 mx-4 bg-opacity-60 bg-gray-500 text-white rounded-md flex'>
                    <div className='text-3xl py-1 mr-2'>ⓘ</div>
                    <div className='py-3'>More Info</div>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
