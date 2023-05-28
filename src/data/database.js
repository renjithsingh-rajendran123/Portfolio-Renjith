import machologo from "../images/Macho.png";
import githublogo from "../images/GitHub.png";
import stacklogo from "../images/stackblitz.png";
import codesandlogo from "../images/codesand.png";
import { faFacebook, faWhatsapp, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";

const techlist = ["HTML", "CSS", "SASS", "JavaScript", "C#", "TypeScript", "ReactJS", "ASP.NET MVC", "ASP.NET Core", "Blazor", "EmberJS", "Angular", "Vue", "SQL"];

const companylist = ["Syncfusion", "Virtusa", "StandardChartered"];

const projectlist = [{ name: "Macho Achitects", link: "https://machoarchitects.com/", logo: machologo }, 
{name: "StackBlitz Samples", link: "https://stackblitz.com/@renjithsingh-rajendran123/projects", logo: stacklogo },
{name: "CodeSandbox Samples", link: "https://codesandbox.io/u/renjithsingh-rajendran123", logo: codesandlogo },
{name: "Github Samples", link: "https://github.com/renjithsingh-rajendran123", logo: githublogo }];

const contactlist = [{ name: "Email", link: "mailto:singhrenji@gmail.com?subject=Hello Renjith!", logo: faEnvelopeOpen}, 
{name: "Whatsapp", link: "https://wa.me/+918760822847?text=Hello Renjith!", logo: faWhatsapp}, 
{ name: "LinkedIn", link: "https://www.linkedin.com/in/renjith-singh-a7943a112/", logo: faLinkedin } ,
{ name: "Instagram", link: "https://www.instagram.com/renjith.singh/", logo: faInstagram } , 
{ name: "Facebook", link: "https://www.facebook.com/singhrenji/", logo: faFacebook } , 
{ name: "Twitter", link:"https://twitter.com/singhemrenji", logo: faTwitter } ];

export { techlist, companylist, projectlist, contactlist };
