import React from 'react';
import st from './Contact.module.css'
import {FaEnvelope, FaPhone, FaUser} from 'react-icons/fa';

const Contact = () => {
    return (
        <section className={st.contact} id="contact">

            <h1 className={st.heading}><span>contact</span> us </h1>

            <div className={st.row}>

                <iframe className={st.map}
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"}
                        allowFullScreen loading={"lazy"}/>

                <form action={""}>
                    <h3>get in touch</h3>
                    <div className={st.inputBox}>
                        <span className={st.fas_fa_user}><FaUser/></span>
                        <input type={"text"} placeholder={"name"}/>
                    </div>
                    <div className={st.inputBox}>
                        <span className={st.fas_fa_envelope}><FaEnvelope/></span>
                        <input type={"email"} placeholder={"email"}/>
                    </div>
                    <div className={st.inputBox}>
                        <span className={st.fas_fa_phone}><FaPhone/></span>
                        <input type={"number"} placeholder={"number"}/>
                    </div>
                    <input type={"submit"} value={"contact now"} className={st.btn}/>
                </form>

            </div>

        </section>
    );
};

export default Contact;