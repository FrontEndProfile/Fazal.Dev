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
                            <div className='columnMain ed'>
                                <div className='columnMainHead'>
                                    <span><img src={resumeEducation} alt='' /></span>
                                    <span>Education</span>
                                </div>

                                {/* CARD'S  */}
                                <div class="ResumeCard">
                                    <span class="CardDate">2022-current</span>
                                    <h3 class="CardSkill">[React & Angular UI]</h3>
                                    <p class="CardInfo">FreeCodeCamp V-School</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2023</span>
                                    <h3 class="CardSkill">Html & CSS</h3>
                                    <p class="CardInfo">Scrimba V-School</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2019-2021</span>
                                    <h3 class="CardSkill">10th in Science</h3>
                                    <p class="CardInfo">The WestBridge School</p>
                                </div>
                            </div>
                        </div>

                        {/* COL  */}
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='columnMain ex'>
                                <div className='columnMainHead'>
                                    <span><img src={resumeEducation} alt='' /></span>
                                    <span>Experience</span>
                                </div>

                                {/* CARD'S  */}
                                <div class="ResumeCard">
                                    <span class="CardDate">2022-Present</span>
                                    <h3 class="CardSkill">UI DEV StoreFront</h3>
                                    <p class="CardInfo">Techsembly</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2022</span>
                                    <h3 class="CardSkill">Front-End Coder</h3>
                                    <p class="CardInfo">Vigosol</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2022</span>
                                    <h3 class="CardSkill">Front-End Dev MultiProjects</h3>
                                    <p class="CardInfo">SudoExpert</p>
                                </div>
                            </div>
                        </div>

                        {/* COL  */}
                        <div className='col-lg-4 col-md-6 col-12'> 
                            <div className='columnMain aw'>
                                <div className='columnMainHead'>
                                    <span><img src={resumeEducation} alt='' /></span>
                                    <span>Awards</span>
                                </div>

                                {/* CARD'S  */}
                                <div class="ResumeCard">
                                    <span class="CardDate">2021-Active</span>
                                    <h3 class="CardSkill">Best Practices Code</h3>
                                    <p class="CardInfo">Vigosol & Techsembly</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-Active</span>
                                    <h3 class="CardSkill">Component-Based UI</h3>
                                    <p class="CardInfo">Techsembly</p>
                                </div>

                                <div class="ResumeCard">
                                    <span class="CardDate">2021-2022</span>
                                    <h3 class="CardSkill">WebFlow Animations & UI</h3>
                                    <p class="CardInfo">Vigosol & MicroCent</p>
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