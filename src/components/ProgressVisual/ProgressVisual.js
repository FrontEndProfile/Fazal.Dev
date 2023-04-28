import React from 'react'
import './ProgressVisual.scss'

const ProgressVisual = () => {
    return (
        <>
            <div className='visualMain'>
                <div className='row'>
                    <div className='col'>
                        <h4 className='visualMainHead'>Working Skills</h4>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">Web Design</span>
                                <span className="visualBarPer">80%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">Web Design</span>
                                <span className="visualBarPer">80%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                        <div className='visualMainBar'>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="visualBarName">Web Design</span>
                                <span className="visualBarPer">80%</span>
                            </div>
                            <div className='visualBarSkill'>
                                <div className='visualPercentage w-80'></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col'>
                        <h4 className='visualMainHead'>knowledge</h4>
                       <div className='visualMainTags'>
                        <div className='visualTag'>Digital Design</div>
                        <div className='visualTag'>Digital Design</div>
                        <div className='visualTag'>Digital</div>
                        <div className='visualTag'>Digital Design one</div>
                        <div className='visualTag'>Digital Design</div>
                        <div className='visualTag'>Digital Design Design</div>
                        <div className='visualTag'>Digital Design</div>
                        <div className='visualTag'>Digital Design</div>
                        <div className='visualTag'>Digital Design</div>
                       </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressVisual