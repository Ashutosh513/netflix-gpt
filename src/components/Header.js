import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = ({ isSignInForm, setIsSignInForm }) => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                alert('Something Went Wrong, try Again!');
            });
    };

    return (
        <div
            className={`absolute px-6 py-2 z-10 w-full  flex justify-between ${
                user
                    ? 'bg-gradient-to-b from-red-600'
                    : 'bg-gradient-to-b from-black'
            }`}
        >
            <img
                className={`w-48 ${user ? 'cursor-pointer' : ''}`}
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo'
                onClick={() => user && navigate('/browse')}
            />

            {user && (
                <div className='flex items-center text-white'>
                    <p>Welcome, {auth.currentUser.displayName}!</p>
                    <button
                        className='bg-red-700 text-white h-12 px-4 py-2
            my-auto mx-8 rounded-md shadow-md hover:bg-red-600 transition duration-300'
                        onClick={handleSingOut}
                    >
                        <span>Sign Out</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
