import React, { memo } from 'react';


function Copyright(props) {
    return (
        <div className="bottom-footer text-center">
            <div className="container-fluid">
                <p>Copyright © 2022 <a href="#"> H2TSTORE</a>. <a target="_blank" href="#">Powered by Haravan</a></p>
            </div>
        </div>
    );
}

export default memo(Copyright);