import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/images/phone-call.webp'

import './ContactPage.scss'

const ContactPage = () => {
    return (
        <>
            <section className='mainPage pb-0 contact_page'>
                <div className='container-fluid g-0 text-start primaryFont'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='headingLine'>Contact</h2>
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col-md-4'>
                            <div className='contact_card'>
                                <div className='contact_img'>
                                    <img src={phone} alt={phone} />
                                </div>
                                <div className='contact_info'>
                                    <h4>Phone :</h4>
                                    <ul>
                                        <li>
                                            <Link to="#" mailto="tel+452 666 386">+452 666 386</Link>
                                        </li>
                                        <li>
                                            <Link to="#" mailto="tel+452 666 386">+452 666 386</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='contact_card'>
                                <div className='contact_img'>
                                    <img src={phone} alt={phone} />
                                </div>
                                <div className='contact_info'>
                                    <h4>Phone :</h4>
                                    <ul>
                                        <li>
                                            <Link to="#" mailto="tel+452 666 386">+452 666 386</Link>
                                        </li>
                                        <li>
                                            <Link to="#" mailto="tel+452 666 386">+452 666 386</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='contact_card'>
                                <div className='contact_img'>
                                    <img src={phone} alt={phone} />
                                </div>
                                <div className='contact_info'>
                                    <h4>Phone :</h4>
                                    <ul>
                                        <li>
                                            <Link to="#" mailto="tel+452 666 386">+452 666 386</Link>
                                        </li>
                                        <li>
                                            <Link to="#" mailto="tel+452 666 386">+452 666 386</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className='col-md-8'>

                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default ContactPage