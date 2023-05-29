import Renjith from '../images/Renjith.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Welcomesec = ()=>{
    return(
        <div className='welcome-sec' id="welcome">
            <span className='welcome-contact'>
                <a href="#contact">
                    <FontAwesomeIcon icon={faAddressCard} className="fa-fade"></FontAwesomeIcon>
                </a>
            </span>
            <div className='welcome-sec-sub'>
                <p style={{fontSize: '20px'}}>Hey, I'm</p>
                <img src={Renjith} alt="Renjith_Image"></img>
                <span className='project'>Renjith Singh Rajendran</span> 
                <span style={{fontSize: 10}}>Software Engineer & Front-end web developer</span>
                <div className='scrollcss'>
                    <a href="#about">
                        <FontAwesomeIcon icon={faAngleDoubleDown} className="fa-bounce"></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Welcomesec;
