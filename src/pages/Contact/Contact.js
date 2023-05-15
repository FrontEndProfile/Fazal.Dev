import React from 'react'
import Header from '../../components/Header/Header'
import ContactPage from '../../components/Contact/ContactPage'
import CopyRightFooter from '../../components/CopyRightFooter/CopyRightFooter'
import './Contact.scss'
const Contact = () => {
  return (
    <>
      <main className='wrapper'>
        <div className='container-lg g-0 h-100'>
          <Header />
          <section className='introPageHome'>
            <ContactPage  />
            {/* <CopyRightFooter /> */}
          </section>
          
        </div>
      </main>

    </>
  )
}

export default Contact