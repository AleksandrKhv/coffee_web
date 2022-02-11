import React from 'react';
import st from './Footer.module.css'
import {FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <section className={st.footer}>

            <div className={st.share}>
                <a href={"#"} className={st.fab_fa_facebook_f}><FaFacebookF/></a>
                <a href={"#"} className={st.fab_fa_twitter}><FaTwitter/></a>
                <a href={"#"} className={st.fab_fa_instagram}><FaInstagram/></a>
                <a href={"#"} className={st.fab_fa_linkedin}><FaLinkedin/></a>
                <a href={"#"} className={st.fab_fa_pinterest}><FaPinterest/></a>
            </div>

            <div className={st.links}>
                <a href={"#"}>home</a>
                <a href={"#"}>about</a>
                <a href={"#"}>menu</a>
                <a href={"#"}>products</a>
                <a href={"#"}>review</a>
                <a href={"#"}>contact</a>
                <a href={"#"}>blogs</a>
            </div>

            <div className={st.credit}>created by <span>!!!!!!!!!!!</span> | all rights reserved</div>

        </section>
    );
};

export default Footer;