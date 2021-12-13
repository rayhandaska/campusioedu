import React from 'react';
import './Works.css'

function WorkItem (props){
    return(
        <>
            <li className='works__item'>
                    <figure className='works__item__pic-wrap'>
                        <img src={props.src} alt='Travel Image' 
                        className='works__item__img'/>
                    </figure>
                     <div className='works__item__info'>
                    <h5 className='works__item__text'>{props.text}</h5>
                    </div>

            </li>
        </>
    );
}

export default WorkItem;