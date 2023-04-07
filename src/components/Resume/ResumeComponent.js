import React from 'react'
import './ResumeComponent.scss'
import resumeEducation from '../../assets/images/resumeEducation.svg'


const ResumeComponent = () => {
    return (
        <>
            <section className='mainPage pb-0 primaryFont'>
                <div className='container-fluid g-0 text-start primaryFont'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='headingLine resumeHead'>Resume</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='columnMain'>
                                <div className='columnMainHead'>
                                    <span><img src={resumeEducation} alt=''/></span>
                                    <span>Education</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResumeComponent