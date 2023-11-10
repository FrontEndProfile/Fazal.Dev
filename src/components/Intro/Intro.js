import React from 'react'
import { Link } from 'react-router-dom'
import gmailIcon from '../../assets/images/gmail.svg'
import githubIcon from '../../assets/images/github.svg'
// import dribbbleIcon from '../../assets/images/dribbble.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'
import Fazalulrehman from '../../assets/images/Fazal-ul-rehman.jpeg'

import './Intro.scss'

const Intro = () => {
    return (
        <>
            <section className='introPage d-flex align-items-center'>
                <div className='container-fluid g-0 h-100'>
                    <div className='row'>
                        <div className='col'>
                            <div className='introPageFrame'>
                                <img src={Fazalulrehman} alt='Fazal Ul Rehman front end developer profile pictures on portfolio.' />
                                
                            </div>
                            <h1 className='introHead primaryFont'>Fazal Ul Rehman</h1>
                            <p className='introSubHead primaryFont'>UI Developer</p>
                            <ul className='d-flex align-items-center justify-content-center list-unstyled socialMain'>
                                <li className='ms-0'>
                                    <Link to='mailto:fazalfazail732@gmail.com?subject=Offer UI-Developer' target='_blank'>
                                        <img className='img-fluid' src={gmailIcon} alt='fazal gmail account link provide for HR mangers' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://github.com/FrontEndProfile/' target='_blank'>
                                        <img src={githubIcon} alt='FrontEndProfile user on github see my all offline and online projects, see history of my works and code' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.linkedin.com/in/fazal-ul-rehman/' target='_blank'>
                                        <img src={linkedinIcon} alt='FAZAL UL REHMAN on linkedin profile , mostly hunting job this platform' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro