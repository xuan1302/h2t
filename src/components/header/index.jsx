import React, { useEffect, useState } from 'react';
import Logo from './logo/Logo';
import Topbar from './topbar/topbar';
import Menu from './mainMenu/Menu';
import Search from './search/Search';
import Account from './account/Account';
import Cart from './cart/Cart';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getMe } from '../../app/userSlice';
// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // ...
};
firebase.initializeApp(config);

// const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'popup',
//     signInSuccessUrl: '/',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         // firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//         // Avoid redirects after sign-in.
//         // signInSuccessWithAuthResult: () => false,
//     },
// };

function Header(props) {

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const dispath = useDispatch();

    // Listen to the Firebase Auth state and set the local state.
    const currentUser = firebase.auth().currentUser;
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            setIsSignedIn(!!user);
            // const currentUser = firebase.auth().currentUser;
            if (currentUser) {
                const tokenItem = await user.getIdToken();
                localStorage.setItem('firebaseui::rememberedAccounts', tokenItem)
            }

            //get me when sign in
            try {
                const action = getMe();
                const actionResolve = await dispath(action);
                const userCurrent = unwrapResult(actionResolve);
                console.log('Login: ', userCurrent)
            } catch (error) {
                console.log(error)
            }

        });

        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, [currentUser]);


    return (
        <header id="site-header" className="main-header mainHeader_temp02 header-style">
            <Topbar />
            <div className="header-upper-middle">
                <div className="container-fluid">
                    <div className="flexContainer-header">
                        <Logo />
                        <Menu />
                        <div className="header-upper-icon">
                            <div className="header-wrap-icon">
                                <Search />
                                <Account />
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;