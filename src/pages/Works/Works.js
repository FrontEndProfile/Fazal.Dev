import React from 'react'
import { db } from 'firebase';
import Header from '../../components/Header/Header'
import AddData from '../../components/UploadFile/AddData'

const Works = () => {
  return (
    <>
    <main className='wrapper'>
      <div className='container g-0 h-100'>
        <Header />
        <section className='introPageHome'>
            <h2>Page On Working</h2>
            <AddData  db={db}/>
        </section>
      </div>
    </main>

  </>
  )
}

export default Works