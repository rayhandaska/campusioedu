import React from 'react';
import WorkItem from './WorkItem';
import './Works.css'

function Works  () {
    return(
        <div className='works'>
            <h1><font color="#fff">How it works</font></h1>
                <div className="works__container">
                    <div className="works__wrapper">
                    <ul className="works__items">
                        <WorkItem 
                            src='images/education1.png'
                            text='Menghubungkan kamu dengan tim konstultasi pribadi'
                        />
                        <WorkItem 
                            src='images/vchat1.png'
                            text='Bimbingan 1-On-1 melalui video chat'
                        />
                        <WorkItem 
                            src='images/jobseeker1.png'
                            text='Personalized Technology'
                        />
                        <WorkItem 
                            src='images/brotherhood1.png'
                            text= "Dukungan Mental Terbaik"
                        /> 
                    </ul>  
                    </div>
                </div>
            
        </div>
    );
}

export default Works;