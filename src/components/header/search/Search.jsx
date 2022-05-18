import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.scss';
import productsApi from '../../../api/productApi';

function Search(props) {
    const ref = useRef()
    const [showFormSearch, setShowFormSearch] = useState(false);
    const [resultSearch, setResultSearch] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const [dataSearch, setDataSearch] = useState('');

    const handleClickSearch = () => {
        setShowFormSearch(!showFormSearch)
        setDataSearch('')
        setResultSearch([])
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (showFormSearch && ref.current && !ref.current.contains(e.target)) {
                setShowFormSearch(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    }, [showFormSearch])

    const hanldeSearchProduct = (data) => {
        setDataSearch(data)
    }
    const params = {
        name_like: dataSearch,
        _limit: 5
    }
    useEffect(() => {
        (
            async () => {
                try {
                    if (dataSearch) {
                        const { data, pagination } = await productsApi.getAll(params);
                        setResultSearch(data)
                        setTotalResult(pagination._totalRows)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        )();
    }, [dataSearch])

    return (
        <div className="header-action header-action_search" ref={ref}>
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
                                    <div className="searchform searchform-categoris ultimate-search">
                                        <div className="wpo-search-inner">
                                            <input placeholder='Tìm kiếm sản phẩm' value={dataSearch} onChange={(e) => hanldeSearchProduct(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn-search btn" id="search-header-btn" aria-label="Tìm kiếm">
                                            Search
                                        </button>
                                    </div>
                                    {
                                        resultSearch.length > 0 && (
                                            <div className="resultsContent">
                                                {
                                                    resultSearch.map(data => (
                                                        <div className="item-ult" key={data.id}>
                                                            <div className="thumbs">
                                                                <img alt={data.name} src={data.thumbnail} />
                                                            </div>
                                                            <div className="title">
                                                                <a title={data.name} >{data.name}</a>
                                                                <p className="f-initial">
                                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                <div className="resultsMore">
                                                    <a >Xem thêm {totalResult} sản phẩm</a>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        resultSearch.length === 0 && dataSearch !== '' && (
                                            <h4 className='text-center' style={{ marginTop: '10px' }}>Không có sản phẩm nào.</h4>
                                        )
                                    }
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