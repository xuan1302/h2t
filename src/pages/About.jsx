import React from 'react';
import imgAbout from '../assets/images/about.443aaf2c.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import Imageinstagram from '../components/imageInstagram/Imageinstagram';
import SectionLogo from '../components/sectionlogo/SectionLogo';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
const itemsBreadcrumb = [
    {
        href: "/about",
        text: "About"
    }
]
function About(props) {
    return (
        <div className="content-about">
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb mb-4" />
            <div className="container-fluid">
                <div className="row">
                    <div className=" text-center">
                        <h1 className="mb-2">About our store</h1>
                        <p className="description mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a ecimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        <img src={imgAbout} alt='' />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <SectionLogo />
                </div>
            </div>
            <div className="img-instagram text-center">
                <div className="heading text-center">
                    <InstagramIcon />
                    <h4 className="text-upp">instagram</h4>
                </div>
                <a className="follow-us" href="/">Follow Us</a>
                <Imageinstagram />
            </div>
        </div>
    );
}

export default About;