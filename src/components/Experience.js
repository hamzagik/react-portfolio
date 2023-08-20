import React from "react";
import { BsPatchCheckFill } from 'react-icons/bs';
import { Element } from "react-scroll";

const Experience = () => {
    return (
        <Element className='about-experience' style={{ backgroundColor: "white" }}>
            <section id='experience'>
                <h2 style={{color:'black'}}>My Experience</h2>
                <div className="container experience_container">
                    <div className="experience_all">
                        <h3>Frontend </h3>
                        <div className="experience__content">
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>HTML</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>CSS</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>JavaScript</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Bootstrap</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>React</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="experience_all">
                        <h3>Backend </h3>
                        <div className="experience__content">
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>MongoDB</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>MySQL</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Node</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>C++</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Python</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="experience_all">
                        <h3>Data Analysis</h3>
                        <div className="experience__content">
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Python</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Jupyter</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Excel</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Cleansing</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Analytics</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="experience_all">
                        <h3>Automation</h3>
                        <div className="experience__content">
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Selenium</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>WebDriver</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>UiPath</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Python</h4>
                                </div>
                            </article>
                            <article className='experience-details'>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Java</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Experience