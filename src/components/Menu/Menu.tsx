import React from 'react';
import st from './Menu.module.css'
import menu_1 from './../../images/menu-1.png'
import menu_2 from './../../images/menu-2.png'
import menu_3 from './../../images/menu-3.png'
import menu_4 from './../../images/menu-4.png'
import menu_5 from './../../images/menu-5.png'
import menu_6 from './../../images/menu-6.png'

const Menu = () => {
    return (
        <section className={st.menu} id={"menu"}>

            <h1 className={st.heading}> our <span>menu</span></h1>

            <div className={st.box_container}>

                <div className={st.box}>
                    <img src={menu_1} alt=""/>
                    <h3>tasty and healty</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className={st.btn}>add to cart</a>
                </div>

                <div className={st.box}>
                    <img src={menu_2} alt=""/>
                    <h3>tasty and healty</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className={st.btn}>add to cart</a>
                </div>

                <div className={st.box}>
                    <img src={menu_3} alt=""/>
                    <h3>tasty and healty</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className={st.btn}>add to cart</a>
                </div>

                <div className={st.box}>
                    <img src={menu_4} alt=""/>
                    <h3>tasty and healty</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className={st.btn}>add to cart</a>
                </div>

                <div className={st.box}>
                    <img src={menu_5} alt=""/>
                    <h3>tasty and healty</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className={st.btn}>add to cart</a>
                </div>

                <div className={st.box}>
                    <img src={menu_6} alt=""/>
                    <h3>tasty and healty</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className={st.btn}>add to cart</a>
                </div>

            </div>

        </section>

    );
};

export default Menu;