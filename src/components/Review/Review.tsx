import React from 'react';
import st from './Review.module.css'
import quote_img from './../../images/quote-img.png'
import pic_1 from './../../images/pic-1.png'
import pic_2 from './../../images/pic-2.png'
import pic_3 from './../../images/pic-3.png'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';

const Review = () => {
    return (
        <section className={st.review} id={"review"}>

            <h1 className={st.heading}> customer's <span>review</span></h1>

            <div className={st.box_container}>

                <div className={st.box}>
                    <img src={quote_img} alt="" className={st.quote}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga
                            sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex
                            aliquam minus vel? Nemo.</p>
                        <img src={pic_1} className={st.user} alt=""/>
                            <h3>john deo</h3>
                            <div className={st.stars}>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star_half_alt}><FaStarHalfAlt/></i>
                            </div>
                </div>

                <div className={st.box}>
                    <img src={quote_img} alt="" className={st.quote}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga
                            sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex
                            aliquam minus vel? Nemo.</p>
                        <img src={pic_2} className={st.user} alt=""/>
                            <h3>john deo</h3>
                            <div className={st.stars}>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star_half_alt}><FaStarHalfAlt/></i>
                            </div>
                </div>

                <div className={st.box}>
                    <img src={quote_img} alt="" className={st.quote}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga
                            sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex
                            aliquam minus vel? Nemo.</p>
                        <img src={pic_3} className={st.user} alt=""/>
                            <h3>john deo</h3>
                            <div className={st.stars}>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star}><FaStar/></i>
                                <i className={st.fas_fa_star_half_alt}><FaStarHalfAlt/></i>
                            </div>
                </div>

            </div>

        </section>
    );
};

export default Review;