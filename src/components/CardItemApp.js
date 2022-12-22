import '../css/CardItemApp.css'
import React, { useState } from "react";
import bg from '../assets/bg.jpg'

const CardItemApp = ({ imgSrc, category, name, description, downloadUrl })=> {

    const [active, setActive] = useState(false);

    const download = (url) => {
        setActive(!active);
        setTimeout( () => {
            window.open(url)
            setActive(active)
         }, 100);
    };
    
    const wrapper = {  
        backgroundColor : null, 
        width : '100vw',
        height: '100vh',
        backgroundImage : `url(${bg})`,
        backgroundPostion: 'bottom right',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return(
        <div>
            <div className='item-card'>
                <img className='item-img-app' src={imgSrc} />
                <div className='item-category'>{category}</div>
                <div className='item-name'>{name}</div>
                <div className='item-desc'>{description.length < 200
                ? `${description}`
                : `${description.substring(0, 198)}...`}</div>
                <button 
                    className={active ? 'item-button-download-pressed' : 'item-button-download'}
                    onClick={() => download(downloadUrl)}>
                        Download Now
                </button>
            </div>
        </div>
    )
}

export default CardItemApp;