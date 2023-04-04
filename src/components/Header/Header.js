import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import homeIcon  from '../../assets/images/home.svg'
import aboutIcon  from '../../assets/images/about.svg'
import resumeIcon  from '../../assets/images/resume.svg'
import worksIcon  from '../../assets/images/works.svg'
import contactIcon  from '../../assets/images/contact.svg'
const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg py-0">
                    <div className="container-fluid g-0">
                        <Link className="navbar-brand m-0 p-0" href="#">Logo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link primaryFont" to="/">
                                        <span className='linkIcon'>
                                            <img src={homeIcon} className="img-fluid mw-100" alt='linkIcon' />
                                        </span>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primaryFont" to="/About">
                                        <span className='linkIcon'>
                                            <img src={aboutIcon} className="img-fluid mw-100" alt='linkIcon'/>
                                        </span>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primaryFont" to="/Resume">

                                        <span className='linkIcon'>
                                        <img src={resumeIcon} className="img-fluid mw-100" alt='linkIcon' />
                                        </span>
                                        Resume</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primaryFont" to="#">
                                        <span className='linkIcon'>
                                        <img src={worksIcon} className="img-fluid mw-100" alt='linkIcon' /> 
                                        </span>
                                        Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primaryFont" to="#">
                                        <span className='linkIcon'>
                                        <img src={contactIcon} className="img-fluid mw-100" alt='linkIcon' /> 
                                        </span>
                                        Contact</Link>
                                </li>
                                <li className="nav-item d-none">
                                    <Link className="nav-link primaryFont" to="#">dark theme</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header