import Navigation from "./Navigation";
import  logo from '../Asset16@4x.png'

function Header(){
    return(
        <header>
            <img src={logo} alt="littlelemon" width="100px"/> 
            <Navigation/>
        </header>
    )
}

export default Header;