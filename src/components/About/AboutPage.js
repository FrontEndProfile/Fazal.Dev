import React from 'react'
import { Link } from 'react-router-dom'
import infoPhone from '../../assets/images/infoPhone.svg'
import aboutCardOne from '../../assets/images/aboutCardOne.svg'

import './AboutPage.scss'
const AboutPage = () => {
    return (
        <>
            <section className='mainPage'>
                <div className='container-fluid g-0 text-start primaryFont'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='headingLine'>About Me</h2>
                        </div>
                    </div>
                    <div className='row WhoAm'>
                        <div className='col-md'>
                            <img className='img-fluid WhoAmImage' src='https://via.placeholder.com/330x400/fff0f8/000000' alt='' />
                        </div>
                        <div className='col-md-8 primaryFont'>
                            <h1 className='WhoAmHead'>Who am i?</h1>
                            <p className='WhoAmContent'>
                                I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                            </p>
                            <p className='WhoAmContent'>
                                My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                            </p>


                            <div className='infoMain'>
                                <h4 className='infoMainHead'>Personal Info</h4>
                                <div className='container-fluid g-0'>
                                    <div className='row infoMainGap'>
                                        <div className='col-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoPhone} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Phone
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <Link to=''>+123 456 7890</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoPhone} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Location
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <Link to=''>+123 456 7890</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoPhone} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Email
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <Link to=''>+123 456 7890</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoPhone} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Birthday
                                                    </div>
                                                    <div className='infoDetails'>
                                                        May 27, 1990
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='row whatIDo'>
                        <h2 className='whatIDoHead'>What I do!</h2>
                        <div className='infoMain'>
                            <div className='container-fluid g-0'>
                                <div className='row infoMainGap g-0'>

                                    <div className='col-xl col-md-6'>
                                        <div className='infoMainComponent xyz'>
                                            <div className='whatIDoImage'>
                                                <img src={aboutCardOne} alt='' className='img-fluid mw-100' />
                                            </div>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoTag'>
                                                    Ui/Ux Design
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl col-md-6'>
                                        <div className='infoMainComponent xyz'>
                                            <div className='whatIDoImage'>
                                                <img src={aboutCardOne} alt='' className='img-fluid mw-100' />
                                            </div>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoTag'>
                                                    Ui/Ux Design
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl col-md-6'>
                                        <div className='infoMainComponent xyz'>
                                            <div className='whatIDoImage'>
                                                <img src={aboutCardOne} alt='' className='img-fluid mw-100' />
                                            </div>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoTag'>
                                                    Ui/Ux Design
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='row infoMainGap g-0'>

                                    <div className='col-xl-4 col-md-6'>
                                        <div className='infoMainComponent xyz'>
                                            <div className='whatIDoImage'>
                                                <img src={aboutCardOne} alt='' className='img-fluid mw-100' />
                                            </div>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoTag'>
                                                    Ui/Ux Design
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl col-md-6'>
                                        <div className='infoMainComponent xyz'>
                                            <div className='whatIDoImage'>
                                                <img src={aboutCardOne} alt='' className='img-fluid mw-100' />
                                            </div>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoTag'>
                                                    Ui/Ux Design
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl col-md-6'>
                                        <div className='infoMainComponent xyz'>
                                            <div className='whatIDoImage'>
                                                <img src={aboutCardOne} alt='' className='img-fluid mw-100' />
                                            </div>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoTag'>
                                                    Ui/Ux Design
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutPage