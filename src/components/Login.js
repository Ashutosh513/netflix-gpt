import React from 'react';
import Header from './Header';
import { useRef, useEffect, useState } from 'react';
import Footer from './Footer';
import { checkValidData } from '../utils/validate';
import FormDisclaimer from './FormDisclaimer';

const Login = () => {
    const [showOrHidePassword, setShowOrHidePassword] = useState('SHOW');
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    let knowMore = false;
    let showBtn;
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(
            fullName.current.value,
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                password.current &&
                !password.current.contains(event.target) &&
                event.target !== showBtn
            ) {
                showBtn?.classList.add('hidden');
                password.current.type = 'password';
                password.current.classList.add('rounded-r-sm');
                setShowOrHidePassword('SHOW');
            }
        };

        const handleClickInside = (event) => {
            if (password.current && password.current.contains(event.target)) {
                password.current.classList.remove('rounded-r-sm');
                showBtn?.classList.remove('hidden');
            }
        };

        window.addEventListener('click', handleClickOutside);
        password.current.addEventListener('click', handleClickInside);
    }, []);

    return (
        <div>
            <Header
                isSignInForm={isSignInForm}
                setIsSignInForm={setIsSignInForm}
            />
            <div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className='absolute w-[400px] p-14 mt-24 text-white bg-opacity-80 rounded-md bg-black mx-auto left-0 right-0 text-basic'
                >
                    <h1 className='text-3xl font-medium mb-8'>
                        Sign {isSignInForm ? 'In' : 'Up'}
                    </h1>
                    <input
                        ref={fullName}
                        type='text'
                        placeholder='Full Name'
                        className={`py-3 px-4 mb-4 w-full rounded-sm border-none bg-gray-600 text-black outline-none ${
                            isSignInForm ? 'hidden' : ''
                        }`}
                        onChange={(e) => {
                            e.target.value.length > 0
                                ? e.target.classList.add('bg-slate-200')
                                : e.target.classList.remove('bg-slate-200');
                        }}
                    />
                    <input
                        ref={email}
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
                            ref={password}
                            type={
                                showOrHidePassword === 'SHOW'
                                    ? 'password'
                                    : 'text'
                            }
                            placeholder='Password'
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
                                showOrHidePassword === 'SHOW'
                                    ? setShowOrHidePassword('HIDE')
                                    : setShowOrHidePassword('SHOW');
                            }}
                        >
                            {showOrHidePassword}
                        </div>
                    </div>
                    <p className='text-red-500 text-sm'>{errorMessage}</p>
                    <button
                        className='p-3 mt-5 w-full rounded-md border-none bg-red-600 text-white font-semibold'
                        onClick={handleButtonClick}
                    >
                        Sign {isSignInForm ? 'In' : 'Up'}
                    </button>
                    <label className='flex items-center my-2 text-gray-300'>
                        <div className={`${isSignInForm ? '' : 'hidden'}`}>
                            <input type='checkbox' />
                            <span className='text-xs mx-1'>Remember me</span>
                        </div>
                        <a
                            href='https://help.netflix.com/en/'
                            className='text-xs ml-auto hover:underline'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Need help?
                        </a>
                    </label>

                    <FormDisclaimer
                        isSignInForm={isSignInForm}
                        toggleSignInForm={toggleSignInForm}
                        knowMore={knowMore}
                    />
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
