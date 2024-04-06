import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FormDisclaimer from './FormDisclaimer';
import { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { MAIN_BG } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();

    const [showOrHidePassword, setShowOrHidePassword] = useState('SHOW');
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    let knowMore = false;
    let showBtn = useRef('SHOW');
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

        if (message) return;

        if (isSignInForm) {
            //  Sign In
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {})
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(
                        errorCode === 'auth/invalid-credential'
                            ? 'Wrong Email or Password'
                            : errorMessage
                    );
                });
        } else {
            // Sign Up
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value,
                    })
                        .then(() => {
                            const { uid, email, displayName } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                })
                            );
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(
                        errorCode === 'auth/email-already-in-use'
                            ? 'Email already in use. Please sign in or use a different email.'
                            : errorMessage
                    );
                });
        }
    };

    const toggleSignInForm = () => {
        showBtn.current.classList.add('hidden');
        setShowOrHidePassword('SHOW');
        setIsSignInForm(!isSignInForm);
        setErrorMessage('');
        fullName.current.value = '';
        email.current.value = '';
        password.current.value = '';
        fullName.current.classList.remove('bg-slate-200');
        email.current.classList.remove('bg-slate-200');
        password.current.classList.remove('bg-slate-200');
    };

    return (
        <div>
            <Header />
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

                                if (showBtn) {
                                    e.target?.value?.length > 0
                                        ? showBtn.current?.classList.remove(
                                              'hidden'
                                          )
                                        : showBtn.current?.classList.add(
                                              'hidden'
                                          );
                                }
                            }}
                            className='py-3 px-4 mb-4 w-full rounded-l-sm rounded-r-sm border-none bg-gray-600 text-black outline-none'
                            onClick={(e) => {
                                showBtn = e.target.nextElementSibling;
                            }}
                        />
                        <div
                            ref={showBtn}
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
                <img src={MAIN_BG} alt='Movies' className='object-cover' />
            </div>
            <Footer />
        </div>
    );
};

export default Login;
