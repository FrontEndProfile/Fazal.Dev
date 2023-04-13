import React from 'react'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
const Home = () => {
  return (
    <>

      <main className='wrapper'>
        <div className='container-lg g-0 h-100'>
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