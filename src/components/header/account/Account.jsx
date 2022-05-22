import React, { useEffect, useRef, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.scss';
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Account(props) {
    const ref = useRef()
    const history = useHistory();
    const [showFormLogin, setShowFormLogin] = useState(false);
    const handleClickAcc = () => {
        setShowFormLogin(!showFormLogin);
    }
    const currentUser = useSelector(state => state.user.current);
    const handleLogOut = () => {
        firebase.auth().signOut();
        localStorage.removeItem('firebaseui::rememberedAccounts')
    }
    const handleClickGoToLogin = () => {
        history.push('/login')
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (showFormLogin && ref.current && !ref.current.contains(e.target)) {
                setShowFormLogin(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    }, [showFormLogin])
    return (
        <div className='header-action header-action_account'>
            {
                !!currentUser === true && (
                    <div className="header-action_text" onClick={handleClickAcc} ref={ref}>
                        <div className="header-action__link  header-action-toggle " id="site-account-handle" aria-label="Tài khoản" title="Tài khoản">
                            <span className="box-icon">
                                {
                                    <img src={currentUser.photoUrl} alt={currentUser.name} style={{ borderRadius: '50%' }} />
                                }
                            </span>
                        </div>
                        {
                            showFormLogin && (
                                <div className="header-action_dropdown">
                                    <a className='logout' onClick={handleLogOut}>LogOut</a>
                                </div>
                            )
                        }
                    </div>
                )
            }
            {
                !!currentUser === false && (
                    <div className="header-action_text" onClick={handleClickGoToLogin}>
                        <div className="header-action__link  header-action-toggle " id="site-account-handle" aria-label="Tài khoản" title="Tài khoản">
                            <span className="box-icon">
                                <AccountCircleIcon />
                            </span>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Account;