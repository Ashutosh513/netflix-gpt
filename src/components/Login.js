import React from 'react';
import Header from './Header';
import { useRef, useEffect, useState } from 'react';
import Footer from './Footer';

const Login = () => {
    let knowMore = false;
    let showBtn;
    let [showOrHidePassword, setShowOrHidePassword] = useState('SHOW');
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                event.target !== showBtn
            ) {
                showBtn?.classList.add('hidden');
                inputRef.current.type = 'password';
                inputRef.current.classList.add('rounded-r-sm');
                setShowOrHidePassword('SHOW');
            }
        };

        const handleClickInside = (event) => {
            if (inputRef.current && inputRef.current.contains(event.target)) {
                inputRef.current.classList.remove('rounded-r-sm');
                showBtn?.classList.remove('hidden');
            }
        };

        window.addEventListener('click', handleClickOutside);
        inputRef.current.addEventListener('click', handleClickInside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
            inputRef.current.removeEventListener('click', handleClickInside);
        };
    }, []);

    return (
        <div>
            <Header />
            <div>
                <form className='absolute w-[400px] p-14 mt-24 text-white bg-opacity-80 rounded-md bg-black mx-auto left-0 right-0 text-basic'>
                    <h1 className='text-3xl font-medium mb-8'>Sign In</h1>
                    <input
                        type='text'
                        placeholder='Email or phone number'
                        className='py-3 px-4 mb-4 w-full rounded-sm border-none bg-gray-600 text-black outline-none'
                        onChange={(e) => {
                            e.target.value.length > 0
                                ? e.target.classList.add('bg-slate-200')
                                : e.target.classList.remove('bg-slate-200');
                        }}
                    />
                    <div className='flex'>
                        <input
                            type={
                                showOrHidePassword === 'SHOW'
                                    ? 'password'
                                    : 'text'
                            }
                            placeholder='Password'
                            ref={inputRef}
                            onChange={(e) => {
                                e.target.value.length > 0
                                    ? e.target.classList.add('bg-slate-200')
                                    : e.target.classList.remove('bg-slate-200');
                            }}
                            className='py-3 px-4 mb-4 w-full rounded-l-sm rounded-r-sm border-none bg-gray-600 text-black outline-none'
                            onClick={(e) => {
                                showBtn = e.target.nextElementSibling;
                                showBtn.classList.remove('hidden');
                            }}
                        />
                        <div
                            className='h-12 w-20 text-sm text-gray-300 bg-gray-600 rounded-r-sm cursor-pointer font-thin flex justify-center items-center hidden'
                            onClick={() => {
                                showOrHidePassword =
                                    showOrHidePassword === 'SHOW'
                                        ? setShowOrHidePassword('HIDE')
                                        : setShowOrHidePassword('SHOW');
                            }}
                        >
                            {showOrHidePassword}
                        </div>
                    </div>
                    <button className='p-3 mt-5 w-full rounded-md border-none bg-red-600 text-white font-semibold'>
                        Sign In
                    </button>
                    <label className='flex items-center my-2 text-gray-300'>
                        <input type='checkbox' />
                        <span className='text-xs mx-1 w-'>Remember me</span>
                        <a
                            href='https://help.netflix.com/en/'
                            className='text-xs ml-auto hover:underline'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Need help?
                        </a>
                    </label>
                    <div className='mt-14'>
                        <div className='text-gray-500 text-sm '>
                            New to Netflix?{' '}
                            <span className='text-white cursor-pointer hover:underline font-semibold'>
                                {' '}
                                Sign up now
                            </span>
                            .
                        </div>
                        <p className='my-4 text-xs text-gray-400'>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot.{' '}
                            <span
                                className=' text-blue-400 cursor-pointer hover:underline'
                                onClick={(e) => {
                                    e.target.classList.add('hidden');
                                    e.target.parentNode.nextElementSibling.classList.remove(
                                        'hidden'
                                    );
                                }}
                            >
                                Learn more.
                            </span>
                        </p>
                        <p
                            className={`text-xs text-gray-400 ${
                                knowMore ? '' : 'hidden'
                            }`}
                        >
                            The information collected by Google reCAPTCHA is
                            subject to the Google{' '}
                            <a
                                href='https://policies.google.com/privacy'
                                target='_blank'
                                rel='noreferrer'
                                className='text-blue-400 hover:underline'
                            >
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a
                                href='https://policies.google.com/terms'
                                target='_blank'
                                rel='noreferrer'
                                className='text-blue-400 hover:underline'
                            >
                                Terms of Service
                            </a>
                            , and is used for providing, maintaining, and
                            improving the reCAPTCHA service and for general
                            security purposes (it is not used for personalised
                            advertising by Google).
                        </p>
                    </div>
                </form>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='Movies'
                    className='object-cover'
                />
            </div>
            <Footer />
        </div>
    );
};

export default Login;
