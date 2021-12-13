import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards () {
    return(
        <div className='cards'>
            <h1><font color="#EC5863">University</font> at your Fingertips</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="scroll">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/logoUI.png'
                            path='/services'
                        />
                        <CardItem 
                            src='images/logoITB.png'
                            path='/services'
                        />
                        <CardItem 
                            src='images/logoUGM.png'
                            path='/services'
                        />
                        <CardItem 
                            src='images/logoUNDIP.png'
                            path='/services'
                        />
                        <CardItem 
                            src='images/logoUB.png'
                            path='/services'
                        />
                        <CardItem 
                            src='images/logoUNAIR.png'
                            path='/services'
                        />

                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;