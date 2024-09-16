import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Header from '../Header'
import './index.css'
const About=()=>(
     <div className='about-bg-card'>
         <Header /> 
         <div className='about-card'>
            <img
            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png"
            alt="About-Image"
            className="about-image"
           />
            <div className='about-information'>
                <h3 className='about-heading'>About <span className='span'>Me</span></h3>
                <p className='about-discription'>I know basic of HTML,CSS,Bootstrap,Javascript,Reactjs,Node and Express Js,SQL,Python. Learned from 
                    Nxtwave CCBP 4.0 Technologies.I like to develop user friendly websites.I am Proficient in front-end.I have hands on experience with modren technologies like  ReactJs,Bootstrap,Media Queries which I used to build Responsive and Dynamic User Interfaces.I'm comfortable designing APIs and working with a strong focus on collaboration and ccommunication.I enjoy learning new Technologies and staying updated with Inddustry trends,which allows me to adapt quickly to new challenges.I am confident that my diverse skill set would be an asset to your team, and I am excited about the opportunity to contribute...
                </p>

                <div className="icons">
                    <a href="linkedin.com/in/jayakrishna-pujari-b8804624b" className="linkedin" target="_blank">
                        <FaLinkedinIn className="icon" />
                    </a>
                    <a to="https://www.instagram.com" className="instagram" target="_blank">
                        <IoLogoInstagram className="icon" />
                    </a>
                    <a to="https://www.instagram.com" className="github" target="_blank">
                    <FaGithub />
                    </a>

                </div>
            </div>
         </div>
     </div>
)
export default About


