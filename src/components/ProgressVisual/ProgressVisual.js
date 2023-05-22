import React from 'react'
import './ProgressVisual.scss'

const ProgressVisual = () => {
    return (
        <>
            <div className='visualMain'>
                <div className='row'>
                    <div className='col-md'>
                        <h4 className='visualMainHead'>Working Skills</h4>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">HTML</span>
                                <span className="visualBarPer">90%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage'></div>
                            </div>
                        </div>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">CSS</span>
                                <span className="visualBarPer">87%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">Jquery</span>
                                <span className="visualBarPer">67%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">JS</span>
                                <span className="visualBarPer">55%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">React</span>
                                <span className="visualBarPer">53%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">Angular</span>
                                <span className="visualBarPer"> 50%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md'>
                        <h4 className='visualMainHead'>knowledge</h4>
                       <div className='visualMainTags'>
                        <div className='visualTag'>HTML</div>
                        <div className='visualTag'>CSS</div>
                        <div className='visualTag'>Jquery</div>
                        <div className='visualTag'>Flex System</div>
                        <div className='visualTag'>Grid System</div>
                        <div className='visualTag'>Scroll Animation</div>
                        <div className='visualTag'>CSS Animation</div>
                        <div className='visualTag'>Email Template</div>
                        <div className='visualTag'>JS Library</div>
                        <div className='visualTag'>React UI</div>
                        <div className='visualTag'>Angular UI</div>
                        <div className='visualTag'>Vue UI</div>
                        <div className='visualTag'>Responsive Design</div>
                        <div className='visualTag'>Bootstrap</div>
                        <div className='visualTag'>Tailwind</div>
                        <div className='visualTag'>WebFlow</div>
                        <div className='visualTag'>WebFlow CMS</div>
                        <div className='visualTag'>WebFlow Custom Animation</div>
                       </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProgressVisual