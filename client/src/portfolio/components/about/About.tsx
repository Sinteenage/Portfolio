import React from 'react';
import {TbAward} from 'react-icons/tb';
import {HiOutlineBuildingOffice2} from 'react-icons/hi2';
import {TfiCup} from 'react-icons/tfi';

import Me from '../../../assets/placeholder-man.jpg';

import './about.css';

export const About: React.FC = () => {
    return ( 
        <section id='about'>
            <div className='container'>
                <h2>About Me</h2>
                <div className='about__container'>
                    <div className='about__me'>
                        <img src={Me} alt='About' />
                    </div>
                    <div className='about__content'>
                        <div className='about__cards'>
                            <article className='about__card'>
                                <TbAward className='about__icon'/>
                                <h5>Experience</h5>
                                <small>15+ Years Programming</small>
                            </article>
                            <article className='about__card'>
                                <HiOutlineBuildingOffice2 className='about__icon'/>
                                <h5>Work</h5>
                                <small>7+ Years Corporate Work</small>
                            </article>
                            <article className='about__card'>
                                <TfiCup className='about__icon'/>
                                <h5>Projects</h5>
                                <small>35+ Social Games Done</small>
                            </article>
                        </div>
                        <p>
                                I am a programmer with extensive experience in corporate development. 
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
