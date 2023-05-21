import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/images/phone-call.webp'
import email from '../../assets/images/email.webp'
import map from '../../assets/images/map.webp'
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter'
import './ContactPage.scss'
import emailjs from '@emailjs/browser';

const ContactPage = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xc2ovp5', 'template_1dirdn5', form.current, 'LzePQtbacytkkLn-C')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        document.querySelector('form').reset();
    };

    return (
        <>
            <section className='mainPage pb-0 contact_page fixCopyRight'>
                <div className='container-fluid g-0 text-start primaryFont inner'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='headingLine'>Contact</h2>
                        </div>
                    </div>
                    <div className='row g-0 layout_cards'>

                        <div className='col-lg-4 col-12'>
                            <div className='contact_card'>
                                <div className='contact_img'>
                                    <img className='img-fluid' src={phone} alt={phone} />
                                </div>
                                <div className='contact_info'>
                                    <h4>Phone :</h4>
                                    <ul>
                                        <li>
                                            <Link to='tel:+923494486605'>+92 349 4486605</Link>
                                        </li>
                                        <li>
                                            <Link to='tel:+923258180448'>+92 325 8180448</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='contact_card'>
                                <div className='contact_img'>
                                    <img className='img-fluid' src={email} alt={email} />
                                </div>
                                <div className='contact_info'>
                                    <h4>Email :</h4>
                                    <ul>
                                        <li>
                                            <Link to="mailto:frontendprofile@gmail.com">FrontEndProfile@gmail</Link>
                                        </li>
                                        <li>
                                            <Link to="mailto:fazalfazail732@gmail.com">fazalfazail732@gmail</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='contact_card'>
                                <div className='contact_img'>
                                    <img className='img-fluid' src={map} alt={map} />
                                </div>
                                <div className='contact_info'>
                                    <h4>Address :</h4>
                                    <ul>
                                        <li>
                                            <Link to="https://goo.gl/maps/5kP7FhjCntEFTPTr9?coh=178573&entry=tt">Thoker Niaz Baig ,<br/>Lahore, Pakistan</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg'>
                            <div className='chatForm'>
                                <h3 className='chatForm_tittle'>
                                    I'm always open to discussing product <br />
                                    <span>design work or partnerships.</span>
                                </h3>
                                {/* FORM  */}
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-floating">
                                        <input type="name" className="form-control" id="floatingInput" placeholder="Fill Name" name='name'/>
                                            <label htmlFor="floatingInput">Name *</label>
                                    </div>

                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Fill Name" name='email'/>
                                            <label htmlFor="floatingInput">Email *</label>
                                    </div>

                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Fill Name" name='message'/>
                                            <label htmlFor="floatingInput">Message *</label>
                                    </div>

                                    <button type="submit" className="btn chatForm_btn">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    


                </div>
                <CopyRightFooter />
            </section>
            
        </>
    )
}

export default ContactPage