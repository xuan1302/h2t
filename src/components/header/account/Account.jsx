import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.scss';


function Account(props) {
    const [showFormLogin, setShowFormLogin] = useState(false);
    const handleClickAcc = () => {
        setShowFormLogin(!showFormLogin);
    }
    return (
        <div className='header-action header-action_account'>
            <div className="header-action_text" onClick={handleClickAcc}>
                <div className="header-action__link  header-action-toggle " id="site-account-handle" aria-label="Tài khoản" title="Tài khoản">
                    <span className="box-icon">
                        <AccountCircleIcon />
                    </span>
                </div>
            </div>
            {
                showFormLogin && (
                    <div className="header-action_dropdown">
                        <span class="box-triangle">
                            <svg viewBox="0 0 20 9" role="presentation">
                                <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                            </svg>
                        </span>
                        <div className="header-dropdown_content">
                            <div className="site_account" id="siteNav-account">
                                <div className="site_account_panel_list">
                                    <div id="header-login-panel" className='site_account_panel site_account_default is-selected'>
                                        <header className="site_account_header">
                                            <h2 className="site_account_title heading">Đăng nhập tài khoản</h2>
                                            <p className="site_account_legend">Nhập email và mật khẩu của bạn:</p>
                                        </header>
                                        <div className="site_account_inner">
                                            {/* <form accept-charset="UTF-8" action="/account/login" id="customer_login" method="post">
                                        <input name="form_type" type="hidden" value="customer_login">
                                            <input name="utf8" type="hidden" value="✓">



                                                <div class="form__input-wrapper form__input-wrapper--labelled">
                                                    <input type="email" id="login-customer[email]" class="form__field form__field--text" name="customer[email]" required="required">
                                                        <label for="login-customer[email]" class="form__floating-label">Email</label>
                                                </div>
                                                <div class="form__input-wrapper form__input-wrapper--labelled">

                                                    <input type="password" id="login-customer[password]" class="form__field form__field--text" name="customer[password]" required="required" autocomplete="current-password">
                                                        <label for="login-customer[password]" class="form__floating-label">Mật khẩu</label>

                                                        <div class="sitebox-recaptcha">
                                                            This site is protected by reCAPTCHA and the Google
                                                            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
                                                            and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                                                        </div>
                                                </div>
                                                <button type="submit" class="form__submit button dark" id="form_submit-login">Đăng nhập</button>

                                            </form> */}

                                            <div className="site_account_secondary-action">
                                                <p>Khách hàng mới?
                                                    <a className="link" href="/account/register">Tạo tài khoản</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Account;