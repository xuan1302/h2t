import React from 'react';
import imgInsta1 from '../../assets/images/instagram1.2904c71d.jpg'
import imgInsta2 from '../../assets/images/instagram2.4137b5ac.jpg'
import imgInsta3 from '../../assets/images/instagram3.b1372c17.jpg'
import imgInsta4 from '../../assets/images/instagram4.6e0574c0.jpg'
import imgInsta5 from '../../assets/images/instagram5.66378810.jpg'
import imgInsta6 from '../../assets/images/instagram2.4137b5ac.jpg'



function Imageinstagram(props) {
    const listImgInstagram = [
        {
            id: 1,
            thumbnail: imgInsta1,
        },
        {
            id: 2,
            thumbnail: imgInsta2,
        },
        {
            id: 3,
            thumbnail: imgInsta3,
        },
        {
            id: 4,
            thumbnail: imgInsta4,
        },
        {
            id: 5,
            thumbnail: imgInsta5,
        },
        {
            id: 6,
            thumbnail: imgInsta6,
        }
    ]
    return (
        <div className="img-instagram-content">
            {
                listImgInstagram.length > 0 && listImgInstagram.map(data => (
                    <div key={data.id} className="item">
                        <img src={data.thumbnail} alt="" />
                    </div>
                ))
            }
        </div>
    );
}

export default Imageinstagram;