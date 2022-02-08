import React from 'react';
import st from './Home.module.css'

const Home = () => {
    return (
        <section className={st.home} id={"home"}>

            <div className={st.content}>
                <h3>fresh coffee in the morning</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio
                    tempora reiciendis.</p>
                <a href="#" className={st.btn}>get yours now</a>
            </div>

        </section>
    );
};

export default Home;