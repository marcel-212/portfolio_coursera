import { AiFillInstagram, AiOutlineX, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const SocialsList = () => {
    return ( 
        <ul className="socials">
            <li><a href="#"><AiFillInstagram/></a></li>
            <li><a href="#"><AiOutlineX/></a></li>
            <li><a href="#"><AiFillLinkedin/></a></li>
            <li><a href="#"><AiFillFacebook/></a></li>
        </ul>
     );
}
 
export default SocialsList;