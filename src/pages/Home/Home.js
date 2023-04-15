import React from 'react'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
const Home = () => {
  return (
    <>
      <div className='page'>
        <main className='wrapper'>
          <div className='container-lg g-0 h-100'>
            <Header />
            <section className='introPageHome mainSection'>
              <Intro />
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home