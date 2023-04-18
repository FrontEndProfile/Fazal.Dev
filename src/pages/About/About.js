import React from 'react'
import Header from '../../components/Header/Header'
import AboutPage from '../../components/About/AboutPage'
const About = () => {
  return (
    <>
      <main className='wrapper'>
        <div className='container-lg g-0 h-100'>
          <Header />
          <section className='introPageHome'>
            <AboutPage />
          </section>
        </div>
      </main>

    </>
  )
}

export default About