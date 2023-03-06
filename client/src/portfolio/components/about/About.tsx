import React from 'react';

import Me from '../../../assets/placeholder-man.jpg';

import './about.css';

export const About: React.FC = () => {

    const aboutCards = [
        {id: 1, title: '15+', text: 'Years Programming'}, 
        {id: 2, title: '7+', text: 'Years Corporate Work'}, 
        {id: 3, title: '40+', text: 'Projects Done'}
    ];

    return ( 
        <section id='about'>
            <div className='container'>
                <h2>About</h2>
                <div className='about__container'>
                    <div className='about__me'>
                        <img src={Me} alt='About' />
                    </div>
                    <div className='about__content'>
                        <ul className='about__cards'>
                            {
                                aboutCards.map((item) => {
                                    return <li key={item.id} className='about__card'>
                                        <div className='about__title'>{item.title}</div>
                                        <small>{item.text}</small>
                                    </li>
                                })
                            }
                        </ul>
                        <h5>I am a programmer with extensive experience in corporate development.</h5>
                        <p> 
                                Started my programming journey 15 years ago with a focus on ActionScript3. 
                            Have a passion for programming and an innate curiosity to explore different 
                            possibilities that programming offers.   
                        </p>
                        <p>
                                After a successful period as a freelancer, I joined Playtika, a leading 
                            international gaming company, as a developer. During my 7 years and 7 months 
                            at Playtika, I worked on various gaming projects that included programming 
                            languages such as HAXE, JavaScript, and TypeScript. I also gained experience 
                            in technologies such as HTML, CSS, React, and Redux.
                        </p>
                        <p>
                                Over the years, I have gained valuable experience in the industry. 
                            This experience has helped me understand the importance of attention to detail, 
                            quality, and effective communication with the team and personnel.
                        </p>
                        <p>
                                My experience in a corporate environment has provided me with unique knowledge 
                            of game and software development processes. I am confident in my ability 
                            to provide high-quality work and be a valuable asset to any team.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
