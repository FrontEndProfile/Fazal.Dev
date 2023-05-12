import React from 'react'
import { Link } from 'react-router-dom'
import infoPhone from '../../assets/images/infoPhone.svg'
import infoLocation from '../../assets/images/infoLocation.svg'
import infoMail from '../../assets/images/infoMail.svg'
import infoBirthDate from '../../assets/images/infoBirthDate.svg'
// import aboutCardOne from '../../assets/images/aboutCardOne.svg'
// import uicode from '../../assets/images/ui-design.png'
import uicode from '../../assets/images/html_icon.png'
import reactIcon from '../../assets/images/react-icon.png'
import NGIcon from '../../assets/images/angualrIcon.png'
import Webflow from '../../assets/images/webflow-icon.svg'
import JsIcon from '../../assets/images/jsIcon.png'
import GitIcon from '../../assets/images/giticon.png'
import Slider from '../Slider/Slider'
import './AboutPage.scss'
const AboutPage = () => {
    return (
        <>
            <section className='mainPage pb-0'>
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
                            As a self-motivated Front-End Developer with 3 years of professional experience, I am skilled in constructing responsive and scalable websites using Web Technologies. My passion for learning and exploration drives me to continuously seek new tools and knowledge in different work environments.
                            </p>
                            <p className='WhoAmContent'>
                            At the age of 17 and embarked on a journey as a developer. Since then, my enthusiasm for the field has only deepened as I constantly strive to learn and enhance my skill set.
                            </p>


                            <div className='infoMain'>
                                <h4 className='infoMainHead'>Personal Info</h4>
                                <div className='container-fluid g-0'>
                                    <div className='row infoMainGap'>
                                        <div className='col-sm-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoPhone} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Phone
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <Link to='tel:+923494486605'>+92 349-4486605</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoLocation} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Location
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <Link to=''>Lahore, Pakistan</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='col-sm-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoMail} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Email
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <Link to='mailto:fazalfazail732@gmail.com'>fazalfazail732@gmail.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-6'>
                                            <div className='infoMainComponent primaryFont'>
                                                <div className='infoMainComponentImg flexCenter'>
                                                    <img src={infoBirthDate} alt='' className='img-fluid mw-100' />
                                                </div>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoTag'>
                                                        Birthday
                                                    </div>
                                                    <div className='infoDetails'>
                                                        Jun 04, 2003
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
                        <div className='infoMain p-0'>
                            <div className='container-fluid g-0'>
                                <div className='row infoMainGap g-0'>

                                    <div className='col-xl-4 col-md-6'>
                                        <div className='infoMainComponent'>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoMainComponentHead'>
                                                    <div className='whatIDoImage'>
                                                    <img src={uicode} alt='' className='img-fluid mw-100' />
                                                    </div>
                                                    <div className='infoTag'>
                                                    UI CODE
                                                    </div>
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>
                                                    Proficient in developing responsive and accessible user interfaces using HTML, CSS, and JavaScript. Experienced in front-end frameworks like React, Vue, and Angular. Skilled in optimizing website performance and cross-browser compatibility.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-md-6'>
                                        <div className='infoMainComponent'>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoMainComponentHead'>
                                                    <div className='whatIDoImage'>
                                                    <img src={NGIcon} alt='' className='img-fluid mw-100' />
                                                    </div>
                                                    <div className='infoTag'>
                                                    Angular UI
                                                    </div>
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>
                                                    Angular expert with skills in building scalable and performant user interfaces using Angular and its ecosystem, including RxJS, Angular Material, and NgRx. Proficient in responsive design, accessibility, and debugging complex issues.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-md-6'>
                                        <div className='infoMainComponent'>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoMainComponentHead'>
                                                    <div className='whatIDoImage'>
                                                    <img src={reactIcon} alt='' className='img-fluid mw-100' />
                                                    </div>
                                                    <div className='infoTag'>
                                                    React UI
                                                    </div>
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>
                                                    Proficient in developing dynamic user interfaces using React & its eco-system, including Router, & Styled Components. Skilled in responsive design, accessibility, and cross-browser compatibility. Experienced debugging complex issues.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-md-6'>
                                        <div className='infoMainComponent'>
                                            <div className='infoMainComponentContent'>
                                                <div className='infoMainComponentHead'>
                                                    <div className='whatIDoImage'>
                                                    <img src={Webflow} alt='' className='img-fluid mw-100' />
                                                    </div>
                                                    <div className='infoTag'>
                                                    WebFlow Dev
                                                    </div>
                                                </div>
                                                <div className='infoDetails'>
                                                    <p className='infoDetailsText'>
                                                    Experienced in using Webflow to design and develop responsive websites with a focus on user experience. Proficient in creating custom animations, interactions, and CMS integration. Skilled in optimizing website speed and SEO.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl-4 col-md-6'>
                                            <div className='infoMainComponent'>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoMainComponentHead'>
                                                        <div className='whatIDoImage'>
                                                        <img src={JsIcon} alt='' className='img-fluid mw-100' />
                                                        </div>
                                                        <div className='infoTag'>
                                                        JavaScript
                                                        </div>
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <p className='infoDetailsText'>
                                                        Skilled in using JavaScript & jQuery to develop interactive and engaging user interfaces. Proficient in DOM manipulation, event handling, and animations. Experienced in optimizing website performance and cross-browser compatibility.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div className='col-xl-4 col-md-6'>
                                            <div className='infoMainComponent'>
                                                <div className='infoMainComponentContent'>
                                                    <div className='infoMainComponentHead'>
                                                        <div className='whatIDoImage'>
                                                        <img src={GitIcon} alt='' className='img-fluid mw-100' />
                                                        </div>
                                                        <div className='infoTag'>
                                                        Git
                                                        </div>
                                                    </div>
                                                    <div className='infoDetails'>
                                                        <p className='infoDetailsText'>
                                                        Experience in GitHub/Bitbucket for version control, collaboration, and deployment. Skilled in repository management, branching strategies, and pull requests. Proficient in resolving merge conflicts and ensuring code quality.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider />


                </div>
            </section>
        </>
    )
}

export default AboutPage