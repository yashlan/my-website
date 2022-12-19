import bg from '../assets/bg.jpg'
import '../css/style.css'
import profile from '../assets/profile.jpg'
import cardStyle from '../css/CardProfile.module.css'

const CardProfile = ()=> {
    const wrapper = {  
        backgroundColor : '#00B6DF', 
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
        <div style={wrapper}>
            <div className='card'>
                <img className= 'img'src={profile} />
                <div className= 'title'>Fronted Developer</div>
                <div className= 'name'>Muhammad Yashlan Iskandar</div>
                <div className= 'desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                <button className= 'button'>Contact Me</button>
            </div>

            {/* <div className='card'>
                <img src={profile} />
                <div className= 'profile'>Fronted Developer</div>
                <div className= 'name'>Muhammad Yashlan Iskandar</div>
                <div className= 'desc'>laksjdlkashd asdashdaskl hdlkahdlashd alkdhlashd adklashdl ak hd laks dh alhsklhd laskhdlakhd</div>
                <button className= {cardStyle.button}>Contact Me</button>
            </div> */}
        </div>
    )
}

export default CardProfile;