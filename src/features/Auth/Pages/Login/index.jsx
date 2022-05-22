import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../../../../app/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom';

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // ...
};
firebase.initializeApp(config);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        // signInSuccessWithAuthResult: () => false,
    },
};


function Login(props) {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const dispath = useDispatch();

    // Listen to the Firebase Auth state and set the local state.
    const currentUser = useSelector(state => state.user.current);
    console.log('user', currentUser)


    const handleSignOut = () => {
        firebase.auth().signOut();
        localStorage.removeItem('firebaseui::rememberedAccounts')
    }

    return (
        <div className='container-fluid'>
            <h2 className='text-center'>Login</h2>
            {
                !!currentUser === false && (
                    <>
                        <p>Please sign-in:</p>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </>
                )
            }
            {
                !!currentUser === true && (
                    <>
                        <p>Welcome {currentUser.name}! You are now signed-in!</p>
                        <a onClick={handleSignOut}>Sign-out</a>
                    </>
                )
            }
        </div>
    );
}

export default Login;