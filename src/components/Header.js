import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { LANG_ISO } from '../utils/languageConstants';
import { changeLanguage } from '../utils/languageSlice';

const Header = () => {
    const user = useSelector((store) => store.user);
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
    const navigate = useNavigate();
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

    const handleGPTSearchClick = () => {
        dispatch(toggleGPTSearchView());
    };

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        dispatch(changeLanguage(newLang));
    };

    return (
        <div
            className={`absolute pl-6  py-2 z-20 w-full  flex justify-between  bg-gradient-to-b from-black`}
        >
            <img
                className={`w-48 ${user ? 'cursor-pointer' : ''}`}
                src={LOGO}
                alt='logo'
                onClick={() => user && navigate('/browse')}
            />

            {user && (
                <div className='flex items-center justify-end text-white'>
                    {showGPTSearch ? (
                        <select
                            className='text-black p-[10px] rounded-md cursor-pointer'
                            onClick={handleLanguageChange}
                        >
                            {LANG_ISO.map((lang) => (
                                <option key={lang.ISO} value={lang.ISO}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <p className='mr-4'>
                            Welcome, {auth.currentUser.displayName}!
                        </p>
                    )}
                    <button
                        className={`bg-white py-2 mx-3 rounded-md text-black hover:bg-slate-100 transition duration-300 flex ${showGPTSearch ? 'px-3' : 'pr-3'}`}
                        onClick={handleGPTSearchClick}
                    >
                        {!showGPTSearch && (
                            <img
                                src='https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png'
                                alt='GPT'
                                className='w-10'
                            />
                        )}
                        {showGPTSearch ? 'Back To Movies' : 'GPT Search'}
                    </button>
                    <button
                        className='px-4 py-2 mr-8 rounded-md shadow-md hover:bg-red-600 transition duration-300 bg-red-700'
                        onClick={handleSingOut}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
