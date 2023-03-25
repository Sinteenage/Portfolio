import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import './contacts.css';

import { ContactCard } from './ContactCard';
import { useISObserver } from '../../hooks/useISObserver';
import { defaultMailData, sections } from '../../types';
import { sendMail } from '../../actions';

export const Contacts: React.FC = () => {
    const dispatch = useDispatch();

    const [mailData, setMailData] = useState(defaultMailData);
    const activeNav = useISObserver([sections[3]]);

    const contacts = [
        {id: 'c1', title: 'Email', text:'sinteenage@gmail.com', contactHref: 'mailto:sinteenage@gmail.com', titleHref: 'Send Message'},
        {id: 'c2', title: 'Telephone', text:'+38 095-771-92-56', contactHref: 'tel:+380957719256', titleHref: 'Call'},
        {id: 'c3', title: 'WhatsApp', text:'+38 095-771-92-56', contactHref: 'https://api.whatsapp.com/send?phone=+380957719256', titleHref: 'Send Message'},
    ];

    const handleChangeMessage = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const targetKey: string = event.target.name;

        if(targetKey in mailData){
            setMailData({...mailData, [targetKey]: event.target.value });
        }
    }, [mailData]);

    const handleSendMessage = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(sendMail.request(mailData));
        event.currentTarget.reset();
    }, [dispatch, mailData]);

    return (
        <section id='contacts'>
            <div className='container'>
                <h2>Contacts</h2>
                <div className='contacts__container'>
                    <ul className={`contacts__options ${activeNav === '#contacts' ? 'active' : ''}`}>
                        {
                            contacts.map((item) => {
                                return <ContactCard
                                    key={item.id}
                                    title={item.title} 
                                    text={item.text}
                                    contactHref={item.contactHref}
                                    titleHref={item.titleHref}
                                />;
                            })
                        }
                    </ul>
                    <form onSubmit={handleSendMessage} className={`form__options ${activeNav === '#contacts' ? 'active' : ''}`}>
                        <input
                            onChange={handleChangeMessage}
                            type='text' 
                            name='name' 
                            placeholder='Your First Name Last Name *' 
                            required
                        />
                        <input
                            onChange={handleChangeMessage}
                            type='email' 
                            name='email' 
                            placeholder='Your Email *' 
                            required
                        />
                        <textarea
                            onChange={handleChangeMessage}
                            name='message' 
                            id='message' 
                            rows={15} 
                            placeholder='Message *' 
                            required
                        ></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};