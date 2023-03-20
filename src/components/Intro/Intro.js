import React from 'react'
import { Link } from 'react-router-dom'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import dribbbleIcon from '../../assets/images/dribbble.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'

import './Intro.scss'

const Intro = () => {
    return (
        <>
            <section className='introPage'>
                <div className='container-fluid g-0'>
                    <div className='row'>
                        <div className='col'>
                            <div className='introPageFrame'>
                                <img src='https://via.placeholder.com/280x280/ffffff/000000?text=Profile' alt='' />
                            </div>
                            <h2 className='introHead primaryFont'>Monalisa Ashley</h2>
                            <p className='introSubHead primaryFont'>Ui/Ux Designer</p>
                            <ul className='d-flex align-items-center justify-content-center list-unstyled socialMain'>
                                <li className='ms-0'>
                                    <Link to='' target='_blank'>
                                        <img src={facebookIcon} alt='icon' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='' target='_blank'>
                                        <img src={twitterIcon} alt='icon' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='' target='_blank'>
                                        <img src={dribbbleIcon} alt='icon' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='' target='_blank'>
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