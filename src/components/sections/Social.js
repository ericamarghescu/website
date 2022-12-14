import '../styles/Social.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import TwitterIcon from '../../icons/twitter';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';

function Social() {
   return (
     <div className="socials">
         <div className="social-icons">
            <a href="https://github.com/ericamarghescu">
               <GitHubIcon className="svg-icon"/>
            </a>
            <a href="https://www.instagram.com/erica.m">
               <InstagramIcon className="svg-icon"/>
            </a>
            <a href="https://www.twitter.com/ericamarghescu">
               <TwitterIcon className="svg-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/ericamarghescu">
               <LinkedinIcon className="svg-icon"/>
            </a>
            <a href="mailto: erica.marghescu@gmail.com">
               <EmailIcon className="svg-icon"/>
            </a>
         </div>
         <div className="social-line">
            <div className="line"/>
         </div>
     </div>
   );
 }
 
 export default Social;