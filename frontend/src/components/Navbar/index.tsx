import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './styles.css';

export function Navbar(){
    return(
        <header>
     <nav className='container'>  
       <div className='dsmovie-nav-content'>
         <h1>DsMovie</h1>
         <a href="https://github.com/acsmdev">
           <div className='dsmovie-contact-container'>
             <GitHubIcon />
             <p className='dsmovie-contact-link'>/acsmdev</p>
           </div>

         </a>
       </div>
     </nav>
   </header>
    );
}