import React from 'react'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
const Home = () => {
  return (
    <>

      <main className='wrapper'>
        <div className='container g-0'>
          <Header />
          <section className='introPageHome'>
            <Intro />
          </section>
        </div>
      </main>

    </>
  )
}

export default Home