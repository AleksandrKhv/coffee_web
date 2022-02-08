import React from 'react';
import st from './Products.module.css'
import product_1 from './../../images/product-1.png'
import product_2 from './../../images/product-2.png'
import product_3 from './../../images/product-3.png'
import {FaEye, FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt} from 'react-icons/fa';

const Products = () => {
    return (
        <section className={st.products} id={"products"}>

            <h1 className={st.heading}> our <span>products</span></h1>

            <div className={st.box_container}>

                <div className={st.box}>
                    <div className={st.icons}>
                        <a href="#" className={st.fas_fa_shopping_cart}><FaShoppingCart/></a>
                        <a href="#" className={st.fas_fa_heart}><FaHeart/></a>
                        <a href="#" className={st.fas_fa_eye}><FaEye/></a>
                    </div>
                    <div className={st.image}>
                        <img src={product_1} alt=""/>
                    </div>
                    <div className={st.content}>
                        <h3>fresh coffee</h3>
                        <div className={st.stars}>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star_half_alt}><FaStarHalfAlt/></i>
                        </div>
                        <div className={st.price}>$15.99 <span>$20.99</span></div>
                    </div>
                </div>

                <div className={st.box}>
                    <div className={st.icons}>
                        <a href="#" className={st.fas_fa_shopping_cart}><FaShoppingCart/></a>
                        <a href="#" className={st.fas_fa_heart}><FaHeart/></a>
                        <a href="#" className={st.fas_fa_eye}><FaEye/></a>
                    </div>
                    <div className={st.image}>
                        <img src={product_2} alt=""/>
                    </div>
                    <div className={st.content}>
                        <h3>fresh coffee</h3>
                        <div className={st.stars}>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star_half_alt}><FaStarHalfAlt/></i>
                        </div>
                        <div className={st.price}>$15.99 <span>$20.99</span></div>
                    </div>
                </div>

                <div className={st.box}>
                    <div className={st.icons}>
                        <a href="#" className={st.fas_fa_shopping_cart}><FaShoppingCart/></a>
                        <a href="#" className={st.fas_fa_heart}><FaHeart/></a>
                        <a href="#" className={st.fas_fa_eye}><FaEye/></a>
                    </div>
                    <div className={st.image}>
                        <img src={product_3} alt=""/>
                    </div>
                    <div className={st.content}>
                        <h3>fresh coffee</h3>
                        <div className={st.stars}>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star}><FaStar/></i>
                            <i className={st.fas_fa_star_half_alt}><FaStarHalfAlt/></i>
                        </div>
                        <div className={st.price}>$15.99 <span>$20.99</span></div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Products;