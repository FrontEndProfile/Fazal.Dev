import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/images/phone-call.webp'
import email from '../../assets/images/email.webp'
import map from '../../assets/images/map.webp'
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
                    <div className='row g-0 layout_cards'>

                        <div className='col-md-4'>
                            <div className='contact_card'>
                                <div className='contact_img'>
                                    <img className='img-fluid' src={phone} alt={phone} />
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
                                    <img className='img-fluid' src={email} alt={email} />
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
                                    <img className='img-fluid' src={map} alt={map} />
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


                        <div className='col-md'>
                            <div className='chatForm'>
                                <h3 className='chatForm_tittle'>
                                    I'm always open to discussing product <br />
                                    <span>design work or partnerships.</span>
                                </h3>
                                {/* FORM  */}
                                <form>
                                    <div class="form-floating">
                                        <input type="name" class="form-control" id="floatingInput" placeholder="Fill Name"/>
                                            <label for="floatingInput">Name *</label>
                                    </div>

                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="Fill Name"/>
                                            <label for="floatingInput">Email *</label>
                                    </div>

                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Fill Name"/>
                                            <label for="floatingInput">Message *</label>
                                    </div>

                                    <button type="submit" className="btn chatForm_btn">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default ContactPage