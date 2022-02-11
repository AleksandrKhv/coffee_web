import React from 'react';
import st from './Footer.module.css'
import {FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <section className={st.footer}>

            <div className={st.share}>
                <a href={"#"} className={st.fab_fa_facebook_f}><FaFacebookF className={st.fab_fa_facebook_f}/></a>
                <a href={"#"} className={st.fab_fa_twitter}><FaTwitter/></a>
                <a href={"#"} className={st.fab_fa_instagram}><FaInstagram/></a>
                <a href={"#"} className={st.fab_fa_linkedin}><FaLinkedin/></a>
                <a href={"#"} className={st.fab_fa_pinterest}><FaPinterest/></a>
            </div>

            <div className={st.links}>
                <a href={"#home"}>home</a>
                <a href={"#about"}>about</a>
                <a href={"#menu"}>menu</a>
                <a href={"#products"}>products</a>
                <a href={"#review"}>review</a>
                <a href={"#contact"}>contact</a>
                <a href={"#blogs"}>blogs</a>
            </div>

            <div className={st.credit}>created by <span>AKhA</span> | all rights reserved</div>

        </section>
    );
};

export default Footer;