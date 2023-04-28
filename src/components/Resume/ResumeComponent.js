import React from 'react'
import './ResumeComponent.scss'
import resumeEducation from '../../assets/images/resumeEducation.svg'
import ProgressVisual from '../ProgressVisual/ProgressVisual'

const ResumeComponent = () => {
    return (
        <>
            <section className='mainPage pb-0 primaryFont ResumePage px-0'>
                <div className='container-fluid g-0 text-start primaryFont'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='headingLine resumeHead'>Resume</h2>
                        </div>
                    </div>
                    <div className='row cardSection'>
                        {/* COL  */}
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='columnMain'>
                                <div className='columnMainHead'>
                                    <span><img src={resumeEducation} alt='' /></span>
                                    <span>Education</span>
                                </div>

                                {/* CARD'S  */}
                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>

                        {/* COL  */}
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='columnMain'>
                                <div className='columnMainHead'>
                                    <span><img src={resumeEducation} alt='' /></span>
                                    <span>Experience</span>
                                </div>

                                {/* CARD'S  */}
                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>

                        {/* COL  */}
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='columnMain'>
                                <div className='columnMainHead'>
                                    <span><img src={resumeEducation} alt='' /></span>
                                    <span>Awards</span>
                                </div>

                                {/* CARD'S  */}
                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill"> Ph.D in Horriblensess</h3>
                                    <p class="CardInfo">ABC University, Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row cardSection px-0 g-0'>
                        <ProgressVisual />
                    </div>


                </div>
            </section>
        </>
    )
}

export default ResumeComponent