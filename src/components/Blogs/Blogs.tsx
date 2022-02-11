import React from 'react';
import st from './Blogs.module.css'
import blog_1 from './../../images/blog-1.jpeg'
import blog_2 from './../../images/blog-2.jpeg'
import blog_3 from './../../images/blog-3.jpeg'

const Blogs = () => {
    return (
        <section className={st.blogs} id={"blogs"}>

            <h1 className={st.heading}> our <span>blogs</span></h1>

            <div className={st.box_container}>

                <div className={st.box}>
                    <div className={st.image}>
                        <img src={blog_1} alt={""}/>
                    </div>
                    <div className={st.content}>
                        <a href={"#"} className={st.title}>tasty and refreshing coffee</a>
                        <span>by admin / 21st may, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                        <a href={"#"} className={st.btn}>read more</a>
                    </div>
                </div>

                <div className={st.box}>
                    <div className={st.image}>
                        <img src={blog_2} alt={""}/>
                    </div>
                    <div className={st.content}>
                        <a href={"#"} className={st.title}>tasty and refreshing coffee</a>
                        <span>by admin / 21st may, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                        <a href={"#"} className={st.btn}>read more</a>
                    </div>
                </div>

                <div className={st.box}>
                    <div className={st.image}>
                        <img src={blog_3} alt={""}/>
                    </div>
                    <div className={st.content}>
                        <a href={"#"} className={st.title}>tasty and refreshing coffee</a>
                        <span>by admin / 21st may, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                        <a href={"#"} className={st.btn}>read more</a>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Blogs;