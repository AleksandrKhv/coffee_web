import React from 'react';
import st from './Review.module.css'
import quote_img from './../../images/quote-img.png'

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
                        <img src="images/pic-1.png" className="user" alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                </div>

                <div className="box">
                    <img src={quote_img} alt="" className="quote"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga
                            sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex
                            aliquam minus vel? Nemo.</p>
                        <img src="images/pic-2.png" className="user" alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                </div>

                <div className="box">
                    <img src={quote_img} alt="" className="quote"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga
                            sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex
                            aliquam minus vel? Nemo.</p>
                        <img src="images/pic-3.png" className="user" alt=""/>
                            <h3>john deo</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                </div>

            </div>

        </section>
    );
};

export default Review;