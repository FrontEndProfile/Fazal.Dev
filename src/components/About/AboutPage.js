import React from 'react'
import './AboutPage.scss'
const AboutPage = () => {
    return (
        <>
            <section className='mainPage'>
                <div className='container-fluid g-0 text-start'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='headingLine'>About Me</h2>
                        </div>
                    </div>
                    <div className='row WhoAm'>
                        <div className='col-md'>

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
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className=''></div>
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