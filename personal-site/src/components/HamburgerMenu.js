 //MobileNavigation.js 


 import {MdOutlineMenu} from 'react-icons/md';
 import './HamburgerMenu.css'

 const Hamburger = <MdOutlineMenu className="HamburgerMenu"
            size="30px" color="white"/>

 const MobileNavigation = () =>{

     return(
         <nav className="MobileNavigation">
              <h2 className="logo">Logo</h2>
              {Hamburger}                       
         </nav>
     )
 }

 export default MobileNavigation;


