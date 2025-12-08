import SocialsList from "./SocialsList";
import useScrollDirection from './../hooks/useScrollDirection'

const Header = ({scrollToSection}) => {
    const scrollDir = useScrollDirection();

    return ( 
        <header className={scrollDir === 'down' ? 'header-hide' : 'header-show'}>
            <SocialsList />
            <nav>
                <ul>
                    <li><button onClick={() => scrollToSection(2)}>Projects</button></li>
                    <li><button onClick={() => scrollToSection(3)}>Contacts</button></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;