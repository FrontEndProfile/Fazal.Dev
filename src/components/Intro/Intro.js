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
                                <img src='https://via.placeholder.com/280x280/ffffff/000000?text=Profile' alt='' />
                                {/* <img src={Fazalulrehman} alt={Fazalulrehman} /> */}
                                
                            </div>
                            <h2 className='introHead primaryFont'>Fazal Ul Rehman</h2>
                            <p className='introSubHead primaryFont'>Front-End Developer</p>
                            <ul className='d-flex align-items-center justify-content-center list-unstyled socialMain'>
                                <li className='ms-0'>
                                    <Link to='' target='_blank'>
                                        <img className='img-fluid' src={gmailIcon} alt='icon' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='' target='_blank'>
                                        <img src={githubIcon} alt='icon' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.linkedin.com/in/fazal-ul-rehman/' target='_blank'>
                                        <img src={linkedinIcon} alt='icon' />
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