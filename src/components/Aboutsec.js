import Tilecomponent from "./Tilecomponent";
import {techlist, companylist} from "../data/database"; 
import { useEffect, useState } from "react";

const Aboutsec= () => {
    const [experience, setExp] = useState(0); 
    useEffect(()=>{
        setExp(new Date().getFullYear() - 2017);
    },[]);
    return(<>
            <div className='title' id="about">About Renjith,</div>
            <div className='about-sec'>
                <div className='about-sec-sub-one'>
                    <p>I have completed my Bachelors degree in Information Technology from Anna University, Tirunelveli.</p>
                    <p>I'm a front-end web developer with a work experience of {experience}+ years. Currently, working with Standard Chartered Bank.</p>
                </div>
                <div className='about-sec-sub-two'>
                    <p>Hands on experience in below technologies,<br></br></p>
                    <p>
                        <Tilecomponent listData={techlist}></Tilecomponent><br></br>
                    </p>
                    <p>
                        Work experience from below companies, <br></br>
                    </p>
                    <p>
                        <Tilecomponent listData={companylist}></Tilecomponent>
                    </p>
                </div>
            </div>
    </>)
    }
    export default Aboutsec;
