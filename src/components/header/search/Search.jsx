import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.scss';

function Search(props) {
    const [showFormSearch, setShowFormSearch] = useState(false);
    const handleClickSearch = () => {
        setShowFormSearch(!showFormSearch)
    }
    return (
        <div className="header-action header-action_search" >
            <div className="header-action_text" onClick={handleClickSearch}>
                <div className="header-action__link header-action-toggle" id="site-search-handle" aria-label="Tìm kiếm" title="Tìm kiếm">
                    <span className="box-icon">
                        <SearchIcon />
                    </span>
                </div>
            </div>
            {
                showFormSearch && (
                    <div className="header-action_dropdown">
                        <span className="box-triangle">
                            <svg viewBox="0 0 20 9" role="presentation">
                                <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                            </svg>
                        </span>
                        <div className="header-dropdown_content">
                            <p className="ttbold">Tìm kiếm</p>
                            <div className="site_search">

                                <div className="search-box wpo-wrapper-search">
                                    {/* <form className="searchform searchform-categoris ultimate-search">
                                    <div className="wpo-search-inner">
                                        <input type="hidden" name="type" value="product">
                                            <input required="" id="inputSearchAuto" name="q" maxlength="40" autocomplete="off" className="searchinput input-search search-input" type="text" size="20" placeholder="Tìm kiếm sản phẩm..." aria-label="Search">
                                            </div>
                                            <button type="submit" className="btn-search btn" id="search-header-btn" aria-label="Tìm kiếm">
                                                <svg version="1.1" className="svg search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27;" xml:space="preserve"><path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"></path><rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="4" height="8"></rect></svg>
                                            </button>
                                        </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Search;