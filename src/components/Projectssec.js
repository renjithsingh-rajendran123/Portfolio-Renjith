import {projectlist} from "../data/database";

const Projectssec = () => {
    return(<>
        <div className="title">Do check-out my works, </div>
        <div className="projects-sec">
            {projectlist.map((e)=>{
                return(
                    <div className="projects-sec-sub" key={e.name}> 
                        <a href={e.link} target="_blank" rel="noopener noreferrer">
                            <img src={e.logo} alt={e.name}></img>
                        </a>
                        {/* <span>{e.name}</span> */}
                    </div>
            )})}
        </div>
    </>)
}

export default Projectssec;