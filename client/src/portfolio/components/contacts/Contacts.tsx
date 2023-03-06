import React from 'react';

import './contacts.css';

export const Contacts: React.FC = () => {
    return (
        <section id='contacts'>
            <div className='container'>
                <h2>Contacts</h2>
                <div className="about__container">
                    <article className="contact__options">
                        <h5>Email</h5>
                        <h5>sinteenage@gmail.com</h5>
                        <a href="mailto:sinteenage@gmail.com">Send Message</a>
                    </article>
                    <article className="contact__options">
                        <h5>WhatsApp</h5>
                        <h5>+380957719256</h5>
                        <a href="https://api.whatsapp.com/send?phone=+380957719256">Send Message</a>
                    </article>
                    <form action="">
                        
                    </form>
                </div>
            </div>
        </section>
    );
}