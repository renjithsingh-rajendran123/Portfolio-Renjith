import {contactlist} from "../data/database";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const Contactsec = () => {
    return(
        <>
            <div className="contactsec" id="contact">
                {contactlist.map((e)=>{
                return(
                    <a href={e.link} target="_blank" rel="noopener noreferrer" key={e.name}>
                        <FontAwesomeIcon icon={e.logo}/>
                    </a>
                )})}
                <div className="scrollcss">
                    <a href="#welcome">
                        <FontAwesomeIcon icon={faAnglesUp} className="fa-bounce"/>
                    </a>
                </div>
                <div className="copyright">Designed & Developed by <span className="project" style={{fontSize: 20}}>Renjith</span></div>
            </div>
        </>
    )}
    
export default Contactsec;