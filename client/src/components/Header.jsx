import SocialsList from "./SocialsList";

const Header = () => {
    return ( 
        <header>
            <SocialsList />
            <nav>
                <ul>
                    <li><button>Projects</button></li>
                    <li><button>Contacts</button></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;