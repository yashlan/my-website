import '../css/CardProfile.css'
import profile from '../assets/profile.jpg'
import cardStyle from '../css/CardProfile.module.css'
import bg from '../assets/bg.jpg'
import React from 'react'

const CardProfile = ()=> {
    
    return(
        <div className='card-container'>
            <div className='card'>
                <img className= 'img-profile'src={profile} /> 
                <div className= 'title'>Random Developer</div>
                <div className= 'name'>Muhammad Yashlan Iskandar</div>
                <div className= 'desc'>Saya sedang menunggu tiket gratis liburan ke planet mars</div>
                <button className= 'button'>Contact Me</button>
            </div>

            {/* <div className='card'>
                <img className='img' src={profile} />
                <div className= 'title'>Frontend Developer</div>
                <div className= 'name'>Muhammad Yashlan Iskandar</div>
                <div className= 'desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                <button className= {cardStyle.button}>Contact Me</button>
            </div> */}

        </div>
    )
}

export default CardProfile;