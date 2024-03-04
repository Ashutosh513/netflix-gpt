import React from 'react';
import Header from './Header';

const Login = () => {
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='Movies'
                    className='object-cover'
                />
            </div>
            <form className='absolute w-3/12 p-5 bg-black mx-auto my-36 left-0 right-0 '>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='p-2 m-2'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='p-2 m-2'
                />
                <button className='p-4 m-4 bg-white'>Submit</button>
            </form>
        </div>
    );
};

export default Login;
