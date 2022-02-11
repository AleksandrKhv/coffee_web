import React from 'react';
import st from './Nav.module.css'
import {FaSearch, FaShoppingCart, FaBars} from 'react-icons/fa'
import cart_item_1 from './../../images/cart-item-1.png'
import cart_item_2 from './../../images/cart-item-2.png'
import cart_item_3 from './../../images/cart-item-3.png'
import cart_item_4 from './../../images/cart-item-4.png'



const Nav = () => {

    /*let navbar = document.querySelector('.navbar');

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }

    let searchForm = document.querySelector('.search-form');

    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }*/

   /* function handlerSearch() {
        navbar.classList.toggle('active');
        search_form.classList.remove('active');
        cart_item.classList.remove('active')
    }*/

    return (
        <>
            <nav className={st.navbar}>
                <a href={"#home"}>Home</a>
                <a href={"#about"}>About</a>
                <a href={"#menu"}>Menu</a>
                <a href={"#products"}>Products</a>
                <a href={"#review"}>Review</a>
                <a href={"#contact"}>Contact</a>
                <a href={"#blogs"}>Blogs</a>
            </nav>
            <div className={st.icons}>
                <div className={st.fas_fa_search} id={'search-btn'}><FaSearch/></div>
                <div className={st.fas_fa_shopping_cart} id={'cart-btn'}><FaShoppingCart/></div>
                <div className={st.fas_fa_bars} id={'menu-btn'}><FaBars/></div>
            </div>
            <div className={st.search_form}>
                <input type={"search"} id={"search-box"} placeholder={"search here..."}/>
                    <label htmlFor={"search-box"} className={st.fas_fa_search}/>
            </div>
            <div className={st.cart_items_container}>
                <div className={st.cart_item}>
                    <span className={st.fa_times}/>
                    <img src={cart_item_1} alt={""}/>
                        <div className={st.content}>
                            <h3>cart item 01</h3>
                            <div className={st.price}>$15.99/-</div>
                        </div>
                </div>
                <div className={st.cart_item}>
                    <span className={st.fa_times}/>
                    <img src={cart_item_2} alt={""}/>
                        <div className={st.content}>
                            <h3>cart item 02</h3>
                            <div className={st.price}>$15.99/-</div>
                        </div>
                </div>
                <div className={st.cart_item}>
                    <span className={st.fa_times}/>
                    <img src={cart_item_3} alt={""}/>
                        <div className={st.content}>
                            <h3>cart item 03</h3>
                            <div className={st.price}>$15.99/-</div>
                        </div>
                </div>
                <div className={st.cart_item}>
                    <span className={st.fa_times}/>
                    <img src={cart_item_4} alt={""}/>
                        <div className={st.content}>
                            <h3>cart item 04</h3>
                            <div className={st.price}>$15.99/-</div>
                        </div>
                </div>
                <a href={"#"} className={st.btn}>checkout now</a>
            </div>
        </>
    );
};

export default Nav;