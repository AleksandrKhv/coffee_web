import React from 'react'
import st from './About.module.css'
import about_img from '../../images/about-img.jpeg'


const About = () => {
    return (
        <section className={st.about} id={"about"}>

            <h1 className={st.heading}><span>about</span> us </h1>

            <div className={st.row}>

                <div className={st.image}>
                    <img src={about_img} alt=""/>
                </div>

                <div className={st.content}>
                    <h3>what makes our coffee special?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora
                        ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex,
                        vel?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil
                        voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                    <a href="#" className={st.btn}>learn more</a>
                </div>

            </div>

        </section>
    );
};

export default About;