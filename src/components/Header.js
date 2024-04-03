import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleSingOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                alert('Something Went Wrong, try Again!');
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div
            className={`absolute pl-6  py-2 z-10 w-full  flex justify-between  bg-gradient-to-b from-black`}
        >
            <img
                className={`w-48 ${user ? 'cursor-pointer' : ''}`}
                src={LOGO}
                alt='logo'
                onClick={() => user && navigate('/browse')}
            />

            {user && (
                <div className='flex items-center justify-end text-white'>
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
