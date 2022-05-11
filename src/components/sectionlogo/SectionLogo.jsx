import React from 'react';

import imgIcon1 from '../../assets/images/dl1.png'
import imgIcon2 from '../../assets/images/dl2.png'
import imgIcon3 from '../../assets/images/dl3.png'
import imgIcon4 from '../../assets/images/dl4.png'
import imgIcon5 from '../../assets/images/dl5.png'
import imgIcon6 from '../../assets/images/dl6.png'

function SectionLogo(props) {
    const listImgIcon = [
        {
            id: 1,
            thumbnail: imgIcon1,
        },
        {
            id: 2,
            thumbnail: imgIcon2,
        },
        {
            id: 3,
            thumbnail: imgIcon3,
        },
        {
            id: 4,
            thumbnail: imgIcon4,
        },
        {
            id: 5,
            thumbnail: imgIcon5,
        },
        {
            id: 6,
            thumbnail: imgIcon6,
        },
    ]
    return (
        <div className="list-img-icon text-center">
            {
                listImgIcon.length > 0 && listImgIcon.map(data => (
                    <img key={data.id} src={data.thumbnail} alt='' />
                ))
            }
        </div>
    );
}

export default SectionLogo;